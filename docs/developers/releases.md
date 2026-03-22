# Releases

UnisonOS platform artifacts are delivered from the `unison-platform` repository.

For the current production-track milestone, the supported installation target is Ubuntu 24.04 native on x86_64 hardware. Release images for WSL2, Linux VM, and bare metal remain evaluation channels.

## Latest Release Spotlight

### `v0.5.0-alpha.1` (Alpha Evaluation)

Alpha releases are intended for developer evaluation: installable, boots to “ready”, and end-to-end interaction works — with expected rough edges.

- [Release assets (WSL2 + Linux VM + bare metal + manifest + checksums)](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.5.0-alpha.1)
- [WSL2 download/install (GitHub)](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-wsl2.md)
- [Linux VM download/install (GitHub)](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-linux-vm.md)
- [Bare metal download/install (GitHub)](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-bare-metal.md)

## What To Download

For `v0.5.0-alpha.N`, a single release tag includes **all** evaluation artifacts (WSL2 + VM + bare metal) plus a manifest and checksums.

## Install Instructions

Canonical install page:

- [Install UnisonOS](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install.md)

Canonical supported path for Milestone 1:

- [Ubuntu native installation](https://github.com/project-unisonOS/unison-platform/blob/main/docs/deployment/ubuntu-native.md)

Evaluation-only paths:

- [WSL2 evaluation install](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-wsl2.md)
- [Linux VM evaluation install](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-linux-vm.md)
- [Bare metal evaluation install](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-bare-metal.md)

Expected asset names (for `v0.5.0-alpha.N`):

- `unisonos-wsl2-v0.5.0-alpha.N.tar.gz` (or `.zip`)
- `unisonos-linux-vm-v0.5.0-alpha.N.qcow2` (and/or `.vmdk`)
- `unisonos-baremetal-v0.5.0-alpha.N.iso.part00` (and subsequent `part*`, plus `...REASSEMBLE.txt`)
- `unisonos-manifest-v0.5.0-alpha.N.json`
- `SHA256SUMS-v0.5.0-alpha.N.txt`

## Reporting Issues

- [Packaging/install/release issues](https://github.com/project-unisonOS/unison-platform/issues)
