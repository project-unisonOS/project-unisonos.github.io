# Compatibility

Unison services are versioned to work together in known combinations.

## Compatibility Matrix

- A compatibility matrix tracks which versions of core services are known to work together for each release.
- Platform releases define the expected service tag set (for example, vX.Y.Z across orchestrator, context, inference, IO, policy, storage). Nightly and beta channels use the channel aware GHCR tags described in Developers → Images, Builds, and Releases.

When planning upgrades, consult the compatibility matrix in the internal docs and coordinate service updates accordingly, especially for orchestrator, context, IO, policy, and storage services.
