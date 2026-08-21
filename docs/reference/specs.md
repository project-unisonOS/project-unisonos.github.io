# Specifications and schemas

Unison uses versioned contracts to connect independently owned services,
capabilities, modalities, releases, and hardware. The repository that owns a
behavior owns its normative contract and tests.

## Contract hierarchy

| Contract area | Owning repository | Consumer rule |
| --- | --- | --- |
| Shared runtime payloads and Python bindings | [`unison-common`](https://github.com/project-unisonOS/unison-common) | Import or validate the declared version; never copy the schema into a service |
| Component-specific API and state | Implementing component repository | Follow its README, schema, migration, and contract tests |
| Cross-service integration revisions | [`unison-workspace`](https://github.com/project-unisonOS/unison-workspace) | Use pinned component commits and validated task packets |
| Architecture and accepted authority decisions | Versioned workspace planning records | Treat accepted decisions as constraints on component contracts |
| Release, installer, and runtime inputs | [`unison-platform`](https://github.com/project-unisonOS/unison-platform) | Verify the signed manifest and immutable release inputs |
| Update metadata and trust roles | [`unison-updates`](https://github.com/project-unisonOS/unison-updates) | Verify role, threshold, version, expiration, target, and trust-root rules |
| Hardware interfaces, BOM, and qualification | [`unison-hardware`](https://github.com/project-unisonOS/unison-hardware) | Bind claims to an exact design revision and evidence record |
| Environment and lab profiles | [`unison-infrastructure`](https://github.com/project-unisonOS/unison-infrastructure) | Select a named versioned profile before validation |

`unison-docs` and `unison-spec` contain useful design and historical material.
When they differ from an owning component's versioned runtime contract or the
workspace's accepted authority records, the owner and pinned integration state
control implementation.

## Important shared families

Shared contract families include:

- principal, request, consent, policy, disclosure, grant, and confirmation;
- context space, provenance, source, memory, lifecycle, and taxonomy;
- capability package, action envelope, result, receipt, and recovery;
- Semantic Experience Model, expression plan, interaction profile, observation,
  modality adapter, and equivalence evidence;
- model manifest, task requirement, route decision, evaluation, canary, and
  rollback;
- release manifest, bundle index, system-change plan, installation receipt,
  update metadata, checkpoint, and health promotion; and
- hardware requirement, interface, component registry, BOM, and qualification
  record.

The exact filenames and supported versions live with their owners. Use the
[API and service directory](apis.md) to locate a component.

## Compatibility requirements

A versioned contract declares its identifier, schema version, required and
optional fields, validation behavior, and compatibility expectations. Changes
that alter meaning, authority, required fields, denial, disclosure, recovery,
or lifecycle behavior require an explicit version or migration decision.

Unknown authority-bearing fields fail closed. Models and external content
cannot create trusted contract fields merely by emitting matching JSON.

## Change sequence

1. identify the owning repository and affected authority boundary;
2. update the normative schema and bindings;
3. add positive, negative, migration, cancellation, and recovery tests as
   applicable;
4. update each consumer without duplicating the contract;
5. run focused component checks and the workspace schema and boundary gates;
6. publish component commits; and
7. update workspace pins and public compatibility or maturity guidance.

Record the evidence class and never describe a passing unit or hosted check as
physical or participatory proof.
