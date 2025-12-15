# UnisonOS Documentation Policy

This policy applies across the project-unisonOS GitHub organization.

## Ground Rules

- Code/config/runtime behavior are the source of truth; documentation must match reality.
- Repos must not contain planning/status artifacts (roadmaps, work plans, checklists, meeting notes, scratch docs).
- Docs in repos must help developers/operators: build, run, test, deploy, operate, or understand implemented architecture and interfaces.

## Allowed Documentation

- `README.md` with accurate quickstart and pointers to canonical docs.
- Implemented architecture and system design (current state only; label clearly if versioned).
- API/interface/spec references that match implementation (schemas, endpoints, configuration defaults).
- Contribution docs (`CONTRIBUTING.md`, code of conduct, security policy).
- Operational/runbook docs for running services (devstack, deployment, troubleshooting).

## Disallowed Documentation (Must Be Removed)

- Roadmaps, milestones, status updates, “implementation plan” docs, task lists, meeting notes, WIP notes.
- Aspirational architecture docs presented as current reality.

## RFCs / Aspirational Work

- If RFCs/spec proposals are needed, they must live in a designated versioned area (e.g. `docs/rfcs/`) and be explicitly labeled **Not Implemented** with date and owner.
- Otherwise, aspirational docs should not be kept in git.

