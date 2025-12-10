# Accessibility Guidelines (Docs)

Unison documentation targets WCAG 2.2 AA. Use these guardrails for every new page or update.

## Authoring Checklist
- **Headings:** One `h1` per page; descend in order (h2 → h3). Avoid skipping levels and do not use bold text as a heading substitute.
- **Links:** Make text descriptive out of context (e.g., “View storage API spec” instead of “here”). Avoid bare URLs when a label is possible.
- **Images:** Provide meaningful `alt` text. If decorative, use empty alt (`alt=""`) so screen readers skip it.
- **Tables:** Use `<th>` for headers with `scope="col"`/`scope="row"`; add captions for complex tables. Prefer lists over tables when possible.
- **Code & inline UI terms:** Keep contrast high; avoid using color alone to convey meaning. Include text labels when referring to UI states.
- **Forms & inputs:** Ensure every input has a `<label>` or an `aria-label`; include clear button text (no “Submit” when a more specific label fits).
- **Interactive bits (tabs, dropdowns, accordions):** Must work with keyboard (Tab/Shift+Tab, Enter/Space). Keep `aria-expanded` and `aria-controls` in sync with state.
- **Focus:** Do not remove outlines. Expect visible focus from the shared a11y styles.

## Landmarks & Structure
- Skip link: A screen-reader-only “Skip to main content” is already provided globally. Ensure the main content starts with the page `h1`.
- Landmarks: Primary content lives in `<main id="main-content">`; the sidebar TOC is a `<nav aria-label="Page outline">`.

## Running Accessibility Checks
- Install Playwright dependencies (Chromium + required system libs):
  ```bash
  ./scripts/setup-playwright-deps.sh
  ```
- Build and run axe via Playwright:  
  ```bash
  . .venv/bin/activate
  npm run a11y:audit
  ```
  This builds MkDocs, serves `site/`, and runs axe against the nav URL set.
- Options: set `A11Y_USE_JSDOM=1` to skip Playwright; set `A11Y_REQUIRE_PLAYWRIGHT=1` to fail if Playwright cannot launch.
- Results: `a11y-report.json` in repo root.

## References
- Site-wide audit and remediation tracker: `ACCESSIBILITY_AUDIT.md`
- Prioritized plan: `ACCESSIBILITY_PLAN.md`
- For code changes, follow `docs/developers/coding-conventions.md`; for contributions, see `docs/developers/contributing.md`.
