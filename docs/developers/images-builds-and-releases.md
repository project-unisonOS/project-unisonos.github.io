# Images, Builds, and Releases

This page summarizes how UnisonOS images are built, how release channels work, and how you can reproduce and verify builds locally.

## Overview

For the current Milestone 1 production-track release, the supported installation route is Ubuntu 24.04 native on x86_64 via the native installer path in `unison-platform`.

UnisonOS may also publish evaluation images and installers for WSL, virtual machines, and physical hardware. Those channels are useful for demos, developer evaluation, and hardware exploration, but they are not the canonical supported install path.

## Artifact types and use cases

### Canonical supported route

- Ubuntu native installation via `install-native.sh` and `unisonctl`.
- This is the primary Milestone 1 install path and the route public install docs should foreground.

### Evaluation image channels

These channels are intentionally secondary to the supported Ubuntu native install route.

### WSL bundle

- `unisonos-wsl-<version>.tar.gz` plus a root file system tarball.
- Runs on Windows via WSL for local experimentation and development.

### Linux VM image

- `unisonos-linux-vm-<version>.qcow2` (and optionally `.vmdk`).
- Bootable Ubuntu disk image; provisions UnisonOS on first boot and then auto-starts the platform service.

### Bare-metal installer ISO

- `unisonos-baremetal-<version>.iso`.
- Full Ubuntu Server installer ISO remastered with embedded autoinstall payload (not seed-only).

### Installers

- `install-docker.sh`, `install-native.sh`, and `install-wsl.sh` in `unison-platform/installer/`.
- For Milestone 1, `install-native.sh` is the canonical supported installer path and pairs with `unisonctl`, `.env.native.template`, and `compose/compose.native.yaml`.
- These installers configure the environment, pull images, and enable platform services on supported hosts.

## Build commands and local reproduction

Run these commands from the `unison-platform` repository after installing Docker and required tools:

- `make image-wsl` builds the WSL bundle and root file system.
- `make linux-vm` builds the VM disk image (QCOW2; optional VMDK).
- `make baremetal-iso` builds the bootable installer ISO with embedded autoinstall payload.
- `make qa-smoke` runs health and inference smoke tests against the built images.

Tooling prerequisites:

- Docker with Buildx enabled.
- `qemu-img` from the `qemu-utils` package for QCOW2 or VMDK outputs.
- `xorriso` for building the bare-metal installer ISO.
- For VM builds without virtualization acceleration (CI), `libguestfs-tools` is used to customize Ubuntu cloud images without KVM.

## Semantic versioning and channel semantics

UnisonOS uses semantic versioning for platform releases:

- **MAJOR** versions introduce breaking changes or significant architecture shifts.
- **MINOR** versions add features and improvements while maintaining compatibility with the previous minor line.
- **PATCH** versions contain bug fixes and safe corrections only.

Release channels map tags to stability levels:

- **nightly** tags follow `edge-<branch>-YYYYMMDD` and are built from active development branches.
- **beta** tags follow `vX.Y.0-beta.N` from `release/x.y` branches and are candidates for the next stable release.
- **stable** tags follow `vX.Y.Z` and represent supported platform releases; the `latest` tag points to the most recent stable platform image.

Service repositories use the shared workflow `project-unisonOS/unison-platform/.github/workflows/reusable-build.yml@main` to apply channel-aware tags and OCI labels consistently.

## Security and hardening

Images are configured with security defaults that you should preserve and extend in production:

- Replace any placeholder passwords and require SSH keys (ed25519 recommended) in autoinstall `user-data`.
- Keep password-based SSH disabled when keys are present; enable the firewall and unattended updates and restrict open ports.
- Inject production secrets via environment files such as `platform.env` rather than baking them into images.
- Verify that only required services are exposed on external interfaces and that logs avoid sensitive content.

## Latest images and release assets

You can find published release assets and notes in these locations:

- the canonical install docs in `unison-platform` for the supported Ubuntu native route
- GitHub Releases for `unison-platform`, which may attach evaluator artifacts such as WSL, VM, and ISO images
- GHCR namespaces for container images used by core services and devstack

Follow the instructions in each release to verify signatures and checksums before installing on production hardware.

## Workflow overview

Platform tags starting with `v` trigger the main release workflow in `unison-platform/.github/workflows/release.yml`. That workflow:

- Publishes the release assets needed for the canonical supported install path.
- May also build evaluator images for WSL, VM, and bare-metal channels.
- Publishes artifacts to GitHub Releases.
- Pushes tagged images to GHCR with channel-aware tags.
- Includes rendered model metadata such as `models.json` from `images/models.yaml`.

Platform versions define the compatible service tag set. See Reference → Compatibility for the compatibility matrix and align service tags to platform releases when you upgrade.
