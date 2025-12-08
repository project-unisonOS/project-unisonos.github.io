# Speech I/O

UnisonOS treats speech as a first-class, local-first modality for both input (ASR) and output (TTS). Voice commands flow into the same orchestrator as every other channel, so policy, consent, and skills routing stay consistent across modalities.

## Experience (person-first)
- Speak naturally to issue intents (open apps, control devices, ask questions).
- Hear concise, contextual responses; captioning is available in shell/renderer.
- Works at lock screen, onboarding, and during sessions; opt-in hotword/press-to-talk per preferences.

## How it works
- Input: `unison-io-speech` records audio, runs ASR locally when hardware permits, and emits `speech.intent` events with text + confidence.
- Gateway: `unison-io-speech` adapts transcripts into `IntentRequest` (channel `speech`), forwards to the core orchestrator.
- Output: orchestrator responses can include TTS payloads; renderer/shell plays audio and shows captions.
- Orchestrator: single brain for identity, consent, policy, and skills routing; speech is just another channel id.

## Privacy & locality
- Audio stays on-device by default; remote ASR/TTS is opt-in.
- Mic access is mediated via policy/consent; channel-tagged intents enable per-channel auditing.

## Developer notes
- Repo: [`unison-io-speech`](https://github.com/project-unisonOS/unison-io-speech)
- Channel id: `speech`
- Config: ASR/TTS providers (local-first), hotword/press-to-talk options, caption display via shell.
- Testing: unit + integration paths in repo; use replay audio fixtures for deterministic validation.
