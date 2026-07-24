# Install options

There is no supported installation yet. Ubuntu 24.04 LTS on x86-64 UEFI
hardware is the first native support candidate.

## Native candidate

The candidate uses `compose/compose.supported.yaml`, a release manifest, and
digest-pinned images. Automated preflight and transaction tests exist, but
physical installation is still pending.

## Evaluator environments

- WSL2 for Windows-hosted development
- Linux VM images for isolated evaluation
- Bare-metal ISO for hardware exploration
- Development Compose for repository work

These environments do not establish appliance compatibility.

## Model packs

Offline and online model-pack installation remains experimental. Signed
capability and model metadata must pass compatibility, permission, and
revocation policy before entering a promoted appliance release.
