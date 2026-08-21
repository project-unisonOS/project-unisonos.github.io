# Evaluate the UnisonOS preview

The current preview lets evaluators inspect release evidence and exercise the
software installation path. It is unsupported pre-production software. The
recommended evaluation begins with published artifacts and can continue on a
disposable Ubuntu system when the evaluator accepts the installation risk.

## Choose an evaluation depth

| Depth | What you evaluate | System impact |
| --- | --- | --- |
| Artifact review | Release notes, support status, manifest, source correspondence, SBOM, provenance, and vulnerability evidence | None |
| Integrity verification | Checksums, Ed25519 signature, bundle index, and complete asset agreement | Downloaded files only |
| Isolated installation | Preflight, exact system-change plan, transactional activation, receipt, status, repair, and removal | Changes a dedicated disposable Ubuntu evaluator system |

The first two depths provide useful release-path evidence without changing a
machine.

## Current candidate

- **Release:** [`v0.6.0-preview.1`](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1)
- **Published:** July 24, 2026
- **Target:** Ubuntu 24.04 LTS, x86-64, UEFI
- **Status:** unsupported software-only preview
- **Purpose:** evaluate published evidence, verification, installer, update,
  rollback, and recovery foundations

Download every asset from the same release. Assets from different releases do
not form a valid candidate.

## Review the evidence first

1. Read `RELEASE_NOTES.md` and the support-status JSON.
2. Inspect the manifest for the source commit, host requirements, Compose hash,
   image digests, schema versions, model profile, and licenses.
3. Inspect source correspondence, SPDX inventory, and provenance.
4. Review the vulnerability report and its relationship to the published
   candidate.
5. Confirm that the checksum inventory names the complete expected asset set.

This review distinguishes what was published from what the project has
physically qualified. The current candidate has automated release-path evidence
and no supported hardware profile.

## Verify downloaded artifacts

On an isolated Linux evaluation environment with OpenSSL and core checksum
tools available, verify the checksum inventory signature:

```bash
openssl pkeyutl -verify -rawin -pubin \
  -inkey unisonos-preview-bundle-ed25519.pem \
  -in SHA256SUMS \
  -sigfile SHA256SUMS.ed25519
```

Then verify the downloaded files listed by the inventory:

```bash
sha256sum --check SHA256SUMS
```

Success establishes that the downloaded bytes match the signed inventory. It
does not establish that the software is safe or supported for a particular
machine or purpose. Stop when a signature, checksum, required asset, or version
relationship fails.

## Prepare an isolated installation evaluation

Use a dedicated Ubuntu 24.04 LTS x86-64 UEFI system that can be erased and
rebuilt. Preserve no irreplaceable data on it. Keep the evaluator separate from
production household networks, accounts, credentials, devices, and personal
records.

Before installation, record:

- hardware model, CPU, RAM, storage, firmware, and network interfaces;
- Ubuntu, kernel, Docker, and Compose versions;
- release tag and hashes of every downloaded asset;
- installation and data paths;
- expected system changes and removal plan; and
- the evidence label `physical evaluator`, which remains outside supported
  qualification until accepted into the project ledger.

## Follow the verified plan

The candidate bootstrap verifies the signed bundle before privilege elevation
and produces an exact system-change plan. Review the paths, services, ports,
packages, data location, trusted key, and plan hash. Installation requires
acceptance of that exact hash.

Stop when preflight reports a hard blocker or when the plan differs from the
machine and paths you intended to evaluate. Warnings such as clock or audio
findings belong in the result record.

After activation, evaluate only the bounded lifecycle appropriate to the
candidate:

1. inspect the installation receipt and active release;
2. check service status and loopback-only host surfaces;
3. exercise a synthetic journey without personal data;
4. record cancellation, failure, logs, and recovery behavior;
5. perform repair or rollback only with the documented checkpoint available;
6. remove the software and confirm whether the separate data path was retained;
   and
7. use the separately confirmed factory-reset path only when destruction of the
   evaluator data is intended.

The [installation status](install-unisonos.md) and
[release lifecycle](appliance-release-lifecycle.md) define the implemented
transaction and its remaining physical gates.

## Record useful evidence

An evaluation report includes:

- exact release and asset hashes;
- hardware and environment inventory;
- commands and timestamps;
- expected and observed results;
- logs with secrets and personal content removed;
- interruption, recovery, and removal outcome;
- evidence class and limitations; and
- reproducible next action.

Share security findings through the private
[security policy](https://github.com/project-unisonOS/unison-workspace/security/policy).
Share ordinary evaluator findings in the owning repository with the release,
hardware, and evidence class clearly identified.

<aside class="evidence-band" aria-label="Preview evaluation boundary">
  <p><strong>Established:</strong> Hosted release workflows verify the public asset set, signatures, checksums, source correspondence, and a clean-prefix software transaction.</p>
  <p><strong>Open:</strong> Named reference hardware, real reboot and power cycles, audio and peripherals, sustained thermal load, backup and replacement restore, accessible first run, and a reliability pilot remain qualification work.</p>
</aside>
