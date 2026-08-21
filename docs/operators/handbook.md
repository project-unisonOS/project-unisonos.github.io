# Operator handbook

UnisonOS does not yet have a supported production release. This handbook gives
evaluators and developers one operational path for the public preview and the
development stack while keeping that boundary visible.

## Choose the system you are operating

| System | Intended use | Operational authority |
| --- | --- | --- |
| Public preview | Artifact inspection and isolated evaluation | The signed release bundle, installation receipt, and release-specific guidance |
| Development stack | Component development and integration | The pinned `unison-workspace` revision and its helper scripts |
| Future supported appliance | Everyday personal and household operation | Pending physical qualification and an explicit promotion decision |

Keep irreplaceable personal information out of evaluator systems. Use synthetic
or disposable data until a release and its backup and recovery path are
promoted for supported use.

## Begin an operating session

Before changing the system:

1. identify the exact workspace commit or preview release;
2. confirm that the host matches the applicable environment profile;
3. review current limitations and open qualification gates;
4. confirm that required recovery material is available; and
5. record the intended change and the evidence you expect to collect.

For the development stack, start from a recursive `unison-workspace` checkout:

```bash
./scripts/doctor.sh
./scripts/up.sh
./scripts/smoke.sh
```

The security overlay keeps internal service ports off the host:

```bash
./scripts/up-security.sh
./scripts/smoke-security.sh
```

Use the [preview evaluation walkthrough](../developers/evaluate-preview.md) for
the signed public candidate. Its artifact verification and system-change review
come before installation.

## Read system health

Assess health in layers so a presentation failure does not become a claim that
personal data, policy, or storage is unhealthy.

| Layer | Review | Healthy evidence |
| --- | --- | --- |
| Host | capacity, time, Docker, filesystem, and network state | Required resources are available and the selected environment profile matches |
| Runtime | container state and focused health endpoints | Required services are running and health checks pass |
| Trust | authentication, policy, consent, and credential boundaries | Expected requests succeed and denied requests remain denied |
| Context | storage, provenance, indexes, and lifecycle | Synthetic records remain isolated, readable, and attributable |
| Experience | semantic outcome and active modality | Meaning, choices, cancellation, and recovery remain available |
| Lifecycle | release, receipt, checkpoint, and rollback state | Installed inputs reconcile and a known recovery route exists |

For the development stack, use the workspace smoke tests as the primary
boundary check. When deeper inspection is required, run Compose commands
against the same files and project name used to start that stack:

```bash
docker compose -p unison-devstack \
  -f unison-devstack/docker-compose.yml \
  -f unison-devstack/docker-compose.ports.yml \
  ps

docker compose -p unison-devstack \
  -f unison-devstack/docker-compose.yml \
  -f unison-devstack/docker-compose.ports.yml \
  logs --since 15m
```

Logs can contain identifiers, paths, request metadata, or provider details.
Keep them local, inspect them before sharing, and use the
[troubleshooting and incident guide](troubleshooting-incidents.md) to prepare a
content-minimized report.

## Stop or restart safely

Complete or cancel active evaluator work before stopping services. Preserve
receipts and checkpoints that explain the last accepted state.

For development mode:

```bash
./scripts/down.sh
```

For the security overlay:

```bash
./scripts/down-security.sh
```

Use the same workspace revision and environment profile after restart. Run the
matching smoke test and confirm that person, context, policy, and receipt
boundaries survived the interruption.

## Update or change configuration

Treat images, models, capabilities, configuration, and policies as versioned
inputs.

1. review the exact proposed versions and source revisions;
2. verify signatures, digests, compatibility, and available capacity;
3. preserve the current receipt and required checkpoint;
4. apply the change through its owning lifecycle boundary;
5. run focused health and workspace acceptance checks; and
6. retain or restore the last known good state based on the result.

The public preview demonstrates signed and checkpointed lifecycle behavior in
software. Reboot, power interruption, physical rollback, and supported update
channels remain qualification work. See the
[appliance release lifecycle](../developers/appliance-release-lifecycle.md).

## Back up, restore, export, or remove data

Backup and restore are person-scoped operations. Each adult and shared context
space has an independent key domain and recovery authority. A household
administrator, storage provider, model, renderer, or remote channel cannot
replace a person's recovery proof.

The implemented foundation supports encrypted backup, verification, retention,
export, deletion, and simulated replacement-device restore. Provider and
physical recovery support remain pending. Review
[backup and recovery](../backup-recovery.md) before evaluating these paths.

Software removal and personal-data destruction are separate decisions. Factory
reset requires an exact destruction confirmation. Preserve evidence of the
intended target and completed result without recording private content.

## Prepare a support bundle

A useful evaluator report contains:

- the system type, exact release or commit, and environment profile;
- the operation attempted and expected outcome;
- timestamps with time zone;
- health and smoke-test results;
- the smallest reproducible sequence;
- relevant component names and content-minimized error classes;
- whether retry, restart, rollback, or restore changed the result; and
- the evidence class: unit, simulation, hosted CI, physical hardware, or
  participatory.

Exclude tokens, cookies, private keys, recovery material, raw household media,
personal records, full prompts, and unreviewed logs. Report suspected security
issues privately through the
[security policy](https://github.com/project-unisonOS/unison-workspace/security/policy).

## End an operating session

Record the starting and ending revisions, system state, checks performed,
evidence collected, unresolved risks, and next safe action. A durable handoff
belongs in the owning repository when another person or coding agent must
continue the work.

Continue with [troubleshooting and incident response](troubleshooting-incidents.md)
or review the [public evidence index](../project/evidence-index.md).
