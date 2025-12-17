# Releases

UnisonOS platform images are delivered as **GitHub Release assets** from the `unison-platform` repository (not GHCR).

## Latest Release Spotlight

### `v0.5.0-alpha.1` (Alpha Evaluation)

Alpha releases are intended for developer evaluation: installable, boots to “ready”, and end-to-end interaction works — with expected rough edges.

- [Release assets (WSL2 + Linux VM + bare metal + manifest + checksums)](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.5.0-alpha.1)
- [WSL2 download/install (GitHub)](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-wsl2.md)
- [Linux VM download/install (GitHub)](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-linux-vm.md)
- [Bare metal download/install (GitHub)](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-bare-metal.md)

On this site, use the quickstarts:

- WSL2: `install-wsl2.md`
- Linux VM: `install-linux-vm.md`
- Bare metal: `install-bare-metal.md`

## What To Download

For `v0.5.0-alpha.N`, a single release tag includes **all** evaluation artifacts (WSL2 + VM + bare metal) plus a manifest and checksums.

## Install instructions

Canonical install page (hosted in the platform repo):

- [Install UnisonOS developer images](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install.md)

Expected asset names (for `v0.5.0-alpha.N`):

- `unisonos-wsl2-v0.5.0-alpha.N.tar.gz` (or `.zip`)
- `unisonos-linux-vm-v0.5.0-alpha.N.qcow2` (and/or `.vmdk`)
- `unisonos-baremetal-v0.5.0-alpha.N.iso.part00` (and subsequent `part*`, plus `...REASSEMBLE.txt`)
- `unisonos-manifest-v0.5.0-alpha.N.json`
- `SHA256SUMS-v0.5.0-alpha.N.txt`

## Reporting Issues

- [Packaging/install/release issues](https://github.com/project-unisonOS/unison-platform/issues)
