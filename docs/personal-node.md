# The personal node

<section class="story-hero" aria-labelledby="node-introduction">
  <p class="story-kicker">The trusted home for personal intelligence</p>
  <h2 id="node-introduction">Continuity, policy, and context live with you</h2>
  <p class="story-lead">A personal node is a capable system in the home that holds the authoritative identity, memory, policy, and operational continuity for one or more independently governed Unison assistants.</p>
</section>

## What the node holds

Each adult can govern their own keys, private context, credentials, memories,
goals, interaction preferences, audit view, backup, export, and deletion. Shared
household spaces support plans, devices, schedules, and records with explicit
membership and purpose.

<div class="story-grid">
  <section><h3>Identity and assurance</h3><p>Person and device identities, channel bindings, authentication state, and assurance requirements establish who can request an operation.</p></section>
  <section><h3>Context and memory</h3><p>Relational records, semantic indexes, source artifacts, summaries, and retention policy preserve useful continuity.</p></section>
  <section><h3>Policy and consent</h3><p>Purpose, recipient, sharing, confirmation, disclosure, and retention rules govern every context space and capability grant.</p></section>
  <section><h3>Operations and recovery</h3><p>Capability manifests, receipts, encrypted backups, restore evidence, exports, and deletion workflows support durable control.</p></section>
</div>

## Separately governed context spaces

Health, financial, legal, personal, household, and device information can live
in context spaces with distinct keys, access policy, retention, and backup
requirements. A capability receives access to the spaces and fields authorized
for its purpose. This compartmentalized design limits exposure and gives each
person understandable controls for sharing.

Household relationships are represented explicitly. Membership in a family or
home provides context for policy decisions while each person's private
authority remains independently governed.

## Layers of protection

<ol class="system-flow compact-flow">
  <li><strong>Hardware root</strong><span>Secure boot, measured boot, TPM-backed keys, and future hardware security modules establish device integrity where qualified hardware supports them.</span></li>
  <li><strong>Encrypted storage</strong><span>Keys and context-space boundaries protect data at rest and support selective backup, export, rotation, and deletion.</span></li>
  <li><strong>Isolated services</strong><span>Core, trust, capabilities, inference, channels, and surfaces retain scoped identities and communication paths.</span></li>
  <li><strong>Continuous policy</strong><span>Identity, purpose, recipient, risk, disclosure, and confirmation are evaluated at meaningful boundaries.</span></li>
  <li><strong>Detection and recovery</strong><span>Content-minimized security signals, signed updates, rollback, quarantine, backup, and restore support resilient operation.</span></li>
</ol>

## Local operation and selected services

The node can run models, retrieval, skills, storage, and household integrations
locally according to its hardware profile. Governed external services can
provide inference, transport, research, commerce, or encrypted off-premises
backup. The node selects and scopes each participation through personal policy.

Remote interaction uses outbound-established connections and channel-bound
identity. Administrative services remain on the protected network surface.
Remote access, device synchronization, and backup each have their own contracts
and permissions.

Offline packages can preserve locally available reference guidance and tools
for maintenance, utilities, and emergency preparation. Published provenance,
freshness, jurisdiction, and safety boundaries remain part of that material.

## Storage that can evolve

The storage architecture combines relational authority records, immutable
source artifacts, semantic indexes, working memory, summaries, and archival
tiers. Policy describes where data lives, how long it remains, which derived
representations can be rebuilt, and which backup destinations are eligible.

Replaceable indexes and model-specific representations can be regenerated from
governed sources. Redundant local storage and encrypted off-premises backup
provide complementary recovery paths. Restore exercises produce evidence that
the person can recover identity, policy, context, and service continuity.

## Software today, modular appliance ahead

Ubuntu 24.04 LTS on x86-64 is the approved first appliance target. WSL2 and
Linux virtual machines support development and evaluation. Current evidence is
software and hosted CI evidence on these profiles.

The envisioned household appliance brings modular compute and memory, redundant
storage, networking, radios and sensor gateways, firewall and security
infrastructure, power management, and fit-for-purpose cooling into a distinctive
consumer-grade enclosure. The hardware program will track candidate components,
estimated bill-of-materials cost, power and thermal budgets, compatibility,
serviceability, and qualification status. Custom schematics and design artifacts
are intended for open publication.

Incremental profiles can use available systems and accelerators as the project
builds toward hardware expected in 2027 and 2028. Published compatibility data
will connect each profile to the models, capabilities, latency, energy use, and
evidence it can support.

<aside class="evidence-band" aria-label="Personal node evidence boundary">
  <p><strong>Approved initial target:</strong> Ubuntu 24.04 LTS on x86-64.</p>
  <p><strong>Current evidence:</strong> Software contracts, synthetic fixtures, hosted CI, release artifacts, and backup foundations.</p>
  <p><strong>Future qualification:</strong> Hardware roots, redundant storage profiles, thermal behavior, acoustic performance, power delivery, radio integration, and installation guidance require physical systems and measured evidence.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring personal infrastructure">
  <a href="../privacy-security/"><strong>Review privacy and security</strong><span>See the layered posture and context-space boundaries.</span></a>
  <a href="../backup-recovery/"><strong>Review backup and recovery</strong><span>Follow continuity through backup, restore, export, and deletion.</span></a>
</nav>
