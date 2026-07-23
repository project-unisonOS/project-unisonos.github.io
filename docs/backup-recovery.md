# Provider-blind backup and recovery

**Maturity: accepted Phase 6 engineering boundary, not a supported production service.**

UnisonOS encrypts backup content on the home node before any provider receives
it. Every adult and every shared context space has an independent backup key
domain. A storage provider or household administrator can see backup health but
cannot decrypt another person's private content or recover that assistant.

## What Phase 6 implements

- AES-256-GCM client-side envelope encryption with independent chunk data keys.
- Encrypted, Ed25519-signed, monotonically linked manifests.
- Independently held checkpoints that detect rollback, forks, truncation,
  reordering, corruption, replay, and missing objects.
- Atomic filesystem and S3-compatible backends, with MinIO as the reference
  remote-contract target.
- Scheduled verification, retention compaction, encrypted export, signed
  tombstones, deletion requests, and cryptographic erasure.
- Dry-run-first, cancellable, resumable replacement-device restore.
- Old-device revocation and personal/shared-space key rotation after restore.

Backup remains separate from synchronization and remote access. The home node
is still the only authoritative writer.

## Recovery belongs to you

Each adult enrolls a separate recovery kit through a strongly authenticated
local, non-voice surface. The kit can be complemented by a trusted device that
holds the current signed checkpoint. Voice, Telegram, another low-assurance
channel, the storage provider, and a household administrator cannot substitute
for your recovery proof.

A clean device verifies the recovery proof, checkpoint, manifest lineage, and
every encrypted object before activating restored state. Activation revokes the
replaced device and rotates authority.

## Information a provider can still observe

A backend may observe the storage account and bucket, opaque object identifiers,
byte sizes, timing, request volume, and deletion requests. It does not receive
person or space names, plaintext manifests, decryption keys, signing private
keys, or recovery secrets.

Provider-side physical deletion cannot be proven. Unison can destroy its local
wrapped keys, issue and verify a deletion request, and make retained ciphertext
cryptographically inaccessible, but a provider may retain opaque copies under
its own disaster-recovery policy.

## Shared-space removal

Removing a shared-space member creates a new key epoch for future state and
wraps it only for current members. A person who legitimately possessed an older
historical key may retain it; rotation cannot retroactively erase knowledge or
copies already obtained.

## Current limits

- The implementation passed its bounded engineering gate; it is not a supported backup
  subscription or partnership.
- The S3-compatible contract does not imply endorsement of a particular public
  provider.
- The software key protector is for development and evaluation. Production TPM
  claims require separate hardware validation.
- Losing both the recovery kit and every trusted recovery device makes private
  recovery impossible by design.
