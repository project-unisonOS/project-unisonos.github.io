# Contributing

Unison is built by people across software, privacy, accessibility, domain
expertise, hardware, research, documentation, and design. Contributors may work
directly or collaborate through Codex, Claude, or another coding agent. The same
contracts, task packets, tests, and evidence serve both paths.

## Find the right entry point

Use the [contributor task finder](task-finder.md) to choose a journey,
discipline, repository, contribution size, and review route. The workspace is
the development front door. Each component repository owns its implementation
and normative contracts.

## Contribution workflow

1. Read the workspace `AGENTS.md`, agent contributor model, repository map,
   target component README, and applicable journey or contract.
2. Begin from the target repository's current default branch and create a
   focused branch or clean worktree.
3. Use an issue or validated task packet for non-trivial work. Record objective,
   non-goals, starting revisions, allowed changes, authority, environment,
   validation, rollback, and handoff.
4. Change the owning component and its tests first. Preserve unrelated and
   uncommitted contributor work.
5. Run the narrowest relevant test, followed by the applicable workspace
   boundary test.
6. Update documentation when contracts, behavior, maturity, ownership, or
   contributor guidance changes.
7. Push the component commit and open a pull request against its documented
   default integration branch.
8. Update workspace gitlinks only after component commits are published and
   validated.

Pull requests identify affected contracts and authority boundaries, exact
validation commands and results, evidence class, documentation impact,
unresolved risk, rollback, and next action.

## Authority and data safety

- Keep secrets, tokens, credentials, real personal data, raw household media,
  and machine-specific configuration out of repositories.
- Models, renderers, adapters, and tools remain outside identity, consent,
  policy, incident-state, and physical-actuation authority.
- Use synthetic fixtures unless a separately approved physical or participatory
  protocol authorizes another source.
- Preserve cancellation, confirmation, receipts, and recovery at consequential
  boundaries.

## Evidence and review

Label evidence as unit, simulation, hosted CI, physical hardware, or
participatory. Passing a lower evidence gate does not imply a higher one.

One approving review is required. Request security review for authentication,
authorization, consent, encryption, personal-data boundaries, network exposure,
incident response, update trust, or physical actuation. Request accessibility
and modality review when interaction semantics or native expressions change.
Domain and safety expertise applies to clinical, financial, legal, emergency,
electrical, RF, and physical-safety guidance.

## Documentation and accessibility

- Use semantic headings, descriptive links, meaningful alternative text, and
  accessible tables.
- Design native modality experiences from the semantic contract. Conversation
  and Braille remain independent from visual layouts and screen-reader output.
- Preserve equivalent meaning, uncertainty, choices, confirmation,
  cancellation, and recovery across modalities.
- Follow the [documentation ownership and freshness policy](../project/documentation-governance.md).
- Run the strict build, complete internal-link audit, and WCAG 2.2 AA baseline
  before publishing public documentation.

All collaboration follows the project Code of Conduct. Report suspected
vulnerabilities privately through the
[security policy](https://github.com/project-unisonOS/unison-workspace/security/policy).
