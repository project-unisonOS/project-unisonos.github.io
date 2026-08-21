# Privacy and security

<section class="story-hero" aria-labelledby="privacy-introduction">
  <p class="story-kicker">Protection follows purpose</p>
  <h2 id="privacy-introduction">Your intent gives protection a purpose</h2>
  <p class="story-lead">Unison begins with what a person is trying to accomplish. Identity, context, policy, capabilities, recipients, disclosure, confirmation, and recovery are then resolved around that intent.</p>
</section>

## Privacy begins with purpose

Intent-based computing gives every operation a reason that can be inspected and
governed. An intent describes the desired outcome together with the person,
active context, relevant constraints, timing, and preferred experience. Unison
uses that structure to determine which information and authority support the
outcome.

A request to prepare for a medical appointment can use a person's health space,
selected insurance information, and calendar availability for that preparation
purpose. Each context space keeps its own authority and policy. Any draft sent
to another person receives a separate recipient and disclosure decision.

<ol class="system-flow trust-flow">
  <li><strong>Person</strong><span>Authenticated identity and current assurance establish whose authority applies.</span></li>
  <li><strong>Intent</strong><span>The desired outcome, purpose, constraints, and current context define the work.</span></li>
  <li><strong>Policy</strong><span>Context spaces, fields, recipients, disclosure, retention, and confirmation requirements are evaluated.</span></li>
  <li><strong>Grant</strong><span>Each capability receives scoped data, credentials, authority, purpose, and duration.</span></li>
  <li><strong>Outcome</strong><span>The person receives an appropriate experience, action receipt, and recovery path.</span></li>
</ol>

## Privacy belongs to each person

The personal node is the primary authority for identity, relationships, context,
memory, policy, credentials, audit evidence, capabilities, and keys. Each person
has an independent identity and key hierarchy. Shared household context is
created through explicit spaces with defined membership and purpose.

This supports private health, financial, legal, personal, educational, and
creative work within a household system. Each person can review their own
permissions, disclosures, pending actions, backup, export, and deletion.
Household relationships inform policy while personal authority remains
independent.

## Context spaces create meaningful separation

Every context space can carry distinct keys, access policy, sharing, retention,
backup, and recovery requirements. A capability grant identifies the spaces and
fields available for one purpose. External disclosure receives its own policy
decision.

Compartmentalization limits the information available to any service, model,
channel, capability, or compromised component. A health workflow can operate
within health context. A financial workflow can use financial context. A
purpose-bound coordination intent can link selected facts from both spaces while
the source spaces and their policies remain intact.

## Layered security protects the node

<div class="story-grid boundary-grid">
  <section><h3>Hardware and boot</h3><p>Secure boot, measured boot, TPM-backed keys, and future hardware security modules establish device integrity on qualified profiles.</p></section>
  <section><h3>Identity and keys</h3><p>Independent person, device, service, and context-space identities support authentication, rotation, revocation, and scoped access.</p></section>
  <section><h3>Storage</h3><p>Encrypted records, source artifacts, semantic indexes, and backups follow their context-space and retention policies.</p></section>
  <section><h3>Service isolation</h3><p>Core, trust, capability, inference, channel, and experience services communicate through versioned contracts and scoped identities.</p></section>
  <section><h3>Continuous policy</h3><p>Person, intent, purpose, recipient, assurance, data class, risk, disclosure, and confirmation are evaluated at meaningful decision points.</p></section>
  <section><h3>Detection and recovery</h3><p>Content-minimized signals, signed updates, quarantine, rollback, credential rotation, backup, and restore support incident response.</p></section>
</div>

## External participation stays visible

Local models and capabilities can satisfy many intents on the personal node.
When an authorized external model, connector, communication channel, research
source, or backup provider contributes, Unison prepares the minimum fields
approved for that operation.

Credentials are represented by opaque task references and injected at the
transport step. External content retains provenance and enters as evidence.
The person can see the provider, recipient, information disclosed, purpose,
consequence, reversibility, cost, and available local route before a sensitive
operation proceeds.

Privacy-preserving research can use policy-selected relays, VPNs, private search
services, and query minimization to reduce linkability. The intended design also
supports separating a research query from household identity and long-term
context whenever the selected service permits it. Provider capabilities and
residual metadata remain visible in the disclosure decision.

## Backups preserve personal control

Backup encryption occurs locally with AES-256-GCM envelopes. Manifests are
encrypted and signed with Ed25519. An independently held checkpoint can detect
rollback or forged state. Storage providers receive ciphertext plus residual
account, size, and timing metadata. Recovery keys remain under the person's
chosen recovery ceremony.

Independent backup policies can apply to each adult and context space. Restore
evidence confirms that identity, policy, context, and operational continuity can
be recovered together.

## Threat monitoring becomes an evidence loop

The intended security operations path combines local integrity and behavior
signals, signed vulnerability and update intelligence, component inventories,
policy changes, and recovery exercises. The node can identify an affected
component, preserve useful evidence, restrict capabilities, rotate credentials,
quarantine components, apply signed updates, and restore a known state.

Security claims follow the same evidence discipline as product claims. New
countermeasures begin as proposals, receive review and testing, and progress
through published rollout and rollback stages.

## Understandable trust decisions

Sensitive operations present the exact intent, person, context spaces,
capabilities, providers, recipients, information used, purpose, consequence,
reversibility, cost, and recovery path. The person can confirm the exact action,
adjust the information or recipient, select another route, strengthen
authentication, defer, or cancel.

Unknown or insufficient authority produces a clear explanation and a route to
establish the required identity, assurance, consent, or policy. Content-minimized
receipts preserve accountability while primary private content remains in its
governed context space.

<aside class="evidence-band" aria-label="Privacy and security evidence">
  <p><strong>Implemented:</strong> Synthetic and local integration evidence covers private and shared context isolation, deny-by-default policy, field minimization, capability grants, exact expiring confirmation, credential canaries, provider-blind backup, and signed-update metadata.</p>
  <p><strong>Being proven:</strong> Supported-appliance validation, long-running intrusion monitoring, representative recovery exercises, TPM-backed operation, and participatory trust evaluation require additional evidence.</p>
  <p><strong>Envisioned:</strong> Qualified hardware security profiles, continuously governed threat-intelligence feeds, privacy-relay profiles, provider partnerships, and supported incident-response operations remain future work.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring trust">
  <a href="../trust-decisions/"><strong>Explore trust decisions</strong><span>See the exact information presented before sensitive work.</span></a>
  <a href="../backup-recovery/"><strong>Explore backup and recovery</strong><span>Follow encrypted continuity through backup, restore, export, and deletion.</span></a>
</nav>
