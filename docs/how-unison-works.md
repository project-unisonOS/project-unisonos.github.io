# How Unison works

The approved appliance topology has six principal boundaries:

1. **Unison Core** understands a request, assembles relevant context, plans work,
   and produces a semantic outcome.
2. **Personal Data and Trust Store** binds identity, governs private and shared
   data, brokers keys and credentials, makes policy decisions, and records audit evidence.
3. **Capability Host** contains tools and connectors so they receive only the
   authority and data needed for a task.
4. **Channel Gateway** normalizes local and remote conversations, binds channel
   identities, rejects replays, and enforces assurance requirements.
5. **Inference Broker/Runtime** evaluates signed model manifests and selects an
   eligible local or remote model for each bounded task under disclosure,
   privacy, risk, hardware, latency, license, support, and cost constraints.
6. **Unison Surface** renders the same semantic meaning through accessible text,
   visual, speech, and other supported experiences.

These are security and responsibility boundaries. The personal-appliance
profile can combine modules in fewer containers while preserving isolation.

## A request in motion

The channel proves who is speaking and with what assurance. The Trust Store
derives the active person and context space; request-supplied identity is never
authority. Core prepares a minimal plan. Policy evaluates data, recipient,
purpose, risk, and confirmation. Sandboxed capabilities execute permitted work.
The Surface returns an accessible result, and the audit record explains the
decision without becoming a shadow copy of private data.

## How models contribute

Models can interpret, extract, describe, synthesize, and propose natural
language or semantic structure. Their output remains untrusted. Unison checks
source freshness, exact facts, recipients, available actions, recovery, and
provenance before accepting a contribution. Exact and high-risk language stays
under deterministic platform control.

Each model version has a signed manifest. Availability does not make it
eligible. The Inference Broker evaluates the task, privacy boundary, offline
state, current hardware, measured latency and quality, license, support state,
and cost before applying an inspectable ranking. Remote disclosure is limited
to the fields authorized for that operation.

Candidates pass synthetic golden semantic journeys in shadow before a bounded
canary. Content-free health signals can trigger automatic rollback to the
retained prior version. Model replacement does not replace your identity,
memory, permissions, pending actions, or interaction preferences.

These governance and rollback controls are implemented in software and tested
with synthetic fixtures. No model and hardware combination has completed the
physical qualification required for a supported appliance matrix.
