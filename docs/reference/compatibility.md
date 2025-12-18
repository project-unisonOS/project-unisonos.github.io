# Compatibility

Unison services are versioned to work together in known combinations.

## Compatibility Matrix

- A compatibility matrix tracks which versions of core services are known to work together for each platform release.
- For release artifacts, the most reliable “what’s inside” reference is the release manifest asset (for example: `unisonos-manifest-v0.5.0-alpha.1.json` attached to the GitHub Release).

Existing compatibility matrix (canonical docs):

- https://github.com/project-unisonOS/unison-docs/blob/main/dev/compatibility-matrix.md

When planning upgrades, coordinate updates across orchestrator, context, inference, IO, policy, and storage services.
