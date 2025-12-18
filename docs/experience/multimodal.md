# Multimodal Interaction

UnisonOS is multimodal by default: it generates experiences in real time based on the system’s current capabilities and a person’s needs and preferences. If a screen is present, the renderer can use it. If it isn’t, the experience remains complete.

## Multimodal interaction in practice

UnisonOS does not treat any modality as “primary.” Instead, it treats modalities as co-equal channels for expressing intent and receiving outcomes. The same intent can be rendered through different combinations of output and input without changing the meaning.

Key commitments:

- **Capability-aware rendering**: use what is available (display, camera, audio, assistive devices), but never strand a person when a capability is missing.
- **Cross-modal coherence**: when multiple modalities are active, they reinforce the same meaning without duplicating excessively or contradicting each other.
- **Privacy and consent**: modality choices and data paths remain governed by consent and policy; on-device operation is the default.

Each modality contributes different strengths:

- **Voice** (speech and audio) supports conversational interaction and hands-free use.
- **Vision** (display and camera) supports rich visual context and visual perception where appropriate.
- **Touch and gesture** support direct interaction with rendered experiences when available.
- **Sign** supports visual language for people who sign and for environments where speech is unavailable or undesirable.
- **Braille** supports tactile reading and navigation via refreshable displays.
- **BCI** supports intent signals from configured headsets for highly constrained input scenarios.

## Speech I/O

Speech is a first-class modality in UnisonOS for both input (ASR) and output (TTS). Speech interactions flow through the same orchestration path as other modalities so policy, consent, and auditing stay consistent.

### Experience

- Speak naturally to express intent without thinking in “apps.”
- Receive concise spoken responses when audio is available; when a screen is available, responses can also be rendered as text.
- Prefer hands-free interaction when it fits the environment and a person’s preferences.

### How it works

- Input: the speech service captures audio and produces transcripts (local-first, configurable).
- Orchestration: transcripts are converted into intent requests and routed through the orchestrator like any other modality.
- Output: responses can include TTS; when a display is present, content can be rendered visually for readability and accessibility.

### Privacy & locality

- Audio stays on-device by default; any remote ASR/TTS is opt-in and policy-governed.
- Microphone access is mediated by consent and policy; modality metadata supports auditing.

### Developer notes

- Repo: `https://github.com/project-unisonOS/unison-io-speech`
- Channel: `speech`

## Sign Language I/O (ASL-first)

Sign is a first-class modality in UnisonOS. ASL is the initial supported language, with an extensible path for additional sign languages. Sign input is treated as another way to express intent; responses are rendered through whatever outputs are available (for example: visual and/or text).

### Experience

- Sign naturally to express intent when a camera is available and enabled.
- Receive responses in a form that fits current capabilities and preferences (for example: digital avatars, on-screen text, and visual cues).
- Prefer sign-first interactions when speech is unavailable or undesirable.

### How it works

- Input: the vision service provides camera frames.
- Presence detection: a lightweight “is someone signing?” detector runs first to identify sustained signing with minimal compute.
- Model selection: once signing is detected, the system loads the preferred sign-language model for that person (and language) to support ongoing sign interaction.
- Interpretation: sign recognition interprets signing into intent.
- Orchestration: interpreted sign input is converted into intent requests and routed through the orchestrator like any other modality.
- Output: responses are rendered through available outputs (typically visual), and can be paired with text for clarity.

### Privacy & locality

- Camera access is mediated by consent and policy; default behavior is on-device processing.
- Modality metadata supports auditing; any sharing of raw video is explicit and opt-in.

### Developer notes

- Repos: `https://github.com/project-unisonOS/unison-io-sign`, `https://github.com/project-unisonOS/unison-sign-orchestrator`
- Channel: `sign-asl` (extendable)

## Braille I/O

Braille is a first-class modality in UnisonOS for tactile reading and input. Braille interaction flows through the same orchestration path as other modalities so consent, policy, and auditing are consistent.

### Experience

- Read responses and focus text via refreshable Braille output.
- Use Braille input to express intent when available (for example: routing keys, navigation, and entry).
- Pairing and device status are explicit and under the person’s control.

### How it works

- Device I/O: the Braille service discovers and pairs devices, manages translation, and provides a focus feed.
- Orchestration: Braille input is converted into intent requests; output is rendered from orchestrator responses and focus state.

### Privacy & locality

- Pairing and profiles are stored locally; sharing is explicit and policy-governed.
- Modality metadata supports consent/policy decisions and auditing.

### Developer notes

- Repo: `https://github.com/project-unisonOS/unison-io-braille`
- Channel: `braille`

## Vision I/O

Vision is a core modality for UnisonOS: cameras and displays enable perception, context, and assistive experiences. Vision interactions flow through the same orchestration path as other modalities.

### Experience

- Use the camera for on-demand capture, describe, or assistive guidance when enabled.
- Combine vision with other modalities (for example: pairing camera context with voice or sign).
- Clear indicators when the camera is active; control remains with the person.

### How it works

- Input: the vision service provides camera access and capture/describe capabilities.
- Orchestration: vision-derived intents are converted into intent requests and routed through the orchestrator.
- Output: results can be rendered visually, narrated via voice, or combined with other outputs as appropriate.

### Privacy & locality

- Camera access requires consent and policy; on-device processing is the default.
- Prefer derived representations over raw frames when possible; any sharing is explicit and opt-in.

### Developer notes

- Repo: `https://github.com/project-unisonOS/unison-io-vision`
- Channel: `vision`

## BCI I/O

Brain-computer interface (BCI) input is treated as a first-class modality alongside voice, vision, Braille, and sign. BCI intents flow through the same orchestration path so policy, consent, and auditing stay consistent.

### Experience

- Pair supported headsets/streams with clear indicators when BCI is active.
- Use BCI-derived intent as an assistive input path when appropriate.
- Calibration and preferences persist locally; BCI can be paused or disabled at any time.

### How it works

- Input: the BCI service ingests device streams and produces derived signals and/or intent events.
- Orchestration: BCI intent is converted into intent requests and routed through the orchestrator like any other modality.
- Output: responses are rendered through available outputs (visual, voice, Braille, etc.).

### Privacy & locality

- Raw streams stay local by default; any export is explicit and policy-governed.
- Profiles and calibration are stored locally.

### Developer notes

- Repo: `https://github.com/project-unisonOS/unison-io-bci`
- Channel: `bci`
