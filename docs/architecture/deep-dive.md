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

## Shared Library: `unison-common`

Most Python services in the stack share a common runtime library: `unison-common`.

What it provides today:

- **Envelope validation**: programmatic + JSON Schema validation helpers used across services.
- **Schemas shipped with the runtime**: model pack manifest schema, prompt schemas/templates, and the multimodal manifest schema.
- **Prompt engine + injection**: compiles layered prompt inputs under `UNISON_PROMPT_ROOT` and injects the compiled system prompt at model call sites.
- **Model pack tooling**: validates and resolves model pack manifests and supports “required pack” enforcement via configuration.
- **Tracing + logging**: OpenTelemetry helpers, middleware, and structured logging utilities.
- **Auth and request utilities**: JWT helpers, idempotency middleware, HTTP client helpers, and replay tooling used for debugging.

Where to look:

- Repo: https://github.com/project-unisonOS/unison-common
- Runtime schemas: `unison-common/src/unison_common/schemas/`

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

## Edge-First and Optional Cloud

UnisonOS is designed to run primarily on edge devices. Cloud connectivity is optional and must be explicitly configured, auditable, and consent-aware.

### Edge First Runtime

- Core services (orchestrator, policy, auth, consent, context, context-graph, storage, inference, intent-graph, renderer, I/O) run on the device.
- Local models are loaded via inference when configured (for example, through devstack profiles or production compose).
- Profiles and context are stored locally in consent-aware services backed by local infrastructure (for example: Postgres + Redis, and Neo4j in the devstack).

### Optional Cloud Inference

- Inference can be configured to reach remote model providers.
- Whether remote providers are used is controlled by configuration, policy, and consent.

### Profile Sync (Current Status)

- Current releases treat **profiles, context, and artifacts as on-device state**. There is no default “profile sync to cloud” behavior in the core stack.
- If you add synchronization as an integration, treat it as a high-impact data flow: explicit consent, audit events, and offline-first behavior.

## Components (Current Stack)

Core control plane:

- **Orchestrator** – Central intent router and coordinator.
- **Intent Graph** – Front-end for routing intents into the orchestrator.
- **Policy / Consent / Auth** – Governance and identity primitives for all sensitive flows.
- **Inference** – Model execution gateway (local-first, provider-backed).
- **Capability Resolver** – Capability discovery/installation/execution gate that enforces manifests, policy, and safe defaults.

State and data:

- **Context** – Profile + session store (consent-aware).
- **Context Graph** – Graph-shaped context used for recall/relationships (Neo4j in devstack).
- **Storage** – Durable KV + artifacts + vault + audit behind a single service API.

Actuation and I/O:

- **Experience Renderer** – Real-time renderer that turns state into an experience and emits intents back into the control plane.
- **Agent VDI** – Desktop/browser automation actuator used for GUI-only workflows.
- **I/O services** – Speech, vision, sign, Braille, BCI, and other modality adapters.

Infrastructure commonly used:

- **Postgres** (durable persistence)
- **Redis** (cache/coordination)
- **Neo4j** (graph persistence in devstack)
- **NATS/JetStream** (event streaming in platform compose)

## System Capabilities (Resolver, Manifests, and Safe Execution)

UnisonOS uses a capability system to connect intents to concrete tools, connectors, MCP servers, and skill packs. This system is designed to keep execution **policy-governed** and **auditable**, and to prevent ad-hoc “direct tool calls” that bypass platform controls.

### Authority model (planner contract)

At a high level:

- The **interaction model** turns input into structured intent (it does not execute).
- The **planner/orchestrator** is responsible for planning and must resolve capabilities before any execution step.
- The **capability resolver** is the execution gate:
  - discovers candidates for an intent
  - installs (when allowed)
  - runs an installed/declared capability
  - persists manifest state
  - enforces policy, permissions, and safe defaults

This separation is what allows UnisonOS to add new tools and integrations without expanding the trusted surface area of the orchestrator itself.

### Capability lifecycle (end-to-end)

In a compliant flow:

1. Planner calls `capability.search(intent, constraints)` to discover candidates.
2. Planner calls `capability.resolve(step)` to select/validate a concrete candidate.
3. Planner calls `capability.install(candidate)` if the capability is not already available locally (and policy allows).
4. Planner calls `capability.run(capability_id, args)` to execute.
5. Resolver persists state and exposes inventory operations (`capability.list/get/remove`).

### Manifests: the source of truth

Capabilities are declared in a manifest and validated against a platform schema before being persisted or executed. A manifest describes:

- the capability **type** (tool, MCP server, skill pack, A2A peer, workflow)
- **version pinning** (exact semver, not ranges)
- **origin/provenance** (local or URL + digest/signature fields)
- **runtime** characteristics
- **permissions** (especially network egress allowlists)
- **trust level** and enablement state
- **secrets** as references only (never embedded values)

