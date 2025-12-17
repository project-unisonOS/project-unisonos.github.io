# Vision I/O

Vision is a core modality for UnisonOS: cameras and displays enable perception, context, and assistive experiences. Vision interactions flow through the same orchestration path as other modalities.

## Experience

- Use the camera for on-demand capture, describe, or assistive guidance when enabled.
- Combine vision with other modalities (for example: pairing camera context with voice or sign).
- Clear indicators when the camera is active; control remains with the person.

## How it works

- Input: the vision service provides camera access and capture/describe capabilities.
- Orchestration: vision-derived intents are converted into intent requests and routed through the orchestrator.
- Output: results can be rendered visually, narrated via voice, or combined with other outputs as appropriate.

## Privacy & locality

- Camera access requires consent and policy; on-device processing is the default.
- Prefer derived representations over raw frames when possible; any sharing is explicit and opt-in.

## Developer notes

- Repo: `https://github.com/project-unisonOS/unison-io-vision`
- Channel: `vision`
