# Architecture Deep Dive

This page describes how the current UnisonOS stack is wired end-to-end in the devstack and platform compose.

## End-to-End Flow (Input → Intent → Outcome → Render)

1. **Input** arrives from an I/O service (speech, vision, BCI, etc.), the experience renderer, or an actuator (Agent VDI).
2. **Intent Graph** normalizes the request and forwards it to the orchestrator.
3. **Orchestrator** coordinates the turn:
   - Reads/writes profile and session state via **Context**.
   - Enforces **Auth**, **Policy**, and **Consent** for sensitive actions.
   - Calls **Inference** when generation or planning is needed.
   - Routes to tools/services (for example: **Storage**, **Comms**, or actuation via **Agent VDI**).
4. **Results** are returned as structured outputs (and storage references for artifacts), then rendered by the experience renderer in real time.

## Envelopes and Service Contracts

Unison services share a small set of consistent patterns:

- **Intent envelopes**: normalize “what the person wants” across modalities.
- **Action envelopes**: describe tool/actuator work (including step plans for high-impact operations).
- **Result/event envelopes**: return outcomes and emit state transitions for traceability.

These envelopes allow the orchestrator to reason over heterogeneous tools while keeping governance (policy/consent/audit) centralized.

## Persistence and Messaging (What Runs Under the Hood)

In current deployments:

- **Postgres** stores durable service state (context, storage metadata, and other service persistence).
- **Redis** provides low-latency coordination and caching.
- **Neo4j** is used in the devstack for graph persistence (context graph / intent graph); other deployments may run graph services without Neo4j.
- **Artifacts** (downloads, generated files, etc.) are stored on the local storage volume via the storage service.
- **NATS/JetStream** is used in the platform compose for asynchronous event streaming; the devstack primarily wires services together with HTTP for simplicity.

## Devstack vs Platform Compose

- **Devstack (`unison-workspace/unison-devstack`)**: optimized for local development, includes Neo4j and optional tooling (for example, an Ollama provider for inference).
- **Platform compose (`unison-platform/compose/compose.yaml`)**: reference service topology with Postgres/Redis and NATS/JetStream for event streaming, plus optional observability profiles.

## Security and Governance Boundaries

- **No cloud dependency by default**: the platform is designed to run fully on local hardware.
- **Remote calls are policy-gated**: if you enable a remote inference provider or external connector, it must be explicit, auditable, and consent-aware.
- **Artifacts and sensitive state**: durable data flows through the storage and context APIs, not ad-hoc per-service databases.

See [Storage & Persistence](components/storage-and-persistence.md) and [Actuation / VDI & VPN](components/actuation-vdi-vpn.md) for the concrete boundaries used by tools and actuators.
