import { spawn } from 'child_process';
import fs from 'fs';
import http from 'http';
import path from 'path';
import process from 'process';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { JSDOM } from 'jsdom';
import axe from 'axe-core';

const siteDir = path.join(process.cwd(), 'site');
const port = process.env.A11Y_PORT || 8000;
const baseUrl = process.env.A11Y_BASE_URL || `http://localhost:${port}`;

function builtPageUrls(directory, relative = '') {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const childRelative = path.join(relative, entry.name);
    const childPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return builtPageUrls(childPath, childRelative);
    }
    if (!entry.isFile() || entry.name !== 'index.html' || childRelative.startsWith(`search${path.sep}`)) {
      return [];
    }
    const html = fs.readFileSync(childPath, 'utf-8');
    if (/http-equiv=["']refresh["']/i.test(html)) {
      return [];
    }
    const parent = path.dirname(childRelative).split(path.sep).join('/');
    return [parent === '.' ? '/' : `/${parent}/`];
  });
}

const urls = fs.existsSync(siteDir) ? builtPageUrls(siteDir).sort() : [];

function validateBuiltInternalLinks() {
  let checked = 0;
  for (const urlPath of urls) {
    const relativePath = urlPath === '/' ? 'index.html' : path.join(urlPath.slice(1), 'index.html');
    const html = fs.readFileSync(path.join(siteDir, relativePath), 'utf-8');
    const dom = new JSDOM(html, { url: `${baseUrl}${urlPath}` });
    for (const anchor of dom.window.document.querySelectorAll('a[href]')) {
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(href)) {
        continue;
      }
      const target = new URL(href, `${baseUrl}${urlPath}`);
      if (target.origin !== new URL(baseUrl).origin) {
        continue;
      }
      const pathname = decodeURIComponent(target.pathname);
      const targetPath = pathname.endsWith('/')
        ? path.join(siteDir, pathname.slice(1), 'index.html')
        : path.join(siteDir, pathname.slice(1));
      if (!fs.existsSync(targetPath)) {
        throw new Error(`Broken internal link on ${urlPath}: ${href}`);
      }
      checked += 1;
    }
  }
  console.log(`[links] ${checked} internal links resolve to built files.`);
}

function startServer() {
  if (!fs.existsSync(siteDir)) {
    throw new Error(`Build output directory not found at ${siteDir}. Run mkdocs build first.`);
  }

  const server = spawn('python3', ['-m', 'http.server', String(port)], {
    cwd: siteDir,
    stdio: 'inherit'
  });

  return server;
}

function waitForServerReady(timeoutMs = 5000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http
        .get(baseUrl, () => resolve())
        .on('error', (err) => {
          if (Date.now() - start > timeoutMs) {
            reject(err);
          } else {
            setTimeout(check, 200);
          }
        });
    };
    check();
  });
}

async function runWithPlaywright() {
  const libsPath = path.join(process.cwd(), '.playwright-libs', 'usr', 'lib', 'x86_64-linux-gnu');
  if (fs.existsSync(libsPath)) {
    process.env.LD_LIBRARY_PATH = [libsPath, process.env.LD_LIBRARY_PATH].filter(Boolean).join(':');
  }

  const server = startServer();
  try {
    await waitForServerReady();
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();

    const results = [];
    for (const urlPath of urls) {
      const pageUrl = `${baseUrl}${urlPath}`;
      const page = await context.newPage();
      await page.goto(pageUrl, { waitUntil: 'load' });
      if (page.url() !== pageUrl) {
        throw new Error(`Unexpected navigation while auditing ${pageUrl}: ${page.url()}`);
      }
      if (urlPath === '/') {
        await page.keyboard.press('Tab');
        const firstFocusClass = await page.evaluate(() => document.activeElement?.className || '');
        if (!String(firstFocusClass).includes('skip-link')) {
          throw new Error(`Keyboard smoke failed: first focus target was ${firstFocusClass || 'unknown'}`);
        }
        await page.emulateMedia({ reducedMotion: 'reduce', forcedColors: 'active' });
        const mediaPreferences = await page.evaluate(() => ({
          reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
          forcedColors: window.matchMedia('(forced-colors: active)').matches
        }));
        if (!mediaPreferences.reducedMotion || !mediaPreferences.forcedColors) {
          throw new Error('Media preference smoke failed for reduced motion or forced colors.');
        }
        await page.emulateMedia({ reducedMotion: 'no-preference', forcedColors: 'none' });
      }

      await page.evaluate(async () => {
        await document.fonts.ready;
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      });

      const axeBuilder = new AxeBuilder({ page }).withTags([
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa',
        'wcag22aa'
      ]);
      const report = await axeBuilder.analyze();
      results.push({
        url: pageUrl,
        violations: report.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact,
          description: violation.description,
          helpUrl: violation.helpUrl,
          nodes: violation.nodes.map((node) => ({
            target: node.target,
            html: node.html,
            failureSummary: node.failureSummary
          }))
        }))
      });

      const violationCount = report.violations.length;
      console.log(`[a11y/playwright] ${pageUrl} → ${violationCount} violation${violationCount === 1 ? '' : 's'}`);
      await page.close();
    }

    await browser.close();
    return results;
  } finally {
    server.kill();
  }
}

