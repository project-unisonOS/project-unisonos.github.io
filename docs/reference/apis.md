# APIs

Each core Unison service exposes an HTTP API, typically documented by its README and OpenAPI UI.

## Service Index

- Control plane services (orchestrator, intent-graph, policy, consent, auth, inference).
- Context and storage services.
- Experience and IO services (renderer, agent-vdi, io-core, io-speech, io-vision).

## Experience Renderer APIs (High Level)

The experience renderer is a first-class service in the stack. In most deployments you interact with it via the browser UI, and it exchanges intents/results with the control plane.

See Architecture pages for system roles:

- [Architecture Overview](../architecture/overview.md)
- [Architecture Deep Dive](../architecture/deep-dive.md)
- [Inference and Model Execution](../architecture/deep-dive.md#inference-and-model-execution)

## API Documentation

- Look for API sections in each service’s README.
- Where available, use the service’s built-in API documentation endpoints when running locally or in devstack.

As the APIs stabilize and converge on consistent conventions, this page can be expanded into a more detailed, cross-service reference.

## Storage API (Reference)

Storage exposes an HTTP surface for unified persistence. Most services access storage through these APIs instead of direct database calls.

Common endpoints:

- Memory:
  - `POST /memory` – Write or update memory entries with optional TTL.
  - `GET /memory/{key}` – Retrieve a memory entry.
- Vault:
  - `POST /vault` – Store or update an encrypted secret (credentials, tokens, API keys).
  - `GET /vault/{key}` – Retrieve a secret when authorized.
- Objects:
  - `POST /objects` – Upload files or binary artifacts; returns a storage ID and metadata.
  - `GET /objects/{id}` – Download an object by ID with appropriate authorization.
- Audit:
  - `POST /audit` – Append structured audit events (actor, action, target, timestamps).
  - `GET /audit` – Query audit records where enabled.

For architectural context, see [Storage & Persistence](../architecture/deep-dive.md#storage-and-persistence).

## Actuation / VDI API (Reference)

The actuation surface exposes endpoints used by the orchestrator to execute high impact tasks. VDI is one actuator that follows the same envelope pattern as other tools.

Common endpoints:

- `POST /vdi/tasks` – Submit an Action Envelope describing browser/desktop steps. Returns a task ID.
- `GET /vdi/tasks/{id}` – Retrieve task status and result envelope, including any storage object IDs created during execution.

See [Actuation / VDI & VPN](../architecture/deep-dive.md#actuation-vdi-and-vpn) for the intent → action → result flow and the VPN boundary.