### Seeded capabilities: base + local layering

Images can ship with a curated baseline manifest:

- `manifest.base.json` – read-only, shipped in the image
- `manifest.local.json` – mutable, persisted on disk

Resolver view = merge(base + local), where local overrides base entries by `id`. Runtime writes (installs, enablement changes, secret bindings) always go to the local manifest.

This makes “out-of-the-box” experiences fast (common local tools resolve immediately), while still allowing safe customization and resets (local state can be cleared without modifying the shipped baseline).

### Connectors, OAuth onboarding, and secrets (no secrets in manifests)

Network connectors (email/calendar/chat/etc.) are typically shipped **disabled by default** and require explicit onboarding:

- The resolver supports OAuth device authorization flows suitable for headless / voice-first environments.
- Refresh tokens are stored in a secrets backend and referenced in the manifest via opaque handles (for example, `secret://...`).
- Audit logs are structured and redacted so token material never appears in logs.

### Egress controls and runtime enforcement

All outbound calls for registry discovery, OAuth, MCP tool invocation, and A2A delegation are expected to pass through a single egress control point:

- **deny-by-default** for non-loopback egress unless allowlisted by policy
- per-capability `permissions.network` enforcement with explicit allowlists
- safe defaults for binding and authentication (local-only service surfaces unless explicitly configured)

## Storage and Persistence

Storage is the unified persistence layer for UnisonOS artifacts and durable service records. It provides a single API for:

- Durable key/value records
- Working memory entries
- Vault entries (encrypted blobs)
- Audit events
- Objects (binary artifacts + metadata)

In current implementations, the storage service persists metadata to **Postgres** (required in production; SQLite is only allowed for local/dev), and stores object payloads on the local storage volume.

Responsibilities:

- **Working memory** – Long-lived state for tasks and sessions, including summaries and embeddings metadata.
- **Vault** – Encrypted secrets such as credentials, tokens, and API keys.
- **Objects and files** – Documents, downloads, and artifacts with metadata.
- **Audit** – Append-only records of who did what and when for sensitive operations.

Security and privacy:

- Per-person and per-tenant scoping is enforced at the API layer.
- Secrets and sensitive fields are encrypted at rest.
- Audit events are append-only to preserve provenance.

## Actuation (VDI and VPN)

Actuation is the layer that allows UnisonOS to cause effects in external systems beyond returning text or speech. Actuators are governed by policy and consent.

VDI provides a headless desktop/browser environment used for GUI-style web flows (multi-page sites, downloads, workflows that lack APIs).

VPN boundary:

- The VDI container shares a network namespace with a VPN client.
- All VDI egress is expected to pass through that VPN boundary so traffic has predictable egress and can fail closed.

Intent → VDI flow (high level):

1. Intent arrives and is normalized into an envelope.
2. Orchestrator checks policy/consent.
3. Orchestrator emits an Action Envelope describing steps.
4. Actuation selects VDI when a browser/desktop workflow is required.
5. VDI executes steps and writes artifacts to storage.
6. Results return to the orchestrator and are rendered in the experience.

API details live in [Reference → APIs](../reference/apis.md#actuation-vdi-api-reference).

## Inference and Model Execution

Inference is a dedicated service that runs models and exposes a stable API to the rest of the platform. Providers are swappable behind the inference boundary.

Common configuration knobs:

- `UNISON_INFERENCE_PROVIDER` (example: `ollama`)
- `UNISON_INFERENCE_MODEL` (example: `qwen2.5:1.5b`)
- `UNISON_MODEL_DIR` (example: `/var/lib/unison/models`)

### Model Packs

Phase 1.1 ships lean base images and distributes model weights as **model packs** that can be installed offline or fetched online.

- Default model directory: `/var/lib/unison/models` (override: `UNISON_MODEL_DIR`)
- CLI: `unison-models list|verify|install --path <pack.tgz>|install --fetch <url-or-alias>`
- Boot enforcement: `UNISON_MODEL_PACK_REQUIRED=pack_id@version`

### Prompt Engine and System Prompt Injection

UnisonOS separates the model from the assistant identity. The model is treated as stateless: UnisonOS compiles and injects the active system prompt at runtime.

- Prompt root: `UNISON_PROMPT_ROOT` (default: `~/.unison/prompt`)
- Compiled prompt path: `~/.unison/prompt/compiled/active_system_prompt.md`
- Observability: `prompt.injection.applied` trace events include prompt path + hash (prompt content is never logged).

See [Default System Prompt (Canonical)](../experience/system-prompt.md) for the base prompt text.
