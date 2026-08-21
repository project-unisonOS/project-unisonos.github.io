# People, relationships, and context spaces

<section class="story-hero" aria-labelledby="context-introduction">
  <p class="story-kicker">Personal by default, shared with purpose</p>
  <h2 id="context-introduction">A household can coordinate while each person retains authority</h2>
  <p class="story-lead">Unison uses explicit context spaces to organize private and shared information. Relationships inform the experience, and access follows membership, purpose, consent, and policy.</p>
</section>

## Each person begins with a private space

Knowing that two people are family, colleagues, caregivers, or friends can help
Unison choose relevant context and an appropriate tone. The relationship itself
does not grant access to private information.

Each assistant begins with a private space and an independent identity, key,
credential, data, cache, index, audit, and backup-policy namespace. Search and
prompt construction begin from an explicitly authorized space and purpose.

## Sharing creates a governed space

A shared space records its purpose, members, selected information, policy,
retention, and key domain. It can support a household grocery list, a trip with
friends, a care plan, or a project with colleagues.

Sharing creates an auditable item in the selected shared space while the private
source remains private. Invitations require acceptance. Member removal revokes
access and advances the shared space key version. Co-location, family status,
inference, and device administration carry no independent sharing authority.

<ol class="system-flow trust-flow">
  <li><strong>Choose a purpose</strong><span>State the shared outcome and the information needed to support it.</span></li>
  <li><strong>Select people</strong><span>Identify proposed members and collect the consent required by policy.</span></li>
  <li><strong>Preview information</strong><span>Review the exact items, fields, retention, and available alternatives.</span></li>
  <li><strong>Create or update the space</strong><span>Apply membership, keys, policy, and scoped copies through the owning services.</span></li>
  <li><strong>Keep control visible</strong><span>Support inspection, correction, revocation, deletion, cancellation, and recovery through every native experience.</span></li>
</ol>

## Shared work preserves personal privacy

Two adults can contribute calendar events or grocery items to one household
space. Coordination reads the shared records needed for that intent and reports
which sources contributed. Private records remain independently governed.
Cross-person probes receive the same response as requests for resources that do
not exist, reducing information leakage.

Per-assistant queue, concurrency, CPU, and memory budgets help the shared node
serve multiple people without allowing one workload to monopolize the
scheduler.

## Roles that need dedicated care

The first implemented household model covers independently consenting adults.
Child, dependent, caregiving, incapacity, delegated authority, and emergency
access require role-specific policy, safety review, revocation, and recovery.
They will enter supported profiles only after that work receives appropriate
technical, domain, physical, and participatory evidence.

<aside class="evidence-band" aria-label="Context-space evidence">
  <p><strong>Implemented:</strong> Versioned contracts and synthetic appliance tests cover private and shared spaces, invitation and removal, key-version changes, scoped sharing, person isolation, resource budgets, audit, cancellation, and recovery.</p>
  <p><strong>Being proven:</strong> Supported appliance profiles, timing analysis, representative native modalities, and participatory household evaluation require additional evidence.</p>
  <p><strong>Envisioned:</strong> Qualified child, dependent, caregiving, incapacity, and emergency-access roles remain future design programs.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring governed context">
  <a href="../taxonomy-evolution/"><strong>See how organization evolves</strong><span>Follow usage patterns into person-reviewed taxonomy proposals.</span></a>
  <a href="../privacy-security/"><strong>Review privacy and security</strong><span>Understand the layered controls protecting people, context, and recovery.</span></a>
</nav>
