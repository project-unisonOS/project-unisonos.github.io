# How Unison works

<section class="story-hero" aria-labelledby="works-introduction">
  <p class="story-kicker">Intent becomes a governed outcome</p>
  <h2 id="works-introduction">Natural interaction, inspectable execution</h2>
  <p class="story-lead">Unison accepts a person's intent in the modality available to them, assembles a governed route through context, skills, tools, and models, and returns an experience suited to that person and situation.</p>
</section>

## Intent is the organizing unit

Intent describes the outcome a person is seeking together with the context that
shapes it: identity, needs, preferences, timing, constraints, relationships, and
the experience available in the moment. A spoken sentence, Braille command,
gesture, image, device event, or structured workflow can all express intent.

The intent remains centered on the human objective as Unison selects context,
policy, deterministic capabilities, governed inference, and a native output
modality. This allows the route and expression to change while preserving what
the person is trying to accomplish.

## A request in motion

<ol class="system-flow">
  <li><strong>Receive and interpret intent</strong><span>A local or remote channel captures speech, text, touch, Braille, visual input, device events, or another supported modality and maps it into a proposed human objective.</span></li>
  <li><strong>Establish the person and context</strong><span>The trust layer resolves identity, assurance, active context spaces, consent, preferences, needs, and the policies that apply.</span></li>
  <li><strong>Assemble a route</strong><span>Core selects reliable workflows where they fit and composes bounded inference, retrieval, or planning for novel parts of the request.</span></li>
  <li><strong>Grant capabilities</strong><span>Tools and connectors receive the data, credentials, purpose, and duration authorized for their portion of the work.</span></li>
  <li><strong>Evaluate the outcome</strong><span>Policy checks facts, sources, recipients, risk, confirmation, provenance, and recovery before an action or response proceeds.</span></li>
  <li><strong>Compose the experience</strong><span>The semantic result becomes a native conversational, visual, Braille, tactile, or future-modality experience.</span></li>
  <li><strong>Record useful evidence</strong><span>A content-minimized receipt explains important decisions, actions, confirmations, and recovery paths.</span></li>
</ol>

## Six cooperating responsibilities

<div class="story-grid boundary-grid">
  <section><h3>Unison Core</h3><p>Understands requests, assembles relevant context, plans bounded work, and produces semantic outcomes.</p></section>
  <section><h3>Personal Data and Trust Store</h3><p>Binds identity, governs private and shared context, brokers keys and credentials, evaluates policy, and retains audit evidence.</p></section>
  <section><h3>Capability Host</h3><p>Contains tools and connectors within scoped grants for data, authority, purpose, and time.</p></section>
  <section><h3>Channel Gateway</h3><p>Normalizes local and remote interaction, binds channel identities, detects replay, and applies assurance requirements.</p></section>
  <section><h3>Inference Broker and Runtime</h3><p>Selects eligible local or remote models from signed manifests and task-specific constraints.</p></section>
  <section><h3>Unison Surface</h3><p>Composes the same governed meaning through native experiences for each person, device, and modality.</p></section>
</div>

The personal-appliance profile can combine modules into fewer containers while
retaining their security controls and responsibilities.

## Authority stays explicit

Identity authority belongs to the trust layer. Consent and policy authority
belong to the governed personal node. Capabilities act through scoped grants.
Models contribute interpretations, structures, descriptions, and proposals.
The semantic outcome carries meaning, uncertainty, available actions, and
recovery into each renderer.

This division supports replaceability. A new model, tool, channel, or modality
adapter can enter through a versioned contract while the person's identity,
memory, permissions, pending actions, and interaction preferences remain
continuous.

## Model routing as a governed capability

Each model version has a signed manifest describing its origin, interface,
license, support state, and measured behavior. The Inference Broker evaluates
the task, context policy, offline state, hardware, latency, quality, cost, and
authorized disclosure before applying an inspectable ranking.

Candidate versions run synthetic semantic journeys in shadow and then progress
through bounded canaries. Content-free health signals support rollback to a
retained version. Exact facts and higher-risk actions receive deterministic
validation and policy-controlled confirmation.

## Capabilities can evolve through use

A novel request can begin with bounded inference. Repetition can reveal stable
structure such as familiar inputs, recurring tools, predictable policy checks,
or a consistent output. Unison can turn that structure into a proposal with a
clear purpose, permissions, tests, and evidence requirements.

The person reviews the proposal before activation. Approved capabilities are
versioned and measured. Future requests can use the reliable route while the
governed inference path remains available for changing circumstances.

## Recovery is part of the result

Meaningful actions include confirmation, receipts, and recovery information
appropriate to their risk. The system can explain the active person, context
space, capability, recipient, important evidence, and available next action
while retaining content-minimized operational logs.

<aside class="evidence-band" aria-label="Architecture evidence">
  <p><strong>Software evidence:</strong> Governance, routing, semantic journeys, capability grants, and rollback controls are exercised with synthetic fixtures and hosted CI.</p>
  <p><strong>Qualification ahead:</strong> Supported model and hardware combinations require physical measurement, representative-device evaluation, and published compatibility evidence.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring the system">
  <a href="../personal-node/"><strong>See where continuity lives</strong><span>Explore the personal node and its protection layers.</span></a>
  <a href="../architecture/overview/"><strong>Read the architecture overview</strong><span>Continue into component contracts and deployment responsibilities.</span></a>
</nav>
