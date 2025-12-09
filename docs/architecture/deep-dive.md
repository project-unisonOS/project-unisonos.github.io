# Architecture Deep Dive

This deep dive explains how the current UnisonOS codebase is wired end-to-end. It is intentionally “in the weeds” and mirrors the implementation across the workspace (orchestrator, intent-graph, context, context-graph, storage, renderer/shell, IO, comms, wakeword, and devstack).

---

## Core Request Flow (Intent → Response)

1. A client (renderer, shell, VDI, or IO service) emits an event envelope describing an intent.
2. **Intent Graph** receives `caps.report` and intents, normalizes them, and forwards to the orchestrator.
3. **Orchestrator**:
   - Auth/authz: checks consent/policy as configured.
   - State: reads profiles and dashboard from **context**, pulls graph/traces from **context-graph** when present.
   - Inference: calls **inference** gateway (local-first; cloud optional/opt-in).
   - Storage: writes durable KV/files to **storage** when needed.
4. Responses go back to the client for UI (renderer) or audio (IO speech).

## Intent → Event & Action Envelopes → Tools & Actuators

- **Intent Envelopes** wrap incoming requests with person, device, time, and context snapshots so the orchestrator has the full picture.
- **Event Envelopes** capture important state transitions (for example, “file stored”, “tool completed”, “policy check failed”) that the orchestrator emits and consumes during planning.
- **Action Envelopes** describe what to do next and are routed to agents, tools, or actuators such as VDI. They form the consistent pattern: Intent → Action Envelope → Tool/Actuator → Result.
- **Actuators as Specialized Tools** use the same envelope pattern for higher-impact actions. VDI is one such actuator (see [Actuation / VDI & VPN](components/actuation-vdi-vpn.md)).
- Results flow back as envelopes and are persisted via [Storage & Persistence](components/storage-and-persistence.md) when durable artifacts or audit trails are required.

Data boundaries:
- Profiles and dashboard state live in `unison-context` (encrypted SQLite, Fernet optional).
- Graph/traces live in `unison-context-graph` (WAL/TTL/PII scrubbing present).
- KV/files live in `unison-storage`.
- No cloud sync by default; any extra sinks require explicit env/policy.

---

## Companion Session (Voice/Multimodal)

Current loop (as implemented):
1. **Wakeword/VAD** (renderer) starts audio capture locally (Porcupine optional, always-on flag off by default).
2. Audio → **unison-io-speech** STT → transcript.
3. Transcript + person/session → **orchestrator** `/voice/ingest` → `companion.turn`.
4. **CompanionSessionManager** runs tools, calls inference with tool calling enabled, and persists short-term state to context.
5. Results stream to **renderer** (cards + media) and to **speech** for TTS (best effort).

Tracing/logging:
- Baton/trace propagation is preserved where available.
- Orchestrator logs key events to context-graph (origin_intent, tags, created_at) for recall.

---

## Operating Surface (Dashboard + Shared Space)

Renderer/shell experience:
1. Renderer `/dashboard` proxies to **context** `/dashboard/{person_id}`.
2. Context returns cards + preferences (stored locally, encrypted-at-rest).
3. `dashboard.refresh` skill (orchestrator) merges:
   - Profile prefs (text scale, contrast).
   - Cards from context + new cards (briefings, workflows, comms).
   - Comm cards from **unison-comms** for both `email` and `unison` channels.
4. Renderer displays:
   - Priority Cards panel.
   - Unison Shared Space panel (tags visible, auto-refresh every 15s).
   - SSE listener for unison stream (live updates when new unison messages arrive).

Context-graph:
- Orchestrator logs dashboard and comms events into context-graph (tags, created_at, origin_intent) to support recall (“show me the workflow we were designing yesterday”).

---

## Communications (Edge-First)

Service: `unison-comms` (FastAPI)
- Normalized message shape: `channel`, `participants`, `subject`, `body`, `thread_id`, `message_id`, `context_tags`, `metadata`.
- Adapters:
  - **Email**: stub + optional Gmail (IMAP/SMTP with app password). Gmail caches thread recipients for replies.
  - **Unison**: local, encrypted store required (`COMMS_UNISON_KEY`, `COMMS_UNISON_STORE_PATH`).
- Endpoints:
  - `/comms/check|summarize|reply|compose`
  - Meeting stubs: `/comms/join_meeting`, `/comms/prepare_meeting`, `/comms/debrief_meeting`
  - SSE: `/stream/unison` for live unison-channel events.

Orchestrator comms skills:
- `comms.check|summarize|reply|compose|join_meeting|prepare_meeting|debrief_meeting`
- Companion tools registered so LLM can invoke comms intents.
- Logs provider tags (e.g., `unison`, `gmail`) into context-graph for recall.

Renderer:
- Shows comms tags inline on cards; Unison Shared Space auto-refreshes + SSE for unison events.

Privacy:
- Email secrets stay in env on-device; unison channel data is locally encrypted. No remote inbox sync.

---

## Wakeword & Always-On Companion

Implemented in renderer + orchestrator:
- Wakeword endpoint `/wakeword` (renderer) reads profile `voice.wakeword` from context; defaults to `UNISON_WAKEWORD_DEFAULT`.
- Porcupine optional (WASM); always-on mic disabled by default; edge-only by default.
- Orchestrator exposes `wakeword.update` to set `voice.wakeword` in profile.

---

## Meetings (Initial Stubs)

Implemented paths:
- `comms.join_meeting`, `comms.prepare_meeting`, `comms.debrief_meeting` in `unison-comms` (cards returned).
- Orchestrator skills forward these and log to context-graph.
- Renderer displays meeting cards alongside other comms cards; shared space shows unison-tagged items.

Next (future):
- Real connectors (Teams/Zoom) behind these intents; current code is local-only stubs.

---

## Storage, Profiles, Security

- Profiles: `unison-context` encrypted SQLite (`profile_enc_key` optional); defaults to `unison_id = person_id` for unison addressing.
- Dashboard: `unison-context` encrypted SQLite with Fernet optional.
- Storage: `unison-storage` for durable KV/files; context and orchestrator use it for non-profile data.
- Security docs: each repo ships SECURITY.md pointing to public security reference; tokens/keys are env-only.
- Devstack runs all services locally (compose) with auth disabled for tests; production should supply real secrets and enable auth/consent.

---

## Devstack & Deployment

- `unison-devstack/docker-compose.yml` runs: orchestrator, context, storage, policy, auth, consent, intent-graph, context-graph, inference, renderer, IO (speech/vision/core), comms, and optional payments.
- Prebuilt `unison-common` wheel is shared across Python services.
- CI: per-repo tests run with `PYTEST_DISABLE_PLUGIN_AUTOLOAD` and `OTEL_SDK_DISABLED`; context CI uses a unique SQLite path to avoid locks.

---

## Traceability and Recall

- Context-graph receives:
  - Dashboard refresh traces (cards, tags, created_at).
  - Comms events (check/summarize/reply/compose/meeting), with provider tags.
- Renderer streams experiences via SSE and refreshes dashboard on a timer to keep UI aligned with context.
- No data leaves the device unless explicitly configured; all cloud usage is opt-in and policy-controlled.
