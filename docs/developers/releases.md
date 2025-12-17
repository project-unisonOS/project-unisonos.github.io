# Releases (Developer Images)

UnisonOS platform images are delivered as **GitHub Release assets** from the `unison-platform` repository (not GHCR).

## What to download

For `v0.5.0-alpha.N`, a single release tag includes **all** evaluation artifacts (WSL2 + VM + bare metal) plus a manifest and checksums. Start with `evaluate-alpha.md`.

## Install instructions

Use the canonical evaluator guide:

- https://project-unisonos.github.io/developers/evaluate-alpha/

Or the canonical install page (hosted in the platform repo):

- [Install UnisonOS developer images](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install.md)

Expected asset names (for `v0.5.0-alpha.N`):

- `unisonos-wsl2-v0.5.0-alpha.N.tar.gz` (or `.zip`)
- `unisonos-linux-vm-v0.5.0-alpha.N.qcow2` (and/or `.vmdk`)
- `unisonos-baremetal-v0.5.0-alpha.N.iso`
- `unisonos-manifest-v0.5.0-alpha.N.json`
- `SHA256SUMS-v0.5.0-alpha.N.txt`
