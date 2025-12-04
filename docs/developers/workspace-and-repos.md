# Workspace and Repositories

Unison uses a multi-repo layout under the `project-unisonOS` organization, with a recommended workspace for local development.

## Workspace Layout

The workspace typically contains these repos side-by-side:

- Core control plane services (orchestrator, policy, consent, auth, inference, intent-graph, context-graph).
- Context and storage services.
- Experience and IO services (renderer, shell, agent-vdi, io-core, io-speech, io-vision).
- Devstack, shared docs, common library, base OS images, and optional services such as payments.

See the internal repository map in `unison-docs/dev/unison-repo-map.md` for a detailed table.

## Recommended: Meta-Repo Workflow

The meta-repo workflow provides a single entry point:

- Clone the workspace that brings the core repos in as submodules.
- Use workspace scripts to:
  - Initialize submodules.
  - Start the devstack.
  - Run end-to-end smoke tests.

In the current workspace (`unison-workspace`):

- `./scripts/bootstrap.sh` — initializes and updates all submodules.
- `./scripts/up.sh` — brings up the devstack via `unison-devstack/docker-compose.yml`.
- `./scripts/smoke.sh` — runs the devstack end-to-end smoke test (HTTP health checks and a basic voice/vision flow).

This keeps versions aligned and makes it easy to run the full stack locally.

## Alternative: Side-by-Side Clones

Alternatively, you can clone the individual repos side-by-side under a common parent directory:

- Clone the devstack repo and the core services you intend to work on.
- Keep a shared `constraints.txt` at the workspace root and point Python services to it.
- For each Python service, create a virtual environment, install dependencies, and copy or create `.env` files.

Use the approach that best fits your workflow; both are supported by the documentation and tools in the workspace.

## Repository Directory (links to repo + README)

Below is the current workspace directory with direct links to each repo and its README for deep dives.

- [unison-workspace](https://github.com/project-unisonOS/unison-workspace) — meta repo with submodules and helper scripts ([README](https://github.com/project-unisonOS/unison-workspace/blob/main/README.md))
- [unison-devstack](https://github.com/project-unisonOS/unison-devstack) — Docker Compose for local edge-first stack ([README](https://github.com/project-unisonOS/unison-devstack/blob/main/README.md))
- [unison-orchestrator](https://github.com/project-unisonOS/unison-orchestrator) — central intent orchestrator + companion manager ([README](https://github.com/project-unisonOS/unison-orchestrator/blob/main/README.md))
- [unison-context](https://github.com/project-unisonOS/unison-context) — encrypted profiles + dashboard state ([README](https://github.com/project-unisonOS/unison-context/blob/main/README.md))
- [unison-context-graph](https://github.com/project-unisonOS/unison-context-graph) — context traces/recall graph ([README](https://github.com/project-unisonOS/unison-context-graph/blob/main/README.md))
- [unison-intent-graph](https://github.com/project-unisonOS/unison-intent-graph) — intent routing/cache ([README](https://github.com/project-unisonOS/unison-intent-graph/blob/main/README.md))
- [unison-experience-renderer](https://github.com/project-unisonOS/unison-experience-renderer) — Operating Surface UI (dashboard, shared space) ([README](https://github.com/project-unisonOS/unison-experience-renderer/blob/main/README.md))
- [unison-shell](https://github.com/project-unisonOS/unison-shell) — lightweight Electron shell UI ([README](https://github.com/project-unisonOS/unison-shell/blob/main/README.md))
- [unison-io-core](https://github.com/project-unisonOS/unison-io-core) — generic IO ingress/egress ([README](https://github.com/project-unisonOS/unison-io-core/blob/main/README.md))
- [unison-io-speech](https://github.com/project-unisonOS/unison-io-speech) — speech IO (STT/TTS) ([README](https://github.com/project-unisonOS/unison-io-speech/blob/main/README.md))
- [unison-io-vision](https://github.com/project-unisonOS/unison-io-vision) — vision capture/describe ([README](https://github.com/project-unisonOS/unison-io-vision/blob/main/README.md))
- [unison-io-bci](https://github.com/project-unisonOS/unison-io-bci) — BCI ingest/decoder service (LSL/BLE/serial stubs, decoders, HID, raw snapshots, export) ([README](https://github.com/project-unisonOS/unison-io-bci/blob/main/README.md))
- [unison-auth](https://github.com/project-unisonOS/unison-auth) — auth service ([README](https://github.com/project-unisonOS/unison-auth/blob/main/README.md))
- [unison-consent](https://github.com/project-unisonOS/unison-consent) — consent service ([README](https://github.com/project-unisonOS/unison-consent/blob/main/README.md))
- [unison-policy](https://github.com/project-unisonOS/unison-policy) — policy enforcement service ([README](https://github.com/project-unisonOS/unison-policy/blob/main/README.md))
- [unison-storage](https://github.com/project-unisonOS/unison-storage) — durable KV/files ([README](https://github.com/project-unisonOS/unison-storage/blob/main/README.md))
- [unison-inference](https://github.com/project-unisonOS/unison-inference) — inference gateway (local-first) ([README](https://github.com/project-unisonOS/unison-inference/blob/main/README.md))
- [unison-common](https://github.com/project-unisonOS/unison-common) — shared Python library ([README](https://github.com/project-unisonOS/unison-common/blob/main/README.md))
- [unison-payments](https://github.com/project-unisonOS/unison-payments) — optional payments service ([README](https://github.com/project-unisonOS/unison-payments/blob/main/README.md))
- [unison-agent-vdi](https://github.com/project-unisonOS/unison-agent-vdi) — VDI agent / renderer proxy ([README](https://github.com/project-unisonOS/unison-agent-vdi/blob/main/README.md))
- [unison-os](https://github.com/project-unisonOS/unison-os) — base OS image definitions ([README](https://github.com/project-unisonOS/unison-os/blob/main/README.md))
- [unison-platform](https://github.com/project-unisonOS/unison-platform) — deployment/config/meta platform assets ([README](https://github.com/project-unisonOS/unison-platform/blob/main/README.md))
- [unison-comms](https://github.com/project-unisonOS/unison-comms) — communications service (email/unison channels) ([README](https://github.com/project-unisonOS/unison-comms/blob/main/README.md))
- [project-unisonos.github.io](https://github.com/project-unisonOS/project-unisonos.github.io) — public docs site ([README](https://github.com/project-unisonOS/project-unisonos.github.io/blob/main/README.md))

(If a repo is missing from this list, add it here and ensure its README links to the public docs.)