function runAxeInJsdom(html, pageUrl) {
  const dom = new JSDOM(html, {
    url: pageUrl,
    runScripts: 'outside-only',
    pretendToBeVisual: true
  });
  const { window } = dom;
  // Stub common globals that appear in the built MkDocs pages but are not implemented in JSDOM
  window.HTMLCanvasElement.prototype.getContext = () => null;
  window.hljs = window.hljs || { highlightElement: () => {} };

  window.eval(axe.source);
  return window.axe.run(window.document, {
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']
    }
  });
}

async function runWithJsdom() {
  const results = [];
  for (const urlPath of urls) {
    const relativePath =
      urlPath === '/'
        ? 'index.html'
        : path.join(urlPath.replace(/^\//, '').replace(/\/$/, ''), 'index.html');
    const filePath = path.join(siteDir, relativePath);
    const pageUrl = `${baseUrl}${urlPath}`;
    if (!fs.existsSync(filePath)) {
      throw new Error(`Built page disappeared before audit: ${filePath}`);
    }

    const html = fs.readFileSync(filePath, 'utf-8');
    const report = await runAxeInJsdom(html, pageUrl);
    results.push({
      url: pageUrl,
      violations: report.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        description: violation.description,
        helpUrl: violation.helpUrl,
        nodes: violation.nodes.map((node) => ({
          target: node.target,
          html: node.html,
          failureSummary: node.failureSummary
        }))
      }))
    });

    const violationCount = report.violations.length;
    console.log(`[a11y/jsdom] ${pageUrl} → ${violationCount} violation${violationCount === 1 ? '' : 's'}`);
  }

  return results;
}

async function runAudit() {
  if (urls.length === 0) {
    throw new Error('No built pages were found for accessibility audit.');
  }
  validateBuiltInternalLinks();
  let results;
  let playwrightError;
  try {
    if (!process.env.A11Y_USE_JSDOM) {
      results = await runWithPlaywright();
    }
  } catch (err) {
    playwrightError = err;
    console.warn('Playwright-based audit failed, falling back to JSDOM + axe-core.', err.message);
    if (process.env.A11Y_REQUIRE_PLAYWRIGHT === '1') {
      process.exitCode = 1;
      throw err;
    }
  }

  if (!results) {
    results = await runWithJsdom();
  }

  const outputPath = path.join(process.cwd(), 'a11y-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`Audit complete. Results written to ${outputPath}`);

  const violations = results.reduce((count, result) => count + result.violations.length, 0);
  if (violations > 0) {
    throw new Error(`${violations} WCAG A/AA violation group(s) found across ${results.length} pages.`);
  }

  if (playwrightError) {
    console.warn('Note: Playwright failed. Install required system libraries or run in a container with Chromium to enable real-browser coverage. Set A11Y_USE_JSDOM=1 to skip Playwright or A11Y_REQUIRE_PLAYWRIGHT=1 to fail when Playwright is unavailable.');
  }
}

runAudit().catch((err) => {
  console.error('Accessibility audit failed:', err);
  process.exit(1);
});
