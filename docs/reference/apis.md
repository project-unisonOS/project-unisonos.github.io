# APIs

Each core Unison service exposes an HTTP API, typically documented by its README and OpenAPI UI.

## What this page covers

- How to think about the APIs exposed by core UnisonOS services.
- The main surfaces that back the Operating Surface and core experiences.
- Pointers to more detailed per service API references.

## Who this page is for

- Developers calling UnisonOS services directly or building integrations.
- Operators reviewing which external surfaces are exposed by the platform.

## Before you read this

- Review [Architecture Overview](../architecture/overview.md) for the main components and flows.
- See the [Storage API](storage-api.md) and [Actuation and VDI API](actuation-vdi-api.md) pages for focused reference material.

## Service Index

- Control plane services (orchestrator, intent-graph, policy, consent, auth, inference).
- Context and storage services.
- Experience and IO services (renderer, shell, agent-vdi, io-core, io-speech, io-vision).

## Dashboard and Operating Surface APIs

The dynamic dashboard and Operating Surface are backed by a small set of cross service APIs:

- **Context service (`unison-context`)**
  - `GET /dashboard/{person_id}` fetches per person dashboard state, including cards, preferences, and metadata.
  - `POST /dashboard/{person_id}` stores per person dashboard state. Data is kept on device in encrypted SQLite when a profile key is configured.
- **Orchestrator (`unison-orchestrator`)**
  - `dashboard.refresh` reads the person profile and dashboard, composes priority cards, persists them via the context service, and emits experiences for the renderer.
  - `workflow.design` and `workflow.recall` integrate workflow documents with dashboard cards and, when enabled, context graph traces for recall.
- **Experience renderer (`unison-experience-renderer`)**
  - `GET /dashboard?person_id=…` proxies to the context service and renders the “Priority Cards” view as the user home surface.
  - `POST /experiences` accepts rendered experiences, including cards, and can persist them back into the dashboard for later resurfacing.

All of these APIs are designed to work in an edge-only configuration. Any optional cloud or remote integrations must be explicitly configured and governed by policy.

## API Documentation

- Look for API sections in each service’s README.
- Where available, use the service’s built-in API documentation endpoints when running locally or in devstack.

As the APIs stabilize and converge on consistent conventions, this page can be expanded into a more detailed, cross-service reference.

## Quick Links

- **Storage API** – Memory, vault, objects, and audit surfaces for unified persistence.
- **Actuation / VDI API** – VDI task submission and result retrieval, following the action envelope pattern.
