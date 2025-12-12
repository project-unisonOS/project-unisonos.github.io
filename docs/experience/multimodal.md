# Multimodal Interaction

This page introduces how UnisonOS treats speech, sign, Braille, vision, and BCI as first class ways for you to interact with the system.

## What this page covers

- How multimodal interaction fits into the overall experience principles.
- The role of each modality in the UnisonOS Operating Surface.
- Where to go for detailed behavior and implementation notes.

## Who this page is for

- People who want to understand how UnisonOS supports different ways of interacting.
- Designers and developers who plan experiences that span multiple modalities.

## Before you read this

- Read [Experience Principles](../experience.md) for the foundations of privacy, consent, and edge first behavior.
- Review [Architecture Overview](../architecture/overview.md) to see how IO services connect to the control plane.

## Multimodal interaction in practice

UnisonOS is designed to remember how you prefer to interact and to make every experience available through speech, visual surfaces, and tactile channels where possible. Startup flows detect which capabilities are present on a device and choose appropriate prompts and outputs so you can stay in your preferred mode.

Each modality contributes a different strength:

- **Speech** supports hands free, conversational control and feedback.
- **Sign** supports visual language for people who sign or who communicate in noisy or silent environments.
- **Braille** supports tactile reading and navigation for people who use refreshable displays.
- **Vision** covers camera and display based interactions that provide rich visual context.
- **BCI** explores direct intent signals from supported headsets in highly constrained scenarios.

Every high level flow aims to provide equivalent paths across modalities instead of treating one channel as primary and the others as add ons.

## Where to go next

- Learn about [Speech I/O](../multimodal/speech.md).
- Explore [Sign language interaction](../multimodal/sign-language.md).
- Review [Braille support](../multimodal/braille.md).
- See [Vision I/O](../multimodal/vision.md).
- Read about [BCI I/O](../multimodal/bci.md).

