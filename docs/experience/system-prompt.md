# Assistant prompt and priorities

<section class="story-hero" aria-labelledby="prompt-introduction">
  <p class="story-kicker">Stable values, replaceable models</p>
  <h2 id="prompt-introduction">Unison assembles model instructions from reviewed layers</h2>
  <p class="story-lead">A shared base prompt, person-specific identity, current priorities, and authorized session context give models useful direction while platform services retain decision authority.</p>
</section>

## The prompt supports the experience

The base prompt describes Unison's interaction posture: understand intent,
preserve continuity, communicate naturally, use available capabilities, respect
privacy, and support the person's agency. It also distinguishes orchestration
roles from person-facing language roles.

The exact base prompt lives with its implementation in
[`unison-common`](https://github.com/project-unisonOS/unison-common/blob/main/src/unison_common/schemas/prompt/unison_base.md).
This page links to that source instead of maintaining a second copy that can
drift.

## Four layers shape the active instructions

<ol class="system-flow prompt-flow">
  <li><strong>Base</strong><span>Shared Unison interaction principles and role-aware model guidance.</span></li>
  <li><strong>Identity</strong><span>Person-specific communication, privacy, and challenge preferences validated against a versioned schema.</span></li>
  <li><strong>Priorities</strong><span>Mutable directives and current preferences that can evolve independently from identity.</span></li>
  <li><strong>Session</strong><span>Authorized context for the current intent, role, modality, and operation.</span></li>
</ol>

The prompt engine validates identity and priority documents, compiles the active
prompt, writes it atomically, and records a content hash for correlation.
Prompt content stays out of ordinary observability records.

## Models contribute within assigned roles

A language model can interpret, extract, synthesize, converse, or produce a
typed proposal for the operation it receives. The orchestrator selects the role
and supplies minimized context.

Identity, consent, policy, recipients, disclosure, capability grants, incident
state, and physical action remain with their platform services. A prompt cannot
grant a model additional data or authority.

## Changes remain reviewable and reversible

The prompt engine supports proposed updates, schema validation, approval for
sensitive changes, snapshots, application, and rollback. A person can adjust
communication style or priorities without tying continuity to one model,
provider, or hardware configuration.

Models can suggest a change. The resulting proposal remains separate from the
decision to apply it.

## Source and implementation

| Item | Location |
| --- | --- |
| Base prompt | [`schemas/prompt/unison_base.md`](https://github.com/project-unisonOS/unison-common/blob/main/src/unison_common/schemas/prompt/unison_base.md) |
| Identity schema and defaults | [`schemas/prompt`](https://github.com/project-unisonOS/unison-common/tree/main/src/unison_common/schemas/prompt) |
| Priority schema and defaults | [`schemas/prompt`](https://github.com/project-unisonOS/unison-common/tree/main/src/unison_common/schemas/prompt) |
| Compilation and lifecycle | [`unison_common/prompt`](https://github.com/project-unisonOS/unison-common/tree/main/src/unison_common/prompt) |

Consumers use the `unison-common` revision pinned by `unison-workspace`. Public
explanation follows that implementation and does not replace its schemas or
tests.

<aside class="evidence-band" aria-label="Prompt evidence status">
  <p><strong>Implemented:</strong> Schema validation, layered compilation, person-specific roots, atomic writes, content hashing, proposals, sensitive-change approval, snapshots, and rollback have unit-tested software implementations.</p>
  <p><strong>Being proven:</strong> Long-running preference quality, model portability across qualified profiles, and participatory evaluation of tone and trust require additional evidence.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring assistant continuity">
  <a href="../ai-personality/"><strong>Explore personality and continuity</strong><span>See how personal preferences persist across model changes.</span></a>
  <a href="../../architecture/deep-dive/#prompt-engine-personalized-system-prompt"><strong>Review prompt architecture</strong><span>Follow the runtime assembly and injection path.</span></a>
</nav>
