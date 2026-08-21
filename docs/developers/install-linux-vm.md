# Archived Linux VM installation channel

**Status: archived. No current VM disk image is published.**

Evaluation-only note:
- the first support candidate is Ubuntu 24.04 LTS native on x86-64 UEFI hardware
- the canonical native path is documented in [Install UnisonOS](install-unisonos.md)
- this VM path is limited to demos and evaluation; supported-install qualification remains open

## Archived channel

The current release does not publish a VM disk image. Older alpha files are
archived engineering artifacts and are not current download options. You can
use a normal Ubuntu VM for repository development, or start from the
[current native preview](releases.md).

## Install overview

Typical flow:
- create or import the VM image
- boot the image in your hypervisor
- access the installed platform via forwarded or bridged networking
- verify renderer and inference health

This historical flow is not maintained as current installation guidance.
