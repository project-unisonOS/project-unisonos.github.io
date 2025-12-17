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
- [Speech](../multimodal/speech.md)
- [Sign](../multimodal/sign-language.md)
- [Braille](../multimodal/braille.md)
- [Vision](../multimodal/vision.md)
- [BCI](../multimodal/bci.md)
