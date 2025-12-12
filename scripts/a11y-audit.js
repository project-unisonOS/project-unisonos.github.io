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

const urls = [
  '/',
  '/experience/',
  '/experience/multimodal/',
  '/multimodal/speech/',
  '/multimodal/vision/',
  '/multimodal/braille/',
  '/multimodal/sign-language/',
  '/multimodal/bci/',
  '/architecture/overview/',
  '/architecture/deep-dive/',
  '/architecture/edge-and-cloud/',
  '/architecture/components/',
  '/architecture/components/storage-and-persistence/',
  '/architecture/components/actuation-vdi-vpn/',
  '/architecture/inference/',
  '/architecture/vdi/',
  '/developers/get-started/',
  '/developers/prerequisites/',
  '/developers/workspace-and-repos/',
  '/developers/devstack/',
  '/developers/renderer-and-shell/',
  '/developers/testing/',
  '/developers/hardware/',
  '/developers/workflow-design/',
  '/developers/coding-conventions/',
  '/developers/images-builds-and-releases/',
  '/developers/contributing/',
  '/reference/specs/',
  '/reference/apis/',
  '/reference/storage-api/',
  '/reference/actuation-vdi-api/',
  '/reference/security/',
  '/reference/compatibility/',
  '/project/governance/',
  '/project/roadmap/',
  '/project/license/'
];

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
      await page.goto(pageUrl, { waitUntil: 'domcontentloaded' });

      const axeBuilder = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']);
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
      values: ['wcag2a', 'wcag2aa']
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
      console.warn(`[a11y/jsdom] Skipping missing file for ${pageUrl}: ${filePath}`);
      continue;
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

  if (playwrightError) {
    console.warn('Note: Playwright failed. Install required system libraries or run in a container with Chromium to enable real-browser coverage. Set A11Y_USE_JSDOM=1 to skip Playwright or A11Y_REQUIRE_PLAYWRIGHT=1 to fail when Playwright is unavailable.');
  }
}

runAudit().catch((err) => {
  console.error('Accessibility audit failed:', err);
  process.exit(1);
});
