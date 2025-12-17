# Sign Language I/O (ASL-first)

Sign is a first-class modality in UnisonOS. ASL is the initial supported language, with an extensible path for additional sign languages. Sign input is treated as another way to express intent; responses are rendered through whatever outputs are available (for example: visual and/or text).

## Experience

- Sign naturally to express intent when a camera is available and enabled.
- Receive responses in a form that fits current capabilities and preferences (for example: on-screen text and visual cues).
- Prefer sign-first interactions when speech is unavailable or undesirable.

## How it works

- Input: the vision service provides camera frames; sign recognition interprets signing into intent.
- Orchestration: interpreted sign input is converted into intent requests and routed through the orchestrator like any other modality.
- Output: responses are rendered through available outputs (typically visual), and can be paired with text for clarity.

## Privacy & locality

- Camera access is mediated by consent and policy; default behavior is on-device processing.
- Modality metadata supports auditing; any sharing of raw video is explicit and opt-in.

## Developer notes

- Repos: `https://github.com/project-unisonOS/unison-io-sign`, `https://github.com/project-unisonOS/unison-sign-orchestrator`
- Channel: `sign-asl` (extendable)
