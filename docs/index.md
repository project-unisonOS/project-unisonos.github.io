# Introducing UnisonOS

UnisonOS is an Operating Surface that reimagines how people and technology work together. Instead of relying on apps, files, and other legacy constructs, UnisonOS composes experiences in real time based on your goals and preferred ways of interacting. It understands what you are trying to do, adapts to your context, and aligns completely with the objectives you set, creating a more natural computing experience.

________________________________________

## What UnisonOS Is

UnisonOS is an AI-first Operating Surface that transforms everyday devices into private, personalized, multimodal computing systems.
It understands your goals, adapts to your preferences, and works only in your best interest.
Interactions are multimodal using speech, vision, gesture, touch and text to compose each experience dynamically rather than launching a static application. UnisonOS has no advertising incentives, no engagement motives, and no competing priorities. Its only objective is to help you accomplish yours.
Privacy, personalization, and trust are foundational. Context, history, and preferences stay on your device unless you explicitly choose otherwise. You decide which AI models to use, and because UnisonOS stores your data outside the model, you can switch providers at any time without losing continuity. You own your data, not the model.

UnisonOS is an open-source project, developed in the open and designed to be inspectable, forkable, and extensible.

________________________________________

## A New Relationship With Technology

UnisonOS imagines a world where you direct the objectives of your own AI, free from competing incentives or unwanted interference. It creates a computing experience shaped around what you want to accomplish, expressed through natural interaction rather than commands, menus, or learned behavior.

Instead of asking you to adapt to applications, file systems, or fixed workflows, UnisonOS adapts to you. Interactions follow your intent, context, and preferred modes of expression so you can focus on what you are trying to achieve instead of how to drive the system.

## Why Now

Devices at the edge are now powerful enough to support meaningful local intelligence. At the same time, you expect AI experiences that reflect your needs rather than the priorities of third parties.

UnisonOS keeps intelligence close to you, maintains privacy by default, and integrates local and cloud models through a consistent policy layer. It creates a place where your goals guide orchestration while consent and policy control how data moves.

## Your Objectives, Orchestration, and Context

UnisonOS separates three concerns that are often mixed together:

- **User directed objectives** describe what you are trying to accomplish in plain language.
- **Model orchestration** coordinates which tools and models to use to satisfy those objectives.
- **Personal context** stays outside any model so you can change providers without losing continuity.

This separation keeps the platform aligned with your intent while preserving privacy and portability for your data.

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

________________________________________

## Time, Intention, and Alignment

You bring time, energy, and attention to every task. UnisonOS treats those as scarce resources that the platform should respect. Instead of pulling you into engagement loops, it helps you define what matters now and then organizes tools, models, and services around those priorities.

You describe outcomes in your own words and UnisonOS keeps them at the center of the experience. It remembers what you have already done, suggests next steps when they are useful, and steps back when they are not. Alignment is not a slogan but a contract between your stated objectives and how the system behaves.

## Abstraction maximalism

Human cognition works through abstraction. You compress complexity into concepts such as objects, patterns, and goals so you can think and act efficiently. Long before computers, written language, maps, musical notation, and mathematics all served as abstraction layers that helped people manage complexity without holding every detail in mind.

Computing followed the same trajectory: machine code, programming languages, operating systems, graphical interfaces, and applications. Each step hid unnecessary detail so you could focus on intentions instead of mechanics.

UnisonOS continues that progression. It reduces the need for files, folders, and individual applications. It understands your goals, interprets your context, and generates the right experience on demand so you can work at the level of intention rather than infrastructure.

## Start building with UnisonOS

If you want to go deeper, the next step is to run the stack yourself.

[Start building with UnisonOS → Developers / Get Started](developers/get-started.md)
