# Install UnisonOS on Bare Metal

Evaluation-only note:
- the first support candidate is Ubuntu 24.04 LTS native on x86-64 UEFI hardware
- the canonical native path is documented in [Install UnisonOS](install-unisonos.md)
- this bare-metal ISO path is for evaluation and hardware exploration, not a supported install route

## Archived channel

The current release does not publish an installer ISO. Older split alpha ISO
files are archived engineering artifacts and are not current download options.
Use the [current native preview](releases.md) only on disposable evaluation
systems, with the hardware limitations described there.

## Install overview

Typical flow:
- reassemble the ISO if split into parts
- flash to USB
- boot the target machine
- allow autoinstall to complete
- verify renderer and inference health after first boot

This historical flow is not maintained as current installation guidance.
