# Troubleshooting and incident response

This guide helps evaluators and developers diagnose Unison while preserving
person-level privacy, authority boundaries, and useful evidence. It does not
establish a supported incident-response service.

## Start with the smallest safe question

Identify one observed outcome before changing the system:

- what did the person or operator expect;
- what happened instead;
- which system, release, revision, and modality were involved;
- when the behavior began;
- whether private data, authority, availability, or physical safety may be at
  risk; and
- whether the issue is repeatable with synthetic data.

Use deterministic checks first. A model can summarize already authorized
evidence, but it cannot decide identity, consent, policy, incident state,
disclosure, or remediation authority.

## Follow the diagnostic ladder

Stop when a layer fails and preserve its evidence before making a change.

1. **Environment:** confirm the selected profile, host resources, clock, disk,
   Docker, network route, and exact source revision.
2. **Process:** confirm required services and focused health endpoints.
3. **Contract:** run the narrow component test for the failing behavior.
4. **Boundary:** run the matching workspace smoke or security-overlay test.
5. **State:** reconcile receipts, checkpoints, migrations, configuration, and
   installed inputs.
6. **Experience:** confirm that the semantic outcome retains meaning, choices,
   cancellation, privacy, and recovery in the active modality.

For development mode, begin with:

```bash
./scripts/doctor.sh
./scripts/smoke.sh
```

For the security overlay:

```bash
./scripts/smoke-security.sh
```

Component READMEs own narrower test commands. The workspace test is the final
integration boundary, not a substitute for the focused component check.

## Respond by symptom

| Symptom | First checks | Safe next action |
| --- | --- | --- |
| System does not start | environment profile, capacity, Compose state, earliest failing service | Preserve the first error and inspect only that component's documented prerequisites |
| Health check fails | service health, dependency health, recent scoped logs | Restart only through the selected environment lifecycle, then rerun the same check |
| Request is denied | authenticated principal, assurance, consent, policy, grant, context space | Preserve the denial and establish the missing authority through its owning flow |
| Unexpected disclosure or recipient | disclosure decision, selected fields, provider, recipient, receipt | Stop the workflow, revoke the scoped grant when authorized, and enter the security path below |
| Context appears missing | person, context space, source provenance, index freshness, retention state | Verify source state before rebuilding a derived index or restoring a checkpoint |
| Experience is incomplete | semantic outcome, modality adapter, renderer, cancellation and recovery controls | Preserve the semantic record and test another conforming expression without changing authority |
| Update or maintenance fails | signed input, authorization, capacity, checkpoint, health gate, receipt | Keep the last known good release active or use the verified rollback path |
| Backup or restore fails | key domain, signed manifest lineage, trusted checkpoint, object integrity | Keep current state authoritative and resume only through the documented recovery ceremony |

Avoid bypassing a denial, editing governed state directly, changing multiple
variables at once, or deleting state to make a test pass. Those actions remove
the evidence needed to understand the failure.

## Recognize a potential security incident

Treat the following as potential incidents until the responsible trust or
lifecycle boundary determines otherwise:

- an unexpected person, service, model, capability, provider, or recipient
  appears in a decision or receipt;
- private content crosses a context-space or person boundary;
- a signature, digest, provenance record, receipt, checkpoint, or audit chain
  fails verification;
- credentials, keys, recovery material, or sensitive logs may have been
  disclosed;
- a denied capability repeatedly attempts access or execution;
- an update, rollback, restore, or policy decision differs from its exact
  authorization; or
- unusual network, process, storage, or authentication behavior persists after
  a known safe restart.

## Contain with scoped authority

Choose the narrowest reversible containment that protects people and evidence.
Depending on the affected boundary and available authority, this can include:

- canceling the current intent or pending external action;
- revoking one capability grant, session, credential, connector, or channel;
- isolating an affected service or external network route;
- keeping a suspect release from promotion;
- returning to a verified last known good component or release; or
- pausing synchronization while authoritative local state is reviewed.

Physical danger, active financial fraud, or a medical emergency belongs with
the appropriate emergency service, financial institution, clinician, or other
qualified human authority. Unison's evaluator software is not an emergency
response service.

## Preserve content-minimized evidence

Record:

- exact release, commit, artifact digest, and environment profile;
- affected principal and context as opaque identifiers when needed;
- UTC and local timestamps;
- observed event classes, decisions, receipts, and verification results;
- the containment action and its authority;
- whether private data may have crossed a boundary; and
- each recovery attempt and result.

Do not copy raw personal records, full prompts, secrets, tokens, private keys,
recovery codes, cookies, or unreviewed logs into an issue. Preserve original
evidence locally with restricted access. Share the minimum fields required for
authorized diagnosis.

## Recover and verify

Recovery completes only when the affected boundary and adjacent boundaries are
checked.

1. identify and verify the last known good state;
2. remediate through the owner of the affected trust, capability, context, or
   lifecycle boundary;
3. rotate or revoke affected credentials and keys when authorized;
4. run the focused regression and workspace boundary tests;
5. confirm person and context isolation;
6. confirm receipts, checkpoints, backup, and rollback continuity; and
7. record residual risk and the decision to resume operation.

Do not upgrade simulation or CI recovery evidence to a physical or supported
claim. Physical-device and participatory validation retain their own gates.

## Report and learn

Send suspected vulnerabilities through the private
[Unison security policy](https://github.com/project-unisonOS/unison-workspace/security/policy).
Use a public issue only after coordinated disclosure or when the report contains
no sensitive security information.

A resolved incident should leave a versioned record of cause, affected
boundary, evidence, containment, recovery, regression coverage, documentation
impact, and follow-up owner. Repeated novel failures can become reviewed
deterministic checks or recovery skills without granting inference new
authority.

Return to the [operator handbook](handbook.md) or review the
[security reference](../reference/security.md).
