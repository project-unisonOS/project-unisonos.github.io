# Taxonomy evolution

<section class="story-hero" aria-labelledby="taxonomy-introduction">
  <p class="story-kicker">Structure that grows through use</p>
  <h2 id="taxonomy-introduction">Your information can develop boundaries that make sense for your life</h2>
  <p class="story-lead">Unison can recognize a repeated pattern, propose useful organization, and let each person decide whether a tag, subdomain, or protected context should become part of their system.</p>
</section>

## A taxonomy is personal and open

Unison begins with useful context spaces such as personal, household, health,
financial, educational, legal, and home systems. These are starting points.
Each person can develop vocabulary and boundaries suited to their own life
without waiting for a software release.

The underlying domain identifier uses open vocabulary. A definition records
whether it came from the system, the person, observed usage, or an update.
Models can help recognize and name a pattern. Identity, consent, policy,
retention, disclosure, encryption boundaries, and migration remain governed by
the personal node.

## How usage becomes a proposal

<ol class="system-flow">
  <li><strong>Notice a pattern</strong><span>Content-free signals record repeated requests, corrections, distinct audiences, or friction with existing retention, policy, and sharing choices.</span></li>
  <li><strong>Require durable evidence</strong><span>The current software threshold requires at least three matching signals across at least two days before proposing a change.</span></li>
  <li><strong>Select an appropriate level</strong><span>Unison can propose a lightweight tag, a subdomain within an existing boundary, or a security domain with separate policy and key handling.</span></li>
  <li><strong>Explain the proposal</strong><span>The preview shows why the question appeared, the evidence count, expected benefits, boundaries, and possible migration scope without exposing raw requests or memories.</span></li>
  <li><strong>Let the person decide</strong><span>The person can approve, modify, defer, or decline through a native modality. Defer and decline suppress repeated prompts for defined periods.</span></li>
  <li><strong>Activate vocabulary</strong><span>Approval creates the selected organization. Existing records remain in place until a separate migration is reviewed and confirmed.</span></li>
</ol>

For example, repeated work with leases, estate documents, contracts, and legal
deadlines could prompt: “You have several legal-related items. Would you like
Legal to become its own protected area?” The person can inspect why Unison is
asking and choose the boundary that fits.

Novel requests remain available through governed inference. A taxonomy proposal
improves repeated work and organization while the system continues pursuing new
intent through bounded routes.

## Three levels of organization

<div class="story-grid boundary-grid">
  <section><h3>Tag</h3><p>A lightweight label supports retrieval and organization while retaining the record's existing context, key, sharing, and retention policy.</p></section>
  <section><h3>Subdomain</h3><p>A named area within an existing context can carry more specific organization and policy while inheriting its parent security boundary.</p></section>
  <section><h3>Security domain</h3><p>A separately governed domain receives an explicit review of key separation, retention, sharing, and disclosure before activation.</p></section>
</div>

## Security domains receive a deeper review

A security-domain proposal requires a complete control review and explicit
person approval. The policy service issues a signed, short-lived authorization
bound to the person, proposal, policy version, and reviewed controls. Missing,
expired, or locally asserted authorization fails closed.

The proposal process cannot infer a security domain from a diagnosis, wealth,
disability, or another sensitive personal attribute. Taxonomy records and
signals remain scoped to one person, including on a shared household node.

## Migration is a separate, reversible decision

Activating a category moves no existing records. A later migration preview
identifies exact person-owned records and revisions, contains no record content,
expires after 15 minutes, and has a deterministic digest. Execution requires
confirmation of that exact preview and stops if a selected record changed.

A completed migration produces a receipt, updates governance, invalidates
derived views, and applies the new key-domain handle for a security domain. A
30-day rollback window can restore the prior governance and key-domain handling
with a second receipt.

## Updates can contribute without taking control

Project and community updates can provide suggested definitions, policy
templates, migration helpers, and compatibility information. Adoption remains
a visible person-level decision. Updates cannot silently activate a domain,
widen access, move records, or change a person's retention and disclosure
choices.

<aside class="evidence-band" aria-label="Taxonomy evolution evidence boundary">
  <p><strong>Implemented:</strong> Versioned usage-signal, proposal, decision, review, activation, migration, and rollback contracts have unit and service-integration evidence using synthetic records. Tests cover the Legal example, thresholds, person isolation, native preview structures, signed security review, exact confirmation, key-domain reassignment, and rollback.</p>
  <p><strong>Being proven:</strong> Prompt-fatigue calibration, representative conversational and Braille devices, deployed policy-service channels, and participatory accessibility evaluation require additional evidence.</p>
  <p><strong>Envisioned:</strong> Hardware-backed key custody and community taxonomy packages can strengthen protected-domain operation after physical and governance qualification.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring governed context">
  <a href="../household-context-spaces/"><strong>Explore context spaces</strong><span>See how personal and shared information receives purpose, membership, and policy.</span></a>
  <a href="../privacy-security/"><strong>Explore privacy and security</strong><span>Understand the layers that protect identities, context, capabilities, and recovery.</span></a>
</nav>
