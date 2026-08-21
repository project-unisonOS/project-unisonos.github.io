# Documentation ownership and freshness

Documentation is part of Unison's product behavior. It defines contributor
routes, authority boundaries, evidence maturity, installation expectations, and
the promises people use to decide whether to trust the system.

## Ownership follows behavior

The repository that owns behavior also owns its normative contract, component
README, tests, and implementation evidence. Shared and public documentation
summarize and link that source.

| Information | Owning source |
| --- | --- |
| Runtime behavior and component contract | Implementing component repository |
| Cross-service integration revision and task state | `unison-workspace` |
| Product architecture and accepted decisions | Versioned workspace planning and decision records |
| Hardware interfaces, BOMs, CAD, and qualification | `unison-hardware` |
| Environment and lab profiles | `unison-infrastructure` |
| Release contents, signatures, support status, and promotion evidence | Release owner and immutable release assets |
| Public narrative, navigation, and maturity summary | Public documentation site |

A public page remains explanatory. It cannot upgrade a component, release,
hardware configuration, provider, modality, or journey beyond its owning
evidence.

## Required updates with a change

Update documentation in the same change set when behavior affects:

- a public API, schema, contract, command, prerequisite, or default;
- identity, consent, policy, data access, disclosure, confirmation, or recovery;
- a usage journey or native modality expression;
- installation, update, removal, backup, restore, or support procedure;
- hardware compatibility, power, thermal, acoustic, safety, or BOM information;
- maturity, evidence, limitation, deprecation, or support status; or
- repository ownership, contributor entrypoint, or validation command.

Component documentation changes first. Cross-repository integration records
change after component commits are published. Public pages change when their
source evidence is merged and stable enough to summarize.

## Claim freshness

Every material public claim should answer:

1. What capability or limitation is being described?
2. Which repository, release, contract, or evidence record owns it?
3. Which evidence class supports it?
4. Which revision or release was evaluated?
5. What remains before the next maturity or support state?

Dates support time-sensitive records such as BOM prices, vulnerability status,
provider capabilities, compatibility, and release availability. A date adds
context and never replaces a source revision.

## Review cadence

| Trigger | Review action |
| --- | --- |
| Contract or authority change | Review immediately in the owning pull request |
| Release publication or promotion | Reconcile downloads, install guidance, current status, compatibility, and security evidence |
| Hardware or provider evidence | Update the exact revision-bound matrix and any public maturity summary |
| Quarterly public review | Check navigation, terminology, external links, maturity labels, and owner mappings |
| Security incident or important correction | Publish the authorized correction and recovery guidance promptly |
| Page without an identifiable owning source | Assign an owner, link a source, or archive the page |

Automation should validate internal links, strict builds, accessibility, schema
references, release tags, and known owner mappings. Human review remains
responsible for meaning, claim accuracy, safety, and source authority.

## Deprecation and archival

Superseded guidance receives a visible status, the replacement destination, and
the date or release at which it stopped being current. Historical instructions
stay out of the primary path. Redirects preserve established public links when
a page moves.

Removal is appropriate when content has no continuing historical, operational,
or recovery value. Git history retains the prior text.

## Accessible and agent-readable structure

Documentation serves people and coding agents through the same source. Use
stable headings, descriptive links, plain language, explicit paths, exact
commands, semantic tables, versioned identifiers, and visible maturity labels.
Diagrams include an equivalent text sequence. Color and layout support meaning
while text and structure carry it independently.

Long-running work records objective, non-goals, starting revisions,
environment, validation, commits, pull requests, unresolved risks, and next
action in a versioned handoff. Chat history is supporting context rather than
the project record.

## Public site gate

Before publication:

- run the strict documentation build;
- resolve every internal link;
- run the automated WCAG 2.2 AA baseline across every page;
- review reflow, keyboard, focus, forced colors, and reduced motion for changed
  presentation patterns;
- verify external sources material to claims;
- confirm that changed documentation contains no em dashes; and
- inspect the production deployment and its primary destinations.

The [content and evidence guide](content-and-evidence-guide.md) defines public
voice and maturity labels. The [contributor task finder](../developers/task-finder.md)
routes implementation work to the proper owner.
