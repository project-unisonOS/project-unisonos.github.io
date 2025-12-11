# Platform Docs Update Plan

Plan to align the public GitHub Pages (MkDocs) site with new platform build/release changes.

## New content to add
- Platform distribution overview: WSL bundle, VM (QCOW2/VMDK), ISO autoinstall seed, installers (docker/native/WSL).
- Build/run instructions: `make image-wsl`, `make image-vm`, `make image-iso`, `make qa-smoke`; note tool deps (docker, qemu-img, xorriso/genisoimage).
- GHCR tagging channels: nightly (`edge-branch-date`), beta (`vX.Y.0-beta.N`), stable (`vX.Y.Z` + `latest`), and shared reusable workflow usage.
- Release workflow: platform `release.yml` attaches artifacts to GitHub Releases on tags.
- Security/hardening guidance: autoinstall user-data keys/passwords, firewall/updates, and production secrets.

## Pages/sections to update
- Developers → Build & Release: add sections for artifacts, tooling requirements, and channel-aware tags.
- Developers → Deployment: reference installers and artifact consumption (WSL, VM, ISO).
- Reference → Compatibility: ensure matrix references service tags aligned with platform versions.
- Navigation: link to repo roles/roadmap already published.

## Assets/links
- Link to `unison-platform/images/` docs for per-target details.
- Link to `unison-platform/.github/workflows/release.yml` and `.github/workflows/reusable-build.yml`.
- Link to `unison-docs/dev/release-and-branching.md` for canonical policy.

## QA/validation notes
- Document how to run `make qa-smoke` locally and in CI.
- Call out dependencies for building artifacts on contributors’ machines.
