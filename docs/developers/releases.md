# Releases

There is no supported UnisonOS release yet. GitHub releases and evaluator
artifacts should be treated as engineering outputs unless a release is
explicitly promoted after the full appliance gate.

## Candidate channels

- **Development** moves quickly and may contain incompatible state.
- **Preview** is a release candidate for evaluation and upgrade testing.
- **Stable** is reserved for a human-approved immutable candidate that has
  passed every software, security, hardware, accessibility, recovery, and pilot
  gate.

The existence of a semantic version or a `latest` container tag does not make an
artifact stable or supported.

## Verification model

Candidate channel metadata uses Ed25519 thresholds, expiration, monotonic
versions, channel/hardware binding, and artifact hashes. A valid metadata result
authorizes download and staging. Activation separately requires a verified
checkpoint, complete staging, restart preview, health and golden-path checks,
and automatic return to last known good on failure.

## What you can download today

[UnisonOS v0.6.0-preview.1](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1)
is the current downloadable software preview. It is an unsupported,
pre-production x86-64 bundle for testing the release, verification, installer,
and update contracts. Physical hardware validation is still pending.

Download:

- [signed x86-64 appliance bundle](https://github.com/project-unisonOS/unison-platform/releases/download/v0.6.0-preview.1/unisonos-v0.6.0-preview.1-x86_64.tar)
- [checksum inventory](https://github.com/project-unisonOS/unison-platform/releases/download/v0.6.0-preview.1/SHA256SUMS)
- [checksum signature](https://github.com/project-unisonOS/unison-platform/releases/download/v0.6.0-preview.1/SHA256SUMS.ed25519)
- [preview verification key](https://github.com/project-unisonOS/unison-platform/releases/download/v0.6.0-preview.1/unisonos-preview-bundle-ed25519.pem)
- [manifest](https://github.com/project-unisonOS/unison-platform/releases/download/v0.6.0-preview.1/unisonos-v0.6.0-preview.1-manifest.json)
- [support status](https://github.com/project-unisonOS/unison-platform/releases/download/v0.6.0-preview.1/unisonos-v0.6.0-preview.1-support.json)
- [vulnerability report](https://github.com/project-unisonOS/unison-platform/releases/download/v0.6.0-preview.1/unisonos-v0.6.0-preview.1-vulnerabilities.json)
- [release notes and complete asset list](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1)

The same release publishes image digests, source correspondence, SPDX
inventory, provenance, support status, vulnerability results, Ed25519
signatures, and Sigstore evidence. CI downloaded the public assets, verified
them, completed an installer transaction, and confirmed that incomplete and
tampered mirrors are rejected.

The older `v0.5.0-alpha.1` WSL2, VM, and split ISO files are archived evaluator
artifacts. They are not current appliance downloads and are no longer linked
from installation guidance.

Verify `SHA256SUMS` and its signature before use. Review the published support
and vulnerability records, and do not use this preview for production or
irreplaceable personal data.
