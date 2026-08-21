# Public evidence index

This index connects Unison's material public claims to their canonical evidence
owners. It is a navigation aid, not an independent promotion authority.

## Read an evidence claim

Unison uses five evidence classes:

| Evidence class | Establishes | Does not establish |
| --- | --- | --- |
| Unit | one bounded behavior under controlled inputs | cross-service or deployed behavior |
| Simulation | lifecycle, failure, or recovery behavior in a modeled environment | physical-device behavior |
| Hosted CI | repeatable checks on a named hosted environment and revision | household operation or hardware qualification |
| Physical hardware | results on a named device, configuration, and immutable candidate | representativeness for people or other devices |
| Participatory | outcomes observed with opted-in participants and stated methods | universal suitability or unsupported configurations |

A maturity statement also identifies what remains before promotion. Public
documentation cannot turn a planned design, passing test, or preview artifact
into a supported capability.

## Claim and source map

| Public claim area | Current evidence | Canonical source | Open gate |
| --- | --- | --- | --- |
| Person and context isolation | Unit, integration, and hosted CI cover independent identities, default-deny access, and cross-person isolation | [`unison-workspace` current-state record](https://github.com/project-unisonOS/unison-workspace/blob/main/docs/planning/UNISON_CURRENT_STATE.md) and owning trust/context repositories | Long-running and participatory privacy evaluation |
| Governed intent and capability execution | Unit and integration evidence cover policy-aware routing, exact grants, confirmations, cancellation, and receipts | [`unison-workspace` implementation plan](https://github.com/project-unisonOS/unison-workspace/blob/main/docs/planning/UNISON_IMPLEMENTATION_PLAN.md) and owning orchestrator, policy, consent, and capability repositories | Supported provider and real-workload qualification |
| Semantic and multimodal experience | Unit, integration, and synthetic equivalence evidence cover semantic outcomes and native modality contracts | [`semantic experience implementation plan`](https://github.com/project-unisonOS/unison-workspace/blob/main/docs/planning/SEMANTIC_EXPERIENCE_IMPLEMENTATION_PLAN.md) | Representative devices and participatory evaluation |
| Governed memory and taxonomy | Unit and integration evidence cover provenance, retention, person-scoped proposals, activation, migration, and rollback boundaries | [`governed context and memory slice`](https://github.com/project-unisonOS/unison-workspace/blob/main/docs/planning/GOVERNED_MEMORY_NEXT_SLICE.md) | Long-running use and person-directed taxonomy research |
| Model routing and lifecycle | Unit and synthetic qualification cover signed manifests, eligibility, routing receipts, shadow evaluation, canaries, health gates, and rollback | [`semantic model routing and lifecycle`](https://github.com/project-unisonOS/unison-workspace/blob/main/docs/planning/SEMANTIC_MODEL_ROUTING_AND_LIFECYCLE.md) | Qualified model and hardware combinations under realistic contention |
| Private source onboarding and life operations | Unit, integration, sandbox, and synthetic calibration evidence cover intake, provenance, correction, deletion, read-only connections, and household, health, and finance packages | [`current-state record`](https://github.com/project-unisonOS/unison-workspace/blob/main/docs/planning/UNISON_CURRENT_STATE.md) | Live-provider certification and an opted-in value pilot |
| Encrypted backup and replacement restore | Unit, simulation, and integration evidence cover client-side encryption, signed lineage, rollback detection, deletion, export, and restore | [Backup and recovery](../backup-recovery.md) and owning storage repositories | Provider decisions, physical replacement restore, and recovery-ceremony qualification |
| Signed release and update lifecycle | Hosted CI and simulation cover deterministic bundles, signatures, digests, public-download verification, staging, health promotion, rollback, and interruption recovery | [`v0.6.0-preview.1`](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1) and [appliance release lifecycle](../developers/appliance-release-lifecycle.md) | Physical install, reboot, power, update, rollback, removal, and promotion evidence |
| Adaptive maintenance | Unit, integration, simulation, and hosted CI cover inventory, recommendations, scoped grants, signed staging, health gates, receipts, and rollback | [`current-state record`](https://github.com/project-unisonOS/unison-workspace/blob/main/docs/planning/UNISON_CURRENT_STATE.md) | Physical qualification, opt-in pilot, and human promotion by action class |
| Hardware and appliance security | Requirements, interfaces, BOM schemas, and qualification plans are versioned | [`unison-hardware`](https://github.com/project-unisonOS/unison-hardware) and [hardware program](../hardware-program.md) | Named reference hardware and physical Secure Boot, TPM, thermal, acoustic, power, and recovery results |

## Current release evidence

The first public candidate is
[`v0.6.0-preview.1`](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1),
published July 24, 2026. Its release assets contain the candidate-specific
checksums, signatures, source correspondence, SPDX inventory, provenance,
support status, and vulnerability results.

The publication workflow verified the released files again from their public
location and exercised a software installation transaction. This establishes a
public software supply-chain path for that immutable candidate. It remains an
unsupported preview while physical and human promotion gates are open.

Use the [preview evaluation walkthrough](../developers/evaluate-preview.md) to
verify the artifact without upgrading its maturity.

## Open evidence programs

The main gaps are visible and independently gated:

- physical appliance qualification on at least two named x86-64 reference
  systems;
- realistic CPU, GPU, memory, storage, energy, thermal, acoustic, and
  concurrency measurements;
- physical install, update, rollback, backup, replacement restore, removal, and
  factory-reset exercises;
- representative evaluation of conversational, visual, Braille, and future
  modality experiences;
- a genuinely opted-in private life operations pilot; and
- explicit human promotion decisions for releases, providers, hardware
  profiles, model profiles, packages, and automatic maintenance action classes.

The [roadmap](roadmap.md) describes their order. The
[current status](../current-status.md) records the public maturity boundary.

## Contribute evidence

Every evidence contribution records:

- objective and explicit non-goals;
- repository and immutable starting revision;
- exact environment, release, hardware, model, provider, and modality inputs;
- method, expected result, and observed result;
- evidence class and limitations;
- privacy, security, accessibility, and physical-safety handling;
- artifacts or content-minimized receipts;
- unresolved risks; and
- owner and next promotion gate.

Begin with the [contributor task finder](../developers/task-finder.md). Update
the owning component evidence before changing this public index.
