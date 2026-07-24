# Install options

There is no supported installation yet. Ubuntu 24.04 LTS on x86-64 UEFI
hardware is the first native support candidate.

The current downloadable option is the
[v0.6.0-preview.1 native x86-64 bundle](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1).
It is an unsupported software preview, not a hardware-qualified appliance.

## Native candidate

The candidate uses `compose/compose.supported.yaml`, a release manifest, and
digest-pinned images. Automated preflight and transaction tests exist, but
physical installation is still pending.

## Development environments

- WSL2 for Windows-hosted development
- Linux VMs for isolated development
- Development Compose for repository work

The current release does not publish WSL, VM, or ISO images. Historical alpha
files are not current download options. Development environments do not
establish appliance compatibility.

## Model packs

Offline and online model-pack installation remains experimental. Signed
capability and model metadata must pass compatibility, permission, and
revocation policy before entering a promoted appliance release.
