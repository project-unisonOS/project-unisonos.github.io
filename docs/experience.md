# Key Experience Principles

UnisonOS experience design is guided by a small set of principles that apply across devices, modalities, and use cases.

These principles are derived from two canonical documents:

- [UnisonOS Experience Doctrine](experience/doctrine.md)
- [Renderer Design Language](experience/renderer-design-language.md)

## Vision and Values in Practice

These experience principles translate the platform vision into day-to-day behavior:

- **Generated, intention-centric experiences** keep you focused on outcomes, not tools, apps, or navigation.
- **Personalized, capability-aware experiences** adapt to each person’s needs and preferences and the system’s current capabilities (for example: available display, audio, input, or assistive devices).
- **Presence before information** keeps the system calm and non-demanding when there is nothing useful to present.
- **Privacy and consent** keep data handling explicit, auditable, and under your control.
- **Trust as the product** means experiences must be predictable, coherent, and safe; surprising behavior is a trust violation.
- **Edge-first by default** ensures the system works fully on local hardware; cloud is optional and policy-governed.
- **Inclusive and multimodal by default** means every experience works across Voice, Vision, gesture, touch, Braille, sign, and BCI.

## Privacy by Default

Data is processed on the device whenever possible. Any path that leaves the edge, such as cloud inference or profile synchronization, is explicit, auditable, and governed by policy and consent grants.

## Consent as a First Class Concept

High impact actions are never implicit. Dedicated policy and consent services ensure that sensitive operations are authorized, logged, and easy to understand after the fact.

## Edge First, Cloud Optional

UnisonOS is designed to run entirely on local hardware using devstack and production compose configurations. Cloud capabilities, such as remote model providers, are an additive choice controlled via configuration and policy.

## Real-Time, Generated Experience (Not Navigation)

UnisonOS does not ask people to learn a persistent interface structure. Instead, it generates an experience in real time that fits the current intent and context.

Implications:

- The default state can be quiet presence, not content.
- The primary surface is a perceptual field, not windows, panels, or persistent UI chrome.
- Experiences are ephemeral unless persistence adds clear value (and is governed by policy).

## Modality-Complete Experiences

UnisonOS treats modalities as first-class and co-equal. Experiences must remain complete even when one modality is unavailable.

When generating an experience, UnisonOS considers available capability + a person’s preferences across:

- **Voice**
- **Vision**
- **Gesture**
- **Touch**
- **Braille**
- **Sign**
- **BCI**

Related docs:

- [Multimodal Interaction](experience/multimodal.md)
- [Speech](multimodal/speech.md)
- [Sign](multimodal/sign-language.md)
- [Braille](multimodal/braille.md)
- [Vision](multimodal/vision.md)
- [BCI](multimodal/bci.md)

## Accessibility as Personalization

Because experiences are rendered in real time, accessibility is not a separate “mode” or a set of after-the-fact accommodations. The system generates an experience that meets each person’s specific needs and preferences.

This makes UnisonOS inherently accessible:

- Modality selection is personalized (not assumed).
- Presentation is tailored (for example: contrast, text size, pacing, audio behavior, Braille focus).
- Generated experiences implicitly adhere to WCAG-style guidelines (structure, contrast, focus order, readable text, and non-visual alternatives).

## Observable and Predictable

Every interaction flows through an orchestrator and a set of well-defined services. Developers can trace events end-to-end, understand why a decision was made, and reproduce behaviors across devices.
