# Appliance release lifecycle

UnisonOS is building one narrow support candidate before expanding to additional
platforms: a signed native bundle for Ubuntu 24.04 LTS on x86-64 UEFI systems.

## Runtime contract

The candidate profile contains 13 services. Every image reference must include
an immutable registry digest. Internal services do not publish developer ports;
the renderer and operational health surface are the only host-facing endpoints,
and both bind to loopback.

The release manifest records:

- platform source commit and normalized build time;
- supported Compose path and SHA-256;
- all service image digests;
- Ubuntu, architecture, UEFI, Docker, host-package, and resource requirements;
- database schema, configuration, capability-package, backup, and model-profile
  versions;
- model-profile SHA-256; and
- declared project and image licenses.

Identical source and inputs must produce byte-identical manifests. A publishable
manifest rejects missing, mutable, and example zero digests.

## Installer lifecycle

Preflight currently distinguishes hard blockers from warnings. Unsupported OS,
architecture, CPU, RAM, disk, virtualization, UEFI, or Docker/Compose is a
blocker. Clock and audio findings are reported for review.

The transaction primitive copies a bundle into a versioned staging location,
verifies it, atomically changes the active release, and journals state. Repeated
installation is idempotent. Injected interruptions retain last known good, and
repair can restore a completely staged release.

Software removal preserves the separate personal-data directory. Factory reset
requires the exact destruction phrase and reports that personal data was
destroyed.

## Update trust

Development, preview, and stable channels use canonical signed metadata.
Ed25519 roles have explicit thresholds. The verifier checks:

- metadata type, role, and signature threshold;
- expiration;
- monotonically increasing channel and target versions;
- exact selected channel;
- Ubuntu 24.04 and x86-64 compatibility;
- artifact length and SHA-256; and
- one-version root rotation authorized by both old and new root thresholds.

This prevents replay, freeze, rollback, wrong-channel, wrong-hardware, corrupt,
and tampered metadata from reaching staging.

## Evidence boundary

All results above are automated software evidence. They do not establish that a
candidate survives real UEFI installation, power interruption, reboot, audio
hardware, suspend, thermal load, update activation, or automatic rollback.
Those results remain in the physical-validation ledger until tested against an
exact immutable release candidate.

See [current status](../current-status.md),
[installation](install-unisonos.md), and
[compatibility](../reference/compatibility.md).
