# Architecture overview

<section class="story-hero" aria-labelledby="architecture-introduction">
  <p class="story-kicker">Replaceable parts, durable personal authority</p>
  <h2 id="architecture-introduction">Unison organizes services around intent</h2>
  <p class="story-lead">The architecture separates identity, policy, context, orchestration, capabilities, inference, actuation, and experience so each can evolve without transferring another service's authority.</p>
</section>

## A governed path through the system

<ol class="system-flow">
  <li><strong>Observe intent</strong><span>A local or remote modality service contributes speech, text, touch, Braille, imagery, device events, or another qualified signal.</span></li>
  <li><strong>Resolve person and purpose</strong><span>Identity, assurance, consent, policy, and context services establish the authority and information available for the work.</span></li>
  <li><strong>Plan the route</strong><span>The orchestrator selects deterministic workflows and composes governed inference for novel portions of the request.</span></li>
  <li><strong>Use capabilities</strong><span>Tools, connectors, skills, and agents receive scoped grants and return structured results with provenance and side-effect state.</span></li>
  <li><strong>Validate consequence</strong><span>Responsible policy and actuation services evaluate recipients, disclosure, risk, confirmation, and recovery.</span></li>
  <li><strong>Compose the experience</strong><span>A semantic outcome becomes a native conversational, visual, Braille, tactile, or future-modality expression.</span></li>
</ol>

## Responsibilities stay with their owners

| Responsibility | Primary architectural role |
| --- | --- |
| Identity and assurance | Auth and channel identity services establish who is present and the strength of that claim. |
| Consent and policy | Trust services decide which purpose, context, disclosure, recipient, and action are authorized. |
| Context and memory | Context and storage services retain governed sources, relationships, derived views, receipts, and lifecycle policy. |
| Orchestration | Intent and orchestration services maintain the human objective, plan work, and reconcile capability and model results. |
| Capability execution | Capability services discover and run declared tools, skills, connectors, and agent peers through scoped grants. |
| Model execution | Inference services route eligible local or remote models and return untrusted, provenance-bearing proposals. |
| Physical or digital action | Actuation services execute validated action envelopes and report exact side effects and recovery state. |
| Native expression | Modality services and Unison Surface compose semantic outcomes and return proposed person responses. |

No model, renderer, adapter, tool, or external content becomes an authority for
identity, consent, policy, recipients, incident state, disclosure, or
actuation.

## Data remains governed through its lifecycle

Postgres provides durable service state in current profiles. Redis supports
low-latency coordination and caching. Graph services can use Neo4j or supported
persistence alternatives. Source artifacts and generated files pass through
the storage service. Platform profiles can use NATS and JetStream for durable
event streaming.

Authoritative records remain distinct from replaceable indexes, embeddings,
summaries, caches, and graph edges. Context-space policy determines retention,
sharing, disclosure, backup, export, deletion, and the derived views eligible
for rebuilding.

## Profiles support different development and deployment needs

The development stack uses Docker Compose to connect service repositories and
support focused integration work. Platform and infrastructure repositories
define appliance topology, release profiles, observability, updates, backup,
and recovery. A profile can combine services into fewer containers while
preserving their responsibilities and contracts.

Local operation is preferred when the available hardware and policy support the
intent. Authorized external models, providers, channels, research routes, and
encrypted backup can participate through explicit grants and disclosure
decisions.

<aside class="evidence-band" aria-label="Architecture overview evidence">
  <p><strong>Implemented:</strong> Component services, shared contracts, development composition, synthetic journeys, and hosted CI provide the current software foundation.</p>
  <p><strong>Being proven:</strong> Supported appliance profiles, model and hardware combinations, physical actuation, long-running resilience, and participatory experience require additional evidence.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring the architecture">
  <a href="../deep-dive/"><strong>Read the architecture deep dive</strong><span>Follow contracts, runtime profiles, capabilities, storage, actuation, and inference.</span></a>
  <a href="../../reference/apis/"><strong>Find service owners</strong><span>Open the API and service directory for repositories and stability information.</span></a>
</nav>
