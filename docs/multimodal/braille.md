# Braille I/O

Braille is a first-class modality in UnisonOS for tactile reading and input. Braille interaction flows through the same orchestration path as other modalities so consent, policy, and auditing are consistent.

## Experience

- Read responses and focus text via refreshable Braille output.
- Use Braille input to express intent when available (for example: routing keys, navigation, and entry).
- Pairing and device status are explicit and under the person’s control.

## How it works

- Device I/O: the Braille service discovers and pairs devices, manages translation, and provides a focus feed.
- Orchestration: Braille input is converted into intent requests; output is rendered from orchestrator responses and focus state.

## Privacy & locality

- Pairing and profiles are stored locally; sharing is explicit and policy-governed.
- Modality metadata supports consent/policy decisions and auditing.

## Developer notes

- Repo: `https://github.com/project-unisonOS/unison-io-braille`
- Channel: `braille`
