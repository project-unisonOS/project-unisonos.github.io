# Introducing UnisonOS

UnisonOS is an Operating Surface that reimagines how people and technology work together. Instead of relying on apps, files, and other legacy constructs, UnisonOS composes experiences in real time based on your goals and preferred ways of interacting. It understands what you’re trying to do, adapts to your context, and aligns completely with the objectives you set, creating a more natural computing experience.

________________________________________

## What UnisonOS Is

UnisonOS is an AI-first Operating Surface that transforms everyday devices into private, personalized, multimodal computing systems.
It understands your goals, adapts to your preferences, and works only in your best interest.
Interactions are multimodal using speech, vision, gesture, touch and text to compose each experience dynamically rather than launching a static application. UnisonOS has no advertising incentives, no engagement motives, and no competing priorities. Its only objective is to help you accomplish yours.
Privacy, personalization, and trust are foundational. Context, history, and preferences stay on your device unless you explicitly choose otherwise. You decide which AI models to use, and because UnisonOS stores your data outside the model, you can switch providers at any time without losing continuity. You own your data, not the model.

UnisonOS is an open-source project, developed in the open and designed to be inspectable, forkable, and extensible.

________________________________________

## Why UnisonOS Matters

### Personalization

UnisonOS learns your needs, routines, and preferences, generating bespoke experiences tailored specifically for you. It acts in your interest - always.

### Privacy and autonomy

Everything stays on your device by default. Cloud use is optional, explicit, and fully policy-controlled.

### Secure edge profiles

Your preferences, context, and history are stored in consent-aware, encrypted services under your control.

### Inclusive experiences

Interaction and rendering flows follow accessibility best practices across all modalities so UnisonOS adapts to you rather than the other way around.

________________________________________

## How UnisonOS Works

### Edge-first control plane

An orchestrator and intent graph coordinate identity, consent, policy, context, storage, and inference capabilities directly on the device.

### Context and profiles

Encrypted profiles and context graphs fuse signals, preferences, and history to understand goals without sending private data away.

### Multilingual, multimodal I/O

Speech, vision, text, and sensor-driven interactions are unified through a renderer, shell, and I/O services that generate experiences dynamically on your device.

### Inference freedom

A dedicated inference gateway routes requests to local or cloud models based on your preferences. Personal data remains outside the model, giving you complete freedom to switch providers at any time.
For a deeper technical breakdown, see the [Architecture section](architecture/overview.md).

________________________________________

## For Developers

UnisonOS is open source and built to be hacked on. If you want to run the devstack, renderer, and services locally:

- Start at [Developers → Get Started](developers/get-started.md) for the full onboarding path.
- See [Developers → Devstack Setup](developers/devstack.md) for running the Docker-based local environment.
- See [Developers → Renderer & Shell](developers/renderer-and-shell.md) to run UI surfaces against the stack.
- Browse the full repo directory in [Developers → Workspace & Repos](developers/workspace-and-repos.md) for direct links to each repo and README.

## The Next Step in a Long Journey of Abstraction

Human cognition works through abstraction. We compress complexity into concepts such as objects, patterns and goals so we can think and act efficiently. Long before computers, written language, maps, musical notation, and mathematics all served as abstraction layers that helped people manage complexity without holding every detail in mind.

Computing followed the same trajectory:
machine code → programming languages → operating systems → graphical interfaces → apps.
Each step hid unnecessary detail so people could focus on intentions, not mechanics.

UnisonOS continues this progression.
It removes the need for files, folders, and individual apps. Instead, it understands your goals, interprets your context, and generates the right experience on demand. It creates a symbiotic relationship between you and your technology, aligned entirely to your personal objectives.
