# Sign Language I/O (ASL-first)

Sign language is a first-class modality in UnisonOS. ASL is the first supported language, with a provider interface ready for additional sign languages. Sign inputs and signing avatar outputs flow through the same orchestrator channel as other modalities.

## Experience (person-first)
- Sign naturally to drive intents; UnisonOS responds via signing avatar and captions.
- Onboarding detects sustained signing and offers a sign-first path; available at lock screen and in-session.
- Preferences cover language selection, always-on vs on-demand camera, and captioning.

## How it works
- Input pipeline: `unison-io-vision` captures frames → `unison-io-sign-detector` detects presence → `unison-io-sign-interpreter` segments → provider (ASL) interprets keypoints via local model (ONNX WLASL) → `SignInterpretation`.
- Gateway: `unison-sign-orchestrator` adapts `SignInterpretation` into `IntentRequest` (channel `sign-<lang>`), handles clarification, forwards to core orchestrator; routes responses to signing avatar + captions.
- Providers: ASL provider today; pluggable interface for new sign languages via env-configured model + labels.
- Orchestrator: single brain for policy/consent/skills; sign channel uses the same intent schema as speech/text.

## Privacy & locality
- Camera access mediated by consent/policy; default to on-device processing; no raw video egress without opt-in.
- Preference-aware activation; channel-tagged intents support per-channel auditing.

## Developer notes
- Repos: [`unison-io-sign`](https://github.com/project-unisonOS/unison-io-sign), [`unison-sign-orchestrator`](https://github.com/project-unisonOS/unison-sign-orchestrator)
- Channel id: `sign-asl` (extendable to other languages)
- Config: `UNISON_SIGN_MODEL_PATH_<LANG>`, `UNISON_SIGN_LABELS_PATH_<LANG>`, keypoint backend (`mediapipe` or `mmpose`), language selection.
- Testing: replay keypoint fixtures + ONNX model; end-to-end pipeline tests without raw video.
