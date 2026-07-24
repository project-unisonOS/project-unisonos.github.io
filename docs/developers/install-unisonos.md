# Install UnisonOS

There is not yet a supported production installation. The first **support
candidate** targets Ubuntu 24.04 LTS on x86-64 UEFI hardware.

## Native candidate route

The candidate is owned by
[`unison-platform`](https://github.com/project-unisonOS/unison-platform) and
uses:

- `installer/install-native.sh` and `unisonctl`;
- `compose/compose.supported.yaml`;
- a release-provided environment containing one digest-pinned image reference
  for every required service; and
- a deterministic supported-release manifest.

The older `compose.native.yaml` route and repository-oriented installer remain
useful engineering inputs, but they are not a supported public appliance.

## Checks already implemented

Automated preflight evaluates Ubuntu version, architecture, CPU, RAM, free
storage, virtualization, UEFI, Docker/Compose, clock state, and audio presence.
Unsupported platform or resource conditions block the simulated candidate.

The transaction layer supports versioned staging, digest verification, atomic
activation, idempotent reinstall, injected-interruption recovery, repair, safe
software removal, and separately confirmed factory reset.

## What is not yet validated

Do not treat this as production installation guidance until the project
publishes an immutable release candidate and records:

- clean installation on two named reference systems;
- reboot and real power-interruption recovery;
- accessible first run and owner/recovery enrollment;
- microphone, speaker, USB, and Bluetooth results;
- update, rollback, backup, and replacement restore;
- uninstall and factory reset on the exact candidate; and
- verification using only public downloads and documentation.

## Evaluation channels

WSL2, Linux VM, and bare-metal ISO builds remain evaluator channels:

- [WSL2 evaluation](install-wsl2.md)
- [Linux VM evaluation](install-linux-vm.md)
- [Bare-metal evaluation](install-bare-metal.md)

Review the [release lifecycle](appliance-release-lifecycle.md) and
[compatibility status](../reference/compatibility.md) before evaluating.
