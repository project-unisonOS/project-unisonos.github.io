# Build, Artifacts, and Release Channels

This page summarizes how we build and publish Unison platform artifacts, how tags map to channels, and the tooling you need to reproduce builds locally.

## Artifact outputs
- WSL bundle: `unisonos-wsl-<version>.tar.gz` and rootfs tarball.
- VM bundle: directory with `packer.pkr.hcl`, `provision.sh`, metadata, and (when tools are installed) QCOW2/VMDK images.
- ISO seed: autoinstall seed directory plus `unisonos-autoinstall-seed-<version>.iso` (NoCloud seed to pair with Ubuntu Server ISO).
- Installers: `install-docker.sh`, `install-native.sh`, `install-wsl.sh` in `unison-platform/installer/`.

## Build commands (from `unison-platform/`)
- `make image-wsl` — WSL bundle/rootfs (requires Docker).
- `make image-vm` — VM bundle; emits QCOW2/VMDK when `qemu-img` is installed.
- `make image-iso` — autoinstall seed and seed ISO when `xorriso`/`genisoimage` is installed.
- `make qa-smoke` — health + inference smoke tests.

## Tooling prerequisites
- Docker & Buildx.
- `qemu-img` (`qemu-utils` package) for QCOW2/VMDK.
- `xorriso` or `genisoimage` for the seed ISO.

## Tags and channels (GHCR)
- Nightly: `edge-<branch>-YYYYMMDD`.
- Beta: `vX.Y.0-beta.N` from `release/x.y` branches.
- Stable: `vX.Y.Z` plus `latest` (platform).
- Service repos call the shared workflow `project-unisonOS/unison-platform/.github/workflows/reusable-build.yml@main` to inherit channel-aware tags and OCI labels.

## Release workflow
- Platform tags (`v*`) trigger `unison-platform/.github/workflows/release.yml`, which builds artifacts and attaches them to GitHub Releases.
- Include rendered `models.json` from `images/models.yaml` with published artifacts.

## Security and hardening notes
- Replace placeholder passwords and require SSH keys (ed25519 recommended) in autoinstall `user-data`.
- Keep `ssh.allow-pw` disabled when keys exist; enable firewall and unattended upgrades; adjust allowed ports as needed.
- Inject production secrets via env files (`platform.env`) rather than baking into images.

## Compatibility
- Platform versions define the compatible service tag set; see Reference → Compatibility for the matrix and align service tags to platform releases.
