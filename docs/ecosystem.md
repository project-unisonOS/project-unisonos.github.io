# Modalities and governed ecosystem

Phase 8 expands Unison through independently certified slices. The initial
engineering slice supports local streaming speech with captions and interruption,
an adaptive keyboard/screen-reader visual surface, privacy/cost/risk-aware model
routing, and signed, compatibility-checked, revocable capability packages.

## Current support

- Local speech input can be interrupted by voice or a labelled **Stop speech**
  control. Partial and final captions provide a non-voice path.
- Visual output supports keyboard operation, screen readers, high contrast,
  reduced motion, and a simplified-language preference.
- Model routing prefers local execution and cannot silently exceed the selected
  disclosure, location, cost, risk, or offline boundary.
- Capability updates expose permission additions and require explicit review
  before gaining authority. Unknown publishers, invalid signatures,
  incompatible versions, and revoked packages fail closed.

Every semantic outcome retains confirmation, cancellation, retry, recovery, and
dismiss actions when a modality or provider becomes unavailable.

## Experimental and deferred

Braille, sign, switch/AAC, and haptic projects remain experimental until their
hardware matrices, maintenance ownership, incident procedures, and research
with people who use those access methods are complete. Simulation alone is not
release evidence.

BCI, robotics, spatial control, and autonomous financial actions remain
deferred and are not part of this supported boundary.

## Extension requirements

New adapters and capability packages must declare assurance, privacy and
metadata behavior, cancellation and fallback, compatibility, maintainer and
incident contacts, signed provenance, and an SBOM. Ecosystem expansion never
turns a modality, model, channel, or delegated agent into independent authority.
