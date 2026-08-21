# Content and evidence guide

This guide keeps Unison's public documentation clear for people and productive
for coding agents. It applies to narrative pages, product guidance, status
claims, and contributor-facing documentation.

## Voice

- Lead with the outcome or idea that matters to the reader.
- Use affirmative statements that describe what Unison does, enables, or intends.
- Center the person, their authority, and the experience they receive.
- Use direct language and define specialized terms near their first use.
- Describe constraints as product boundaries with an owner and a purpose.
- Reserve comparisons for decisions that genuinely require them.
- Use standard punctuation and avoid em dashes.

## Evidence and maturity

Every material capability claim carries an evidence boundary that a contributor
can verify. Use these maturity labels consistently:

- **Implemented** identifies behavior present in code with its evidence type.
- **Being proven** identifies implemented or designed behavior that still needs
  representative devices, physical systems, long-running operation, or
  participatory evaluation.
- **Envisioned** identifies intended future capability and architecture.

Evidence types are unit, simulation, hosted CI, physical hardware, and
participatory. A page can link to current status or a versioned evidence record
for supporting detail.

## Person and system language

- **Intent-based computing** is Unison's organizing model. A person expresses
  what they want to accomplish, and the system uses their current context,
  needs, preferences, and policies to assemble a governed route and generate an
  appropriate experience.
- **Intent** is the desired outcome together with the identity, context, needs,
  preferences, timing, relationships, constraints, and experience that shape
  it. Input is evidence of intent, and the interpreted intent remains a
  reviewable system proposal until applicable identity and policy establish
  authority.
- **Unison** is the complete assistant platform and experience.
- **UnisonOS** is the Linux appliance runtime and operating surface.
- **Personal node** is the trusted household system where identity, context,
  policy, and continuity live.
- **Context space** is a separately governed collection of information with its
  own purpose, membership, access, sharing, retention, and security policy.
- **Capability** is a versioned skill, tool, connector, or workflow that acts
  through an explicit grant.
- **Modality** is a native form of input or output connected through the common
  semantic experience contract.
- **Semantic outcome** is the governed representation of meaning, relationships,
  state, provenance, uncertainty, choices, actions, confirmation, privacy,
  cancellation, and recovery that can be expressed through any modality.
- **Native experience** uses the language, structure, pacing, navigation, and
  interaction strengths of a person's modality directly.
- **Shared understanding** lets people receive different native expressions of
  the same governed semantic state while preserving equivalent meaning and
  control.
- **Usage journey** connects a person's intent to governed context,
  orchestration, native experience, authority, outcome, recovery, and an
  explicit evidence maturity label.

## Accessible editorial patterns

Headings communicate a complete outline. Links describe their destination.
Lists use native list markup, and diagrams retain an equivalent text sequence.
Evidence callouts include visible labels. Color supports meaning while text and
structure carry it independently. Interactive targets, focus treatment,
contrast, reflow, and zoom are validated against WCAG 2.2 AA.

Reusable classes in `assets/design-tokens.css` provide story heroes, editorial
cards, sequential system flows, evidence bands, and next-path navigation. New
patterns receive keyboard, forced-colors, reduced-motion, desktop, and mobile
review before publication.

## Current narrative path

The primary public journey proceeds from the homepage through Vision, How
Unison Works, Personal Node, and Privacy and Security. These pages introduce
intent-based computing, explain how intent becomes a governed outcome, locate
authority and continuity in the home, and show how protection follows purpose.
Detailed experience, architecture, build, and status pages provide the
supporting contracts and evidence.
