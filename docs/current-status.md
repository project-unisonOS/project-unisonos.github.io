# Current status

**UnisonOS is pre-release engineering software.** The privacy, household,
workflow, backup, multimodal, installer, and update foundations are increasingly
complete and tested. There is still no supported appliance release for everyday
installation.

The first public software-only appliance preview is now available:
[v0.6.0-preview.1](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1).
It remains unsupported while physical validation and promotion gates are open.

## What is in place

- **Personal and household foundations:** independent identities, assistants,
  private data domains, invitations, explicit shared context spaces, and
  cross-person isolation tests.
- **Privacy and control:** default-deny policy, minimized disclosure, exact
  confirmations, revocable permissions, audit records, and untrusted-content
  handling.
- **Useful workflows:** bounded calendar, mail, commitment, household, contact,
  research, and travel journeys with cancellation and recovery.
- **Interaction foundations:** semantic responses, local speech, captions,
  interruption controls, keyboard operation, high contrast, reduced motion,
  and simplified-language preferences.
- **Backup and recovery:** provider-independent encrypted backup, tamper and
  rollback detection, storage-provider migration, and clean-device restore
  simulations.
- **Replaceable components:** policy-aware model routing and signed, revocable
  capability packages with compatibility and permission review.

## Appliance release work now implemented

The first support candidate is a native Ubuntu 24.04 LTS, x86-64, UEFI
installation bundle. The current release does not publish WSL2, VM,
bare-metal ISO, or arm64 downloads.

The candidate release path now has:

- one lifecycle owner in `unison-platform` and one signed-update owner in
  `unison-updates`, both pinned by the authoritative workspace;
- a 13-service supported runtime contract that requires immutable image digests,
  removes developer host ports from internal services, and binds its two
  host-facing surfaces to loopback;
- a deterministic release manifest covering source and Compose hashes, service
  digests, host packages and resources, schema/configuration/backup/model
  versions, model-profile hash, and licenses;
- byte-for-byte manifest reproducibility tests and rejection of missing,
  mutable, or placeholder image digests;
- a deterministic Ed25519-signed bundle containing the manifest, Compose
  contract, immutable image environment, host requirements, licenses, and
  model profile;
- pre-privilege bootstrap verification that rejects tamper, missing or extra
  files, substituted trust roots, and service/image reassignment, then binds
  confirmation to the exact bundle, key, installation path, and data path;
- installer preflight checks for the supported OS, architecture, CPU, memory,
  storage, virtualization, UEFI, Docker/Compose, clock, and audio;
- simulated transactional installation with atomic activation, idempotent
  reinstall, interruption recovery, repair, safe uninstall, and separately
  confirmed factory reset, plus a receipt that reconciles the installed tree
  with its release manifest and source commit;
- threshold-signed update metadata with expiration, monotonic channel and target
  versions, channel/hardware binding, artifact integrity, and dual-authority
  root-key rotation; and
- an independently verified staging authorization, pre-update data and receipt
  checkpoint, complete target staging, atomic activation, bounded health
  promotion, safe interruption resume, and automatic or explicit rollback.
- a public unsupported prerelease containing a signed x86-64 bundle, 13
  digest-pinned runtime images, checksums, source correspondence, SPDX
  inventory, provenance, support status, vulnerability evidence, Ed25519
  signatures, and Sigstore evidence;
- keyless signatures and scans for ten source-correspondent project images,
  with current base OS security updates and rejection of fixable critical
  findings; and
- a public-download job that verifies the published bytes, performs an
  installer transaction, and rejects incomplete or tampered mirrors.

Update simulations reject replay, freeze, expiration, wrong-channel metadata,
corrupt artifacts, wrong architecture, target rollback, signed-payload
tampering, invalid root rotation, changed authorization, expired roots, and
insufficient disk. They exercise successful `N-1` to `N`, failed `N` to
`N+1`, migration failure, staged and post-activation interruption, and
replacement-restored state without losing the last known good release or data.

## What is still required

These controls are implementation and CI evidence, not a support announcement.
Before promotion, the project still needs:

- promotion of the preview image digests and trust roots into a supported
  channel after the remaining gates pass;
- deeper installer onboarding, repair, export, backup, and accessible first-run
  integration;
- real promoted update downloads, reboot health gating, repeated physical
  upgrade and rollback cycles, offline updates, and revocation procedures;
- two named reference systems and a versioned compatibility matrix;
- physical audio, firmware, Secure Boot, TPM, suspend, thermal, power, backup,
  restore, install, update, rollback, removal, and factory-reset results; and
- a time-bounded pilot, support runbooks, reliability objectives, and an
  explicit human release decision.

Seventeen physical checks are tracked separately so CI or simulation cannot be
mistaken for hardware acceptance.

## What that means for you

You can inspect the contracts, run the development stack, and evaluate the
native preview. You should not yet depend on UnisonOS as a supported production
appliance or put irreplaceable personal data into an evaluator installation.

Continue with the [appliance release lifecycle](developers/appliance-release-lifecycle.md),
[current download](developers/releases.md),
[installation status](developers/install-unisonos.md), or
[compatibility guidance](reference/compatibility.md).
