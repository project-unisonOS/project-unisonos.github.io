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

Storage exposes an HTTP surface for unified persistence. Most services use these APIs, which keeps database access inside the storage boundary.

Common endpoints:

- Memory:
  - `POST /memory`: Write or update session memory entries with optional TTL.
  - `GET /memory/{session_id}`: Retrieve a session memory entry.
- Vault:
  - `POST /vault`: Store or update a secret or token blob.
  - `GET /vault/{key_id}`: Retrieve a secret when authorized.
- Objects:
  - `POST /objects`: Upload files or binary artifacts; returns a storage ID and metadata.
  - `GET /objects/{obj_id}`: Download an object by ID with appropriate authorization.
- Audit:
  - `POST /audit`: Append structured audit events (actor, action, target, timestamps).

For architectural context, see [Storage & Persistence](../architecture/deep-dive.md#storage-and-persistence).

## Actuation / VDI API (Reference)

The actuation surface exposes endpoints used by the orchestrator to execute high impact tasks. VDI is one actuator that follows the same envelope pattern as other tools.

Common endpoints:

- `POST /actuate`: Submit an Action Envelope for deterministic execution.
- `POST /vdi/tasks/browse`: Ask the actuation service to run a browser-navigation task through the VDI agent.
- `POST /vdi/tasks/form-submit`: Submit a form task through the VDI path.
- `POST /vdi/tasks/download`: Run a download task through the VDI path and persist resulting artifacts.

See [Actuation / VDI & VPN](../architecture/deep-dive.md#actuation-vdi-and-vpn) for the intent → action → result flow and the VPN boundary.
