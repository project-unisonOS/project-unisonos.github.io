# Appliance release lifecycle

UnisonOS is building one narrow support candidate before expanding to additional
platforms: a signed native bundle for Ubuntu 24.04 LTS on x86-64 UEFI systems.

## Current preview evidence

[v0.6.0-preview.1](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1)
is the first public software-only appliance preview. Its published assets
include the signed bundle and checksum inventory, 13 digest-pinned images,
source correspondence, an SPDX inventory, provenance, support status,
vulnerability results, Ed25519 signatures, and Sigstore evidence.

The release workflow downloaded those public assets again, verified their
integrity and signatures, completed an installer transaction, and confirmed
that incomplete and tampered mirrors fail closed. This is release-path
evidence. Physical-device qualification and a support announcement require
their own gates.

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

## Bundle trust

The candidate assembler packages the manifest and all declared runtime inputs
under a canonical Ed25519-signed index. The bootstrap checks the signature
against a separately trusted public key before privilege elevation. It rejects
changed, missing, extra, or duplicate content; unsafe archive paths; a
substituted key; and disagreement among the manifest, Compose file, image
environment, host requirements, licenses, and model profile.

Verification produces a system-change plan whose SHA-256 binds the bundle
index, trusted key, installation prefix, and personal-data path. Installation
requires acceptance of that exact hash.

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

Successful bootstrap writes an installation receipt outside the immutable
release tree. It records the bundle index, manifest, source commit, complete
file inventory, and installed-tree hashes. Reinstalling identical content is
idempotent, while ordinary removal deletes the software receipt without
destroying personal data.

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

## Activation and rollback

The update verifier emits a staging receipt that retains the original signed
channel metadata. Before staging, the privileged lifecycle independently checks
that evidence against its pinned update root and verifies the signed release
bundle. The authorization must match the exact channel, metadata and target
versions, release version, hardware, artifact length, artifact SHA-256, restart
requirement, and checkpoint requirement.

The simulated transaction then:

1. checks capacity for the bundle, checkpoint, and rollback;
2. copies and verifies personal data and the current installation receipt;
3. stages the complete target without changing the active release;
4. atomically activates the target;
5. runs a bounded health sequence; and
6. promotes the new receipt only after health succeeds.

Failed migration, health, or post-activation interruption restores the
last-known-good release, receipt, and data automatically. A pre-activation
interruption leaves the old release active and can resume the same verified
target. A promoted target retains its checkpoint for explicit owner rollback.

## Evidence boundary

All results above are automated software evidence. They do not establish that a
candidate survives real UEFI installation, power interruption, reboot, audio
hardware, suspend, thermal load, promoted-image activation, or physical
automatic rollback.
Those results remain in the physical-validation ledger until tested against an
exact immutable release candidate.

See [current status](../current-status.md),
[installation](install-unisonos.md), and
[compatibility](../reference/compatibility.md).
