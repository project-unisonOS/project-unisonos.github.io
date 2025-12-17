# Contributing

Thank you for your interest in improving Unison.

## Branching Model

- `main` – Stable, production-ready branch.
- `dev` – Active development and integration branch.
- `feature/*` or `fix/*` – Short-lived branches for specific changes.

## Workflow Summary

1. Fork the target repository and create a feature branch from `dev`.
2. Make your changes and update tests and documentation.
3. Run local tests and relevant devstack or smoke tests.
4. Commit using clear, imperative messages.
5. Push your branch and open a pull request against `dev`.

## Documentation and Accessibility

- Prioritize accessible outcomes by ensuring generated experiences adapt to people’s needs and preferences (for example: modality completeness, readable contrast, and non-visual alternatives).
- Use semantic headings, descriptive link text, and alt text for all meaningful images.
- Keep tables accessible (`<th>` headers with scope, captions when complex); prefer lists when possible.
- Run `npm run a11y:audit` (requires Playwright deps) before merging doc or layout changes; see `ACCESSIBILITY_AUDIT.md` for scope and results.
- Update architecture or journey docs when behavior changes.

## Code of Conduct and Security

- All collaboration follows the project’s Code of Conduct.
- Security issues should be reported responsibly using the contact information in the security policy.

For full details, see the internal CONTRIBUTING, CODE_OF_CONDUCT, and SECURITY documents in the docs repository.
