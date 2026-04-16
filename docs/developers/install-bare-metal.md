# Install UnisonOS on Bare Metal

Evaluation-only note:
- the supported Milestone 1 route is Ubuntu 24.04 native on x86_64
- the canonical native path is documented in [Install UnisonOS](install-unisonos.md)
- this bare-metal ISO path is for evaluation and hardware exploration, not the primary supported install route

## Typical release assets

For alpha evaluator releases, expect assets like:
- `unisonos-baremetal-v0.5.0-alpha.N.iso.part00` and subsequent parts
- `unisonos-baremetal-v0.5.0-alpha.N.iso.REASSEMBLE.txt`
- `SHA256SUMS-v0.5.0-alpha.N.txt`

## Install overview

Typical flow:
- reassemble the ISO if split into parts
- flash to USB
- boot the target machine
- allow autoinstall to complete
- verify renderer and inference health after first boot

Canonical platform doc:
- [Bare-metal evaluation install in unison-platform](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-bare-metal.md)
