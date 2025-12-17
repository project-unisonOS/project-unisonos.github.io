# Speech I/O

Speech is a first-class modality in UnisonOS for both input (ASR) and output (TTS). Speech interactions flow through the same orchestration path as other modalities so policy, consent, and auditing stay consistent.

## Experience

- Speak naturally to express intent without thinking in “apps.”
- Receive concise spoken responses when audio is available; when a screen is available, responses can also be rendered as text.
- Prefer hands-free interaction when it fits the environment and a person’s preferences.

## How it works

- Input: the speech service captures audio and produces transcripts (local-first, configurable).
- Orchestration: transcripts are converted into intent requests and routed through the orchestrator like any other modality.
- Output: responses can include TTS; when a display is present, content can be rendered visually for readability and accessibility.

## Privacy & locality

- Audio stays on-device by default; any remote ASR/TTS is opt-in and policy-governed.
- Microphone access is mediated by consent and policy; modality metadata supports auditing.

## Developer notes

- Repo: `https://github.com/project-unisonOS/unison-io-speech`
- Channel: `speech`
