# Edge-First and Optional Cloud

UnisonOS is designed to run primarily on edge devices. Cloud connectivity is optional and must be explicitly configured, auditable, and consent-aware.

## Edge First Runtime

- Core services (orchestrator, policy, auth, consent, context, context-graph, storage, inference, intent-graph, renderer, IO) run on the device.
- Local models are loaded via the inference gateway when configured (for example, through devstack profiles or production compose).
- Profiles and context are stored locally in consent-aware services backed by local infrastructure (for example: Postgres + Redis, and Neo4j in the devstack).

## Optional Cloud Inference

- The inference gateway can be configured to reach cloud model providers.
- Whether cloud providers are used is controlled by configuration and policy:
  - Environment variables determine available providers.
  - Policy and consent services determine when remote calls are allowed.

## Profile Sync (Current Status)

- Current releases treat **profiles, context, and artifacts as on-device state**. There is no default “profile sync to cloud” behavior in the core stack.
- If you add synchronization as an integration, treat it as a high-impact data flow:
  - Require explicit consent for what is exported and where it is stored.
  - Emit audit events for every export/import operation.
  - Preserve the ability to run fully offline when sync is disabled.

These patterns build on the existing division between context, context-graph, and storage services and their backing data stores.
