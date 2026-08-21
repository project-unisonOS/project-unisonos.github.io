# Modality integration contract

This guide defines the stable responsibility boundary for teams building voice,
visual, Braille, sign, tactile, switch, AAC, haptic, BCI, or future modality
adapters. Component repositories own versioned wire schemas and implementation
details. This contract owns the behavior that every adapter preserves.

## The integration boundary

A modality adapter connects to Unison at two points:

- **Intent input** supplies modality evidence and a proposed interpretation of
  the person's objective.
- **Semantic outcome** supplies governed meaning that the adapter composes into a
  native expression.

The adapter translates. Identity, consent, policy, incident state, capability
authority, and physical actuation remain with their owning platform services.

## Intent input contract

An input contribution identifies or references:

- adapter, device, session, and channel instance;
- authenticated person or unresolved identity claim;
- assurance level and how it was established;
- modality and language or notation profile;
- capture, presence, and privacy state;
- timestamps, sequence, replay protection, and correlation;
- proposed intent with confidence and alternatives;
- relevant environmental and interaction context;
- source provenance and any retained artifact reference;
- requested semantic operation such as select, revise, cancel, or confirm; and
- schema version and capability manifest.

Raw media and biological signals follow explicit retention and disclosure
policy. Derived representations carry provenance back to their authorized source.
The proposed interpretation remains evidence of intent until platform identity,
policy, and confirmation establish authority.

## Semantic outcome contract

A renderer receives the parts of meaning needed for its authorized expression:

- outcome purpose, status, and summary;
- entities, relationships, sequence, and spatial meaning;
- exact values, units, dates, and jurisdiction;
- source provenance, freshness, confidence, and uncertainty;
- urgency and safety state;
- available actions and their consequences;
- confirmation scope, assurance requirement, and expiration;
- cancellation, retry, compensation, and recovery paths;
- privacy, sensing, recipient, and disclosure state;
- persistence and attention guidance;
- active participants and personal or shared context boundary; and
- schema version and compatibility requirements.

The semantic outcome defines required meaning. The adapter chooses native
organization, pacing, vocabulary, spatial arrangement, tactile structure,
prosody, signing, haptics, or other modality-specific expression.

## Capability declaration

Every adapter publishes a signed, versioned declaration covering:

- supported input and output modalities;
- languages, notation systems, grades, and device classes;
- native interaction and composition features;
- identity and assurance capabilities;
- latency and interruption behavior;
- local and remote processing paths;
- captured data, derived data, retention, and disclosure;
- confirmation, cancellation, and recovery support;
- offline behavior and degraded modes;
- accessibility and privacy indicators;
- platform and hardware compatibility;
- maintainer and incident contacts;
- software bill of materials; and
- evidence level for each claimed capability.

The orchestrator and experience composer use this declaration when selecting an
eligible route. Eligibility also requires applicable identity, policy,
compatibility, support, and evidence.

## Confirmation and recovery

A person must be able to understand the interpreted intent, material
consequences, recipients, disclosures, cost, reversibility, and recovery before
a sensitive action proceeds. The adapter provides native controls for confirm,
revise, cancel, pause, and request assistance when those operations are present
in the semantic outcome.

Loss of a device or modality preserves the pending semantic state. Another
authorized modality can continue the experience at the appropriate assurance
level. Expired confirmation returns to a reviewable state.

## Equivalent understanding

A conforming adapter preserves:

- the intent and outcome;
- facts, relationships, and exact values;
- attribution, provenance, and uncertainty;
- urgency and safety meaning;
- privacy, capture, and disclosure state;
- available choices and consequences;
- confirmation and authority boundaries; and
- cancellation and recovery.

Native experiences can differ in sequence, density, pacing, and representation.
Conformance evaluates whether the person can reach equivalent understanding and
exercise equivalent control.

## Test and evidence requirements

Each adapter provides:

1. schema and compatibility tests;
2. semantic golden journeys for input and output;
3. identity, assurance, consent, and policy-boundary tests;
4. replay, spoofing, prompt-injection, and malformed-input tests;
5. privacy minimization, retention, and disclosure tests;
6. confirmation, cancellation, interruption, and recovery tests;
7. offline, latency, failure, and modality-transition tests;
8. representative-device measurements;
9. forced-colors, reduced-motion, reflow, and keyboard checks where applicable;
10. participatory evaluation with people who use the modality; and
11. incident, maintenance, rollback, and revocation procedures.

Evidence is labeled unit, simulation, hosted CI, physical hardware, or
participatory. A supported claim requires the evidence classes defined by the
owning compatibility and release policy.

## Contributor workflow

1. Read the semantic experience and intent contracts in the owning component.
2. Declare the adapter capabilities, data path, authority limits, and evidence
   target.
3. Implement the narrow input or expression translation.
4. Add semantic golden journeys and adversarial boundary tests.
5. Validate transitions to at least one other modality.
6. Record device, environment, checks, limitations, and evidence.
7. Publish the component commit before updating any workspace gitlink.
8. Submit compatibility and support claims through the project evidence process.

[Find component repositories](workspace-and-repos.md) and
[review testing guidance](testing.md).

<aside class="evidence-band" aria-label="Modality contract evidence boundary">
  <p><strong>Contract status:</strong> This page defines the public behavioral integration boundary. Component wire schemas remain versioned in their owning repositories.</p>
  <p><strong>Support status:</strong> An adapter's capability declaration and collected evidence determine eligibility for experimental, qualified, or supported profiles.</p>
</aside>
