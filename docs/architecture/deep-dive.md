# Architecture deep dive

<section class="story-hero" aria-labelledby="deep-dive-introduction">
  <p class="story-kicker">Contracts connect independently owned services</p>
  <h2 id="deep-dive-introduction">The runtime carries intent, authority, evidence, and recovery</h2>
  <p class="story-lead">This page maps the current development and platform topology without turning a deployment detail into product authority.</p>
</section>

## End-to-end flow

1. A modality adapter contributes an observation and evidence of intent.
2. Intent services normalize the proposed objective and route it to the
   orchestrator.
3. Auth, consent, policy, context, and storage services resolve the person,
   purpose, applicable information, and authority.
4. The orchestrator plans deterministic steps and bounded inference, then asks
   the capability service to resolve eligible operations.
5. Capabilities and inference return structured results, provenance,
   uncertainty, and side-effect state.
6. Policy validates consequential disclosures and recipients. Actuation
   validates and executes authorized action envelopes.
7. The semantic outcome carries meaning, choices, confirmation, cancellation,
   and recovery to each native modality service.
8. Content-minimized receipts preserve important decisions and results.

## Shared contracts

Unison services exchange versioned structures rather than transferring their
responsibilities:

- intent and observation contracts carry proposed human objectives and input
  evidence;
- capability declarations describe operations, permissions, provenance,
  runtime needs, and failure behavior;
- grants bind purpose, data, credentials, authority, and duration;
- action envelopes describe validated physical or digital operations;
- semantic outcomes carry facts, provenance, uncertainty, choices, actions,
  confirmation, cancellation, privacy state, errors, and recovery; and
- receipts record important decisions, side effects, and available recovery
  with minimized content.

`unison-common` owns shared Python helpers and runtime schemas for these
interactions. Component repositories own their service contracts and focused
tests. The workspace pins compatible revisions and runs integration gates.

## Current runtime profiles

The development stack connects services through Docker Compose and commonly
uses Postgres, Redis, and Neo4j. It favors discoverability and focused local
integration. The platform topology adds durable event streaming through NATS
and JetStream and supports release-oriented observability and lifecycle work.

Named infrastructure profiles describe environment purpose, machines,
services, networks, secrets references, storage, and evidence expectations.
Profiles can package services differently while retaining contract behavior and
responsibility ownership.

## Context, storage, and derived views

Context services govern identity-linked profile and session information,
relationships, source provenance, memory policy, and purpose-specific access.
Storage services retain durable records, artifacts, encrypted material, audit
events, and object metadata. Current non-development profiles use Postgres for
metadata and local volumes for object payloads.

Relational records and source artifacts can remain authoritative while vector
indexes, summaries, caches, and graph edges support retrieval. Derived views
carry source revisions and can be invalidated and rebuilt when policy, source
content, model version, or taxonomy changes.

## Capability lifecycle

A declared capability can represent a local tool, connector, MCP server, skill,
workflow, or agent peer. Its manifest describes an exact version, origin,
integrity, runtime, permissions, network destinations, secret references,
enablement, and evidence.

A compliant route follows this sequence:

1. search for candidates that fit the intent and constraints;
2. resolve eligibility against installation, policy, and environment state;
3. install or enable the selected version when authorized;
4. issue a scoped grant for the operation;
5. run the capability and collect its structured result; and
6. preserve side effects, errors, and recovery in the semantic outcome and
   receipt.

Credentials remain in an approved secrets service and enter a connector at the
final authorized transport step. Network egress follows capability allowlists
and platform policy.

## Inference and model lifecycle

Inference is a dedicated service. Each model version has a signed manifest that
describes origin, interface, license, supported tasks, artifact integrity,
hardware compatibility, and measured behavior. Eligibility evaluates task,
structured output, privacy, disclosure, risk, offline state, latency, quality,
cost, support status, and available hardware before ranking.

Model output remains an untrusted proposal. Deterministic services reconcile
source revisions, exact facts, recipients, actions, and required meaning.
Candidate model versions run golden semantic journeys in shadow before bounded
canaries. Content-free health signals can trigger rollback to a retained
version.

Model-pack tooling supports development and evaluation. Supported appliance
claims require complete physical-device evidence for latency, energy, thermal
behavior, offline operation, updates, rollback, semantic quality, and safe
fallback.

## Prompt and assistant continuity

The model remains replaceable. The prompt engine compiles base behavior,
person-approved identity, priorities, and session instructions into the active
model request. Content hashes and trace events support inspection without
logging the prompt content.

See [assistant prompt and priorities](../experience/system-prompt.md) for the
layering model and maintained implementation source.

## Actuation and external systems

Actuation accepts authorized action envelopes and reports exact side effects.
Browser and desktop automation can use an isolated VDI environment when an
external system lacks an appropriate API. Network policy can route that
environment through a selected VPN or privacy path and stop egress when the
route is unavailable.

The orchestrator proposes work. Policy validates authority and confirmation.
The actuation service owns deterministic execution and recovery. The renderer
communicates state and returns the person's proposed response through the
semantic contract.

## Failure and recovery

Service contracts expose timeout, partial completion, cancellation,
idempotency, compensation, and retry state. A provider or model failure can
yield a local alternative, compatible substitute, durable partial outcome, or
clear recovery step without discarding the person's original intent.

Backup and restore protect identity, policy, context, and operational
continuity together. Release profiles retain signed update metadata, rollout
state, health evidence, and a known rollback target.

<aside class="evidence-band" aria-label="Architecture deep-dive evidence">
  <p><strong>Software evidence:</strong> Unit, integration, simulation, and hosted CI cover shared contracts, grants, routing, storage, semantic outcomes, synthetic actuation, and rollback foundations.</p>
  <p><strong>Qualification ahead:</strong> Physical hardware, supported providers, network privacy, representative modalities, resilience, and person-centered evaluation require evidence in their owning programs.</p>
</aside>

<nav class="next-path" aria-label="Continue from the architecture deep dive">
  <a href="../../reference/apis/"><strong>Open the service directory</strong><span>Find repositories, contract owners, and stability information.</span></a>
  <a href="../../developers/workspace-and-repos/"><strong>Enter the development workspace</strong><span>See how component revisions and integration checks fit together.</span></a>
</nav>
