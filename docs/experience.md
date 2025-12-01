# Key Experience Principles

Unison’s experience design is guided by a small set of principles that apply across devices, modalities, and use cases.

## Privacy by Default

Data is processed on the device whenever possible. Any path that leaves the edge—such as cloud inference or profile sync—is explicit, auditable, and governed by policy and consent grants.

## Consent as a First-Class Concept

High-impact actions are never implicit. Dedicated policy and consent services ensure that sensitive operations are authorized, logged, and easy to reason about after the fact.

## Edge-First, Cloud-Optional

Unison is designed to run entirely on local hardware using devstack and production compose configurations. Cloud capabilities—such as remote model providers—are an additive choice, controlled via configuration and policy.

## Modality-Aware from First Contact

Startup flows detect available capabilities (audio, display, camera, and future adapters) and select the appropriate combination of voice and visual prompts. Every visual interaction has a speech equivalent, and vice versa.

See the internal startup modality plan in `unison-docs/dev/startup-modality.md` for implementation details.

## Accessible by Design

Interfaces and flows follow accessibility guidance similar to WCAG 2.2 AA:

- Audio-first and visual-first onboarding paths.
- Every visual element has a speech equivalent.
- Spatial instructions have non-visual alternatives.
- The system remembers user modality and preference choices.

See `unison-docs/dev/accessibility.md` for more on accessibility requirements.

## Observable and Predictable

Every interaction flows through an orchestrator and a set of well-defined services. Developers can trace events end-to-end, understand why a decision was made, and reproduce behaviors across devices.

