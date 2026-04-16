# Install UnisonOS as a Linux VM

Evaluation-only note:
- the supported Milestone 1 route is Ubuntu 24.04 native on x86_64
- the canonical native path is documented in [Install UnisonOS](install-unisonos.md)
- this VM path is for demos and evaluation, not the primary supported install route

## Typical release assets

For alpha evaluator releases, expect assets like:
- `unisonos-linux-vm-v0.5.0-alpha.N.qcow2`
- optional `.vmdk`
- `SHA256SUMS-v0.5.0-alpha.N.txt`

## Install overview

Typical flow:
- create or import the VM image
- boot the image in your hypervisor
- access the installed platform via forwarded or bridged networking
- verify renderer and inference health

Canonical platform doc:
- [Linux VM evaluation install in unison-platform](https://github.com/project-unisonOS/unison-platform/blob/main/docs/install-linux-vm.md)
