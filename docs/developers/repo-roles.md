# Repository Roles

Quick reference for where to work across UnisonOS repos. Canonical, detailed guidance lives in `unison-docs/dev/unison-repo-roles.md`.

## Primary Entry Points
- **unison-workspace**: Developer meta-repo with all core submodules; start here for local dev and scripts.
- **unison-devstack**: Canonical Docker Compose for local development and smoke/integration tests.
- **unison-platform**: Productized platform distribution (prod Compose, installers, and image builders for WSL/VM/ISO).
- **unison-os**: Base Ubuntu LTS container image for service Dockerfiles.
- **unison-docs**: Canonical architecture/specs/compatibility docs.
- **project-unisonos.github.io**: This MkDocs site for public docs.

## Service Domains (examples)
- Control plane: orchestrator, context, context-graph, intent-graph, policy, auth, consent.
- Inference: inference gateway and provider integrations.
- Experience: renderer, agent VDI, shell.
- I/O: io-core, io-speech, io-vision, plus modality adapters (BCI, Braille, Sign).

## Choose Your Path
- **Local testing**: use `unison-workspace` → `unison-devstack`.
- **UI/renderer work**: `unison-experience-renderer` (or shell/VDI) via devstack.
- **Inference changes**: `unison-inference` → validate in devstack → tag for platform.
- **Deployment/images**: `unison-platform` (`installer/`, `images/`, `qa/`).

For full details and cross-repo guidance, see [unison-docs/dev/unison-repo-roles.md](https://github.com/project-unisonos/unison-docs/blob/main/dev/unison-repo-roles.md).
