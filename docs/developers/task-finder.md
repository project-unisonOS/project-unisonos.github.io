# Contributor task finder

Unison welcomes people working directly and people collaborating through
coding agents. Begin with the outcome you want to improve, then use the tables
below to find the owning repository, required context, and evidence gate.

## Choose a path by outcome

| I want to contribute to | Start with | Primary repositories |
| --- | --- | --- |
| Intent resolution, routing, skills, or tools | [How Unison works](../how-unison-works.md) and the applicable journey | `unison-orchestrator`, `unison-intent-graph`, `unison-capabilities` |
| Identity, privacy, consent, or policy | [Security reference](../reference/security.md) and [trust decisions](../trust-decisions.md) | `unison-auth`, `unison-consent`, `unison-policy`, `unison-context` |
| Memory, retrieval, provenance, or taxonomy | [Context spaces](../household-context-spaces.md) and [taxonomy evolution](../taxonomy-evolution.md) | `unison-context`, `unison-storage`, `unison-context-graph`, `unison-common` |
| Models, local inference, or lifecycle routing | [Architecture](../architecture/overview.md) and [current status](../current-status.md) | `unison-inference`, `unison-orchestrator`, `unison-platform` |
| Visual interaction | [Experience renderer](renderer.md) and [multimodal interaction](../experience/multimodal.md) | `unison-experience-renderer`, `unison-io-core` |
| Conversation, Braille, sign, AAC, switches, BCI, or another modality | [Modality integration](modality-integration.md) and [shared understanding](../experience/shared-understanding.md) | modality-specific I/O repository, `unison-io-core`, `unison-common` |
| Household, health, financial, research, education, or offline journeys | [Journey implementation map](../experience/journey-implementation.md) | journey owner plus shared trust, context, orchestration, and experience repositories |
| Hardware, enclosure, BOM, power, cooling, radios, or sensors | [Hardware program](../hardware-program.md) | `unison-hardware`, `unison-infrastructure` |
| Installer, updates, releases, backup, or recovery | [Appliance release lifecycle](appliance-release-lifecycle.md) | `unison-platform`, `unison-updates`, `unison-storage`, `unison-workspace` |
| Documentation, accessibility, research, or governance | [Content and evidence guide](../project/content-and-evidence-guide.md) | owning component first, then public or internal documentation repository |

The [workspace repository directory](workspace-and-repos.md) links every current
repository and README.

## Choose a path by contribution size

### First contribution

Good first contributions have one owner, a narrow test, and no change to an
authority boundary. Examples include documentation clarity, a synthetic fixture,
an adapter error message, test coverage, or validation tooling. Read the target
README and its `AGENTS.md` before editing.

### Component contribution

A component change stays within one repository and its published contract. The
pull request identifies affected behavior, validation, evidence class, and any
documentation impact. Security or accessibility review joins when the change
touches those boundaries.

### Cross-component contribution

Start with a versioned contract in its owning repository. Record every affected
repository and immutable starting revision in a task packet. Publish and verify
component commits before updating the workspace gitlinks that integrate them.

### Physical or participatory contribution

Name the hardware revision, fixture, environment, calibration, participant
protocol, and collection method before testing. Physical and participatory
evidence remains distinct from unit, simulation, and hosted CI results.

## The agent-ready starting sequence

1. Open [`unison-workspace`](https://github.com/project-unisonOS/unison-workspace)
   and read its `AGENTS.md`.
2. Read `docs/agent-contributor-model.md`, `docs/repo-map.md`, the target
   component README, and the applicable journey or contract.
3. Select an existing issue or validated packet in `tasks/`. A non-trivial
   packet names objective, non-goals, writable repositories, starting commits,
   environment, authority, validation, rollback, and handoff.
4. Use a clean branch or worktree and preserve unrelated contributor changes.
5. Run the narrowest component test, then the applicable workspace boundary
   test.
6. Record exact commands, results, evidence class, commits, risks, and next
   action in the durable task or evidence document.
7. Submit the component change first. Update the workspace gitlink after the
   component commit is pushed and validated.

Chat history can help collaboration. Repository documents and task packets hold
the durable project state.

## Review routing

| Change | Required attention |
| --- | --- |
| Authentication, authorization, consent, encryption, personal data, network exposure, incident response, updates, or actuation | Security review |
| Semantic outcomes, native modalities, interaction, confirmation, or accessibility claims | Accessibility and modality review |
| Clinical, financial, legal, emergency, electrical, RF, or physical-safety guidance | Applicable domain and safety review |
| Hardware interface, BOM, CAD, enclosure, power, cooling, or qualification | Hardware owner and evidence review |
| Public maturity or support claim | Owning component evidence and documentation owner review |

## Completion checklist

- The owning contract and authority boundaries remain explicit.
- Tests cover expected behavior, denial paths, cancellation, and recovery.
- Secrets, real personal data, and raw household media stay out of the repository.
- Evidence is labeled unit, simulation, hosted CI, physical hardware, or
  participatory.
- Documentation changes follow the [ownership and freshness policy](../project/documentation-governance.md).
- The handoff records unresolved risks and the next action.

Continue with the [contributor work queue](contributor-work-queue.md),
[contribution workflow](contributing.md), or
[development environment](devstack.md).
