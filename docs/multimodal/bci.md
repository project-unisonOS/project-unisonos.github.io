# BCI I/O

Brain-computer interface (BCI) input is treated as a first-class modality alongside speech, vision, Braille, and sign. BCI intents flow through the same orchestrator channel, so policy, consent, and skills routing stay consistent.

## Experience (person-first)
- Pair supported headsets/streams; clear indicators when BCI is active.
- Use BCI-derived intents for control or assistive inputs; opt-in at onboarding and in-session.
- Profiles/calibration persist locally; users can pause/disable at any time.

## How it works
- Service: `unison-io-bci` ingests LSL/BLE/serial streams (e.g., Muse/OpenBCI), manages decoders, HID mapping, and exports.
- Endpoints: `/bci/devices{attach,get}`, `/bci/decoders`, `/bci/intents` (WS), `/bci/raw` (WS), `/bci/export`, `/bci/hid-map`, health/metrics.
- Gateway: BCI-derived intents are adapted into `IntentRequest` (channel `bci`) and sent to the core orchestrator.
- Orchestrator: central policy/skills routing; channel metadata enables per-channel scopes and auditing.

## Privacy & locality
- Raw streams stay local; exports are opt-in and scoped.
- Consent/policy scopes (e.g., `bci.intent.subscribe`, `bci.raw.read`, `bci.export`) gate access.
- Profiles/calibration stored locally (context/storage services).

## Developer notes
- Repo: [`unison-io-bci`](https://github.com/project-unisonOS/unison-io-bci)
- Channel id: `bci`
- Config: device profiles, decoder registry, HID maps, export limits.
- Docs/specs: `unison-docs/dev/BCI_INTEGRATION.md`, `unison-docs/dev/specs/bci-permissions.md`, `unison-docs/dev/specs/schemas/event-envelope.md`.
