# Install UnisonOS

For the current Milestone 1 production-track release, the supported installation target is Ubuntu 24.04 native on x86_64 hardware.

This page is the first-class docs-site entrypoint for installation guidance.

## Supported Milestone 1 route

Use the Ubuntu native install path first.

Core platform contract:
- `install-native.sh`
- `unisonctl`
- `.env.native.template`
- `compose/compose.native.yaml`

Canonical platform docs:
- [Ubuntu native installation](https://github.com/project-unisonOS/unison-platform/blob/main/docs/deployment/ubuntu-native.md)
- [Milestone 1 native runtime profile](https://github.com/project-unisonOS/unison-platform/blob/main/docs/deployment/milestone-1-native-runtime-profile.md)

## What to expect

The supported native installer path:
- installs Docker if needed
- seeds `/etc/unison/platform.env` from the native template
- installs `unisonctl`
- installs/enables `unison-platform.service`
- uses the native compose bundle for Milestone 1
- refuses first start when template or development defaults remain in place

## Evaluation-only channels

WSL2, Linux VM, and bare-metal ISO remain evaluation channels for testing, demos, and hardware exploration.

Use them only when you intentionally want an evaluator path rather than the primary supported install route.

- [WSL2 evaluation install](install-wsl2.md)
- [Linux VM evaluation install](install-linux-vm.md)
- [Bare metal evaluation install](install-bare-metal.md)
