# Compatibility

Unison services are versioned to work together in known combinations.

## Compatibility Matrix

- A compatibility matrix tracks which versions of core services are known to work together for each release.
- Platform releases define the expected service tag set (e.g., vX.Y.Z across orchestrator, context, inference, IO, policy, storage); nightly/beta channels use the channel-aware GHCR tags described in Developers → Build, Artifacts, and Release Channels.

When planning upgrades, consult the compatibility matrix in the internal docs and coordinate service updates accordingly, especially for orchestrator, context, IO, policy, and storage services.
