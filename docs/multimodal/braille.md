# Braille I/O

Braille is a first-class modality in UnisonOS for tactile reading and input. Braille devices plug into the same orchestrator channel system, ensuring policy and skills routing are consistent with speech, sign, vision, and BCI.

## Experience (person-first)
- Read system responses and app content via Braille output.
- Input via Braille keyboard/controls, with immediate feedback and confirmation prompts.
- Available at lock screen, onboarding, and throughout sessions; clear device status and pairing flows.

## How it works
- Service: `unison-io-braille` discovers/pairs devices (HID/BT), handles translators, drivers, and focus feeds.
- Gateway: Braille input is adapted into `IntentRequest` (channel `braille`); Braille output renders orchestrator responses.
- Orchestrator: central policy, consent, and skills routing; channel metadata enables per-channel auditing and preferences.

## Privacy & locality
- Device pairing and profiles stored locally; no remote sharing of text/controls unless explicitly allowed.
- Channel-tagged intents enable fine-grained consent/policy across tactile interactions.

## Developer notes
- Repo: [`unison-io-braille`](https://github.com/project-unisonOS/unison-io-braille)
- Channel id: `braille`
- Config: device drivers, translators, focus feed options, pairing profiles.
- Testing: use simulated devices/HID events; replay fixtures for focus feed and output rendering.
