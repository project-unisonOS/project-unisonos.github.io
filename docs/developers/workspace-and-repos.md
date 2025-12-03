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
