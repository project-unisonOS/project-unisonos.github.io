# Devstack Setup

The devstack provides a Docker-based local environment that brings up the full Unison stack and backing services.

## Configure Environment

1. Change into the devstack repo.
2. Copy the provided security template:
   - Copy `.env.security` to `.env`.
   - Adjust secrets and environment variables as needed for your local setup.

## Start the Stack

- Run Docker Compose with build enabled to:
  - Build images for core services and bring up:
    - Orchestrator, policy, consent, auth, inference.
    - Context, context-graph, storage.
    - Intent-graph, renderer, IO stubs, and any backing data services.

## Ports and Health Checks

- Core services are exposed on localhost ports for development.
- Use Docker Compose commands or service health endpoints to verify that services are healthy.

## Optional Tools Profile

- Devstack can optionally start additional tools such as local model providers and skill registration services by enabling the appropriate Compose profiles.

For detailed commands and exact port mappings, refer to the internal developer guide and the devstack README.

## VDI & VPN Setup and Usage

- **Enable services** – The compose stack includes a VPN client container and the VDI agent container; VDI shares the VPN network namespace so all egress flows through the VPN.
- **Environment** – Provide VPN configuration under `local/vpn/wg0.conf` (or the env/path your compose expects). Set any required tokens for VDI and storage in your `.env`.
- **Run** – Start devstack normally (`docker compose up -d`). Check `/healthz` and `/readyz` on `network-vpn` and `agent-vdi` to confirm both are healthy before issuing tasks.
- **Test a VDI task** – Call the actuation or VDI task endpoint (for example, a simple “open URL” action) and verify results appear in storage via the objects API. Use dev logs to confirm downloads are written and audit entries are recorded.
- **Debugging** – VPN and VDI logs are available through `docker compose logs network-vpn` and `docker compose logs agent-vdi`. Storage audit logs capture VDI actions for traceability.
