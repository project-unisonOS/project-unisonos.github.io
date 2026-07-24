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
authorizes download and staging, not activation. Activation requires a verified
checkpoint, complete staging, restart preview, health and golden-path checks,
and automatic return to last known good on failure.

## What you can download today

Use WSL2, VM, and ISO assets only for evaluation. The native Ubuntu route is the
support candidate, but it is not ready for everyday installation.

Before using any future promoted release, verify its checksums, signatures,
provenance, support window, compatibility entry, and known limitations.
