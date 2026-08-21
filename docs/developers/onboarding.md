# Developer setup

Use this path to create an agent-readable, reproducible Unison development
environment. Installation and appliance evaluation follow the separate
[installation status and paths](install-unisonos.md).

## 1. Read the workspace contract

Open [`unison-workspace`](https://github.com/project-unisonOS/unison-workspace)
and read, in order:

1. `AGENTS.md`;
2. `docs/agent-contributor-model.md`;
3. `docs/repo-map.md`;
4. the target component README; and
5. the applicable journey, contract, and task packet.

The workspace is the integration manifest. Components own their runtime code,
normative contracts, focused tests, and implementation evidence.

## 2. Validate the host

Use an Ubuntu development environment that meets the
[development prerequisites](prerequisites.md). From the workspace root, run:

```bash
./scripts/bootstrap-dev.sh
python3 ./scripts/validate-dev-environment.py
./scripts/doctor.sh
```

If the target packet names another entry point, follow that packet. Record the
host, Python version, workspace revision, submodule revisions, and results in
the durable handoff.

## 3. Select the smallest environment

Focused component work begins in the owning repository with its README and
narrow test. Cross-component work uses the workspace-pinned revisions.

Start the development stack when the task requires live integration:

```bash
./scripts/up.sh
./scripts/smoke.sh
```

Use the internal-network security profile when host ports are unnecessary:

```bash
./scripts/up-security.sh
./scripts/smoke-security.sh
```

## 4. Make and validate the change

Use a clean branch or worktree. Preserve unrelated contributor work. Run the
narrowest relevant component test first, then the applicable workspace boundary
test. Keep unit, simulation, hosted CI, physical hardware, and participatory
evidence labels distinct.

## 5. Leave a durable handoff

Record objective, non-goals, starting revisions, environment, changed
contracts, exact checks and results, evidence class, commits, pull requests,
unresolved risks, recovery, and next action. Update the component first, then
update the workspace gitlink after the component revision is pushed and
validated.

Find work in the [contributor queue](contributor-work-queue.md), review the
[contribution workflow](contributing.md), or continue to the
[development stack](devstack.md).
