# Multimodal interaction

<section class="story-hero" aria-labelledby="multimodal-introduction">
  <p class="story-kicker">One intent, many native experiences</p>
  <h2 id="multimodal-introduction">Meaning meets each person in the right form</h2>
  <p class="story-lead">Unison accepts intent through the modalities available to a person and composes the outcome through forms suited to their needs, preferences, device, environment, and current context.</p>
</section>

## Meaning is the common integration point

Every experience begins with a semantic outcome. It describes the meaning,
relationships, status, uncertainty, provenance, urgency, choices, actions,
confirmation, privacy state, cancellation, errors, and recovery that a person
needs to understand.

A modality adapter contributes two bounded translations:

1. It turns speech, text, touch, Braille input, sign, images, device events, or
   future signals into evidence of intent.
2. It turns a governed semantic outcome into a native expression for the person
   and situation.

Identity, consent, policy, and actuation authority remain with their owning
platform services. This common boundary lets independent modality teams innovate
while preserving equivalent understanding and control.

## Native experiences use each modality's strengths

<div class="story-grid boundary-grid">
  <section><h3>Conversation and voice</h3><p>Dialogue, pacing, interruption, prosody, spatial audio, and concise spoken structure support hands-free and auditory interaction.</p></section>
  <section><h3>Visual</h3><p>Composition, typography, imagery, spatial relationships, direct manipulation, and glanceable state support sighted interaction.</p></section>
  <section><h3>Braille and tactile</h3><p>Structured tactile regions, routing, concise labels, status cells, and direct navigation support native reading and control.</p></section>
  <section><h3>Touch and physical controls</h3><p>Buttons, switches, gestures, haptics, and tangible controls provide direct input and perceivable state.</p></section>
  <section><h3>Sign language</h3><p>Language-aware recognition and expressive signing support communication through a person's selected sign language.</p></section>
  <section><h3>Future BCI</h3><p>Qualified signals can support constrained intent expression, selection, timing, and control through the same governed boundary.</p></section>
</div>

A person can combine modalities. Conversation can accompany a tactile map.
Braille can carry exact values while audio provides context. Sign can express
intent while visual composition presents detailed evidence. Haptics can convey
urgent state while another modality provides explanation.

## Composition responds to the moment

Modality selection considers the person's preferences, available devices,
privacy setting, environment, task demands, fatigue, urgency, and the assurance
required for the intended action. The composition can change during an
interaction while semantic state remains continuous.

A person might begin research visually, continue through conversation while
walking, and review exact sources in Braille. A driving context can prioritize
short dialogue and defer dense detail. A quiet shared room can favor sign,
Braille, touch, or visual interaction. Each transition preserves current intent,
pending choices, confirmation state, and recovery.

## Shared understanding across different experiences

People can collaborate through different native expressions of the same
semantic outcome. Each person receives the meaning, choices, attribution,
uncertainty, and authority appropriate to them. Shared state records which facts
and decisions are mutual while private context remains in each person's
governed space.

[Follow the shared-understanding journeys](shared-understanding.md).

## Privacy follows the modality path

Microphones, cameras, tactile devices, displays, headsets, and biological-signal
devices each have explicit identity, presence, capture, retention, and disclosure
policy. Local processing and derived representations can minimize raw media.
Indicators communicate active sensing in forms perceivable to the person using
the system.

A modality adapter declares the data it captures, the representations it
derives, where processing occurs, how long information remains, which assurance
it can establish, and how a person pauses, revokes, or recovers its use.

## A stable contract for independent teams

Voice, visual, Braille, sign, tactile, switch, AAC, haptic, and BCI contributors
integrate through the same intent and semantic-outcome boundaries. The contract
also carries identity and assurance claims, capability declarations, policy
references, confirmation state, cancellation, recovery, provenance, and
evidence labels.

[Read the modality integration contract](../developers/modality-integration.md).

<aside class="evidence-band" aria-label="Multimodal evidence boundary">
  <p><strong>Implemented:</strong> Semantic outcome, intent routing, modality service, speech, visual, Braille, sign, and BCI software foundations have unit, simulation, or hosted CI evidence in their owning components.</p>
  <p><strong>Being proven:</strong> Native experiences on representative devices, cross-modal continuity, hardware matrices, latency, privacy indicators, and participatory evaluation require additional evidence.</p>
  <p><strong>Envisioned:</strong> Supported household modality profiles, expressive sign output, mature tactile composition, and qualified BCI interaction remain future work.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring multimodal Unison">
  <a href="../shared-understanding/"><strong>Experience shared understanding</strong><span>See how people collaborate through different native modalities.</span></a>
  <a href="../../developers/modality-integration/"><strong>Build a modality adapter</strong><span>Use the common intent and semantic experience boundary.</span></a>
</nav>
