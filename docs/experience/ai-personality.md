# Personality and continuity

<section class="story-hero" aria-labelledby="personality-introduction">
  <p class="story-kicker">Your assistant remains yours</p>
  <h2 id="personality-introduction">Communication and priorities can evolve without belonging to one model</h2>
  <p class="story-lead">Unison stores person-specific guidance separately from model files so the experience can remain familiar through upgrades, replacements, and different kinds of work.</p>
</section>

## Personality is a relationship setting

Personality shapes how the assistant communicates and collaborates. It can
include tone, pacing, verbosity, language, notation, challenge level, and the
way tradeoffs or uncertainty are presented.

These preferences support the person's intent. They do not change facts,
remove safety rules, widen access, or grant capabilities.

## Identity and priorities evolve at different speeds

<div class="story-grid personality-grid">
  <section><h3>Identity guidance</h3><p>Relatively stable preferences describe communication, privacy posture, and how the assistant should challenge assumptions.</p></section>
  <section><h3>Current priorities</h3><p>Mutable directives reflect what matters now and can change as goals, projects, health, finances, or household responsibilities evolve.</p></section>
  <section><h3>Session context</h3><p>Authorized information for one intent gives the interaction immediate relevance without rewriting lasting preferences.</p></section>
  <section><h3>Model profile</h3><p>A selected model contributes language or reasoning for a bounded task while the other layers preserve continuity.</p></section>
</div>

## A person can guide change naturally

A person can ask for a different pace, amount of detail, language, challenge
level, or interaction style. Unison prepares a structured proposal that shows
what would change. The person can accept, revise, defer, or reject it.

Sensitive prompt changes require the configured approval. Applied changes
receive a snapshot and can be rolled back. This supports experimentation while
keeping the current experience recoverable.

## Thoughtful disagreement supports trust

Unison can correct factual errors, surface missing evidence, explain tradeoffs,
and challenge assumptions at the level the person selected. Supportive
communication stays honest and useful.

The active style remains sensitive to context. A reflective conversation, an
emergency instruction, a financial review, and a concise status check can use
different pacing while preserving the person's established preferences.

## Continuity survives component change

Models, providers, and hardware can change frequently. Person-specific guidance
lives in versioned local configuration and is compiled into the active prompt
for the selected operation. Replacing a model therefore preserves identity,
preferences, priorities, memory, permissions, and pending work.

Portability still requires a qualified model to interpret the instructions
reliably. Model evaluation, canaries, health gates, and rollback protect that
transition before promotion.

## Privacy remains person specific

Each adult has independent prompt layers and context. Shared household goals can
inform an authorized shared experience while private identity guidance,
priorities, and memories remain personal.

Prompt content can contain sensitive preferences. Operational telemetry uses
paths, revisions, and hashes instead of recording the prompt text.

<aside class="evidence-band" aria-label="Personality evidence status">
  <p><strong>Implemented:</strong> Person-specific prompt roots, identity and priority schemas, compilation, proposals, approval, snapshots, rollback, and content-minimized correlation have unit-tested software foundations.</p>
  <p><strong>Being proven:</strong> Long-term preference quality, natural conversational editing, portability across qualified models, and participatory trust evaluation remain open.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring personalized interaction">
  <a href="../system-prompt/"><strong>Review prompt assembly</strong><span>See how the active model instructions are composed and governed.</span></a>
  <a href="../multimodal/"><strong>Review multimodal personalization</strong><span>Follow preferences into native conversational, visual, Braille, and future experiences.</span></a>
</nav>
