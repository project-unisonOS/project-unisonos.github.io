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
5. **Inference Broker/Runtime** selects local or remote models under disclosure,
   privacy, latency, accessibility, and cost constraints.
6. **Unison Surface** renders the same semantic meaning through accessible text,
   visual, speech, and other supported experiences.

These are security and responsibility boundaries. They do not require six
containers: the personal-appliance profile can combine modules in-process when
doing so does not weaken isolation.

## A request in motion

The channel proves who is speaking and with what assurance. The Trust Store
derives the active person and context space; request-supplied identity is never
authority. Core prepares a minimal plan. Policy evaluates data, recipient,
purpose, risk, and confirmation. Sandboxed capabilities execute permitted work.
The Surface returns an accessible result, and the audit record explains the
decision without becoming a shadow copy of private data.
