# Journey implementation map

<section class="story-hero" aria-labelledby="implementation-introduction">
  <p class="story-kicker">From a person's intent to owned work</p>
  <h2 id="implementation-introduction">Each journey connects to repositories, evidence, and a next gate</h2>
  <p class="story-lead">This map helps contributors and coding agents find the software owners, shared contracts, current evidence, and qualification work behind the six public usage journeys.</p>
</section>

Repository ownership identifies the primary implementation home. Identity,
policy, context, semantic experience, and receipts remain shared platform
responsibilities.

## Shared platform foundation

| Responsibility | Primary repositories |
| --- | --- |
| Versioned contracts and synthetic fixtures | [`unison-common`](https://github.com/project-unisonOS/unison-common), [`unison-workspace`](https://github.com/project-unisonOS/unison-workspace) |
| Intent resolution and orchestration | [`unison-orchestrator`](https://github.com/project-unisonOS/unison-orchestrator), [`unison-intent-graph`](https://github.com/project-unisonOS/unison-intent-graph) |
| Person identity, consent, and policy | [`unison-auth`](https://github.com/project-unisonOS/unison-auth), [`unison-consent`](https://github.com/project-unisonOS/unison-consent), [`unison-policy`](https://github.com/project-unisonOS/unison-policy) |
| Governed context, memory, and durable data | [`unison-context`](https://github.com/project-unisonOS/unison-context), [`unison-context-graph`](https://github.com/project-unisonOS/unison-context-graph), [`unison-storage`](https://github.com/project-unisonOS/unison-storage) |
| Models, tools, and external capabilities | [`unison-inference`](https://github.com/project-unisonOS/unison-inference), [`unison-capabilities`](https://github.com/project-unisonOS/unison-capabilities), [`unison-agent-vdi`](https://github.com/project-unisonOS/unison-agent-vdi) |
| Native modality expression | [`unison-experience-renderer`](https://github.com/project-unisonOS/unison-experience-renderer), [`unison-io-core`](https://github.com/project-unisonOS/unison-io-core), modality-specific I/O repositories |
| Release and deployment evidence | [`unison-platform`](https://github.com/project-unisonOS/unison-platform), [`unison-devstack`](https://github.com/project-unisonOS/unison-devstack), [`unison-infrastructure`](https://github.com/project-unisonOS/unison-infrastructure) |

## Household operations

**Primary implementation:** governed source intake, household inventory,
maintenance rules, exact product matching, recall evidence, procedures, and
draft external actions span `unison-context`, `unison-storage`,
`unison-orchestrator`, `unison-policy`, `unison-capabilities`, and
`unison-io-vision`.

**Evidence now:** unit and simulation evidence covers private sources, product
identity, maintenance and recall rules, uncertainty, drafts, cancellation, and
synthetic household workflows.

**Next gate:** representative camera and equipment evidence, physical household
fixtures, supported provider connections, and an opted-in usefulness pilot.

## Health, finance, and insurance

**Primary implementation:** `unison-context`, `unison-storage`,
`unison-orchestrator`, `unison-policy`, and `unison-common` own separated
records, purpose-bound cross-domain views, provenance, deterministic values,
uncertainty, and cited preparation artifacts.

**Evidence now:** synthetic FHIR, insurance, financial, schedule, and
transportation fixtures exercise field-level purpose approval, source
freshness, exact calculations, corrections, expiry, deletion, and reduced-domain
results.

**Next gate:** certified live providers, qualified domain review, participatory
trust and accessibility evidence, and explicit support decisions. Clinical,
coverage, and financial authority stays with the person and applicable experts.

## Contextual research

**Primary implementation:** `unison-orchestrator`, `unison-capabilities`,
`unison-agent-vdi`, `unison-network-vpn`, `unison-context`, and
`unison-inference` own query planning, governed retrieval, provenance,
disclosure, source comparison, privacy routes, and resumable outcomes.

**Evidence now:** deterministic-first resolution, untrusted-content handling,
bounded inference, citations, cancellation, partial outcomes, and proposed skill
evolution have unit and hosted CI evidence.

**Next gate:** provider-specific privacy verification, residual-metadata
evaluation, real-person usefulness, and supported external research profiles.

## Personalized education

**Primary implementation:** the common orchestration, context, inference,
capability, and modality repositories provide the foundation. A dedicated
curriculum package and domain owner remain to be established.

**Evidence now:** semantic experience, governed memory, adaptive expression,
source retrieval, and multi-session context foundations can support synthetic
education fixtures.

**Next gate:** curriculum and assessment contracts, age-aware policy review,
qualified sources, representative modality testing, educator expertise, and
participatory learning evaluation.

## Shared understanding

**Primary implementation:** `unison-common`, `unison-auth`, `unison-context`,
`unison-policy`, `unison-orchestrator`, `unison-experience-renderer`, and the
speech, Braille, vision, sign, and future I/O repositories share responsibility
for one semantic state and independent native expressions.

**Evidence now:** synthetic shared-incident contracts, person isolation,
equivalent conversational, Braille, and visual structures, interruption,
confirmation, disagreement, and recovery are implemented and tested.

**Next gate:** representative devices, blind and sighted participants, Deaf and
hearing participants, modality-specific research, and revision-bound physical
fixture evidence.

## Offline MacGyver mode

**Primary implementation:** `unison-orchestrator`, `unison-context`,
`unison-storage`, `unison-inference`, `unison-capabilities`, `unison-policy`, and
the modality repositories provide the runtime controls. Signed offline
knowledge packaging and domain review need dedicated ownership.

**Evidence now:** offline-state contracts, deterministic hazard controls,
local-model fallback, source provenance, degraded operation, and the simulated
water-leak journey establish a software foundation.

**Next gate:** reviewed regional knowledge packs, expert safety review,
freshness and revocation procedures, supported local model profiles,
representative outage testing, and conservative physical demonstrations.

## Take a journey into development

For a journey contribution:

1. begin with the person's intent, desired outcome, and safety constraints;
2. identify the owning repository and shared contract versions;
3. define context spaces, grants, authority, confirmation, and recovery;
4. add deterministic fixtures before model-dependent behavior;
5. exercise privacy, failure, cancellation, and modality equivalence;
6. record the environment and evidence class; and
7. update the public journey maturity only after its owning evidence is merged.

The [workspace and repository guide](../developers/workspace-and-repos.md)
provides the complete repository directory. The
[current status](../current-status.md) remains the public source for maturity
claims.

<nav class="next-path" aria-label="Continue from the journey implementation map">
  <a href="../usage-journeys/"><strong>Return to the usage journeys</strong><span>Start with the person, situation, and intended outcome.</span></a>
  <a href="../../developers/task-finder/"><strong>Find contributor work</strong><span>Choose a task by repository, evidence need, or project interest.</span></a>
</nav>
