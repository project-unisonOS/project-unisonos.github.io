# Edge Device and Cloud Profile Sync

## What this page covers

- How UnisonOS treats edge devices as the primary runtime.
- When and how cloud inference and profile synchronization can be enabled.
- The expectations for consent, policy, and audit when data leaves the device.

## Who this page is for

- Operators configuring deployments across devices and cloud environments.
- Developers deciding when to rely on local services versus remote ones.

## Before you read this

- Review [Architecture Overview](overview.md) for the core control plane.
- Read the [Security](../reference/security.md) reference for privacy and policy constraints.

UnisonOS is designed to run primarily on edge devices, with optional cloud capabilities for profile synchronization and remote inference where policy allows.

## Edge First Runtime

- Core services (orchestrator, policy, auth, consent, context, context-graph, storage, inference, intent-graph, renderer, IO) run on the device.
- Local models are loaded via the inference gateway when configured (for example, through devstack profiles or production compose).
- Profiles and context are stored locally in consent-aware stores.

## Optional Cloud Inference

- The inference gateway can be configured to reach cloud model providers.
- Whether cloud providers are used is controlled by configuration and policy:
  - Environment variables determine available providers.
  - Policy and consent services determine when remote calls are allowed.

## Optional Profile Sync

- Profiles and context can be synchronized to cloud backends if enabled by configuration and policy.
- Sync should respect:
  - Explicit user consent for what is synced and where it is stored.
  - Clear audit logs of sync operations.
  - The ability to run fully offline when sync is disabled.

These patterns build on the existing division between context, context-graph, and storage services and their backing data stores.
