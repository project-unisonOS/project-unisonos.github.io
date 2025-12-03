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

## Dynamic Dashboard as Home Surface

In the running system, the primary “Operating Surface” is a per-person dashboard rendered by the experience renderer:

- Each person has a dashboard made up of **cards** (briefings, workflow summaries, tasks, and tool results) plus preferences such as layout, text size, and contrast.
- The dashboard is stored locally in the context service and refreshed by the orchestrator’s `dashboard.refresh` skill, which reads profiles, current state, and recent activity.
- The renderer fetches dashboard state on load and renders cards into a full-screen “Priority Cards” canvas, updating live as new experiences and workflows are emitted.

All dashboard state (cards, preferences, and metadata used for recall) lives on-device by default. When enabled, context-graph receives derived signals (for example, tags and timestamps) so past dashboard views can be recalled later (for example, “remind me about that workflow we were designing”). These traces carry no model-specific lock-in: they are stored in Unison’s own services, not in any external model provider.

## Wake-Word & Always-On Companion

The wake-word experience turns the dashboard into an always-available companion surface:

- A default wake word (typically **“unison”**) is configured locally and can be customized per person via their profile (`voice.wakeword`), updated through the orchestrator’s `wakeword.update` skill.
- When the renderer is running, a local wake-word detector (Porcupine WebAssembly or a lightweight fallback) runs alongside voice activity detection to start and stop speech capture on-device.
- Detected speech is sent to the local speech service (`unison-io-speech`) for transcription, which forwards transcripts to the orchestrator’s `/voice/ingest` API as `companion.turn` requests.
- The orchestrator calls the inference gateway, writes updated state to context/context-graph, and streams experiences (including cards and audio URLs) back to the renderer for display and playback.

In “always-on” devstack profiles, the renderer can be configured to start the mic automatically when a device and browser allow it. The entire wake-word → STT → companion → renderer loop remains on-device by default; any cloud STT or inference providers must be explicitly enabled and governed by policy.

## Accessible by Design

Interfaces and flows follow accessibility guidance similar to WCAG 2.2 AA:

- Audio-first and visual-first onboarding paths.
- Every visual element has a speech equivalent.
- Spatial instructions have non-visual alternatives.
- The system remembers user modality and preference choices.

See `unison-docs/dev/accessibility.md` for more on accessibility requirements.

## Observable and Predictable

Every interaction flows through an orchestrator and a set of well-defined services. Developers can trace events end-to-end, understand why a decision was made, and reproduce behaviors across devices.

