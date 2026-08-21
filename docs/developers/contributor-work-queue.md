# Contributor work queue

This queue turns current Unison gaps into bounded starting points for people and
their coding agents. It does not authorize work outside the named authority or
upgrade evidence beyond the required class.

## Queue status

| Status | Meaning |
| --- | --- |
| Ready | Can begin with repository access and the named software environment |
| Coordination required | Requires an owner, research, security, accessibility, or domain review before execution |
| Deferred | Requires unavailable hardware, a participant protocol, or another named dependency |

Before claiming a packet, confirm that no active issue or pull request already
owns it. Create or link a workspace task packet so objective, starting commits,
authority, tests, and handoff remain durable.

## Ready software and documentation packets

### CQ-01: Contract directory verification

- **Objective:** Verify every entry in the public API and schema directories
  against the workspace-pinned component README and contract files.
- **Non-goals:** Changing an API, schema, authority boundary, or stability
  label without owner approval.
- **Repositories:** owning component, `unison-workspace`, then this public site.
- **Environment:** clean recursive workspace checkout on Ubuntu with no live
  personal data.
- **Checks:** component contract test, workspace schema validation, strict site
  build, links, and accessibility audit.
- **Evidence:** unit and hosted CI.

### CQ-02: Installation documentation drift gate

- **Objective:** Add an automated check that the public release tag, target
  platform, candidate minimums, and support status agree with signed release
  inputs and public installation pages.
- **Non-goals:** Promoting a preview or creating compatibility evidence.
- **Repositories:** `unison-platform`, `unison-workspace`, and this public site.
- **Authority:** release artifacts and manifests supply facts; documentation
  automation reports drift and cannot promote a release.
- **Checks:** synthetic mismatch fixtures, release-owner tests, strict site
  build, and hosted CI.
- **Evidence:** unit, simulation, and hosted CI.

### CQ-03: Content-minimized diagnostic fixtures

- **Objective:** Expand synthetic operator incidents for failed health, denied
  authority, context-index staleness, tampered lifecycle evidence, and native
  modality fallback.
- **Non-goals:** Capturing real prompts, records, credentials, or household
  logs; authorizing automatic remediation.
- **Repositories:** affected component owners and `unison-workspace`.
- **Authority:** deterministic incident classification remains outside models
  and renderers.
- **Checks:** focused negative test, privacy canaries, recovery path, and
  workspace boundary test.
- **Evidence:** unit and simulation.

### CQ-04: Modality adapter conformance examples

- **Objective:** Add minimal synthetic examples that help an independent
  adapter contributor validate observation, native expression, fallback,
  cancellation, recovery, and semantic equivalence.
- **Non-goals:** Claiming support for a device or requiring a visual screen
  representation.
- **Repositories:** `unison-io-core`, applicable modality repository,
  `unison-common`, and `unison-workspace`.
- **Authority:** adapters express or observe; identity, consent, policy,
  disclosure, and action authority remain in their owning services.
- **Checks:** adapter validator, synthetic equivalence fixtures, negative
  authority tests, and workspace modality boundary test.
- **Evidence:** unit and simulation.

### CQ-05: Evidence-link and freshness automation

- **Objective:** Check canonical evidence links, release identifiers, owner
  mappings, archived routes, and time-sensitive status markers on a schedule.
- **Non-goals:** Deciding whether evidence is sufficient or rewriting maturity
  claims automatically.
- **Repositories:** this public site and organization workflow owner.
- **Checks:** deterministic fixtures for missing, redirected, stale, and
  malformed sources plus the full documentation gate.
- **Evidence:** unit and hosted CI.

## Coordination required

### CQ-06: Keyboard and visual unfamiliar-request pilot

- **Objective:** Run the already prepared small opt-in pilot through keyboard
  and visual interaction after owner, privacy, accessibility, and research
  review.
- **Authority:** participation is explicit and revocable; private requests stay
  in governed context; only the approved content-free measurement contract can
  enter aggregate review.
- **Evidence:** participatory. Synthetic canary results remain separate.

### CQ-07: Sign-language research framing

- **Objective:** Work with Deaf contributors to define intent capture, native
  expression, consent, error handling, and evaluation before selecting capture
  or recognition technology.
- **Authority:** signer-led research and explicit camera-data governance are
  prerequisites.
- **Evidence:** participatory research, followed later by physical hardware.

### CQ-08: Domain safety review

- **Objective:** Review emergency, health, financial, legal, electrical, RF, or
  physical-safety guidance fixtures with qualified domain contributors.
- **Authority:** deterministic escalation and professional-authority boundaries
  remain explicit; a model does not certify correctness.
- **Evidence:** expert review and participatory evidence as approved.

## Deferred physical packets

The following work stays deferred until its dependency is named and available:

- dual-GPU workstation inventory, drivers, model concurrency, rebuild, restore,
  power, thermal, acoustic, and resilience qualification;
- reference appliance install, reboot, power interruption, update, rollback,
  backup, restore, removal, and reset;
- microphone, speaker, refreshable Braille, camera, switch/AAC, haptic, sign,
  BCI, and reconnection device matrices; and
- Secure Boot, TPM, firmware recovery, electrical, cooling, and enclosure
  qualification.

Software simulations can prepare these gates. They cannot close physical or
participatory evidence.

## Claim and handoff

Use the [agent-ready starting sequence](task-finder.md#the-agent-ready-starting-sequence).
The task packet records objective, non-goals, canonical sources, starting
commits, environment, writable repositories, authority limits, ordered checks,
evidence class, recovery, security and accessibility constraints, unresolved
risks, and next action.

When work completes, update the owning component and evidence first. Update the
workspace pin after the component commit is pushed and validated. Public status
changes only after its source evidence and human promotion gate permit it.
