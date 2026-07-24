# Hardware qualification

The first candidate boundary is Ubuntu 24.04 LTS on x86-64 UEFI systems. No
reference system has completed the physical release gate yet.

## What software can check now

The installer preflight can report:

- operating system and architecture;
- CPU count and virtualization flags;
- RAM and free storage;
- UEFI presence;
- Docker and Compose availability;
- clock synchronization; and
- microphone and speaker detection.

Hard platform and resource mismatches block the candidate. Clock and audio
findings remain warnings until onboarding can offer appropriate remediation and
non-voice fallback.

## What needs a physical lab

Two named systems must complete the same immutable candidate across clean
installation, first run, sustained workload, suspend, reboot, update, rollback,
backup, restore, repair, removal, and reset. Records must include model, CPU,
RAM, storage, firmware, peripherals, model profile, commands, results,
maintainer, and date.

Representative USB and Bluetooth audio devices must be tested for input,
output, reconnect, and fallback behavior. Local-model profiles also need
measured latency, memory, storage, thermal, acoustic, and energy envelopes.

## Evaluation guidance

You may use WSL2 or a normal VM as a development environment, but those results
cannot satisfy UEFI, firmware, Secure Boot, TPM, audio, Bluetooth, suspend,
thermal, power, or physical fresh-install requirements. The current release
does not publish WSL, VM, or ISO images.

See [compatibility](../reference/compatibility.md) for the support-tier model
and [current status](../current-status.md) for the complete evidence boundary.
