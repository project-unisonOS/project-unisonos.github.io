# Terminology

These terms provide a common language for people, contributors, and coding
agents working across Unison's product, software, hardware, and evidence.

## Person and intent

| Term | Meaning |
| --- | --- |
| **Person** | A stable human identity with independent authority, distinct from a display name, account, role, or login handle. |
| **Principal** | An authenticated person, device, channel, service, or workload making a request under an established assurance level. |
| **Intent-based computing** | Unison's organizing model: a person expresses what they want to accomplish, and the system assembles a governed route and native experience from their context, needs, preferences, policies, and situation. |
| **Intent** | The desired outcome together with the identity, context, needs, preferences, timing, relationships, constraints, and available experience that shape it. Input provides evidence of intent. The interpreted intent remains reviewable until applicable authority accepts it. |
| **Usage journey** | A person-centered path connecting intent, governed context, orchestration, native experience, authority, outcome, recovery, and evidence maturity. |

## System and authority

| Term | Meaning |
| --- | --- |
| **Unison** | The complete open-source personal intelligence system and the experience it provides. |
| **UnisonOS** | The downloadable Linux appliance runtime, distribution, installation, update, recovery, and operating boundary. |
| **Personal node** | The locally authoritative household system where identity, context, policy, credentials, continuity, and recovery live. |
| **Unison assistant** | One independently governed assistant serving one primary person. |
| **Assistant instance** | The runtime and state boundary assigned to that person's assistant. |
| **Household membership** | An administrative relationship to a personal node. Membership provides no automatic access to another person's private information. |
| **Authority** | The right, established by identity and policy, to access information, disclose it, make a decision, or perform an action. Models, renderers, and external content provide proposals rather than authority. |
| **Grant** | An exact, revocable authorization for a capability to use specified data, credentials, purpose, recipient, authority, and duration. |
| **Capability** | A versioned skill, tool, connector, or workflow that acts through an explicit grant. |
| **Capability Host** | The architectural boundary that contains tools and connectors, injects authorized credentials, enforces grants, and returns results and receipts. The implementation repository is `unison-capabilities`; the runtime service identifier is `unison-capability-host`. |

## Context and memory

| Term | Meaning |
| --- | --- |
| **Context space** | A separately governed private or shared collection with its own purpose, membership, fields, access, sharing, retention, security, backup, and recovery policy. |
| **Data domain** | Open vocabulary describing the subject and governance of information, such as health, financial, legal, household, or educational. A domain can participate in one or more context spaces under policy. |
| **Usage-driven taxonomy** | Person-scoped organization that can grow from repeated patterns through an explainable proposal, explicit approval, and separate reversible migration. |
| **Security domain** | A data domain with separately reviewed policy and logical key-boundary handling. Activation and record migration are distinct governed decisions. |
| **Authoritative record** | The durable source-controlled representation used for facts, policy, lifecycle, and correction. |
| **Derived view** | A replaceable index, embedding, summary, graph edge, or cache tied to source revisions. It assists retrieval and never becomes an authority or access-control boundary. |
| **Purpose-bound view** | A temporary selection of authorized fields from one or more context spaces for one stated outcome. It preserves the policies and provenance of each source. |

## Experience and modalities

| Term | Meaning |
| --- | --- |
| **Semantic outcome** | The governed representation of meaning, relationships, state, provenance, uncertainty, choices, actions, confirmation, privacy, cancellation, and recovery that can be expressed through any modality. |
| **Unison Surface** | The system boundary that composes a semantic outcome into native experiences and returns proposed person responses. |
| **Modality** | A native form of input or output, such as conversation, Braille, visual interaction, touch, sign language, switch access, AAC, or BCI. |
| **Modality adapter** | A versioned implementation that maps a modality to and from the common semantic experience contract without gaining identity, policy, or action authority. |
| **Renderer** | A modality-specific composer. The current browser renderer creates a native visual and keyboard experience. |
| **Native experience** | An experience using the language, structure, pacing, navigation, and interaction strengths of a person's modality directly. |
| **Shared understanding** | Different native expressions of the same governed semantic state that preserve equivalent meaning, uncertainty, choices, and control for each participant. |

## Execution and evidence

| Term | Meaning |
| --- | --- |
| **Deterministic route** | A versioned, inspectable path whose important rules, inputs, outputs, and authority checks are defined and testable. |
| **Bounded inference** | Nondeterministic model participation constrained by task, context, disclosure, tools, validation, policy, uncertainty, and recovery. |
| **Receipt** | A content-minimized record of an important decision, action, confirmation, affected boundary, result, and available recovery. |
| **Evidence class** | The environment in which a claim was tested: unit, simulation, hosted CI, physical hardware, or participatory. |
| **Implemented** | Behavior present in code with identified evidence. |
| **Being proven** | Implemented or designed behavior that still needs representative devices, physical operation, long-running use, certification, or participatory evaluation. |
| **Envisioned** | Intended future capability or architecture. |
| **Reference system** | A named hardware and software configuration that repeatedly completes its declared qualification gate. |
| **Supported** | A deliberately promoted configuration or capability with defined evidence, maintenance, limitations, recovery, and support ownership. |

## Local-first operation

Local-first means identity, policy, consent, durable context, credentials,
continuity, and recovery remain under the personal node's authority. A person
can enable remote models, channels, connectors, research services, and backup
destinations through explicit policy. Those participants remain minimized,
visible, revocable, and replaceable.
