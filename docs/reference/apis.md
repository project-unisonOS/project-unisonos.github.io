# API and service contracts

Component repositories own Unison's service contracts. This public directory
identifies the owner and stability boundary; a component README, versioned
schema, generated OpenAPI document, and contract tests remain authoritative.

## Stability labels

| Label | Meaning |
| --- | --- |
| Versioned | Consumers select an explicit contract version with documented compatibility behavior |
| Internal evolving | Used by pinned workspace components and may change through coordinated workspace updates |
| Experimental | Available for research or early integration without a compatibility promise |
| Release lifecycle | Governed by signed release inputs, receipts, and promotion policy rather than an ordinary public API promise |

No service API is currently advertised as a supported public internet API. The
candidate runtime keeps internal services off host ports and binds its intended
host-facing surfaces to loopback.

## Service directory

| Area | Contract owner | Current stability | Primary responsibility |
| --- | --- | --- | --- |
| Request orchestration | [`unison-orchestrator`](https://github.com/project-unisonOS/unison-orchestrator) | Internal evolving with versioned shared payloads | Intent routing, governed resolution, and semantic outcome construction |
| Authentication | [`unison-auth`](https://github.com/project-unisonOS/unison-auth) | Internal evolving | Principal, session, and assurance binding |
| Consent | [`unison-consent`](https://github.com/project-unisonOS/unison-consent) | Internal evolving | Consent records and revocation |
| Policy | [`unison-policy`](https://github.com/project-unisonOS/unison-policy) | Internal evolving | Purpose, disclosure, confirmation, retention, and action decisions |
| Context and memory | [`unison-context`](https://github.com/project-unisonOS/unison-context) | Internal evolving with versioned records | Governed context, provenance, lifecycle, and resolution history |
| Context graph | [`unison-context-graph`](https://github.com/project-unisonOS/unison-context-graph) | Experimental | Graph views over governed context |
| Intent graph | [`unison-intent-graph`](https://github.com/project-unisonOS/unison-intent-graph) | Experimental | Early intent relationship service |
| Storage | [`unison-storage`](https://github.com/project-unisonOS/unison-storage) | Internal evolving | Authorized persistence, objects, audit records, and backup foundations |
| Inference | [`unison-inference`](https://github.com/project-unisonOS/unison-inference) | Internal evolving | Governed local and external model execution |
| Capability registry and host | [`unison-capabilities`](https://github.com/project-unisonOS/unison-capabilities) | Internal evolving with signed packages | Capability discovery, grants, and invocation boundaries |
| Actuation | [`unison-actuation`](https://github.com/project-unisonOS/unison-actuation) | Experimental, high-impact boundary | Deterministic execution of authorized action envelopes |
| Semantic experience surface | [`unison-experience-renderer`](https://github.com/project-unisonOS/unison-experience-renderer) | Internal evolving with versioned SEM contracts | Native visual expression and interaction relay |
| Modality integration | [`unison-io-core`](https://github.com/project-unisonOS/unison-io-core) | Versioned adapter boundary | Observation, expression, capability, and fallback integration |
| Communication channels | [`unison-comms`](https://github.com/project-unisonOS/unison-comms) | Internal evolving | Identity-bound and replay-protected remote transport |
| Appliance lifecycle | [`unison-platform`](https://github.com/project-unisonOS/unison-platform) and [`unison-updates`](https://github.com/project-unisonOS/unison-updates) | Release lifecycle | Install, update, health promotion, rollback, repair, and removal |

Models, renderers, adapters, tools, and channels contribute observations or
proposals. They do not own identity, consent, policy, incident state,
disclosure, or actuation authority.

## Find an exact operation

1. open the owning repository at the workspace-pinned revision;
2. read its `AGENTS.md` when present and its README;
3. locate the versioned request and response schema or generated OpenAPI file;
4. inspect the contract and negative-boundary tests; and
5. use the workspace Compose profile to determine whether the service is
   reachable from the selected environment.

An interactive API UI, when a component provides one, describes that running
revision. It does not create a compatibility or support promise.

## Change a contract

A contract change begins with the owner and includes versioning or migration,
affected consumers, denial and recovery behavior, focused tests, workspace
acceptance, and documentation impact. Publish component revisions before
updating workspace gitlinks.

Continue with [specifications and schemas](specs.md) or the
[contributor task finder](../developers/task-finder.md).
