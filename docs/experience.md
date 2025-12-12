# Key Experience Principles

UnisonOS experience design is guided by a small set of principles that apply across devices, modalities, and use cases.

## Vision and Values in Practice

These experience principles translate the platform vision into day to day behavior:

- **Personalized intelligence** keeps experiences tailored to you while respecting consent and policy.
- **User driven objectives** ensure that your goals shape orchestration rather than system level incentives.
- **Privacy and consent** keep data handling explicit, auditable, and under your control.
- **Platform level orchestration** coordinates identity, policy, consent, context, storage, and inference across services.
- **Inclusive and multimodal by default** means that flows are designed to work across speech, visual, tactile, and future channels.

## Privacy by Default

Data is processed on the device whenever possible. Any path that leaves the edge, such as cloud inference or profile synchronization, is explicit, auditable, and governed by policy and consent grants.

## Consent as a First Class Concept

High impact actions are never implicit. Dedicated policy and consent services ensure that sensitive operations are authorized, logged, and easy to understand after the fact.

## Edge First, Cloud Optional

UnisonOS is designed to run entirely on local hardware using devstack and production compose configurations. Cloud capabilities, such as remote model providers, are an additive choice controlled via configuration and policy.

## Modality Aware from First Contact

Startup flows detect available capabilities such as audio, display, camera, and future adapters and select the appropriate combination of voice and visual prompts. Every visual interaction has a speech equivalent, and every speech interaction has a visual or tactile alternative where possible.

See the internal startup modality plan in `unison-docs/dev/startup-modality.md` for implementation details.

## Dynamic Dashboard as Home Surface

In the running system, the primary “Operating Surface” is a per-person dashboard rendered by the experience renderer:

- Each person has a dashboard made up of **cards** (briefings, workflow summaries, tasks, and tool results) plus preferences such as layout, text size, and contrast.
- The dashboard is stored locally in the context service and refreshed by the orchestrator’s `dashboard.refresh` skill, which reads profiles, current state, and recent activity.
- The renderer fetches dashboard state on load and renders cards into a full-screen “Priority Cards” canvas, updating live as new experiences and workflows are emitted.

All dashboard state (cards, preferences, and metadata used for recall) lives on-device by default. When enabled, context-graph receives derived signals (for example, tags and timestamps) so past dashboard views can be recalled later (for example, “remind me about that workflow we were designing”). These traces carry no model-specific lock-in: they are stored in Unison’s own services, not in any external model provider.

## Touch and Gesture (First Steps)

UnisonOS treats touch and gesture as incremental extensions of the same Operating Surface:

- Devices that support touch can advertise this in capability reports (for example, via `touch.present` in `caps.report`).
- The experience renderer turns card clicks/taps on the dashboard into `gesture.select` events, which are forwarded to the intent graph for later orchestration.
- Gesture metadata (person, card id/title, timestamp) remains on-device and can be combined with context-graph traces and profiles to refine future flows.

This initial touch path is intentionally simple. It formalizes touch as a first class modality without introducing new cloud dependencies or complex interfaces. Future work can build on the same pattern for richer gestures, sign input, or other adapters under the same edge first, consent driven model.

## Wake Word and Always On Companion

The wake word experience turns the dashboard into an always available companion surface:

- A default wake word, typically “unison”, is configured locally and can be customized per person via their profile (`voice.wakeword`), updated through the orchestrator `wakeword.update` skill.
- When the renderer is running, a local wake word detector, such as Porcupine WebAssembly or a lightweight fallback, runs alongside voice activity detection to start and stop speech capture on device.
- Detected speech is sent to the local speech service (`unison-io-speech`) for transcription, which forwards transcripts to the orchestrator `/voice/ingest` API as `companion.turn` requests.
- The orchestrator calls the inference gateway, writes updated state to context and context graph, and streams experiences, including cards and audio URLs, back to the renderer for display and playback.

In always on devstack profiles, the renderer can be configured to start the microphone automatically when a device and browser allow it. The entire wake word to speech to text to companion to renderer loop remains on device by default. Any cloud speech or inference providers must be explicitly enabled and governed by policy.

## Accessible by Design

Interfaces and flows follow accessibility guidance similar to WCAG 2.2 AA:

- Audio-first and visual-first onboarding paths.
- Every visual element has a speech equivalent, and critical focus text can be sent to Braille displays.
- Spatial instructions have non-visual alternatives.
- The system remembers user modality and preference choices, including Braille table/6-dot vs 8-dot and active BCI decoders.

See `unison-docs/dev/accessibility.md` for more on accessibility requirements.

### Braille-first flow (new)
- Startup detects Braille devices (USB/Bluetooth) via `unison-io-braille` and emits `caps.report` with cells/transport.
- Renderer/onboarding publish focus text to `/braille/focus`; Braille displays receive cursor-aware frames and routing keys drive navigation.
- Users can choose Braille table/grade and toggle 6/8-dot; preferences persist in context profiles.

### BCI-driven intents (new)
- `unison-io-bci` ingests BLE/serial EEG streams (e.g., Muse/OpenBCI), decodes SSVEP/SMR/bandpower, and forwards `bci.intent` to the orchestrator.
- Context-aware decoder selection is per-person; shell/renderer can grant raw/intent scopes for attach/ingest/export flows.
- HID mappings per user allow BCI events to synthesize key/gesture intents when evdev is present; exports are bounded by time/size.

## Observable and Predictable

Every interaction flows through an orchestrator and a set of well-defined services. Developers can trace events end-to-end, understand why a decision was made, and reproduce behaviors across devices.
