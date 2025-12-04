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

- **unison-workspace** — meta repo with submodules and helper scripts  
  - Repo: https://github.com/project-unisonOS/unison-workspace  
  - README: https://github.com/project-unisonOS/unison-workspace/blob/main/README.md
- **unison-devstack** — Docker Compose for local edge-first stack  
  - Repo: https://github.com/project-unisonOS/unison-devstack  
  - README: https://github.com/project-unisonOS/unison-devstack/blob/main/README.md
- **unison-orchestrator** — central intent orchestrator + companion manager  
  - Repo: https://github.com/project-unisonOS/unison-orchestrator  
  - README: https://github.com/project-unisonOS/unison-orchestrator/blob/main/README.md
- **unison-context** — encrypted profiles + dashboard state  
  - Repo: https://github.com/project-unisonOS/unison-context  
  - README: https://github.com/project-unisonOS/unison-context/blob/main/README.md
- **unison-context-graph** — context traces/recall graph  
  - Repo: https://github.com/project-unisonOS/unison-context-graph  
  - README: https://github.com/project-unisonOS/unison-context-graph/blob/main/README.md
- **unison-intent-graph** — intent routing/cache  
  - Repo: https://github.com/project-unisonOS/unison-intent-graph  
  - README: https://github.com/project-unisonOS/unison-intent-graph/blob/main/README.md
- **unison-experience-renderer** — Operating Surface UI (dashboard, shared space)  
  - Repo: https://github.com/project-unisonOS/unison-experience-renderer  
  - README: https://github.com/project-unisonOS/unison-experience-renderer/blob/main/README.md
- **unison-shell** — lightweight Electron shell UI  
  - Repo: https://github.com/project-unisonOS/unison-shell  
  - README: https://github.com/project-unisonOS/unison-shell/blob/main/README.md
- **unison-io-core** — generic IO ingress/egress  
  - Repo: https://github.com/project-unisonOS/unison-io-core  
  - README: https://github.com/project-unisonOS/unison-io-core/blob/main/README.md
- **unison-io-speech** — speech IO (STT/TTS)  
  - Repo: https://github.com/project-unisonOS/unison-io-speech  
  - README: https://github.com/project-unisonOS/unison-io-speech/blob/main/README.md
- **unison-io-vision** — vision capture/describe  
  - Repo: https://github.com/project-unisonOS/unison-io-vision  
  - README: https://github.com/project-unisonOS/unison-io-vision/blob/main/README.md
- **unison-auth** — auth service  
  - Repo: https://github.com/project-unisonOS/unison-auth  
  - README: https://github.com/project-unisonOS/unison-auth/blob/main/README.md
- **unison-consent** — consent service  
  - Repo: https://github.com/project-unisonOS/unison-consent  
  - README: https://github.com/project-unisonOS/unison-consent/blob/main/README.md
- **unison-policy** — policy enforcement service  
  - Repo: https://github.com/project-unisonOS/unison-policy  
  - README: https://github.com/project-unisonOS/unison-policy/blob/main/README.md
- **unison-storage** — durable KV/files  
  - Repo: https://github.com/project-unisonOS/unison-storage  
  - README: https://github.com/project-unisonOS/unison-storage/blob/main/README.md
- **unison-inference** — inference gateway (local-first)  
  - Repo: https://github.com/project-unisonOS/unison-inference  
  - README: https://github.com/project-unisonOS/unison-inference/blob/main/README.md
- **unison-common** — shared Python library  
  - Repo: https://github.com/project-unisonOS/unison-common  
  - README: https://github.com/project-unisonOS/unison-common/blob/main/README.md
- **unison-payments** — optional payments service  
  - Repo: https://github.com/project-unisonOS/unison-payments  
  - README: https://github.com/project-unisonOS/unison-payments/blob/main/README.md
- **unison-agent-vdi** — VDI agent / renderer proxy  
  - Repo: https://github.com/project-unisonOS/unison-agent-vdi  
  - README: https://github.com/project-unisonOS/unison-agent-vdi/blob/main/README.md
- **unison-io-core** — IO core (already listed; keep for completeness)  
  - Repo: https://github.com/project-unisonOS/unison-io-core  
  - README: https://github.com/project-unisonOS/unison-io-core/blob/main/README.md
- **unison-os** — base OS image definitions  
  - Repo: https://github.com/project-unisonOS/unison-os  
  - README: https://github.com/project-unisonOS/unison-os/blob/main/README.md
- **unison-platform** — deployment/config/meta platform assets  
  - Repo: https://github.com/project-unisonOS/unison-platform  
  - README: https://github.com/project-unisonOS/unison-platform/blob/main/README.md
- **unison-comms** — communications service (email/unison channels)  
  - Repo: https://github.com/project-unisonOS/unison-comms  
  - README: https://github.com/project-unisonOS/unison-comms/blob/main/README.md
- **project-unisonos.github.io** — public docs site (this site)  
  - Repo: https://github.com/project-unisonOS/project-unisonos.github.io  
  - README: https://github.com/project-unisonOS/project-unisonos.github.io/blob/main/README.md

(If a repo is missing from this list, add it here and ensure its README links to the public docs.)
