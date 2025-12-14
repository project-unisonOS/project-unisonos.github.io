# Devstack Setup

The devstack provides a Docker-based local environment that brings up the full Unison stack and backing services.

Recommended entry point is `unison-workspace` (meta repo) because it pins compatible versions of all services and includes helper scripts for bring-up and smoke tests.

## Modes

Devstack supports two common local modes:

1) **Development mode (host ports published)** — easiest for day-to-day work. Services are reachable on `localhost`.
2) **Security overlay mode (no host ports published)** — closer to a “least exposure” deployment posture. Services are only reachable from inside Docker networks (use `docker compose exec …` or in-network smoke tests).

## Development Mode (published ports)

From a `unison-workspace` checkout:

```bash
./scripts/up.sh
./scripts/smoke.sh
```

Under the hood, this composes the canonical wiring file plus the ports overlay:

```bash
docker compose -p unison-devstack \
  -f unison-devstack/docker-compose.yml \
  -f unison-devstack/docker-compose.ports.yml \
  up -d --wait --wait-timeout 300
```

## Security Overlay Mode (no host ports)

Use this when you want to:
- Validate service-to-service behavior without relying on host networking.
- Reduce accidental exposure of databases/internal APIs on your machine.
- Mirror a more realistic “internal networks + explicit edge” deployment posture.

From a `unison-workspace` checkout:

```bash
./scripts/up-security.sh
./scripts/smoke-security.sh
./scripts/down-security.sh
```

Or manually:

```bash
docker compose -p unison-devstack \
  -f unison-devstack/docker-compose.yml \
  -f unison-devstack/docker-compose.security.yml \
  up -d --wait --wait-timeout 300
```

Note: do not include `docker-compose.ports.yml` in security overlay mode.

## WSL + Docker Desktop Note

If you use Docker Desktop with WSL2, avoid running a second Docker daemon inside your Ubuntu distro (it can “steal” devstack ports and cause hangs or “port already allocated” errors). Use `./scripts/doctor.sh` in `unison-workspace` to detect this quickly.

## VDI & VPN Setup and Usage

- **Enable services** – The compose stack includes a VPN client container and the VDI agent container; VDI shares the VPN network namespace so all egress flows through the VPN.
- **Environment** – Provide VPN configuration under `local/vpn/wg0.conf` (or the env/path your compose expects). Set any required tokens for VDI and storage in your `.env`.
- **Run** – Start devstack via `unison-workspace/scripts` and wait for health. Check `/healthz` and `/readyz` on `network-vpn` and `agent-vdi` to confirm both are healthy before issuing tasks (development mode publishes these to localhost).
- **Test a VDI task** – Call the actuation or VDI task endpoint (for example, a simple “open URL” action) and verify results appear in storage via the objects API. Use dev logs to confirm downloads are written and audit entries are recorded.
- **Debugging** – VPN and VDI logs are available through `docker compose logs network-vpn` and `docker compose logs agent-vdi`. Storage audit logs capture VDI actions for traceability.
