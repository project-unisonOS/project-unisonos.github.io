# Privacy and security promise

Unison's home node is the primary authority for identity, context, relationships,
memory, policy, credentials, audit records, capabilities, and keys. Every person
has an independent key hierarchy; every shared context space has separate keys.

Unknown identity, purpose, audience, data class, context space, capability, or
channel assurance must deny by default. Remote models and connectors receive only
task-minimum information after an explicit disclosure decision. Sensitive actions
need understandable confirmation and a cancellation or recovery path.

The accepted Phase 3 implementation provides this policy boundary for synthetic and
local integration tests. It denies unknown authority, requires a recorded local
alternative check before remote inference, removes undisclosed fields and
credentials, treats external content as untrusted, and uses exact, expiring,
one-use confirmation for external or high-risk actions.

The accepted Phase 6 boundary makes backup provider-blind: AES-256-GCM envelope
encryption occurs locally, manifests are encrypted and signed with Ed25519,
and an independently held checkpoint detects rollback or forged state. Providers
receive ciphertext and residual size/timing/account metadata, never decryption
or recovery keys. Each adult controls an independent local recovery ceremony.

## Honest limits

Unison is not production-ready. The accepted Phase 2 and Phase 3 implementations
test governed private/shared context isolation locally, and Phase 6 passed its
bounded architecture/security gate. It does not yet provide a supported
appliance, backup subscription, signed-update, TPM,
or provider-partnership guarantee. When a
person enables a remote model or communication channel,
that provider necessarily receives the minimized information required to perform
the chosen function. Product documentation must identify that boundary clearly.
