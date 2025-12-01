# Introducing Unison

Unison is an edge-first agentic computing platform that turns your devices into private, context-aware AI systems. It orchestrates identity, consent, context, and inference on the device, with optional, policy-controlled cloud support when you choose it.

Build and deploy secure, multimodal agents that run where your users are—without surrendering their data.

## How Unison Works (High Level)

- **Edge-first control plane** – An intent graph and orchestrator coordinate services for policy, consent, identity, context, storage, and inference.
- **Context and profiles** – A context graph and profile store fuse signals and preferences into a consent-aware view of each user.
- **Multimodal I/O** – Renderer, shell, and IO services (speech, vision, core) emit events and render experiences on real devices.
- **Inference gateway** – A dedicated inference service brokers calls to local and cloud model providers when policy allows it.

For a detailed breakdown, see the Architecture section.

## Why Unison Matters

- **Privacy and autonomy** – Data stays on the device by default; cloud usage is explicit, logged, and policy-gated.
- **Agentic computing** – Intents flow through a unified orchestration layer instead of ad‑hoc scripts and APIs.
- **Secure edge profiles** – Profiles, preferences, and history are stored in consent-aware, encrypted services.
- **Inclusive experiences** – Startup and interaction flows are modality-aware and align with accessibility requirements.

## For Developers

If you want to run the devstack, renderer, and services locally:

- Start at **Developers → Get Started** for the full onboarding path.
- See **Developers → Devstack Setup** for running the Docker-based local stack.
- See **Developers → Renderer & Shell** for running UI surfaces against the stack.

## For Architects and Operators

- See **Architecture → Overview** for a conceptual map of the control plane, data plane, and I/O surfaces.
- See **Architecture → Deep Dive** for request flows, data/secret handling, and component interactions.

