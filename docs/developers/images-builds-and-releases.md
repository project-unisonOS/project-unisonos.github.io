# Images, builds, and releases

UnisonOS does not yet publish a supported appliance. The release program is
hardening a native Ubuntu 24.04 LTS x86-64 bundle while keeping WSL2, VM, and
bare-metal ISO outputs as evaluator artifacts.

## Supported-runtime candidate

`compose/compose.supported.yaml` defines 13 required services. A release
environment must provide an immutable digest for each image. The profile removes
developer host ports from internal services and binds its renderer and
operational surface to loopback.

This contract is distinct from mutable development Compose files.

## Reproducible manifest

`scripts/generate_supported_manifest.py` creates the release bill of materials.
It requires a controlled source timestamp and records:

- source commit and normalized creation time;
- supported Compose path and SHA-256;
- exact service image digests;
- Ubuntu, architecture, UEFI, Docker, package, and resource requirements;
- database, configuration, capability, backup, and model-profile versions;
- model-profile SHA-256; and
- project and image licenses.

Identical inputs produce byte-identical output. Publication rejects missing,
mutable, and example zero digests.

## Update metadata

Development, preview, and stable channel metadata is independently signed.
Before an artifact can be staged, the client verifies threshold signatures,
expiration, monotonic metadata and target versions, selected channel, hardware
compatibility, length, and SHA-256. Root-key rotation requires authorization
from both the existing and proposed root thresholds.

## Evaluation artifacts

- WSL bundles support Windows-hosted development.
- QCOW2/VMDK images support VM evaluation.
- The remastered Ubuntu ISO supports bare-metal exploration.

These artifacts do not inherit support status from the native candidate.

## What a release must publish together

A release candidate is incomplete unless the public location contains the
native bundle, release manifest, checksums, signatures, SBOMs, provenance,
source correspondence, compatibility matrix, release notes, installation
guide, upgrade guide, rollback guide, and support window.

CI must retrieve those public bytes, verify them, and perform a clean install
without repository knowledge. Release bytes cannot be silently replaced;
withdrawal uses signed revocation metadata and a visible advisory.

See [releases](releases.md), [release lifecycle](appliance-release-lifecycle.md),
and [compatibility](../reference/compatibility.md).
