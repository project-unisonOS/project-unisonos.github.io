# Introducing Unison

Unison is an AI-first computing platform that redefines how people interact with technology. It transforms everyday devices into private, deeply personalized AI systems that understand your goals, adapt to your preferences, and work entirely in your best interest.

Instead of designing for “users” who must learn systems, Unison builds a more natural, symbiotic partnership between people and their technology. Interactions are multimodal, including speech, vision, gesture, and text. Experiences are generated in real time based on what you need in the moment. Unison does not pursue advertising or engagement objectives; its only objective is to help you accomplish yours.

Privacy, personalization, and trust are built into the core. Context, intent, and preferences stay on your device by default, giving you the freedom to choose which AI models you use and to switch providers at any time without losing your history. You own your data, not the model.

---

## Why Unison Matters

### Personalization

Unison gets to know your needs, preferences, routines, and goals, then generates bespoke experiences tailored specifically for you. It is always working on your behalf, never on behalf of others.

### Privacy and autonomy

Data stays on your device unless you choose otherwise. Cloud usage is explicit, transparent, and policy-controlled.

### Secure edge profiles

Your history and preferences live in consent-aware, encrypted services under your control.

### Inclusive experiences

Interaction and rendering flows follow accessibility best practices across modalities, ensuring that Unison adapts to you rather than requiring you to adapt to it.

---

## How Unison Works

### Edge-first control plane

An orchestrator and shared intent graph coordinate identity, consent, policy, context, storage, and inference services directly on the device.

### Context and profiles

Encrypted profiles and context graphs capture preferences, history, and real-time signals to understand what you want without sending data away.

### Multilingual, multimodal I/O

Speech, vision, text, and other interfaces are unified through a renderer, shell, and I/O services that emit events and shape experiences all on your device.

### Inference freedom

A dedicated inference gateway routes requests to local or cloud models based on your preferences and policies. All personal data and context remain outside the model so you can change models whenever you want without losing continuity.

For a deeper technical breakdown, see the [Architecture section](architecture/overview.md).

---

## For Developers

If you want to run the devstack, renderer, and services locally:

- Start at [Developers → Get Started](developers/get-started.md) for the full onboarding path.
- See [Developers → Devstack Setup](developers/devstack.md) for running the Docker-based local environment.
- See [Developers → Renderer & Shell](developers/renderer-and-shell.md) to run UI surfaces against the stack.
