# Vision I/O

Vision is a core modality for UnisonOS: cameras inform context, capture scenes, and enable assistive experiences. All vision inputs flow into the same orchestrator intent path used by speech, sign, Braille, and BCI.

## Experience (person-first)
- Use the camera for on-demand capture, describe, or assistive guidance.
- Vision assists other modalities (e.g., sign-language keypoints, object references).
- Clear indicators when the camera is active; user-controlled toggles in onboarding and shell.

## How it works
- Input: `unison-io-vision` provides camera access, optional keypoint extraction, and capture/describe endpoints.
- Pipelines: frames can be routed to downstream services (sign detector/interpreter, assistive describe, object prompts).
- Gateway: vision-derived intents (e.g., describe scene, select object) are adapted into `IntentRequest` (channel `vision`).
- Orchestrator: central policy/skills routing; channel metadata ensures consistent consent and auditing.

## Privacy & locality
- Camera access requires policy/consent; defaults to local processing and no raw frame egress.
- Keypoints/derived representations preferred over raw images where possible.

## Developer notes
- Repo: [`unison-io-vision`](https://github.com/project-unisonOS/unison-io-vision)
- Channel id: `vision`
- Config: camera tokens/constraints, keypoint extraction, downstream routing to other I/O services.
- Testing: stub capture/describe endpoints plus replay fixtures for keypoints/frames.
