# Install UnisonOS on WSL2

Evaluation-only note:
- the first support candidate is Ubuntu 24.04 LTS native on x86-64 UEFI hardware
- the canonical native path is documented in [Install UnisonOS](install-unisonos.md)
- this WSL2 path is for developer evaluation, not a supported install route

## Typical release assets

For alpha evaluator releases, expect assets like:
- `unisonos-wsl2-v0.5.0-alpha.N.tar.gz` (or `.zip`)
- `SHA256SUMS-v0.5.0-alpha.N.txt`

## Install overview

Typical flow:
- enable WSL2
- import the UnisonOS distro from the release artifact
- launch the distro
- start the bundled stack
- verify renderer and inference health

Canonical platform doc:
- [WSL2 evaluation install in unison-platform](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-wsl2.md)
