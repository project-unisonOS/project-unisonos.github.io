# Privacy and security promise

Unison's home node is the primary authority for identity, context, relationships,
memory, policy, credentials, audit records, capabilities, and keys. Every person
has an independent key hierarchy; every shared context space has separate keys.

Unknown identity, purpose, audience, data class, context space, capability, or
channel assurance must deny by default. Remote models and connectors receive only
task-minimum information after an explicit disclosure decision. Sensitive actions
need understandable confirmation and a cancellation or recovery path.

Encrypted backup is designed to be provider-blind: encryption occurs locally,
the provider stores ciphertext and minimal metadata, and the provider does not
hold decryption keys. Exact algorithms, hardware key integration, recovery
ceremonies, and provider partnerships remain subject to security review.

## Honest limits

Unison is not production-ready. The Phase 2 candidate tests governed private/shared
context isolation locally, but it does not yet provide the complete appliance,
encrypted-backup, signed-update, or recovery guarantees described here. When a
person enables a remote model or communication channel,
that provider necessarily receives the minimized information required to perform
the chosen function. Product documentation must identify that boundary clearly.
