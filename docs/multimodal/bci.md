# BCI I/O

Brain-computer interface (BCI) input is treated as a first-class modality alongside voice, vision, Braille, and sign. BCI intents flow through the same orchestration path so policy, consent, and auditing stay consistent.

## Experience

- Pair supported headsets/streams with clear indicators when BCI is active.
- Use BCI-derived intent as an assistive input path when appropriate.
- Calibration and preferences persist locally; BCI can be paused or disabled at any time.

## How it works

- Input: the BCI service ingests device streams and produces derived signals and/or intent events.
- Orchestration: BCI intent is converted into intent requests and routed through the orchestrator like any other modality.
- Output: responses are rendered through available outputs (visual, voice, Braille, etc.).

## Privacy & locality

- Raw streams stay local by default; any export is explicit and policy-governed.
- Profiles and calibration are stored locally.

## Developer notes

- Repo: `https://github.com/project-unisonOS/unison-io-bci`
- Channel: `bci`
