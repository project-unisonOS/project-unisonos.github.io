# Install UnisonOS

There is not yet a supported production installation. The first downloadable
software preview targets Ubuntu 24.04 LTS on x86-64 UEFI hardware.

Start from the
[v0.6.0-preview.1 release page](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1).
Download the bundle, `SHA256SUMS`, its Ed25519 signature, and the preview public
key from that one release. Do not mix assets from different versions.

## Native candidate route

The candidate is owned by
[`unison-platform`](https://github.com/project-unisonOS/unison-platform) and
uses:

- `installer/install-native.sh` and `unisonctl`;
- `compose/compose.supported.yaml`;
- a release-provided environment containing one digest-pinned image reference
  for every required service; and
- a deterministic supported-release manifest; and
- a signed deterministic bundle, pre-privilege verifier, exact system-change
  plan, transactional activation, and installation receipt.

The older `compose.native.yaml` route and repository-oriented installer remain
useful engineering inputs, but they are not a supported public appliance.

## Checks already implemented

Automated preflight evaluates Ubuntu version, architecture, CPU, RAM, free
storage, virtualization, UEFI, Docker/Compose, clock state, and audio presence.
Unsupported platform or resource conditions block the simulated candidate.

The transaction layer supports versioned staging, digest verification, atomic
activation, idempotent reinstall, injected-interruption recovery, repair, safe
software removal, and separately confirmed factory reset.

## What the published preview proves

The publication workflow rebuilt ten project images from recorded source
commits, pinned all 13 runtime images by digest, signed project images, emitted
SBOM and provenance evidence, applied available OS security updates, and
published vulnerability results. A separate job downloaded the public release,
verified the complete asset set, installed it into a clean temporary prefix,
and rejected incomplete and tampered copies.

## What is not yet validated

Do not treat this as production installation guidance until the project
promotes an immutable release candidate and records:

- clean installation on two named reference systems;
- reboot and real power-interruption recovery;
- accessible first run and owner/recovery enrollment;
- microphone, speaker, USB, and Bluetooth results;
- update, rollback, backup, and replacement restore;
- uninstall and factory reset on the exact candidate; and
- verification using only public downloads and documentation.

## Historical evaluator channels

Older WSL2, Linux VM, and split ISO artifacts are not part of the current
download. Their pages remain as historical engineering context only:
[WSL2](install-wsl2.md), [Linux VM](install-linux-vm.md), and
[bare metal](install-bare-metal.md).

Review the [release lifecycle](appliance-release-lifecycle.md) and
[compatibility status](../reference/compatibility.md) before evaluating.
