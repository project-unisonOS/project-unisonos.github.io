# APIs

Each core Unison service exposes an HTTP API, typically documented by its README and OpenAPI UI.

## Service Index

- Control plane services (orchestrator, intent-graph, policy, consent, auth, inference).
- Context and storage services.
- Experience and IO services (renderer, shell, agent-vdi, io-core, io-speech, io-vision).

## Dashboard and Operating Surface APIs

The dynamic dashboard / Operating Surface is backed by a small set of cross-service APIs:

- **Context service (`unison-context`)**
  - `GET /dashboard/{person_id}` — fetch per-person dashboard state (cards, preferences, metadata).
  - `POST /dashboard/{person_id}` — store per-person dashboard state; data is kept on-device in encrypted SQLite when a profile key is configured.
- **Orchestrator (`unison-orchestrator`)**
  - `dashboard.refresh` skill — reads the person’s profile and dashboard, composes priority cards, persists them via the context service, and emits experiences for the renderer.
  - `workflow.design` / `workflow.recall` skills — integrate workflow documents with dashboard cards and, when enabled, context-graph traces for recall.
- **Experience renderer (`unison-experience-renderer`)**
  - `GET /dashboard?person_id=…` — proxies to the context service and renders the “Priority Cards” view as the user’s home surface.
  - `POST /experiences` — accepts rendered experiences (including cards) and can persist them back into the dashboard for later resurfacing.

All of these APIs are designed to work in an edge-only configuration. Any optional cloud or remote integrations must be explicitly configured and governed by policy.

## API Documentation

- Look for API sections in each service’s README.
- Where available, use the service’s built-in API documentation endpoints when running locally or in devstack.

As the APIs stabilize and converge on consistent conventions, this page can be expanded into a more detailed, cross-service reference.

## Quick Links

- **Storage API** – Memory, vault, objects, and audit surfaces for unified persistence.
- **Actuation / VDI API** – VDI task submission and result retrieval, following the action envelope pattern.
