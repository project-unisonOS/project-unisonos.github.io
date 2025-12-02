# Architecture Deep Dive

This deep dive expands on the high-level overview and describes how requests flow through the system and where data lives.

## Request Flow

1. A client (renderer, shell, VDI, or IO stub) emits an event envelope that describes an intent.
2. The intent graph normalizes and expands the intent and forwards it to the orchestrator.
3. The orchestrator:
   - Authenticates the request and checks consent and policy.
   - Retrieves fused state from the context graph and profile or key–value data from the context store and storage.
   - Calls the inference gateway for model requests when needed.
   - Writes updated state back through context and storage as needed.
4. A response flows back to the originating client to render UI or produce speech and other outputs.

## Companion Session Flow (Voice)

The Natural Multimodal Companion builds on this flow to support voice-first interactions:

1. Speech input arrives at the speech IO service, which produces a transcript.
2. The transcript, person identifier, and session identifier are sent to the orchestrator’s voice ingest endpoint.
3. The orchestrator wraps this as a `companion.turn` request, consults the person’s profile and context, and calls the inference gateway with tool support enabled.
4. The companion manager executes any required tools, stores the updated turn in the context service, and sends responses to the renderer and speech IO for playback.

## Data and Secrets

- Long-term and sensitive data live in storage; transient session or graph data is managed by context and context-graph.
- Secrets such as JWT keys, encryption keys, and provider tokens are provided via environment variables or configuration files and are surfaced into containers by devstack or production compose.

## Edge-First Deployment

Devstack and production compose files are designed to run on a single edge device:

- All core services run locally (orchestrator, policy, auth, consent, context, context-graph, storage, inference, intent-graph, renderer, IO).
- Optional tools (such as local model providers) can be added via compose profiles.
- Observability tooling (for example, tracing and metrics backends) can be included alongside the stack.
