# Security reference

This reference maps Unison's security posture to its technical authority
boundaries and current evidence. The [privacy and security narrative](../privacy-security.md)
explains what these protections mean for a person.

## Security objectives

Unison is designed to preserve:

- independent person-level authority inside a household;
- confidentiality and compartmentalization of context spaces;
- integrity and provenance of software, models, sources, decisions, and receipts;
- availability through checkpoints, rollback, backup, restore, and replaceable
  components;
- least authority for models, tools, channels, renderers, and external services;
  and
- understandable confirmation and recovery for consequential work.

## Authority boundaries

| Boundary | Owns | Security requirement |
| --- | --- | --- |
| Trust layer | person, device, service, and channel identity | Authentication and assurance establish the principal before policy evaluation. |
| Policy | consent, purpose, disclosure, confirmation, retention, and action rules | Decisions are explicit, versioned, deny by default, and independent from models and renderers. |
| Context and storage | governed records, spaces, key-domain handles, provenance, and lifecycle | Authorization filters records before semantic ranking. Derived indexes never become access-control authorities. |
| Capability Host | tools, connectors, credentials, and external actions | Each invocation receives an exact grant for data, purpose, recipient, authority, and duration. |
| Inference | local and external model execution | Models receive minimized context and contribute proposals without identity, policy, consent, or action authority. |
| Channel Gateway | local and remote transport | Identity binding, replay protection, rate controls, assurance, and disclosure policy apply before requests enter core. |
| Unison Surface | native visual, conversational, Braille, and future expressions | Renderers preserve the semantic outcome and relay person decisions without granting access or executing actions. |
| Appliance lifecycle | install, update, maintenance, rollback, and removal | Signed artifacts, exact authorization, checkpoints, bounded health gates, receipts, and recovery govern system change. |

## Person and context isolation

Each person has an independent identity and namespace for assistants, keys,
credentials, data, caches, and indexes. Household membership establishes a
relationship and supplies no automatic access to another person's private
context.

Context spaces define purpose, membership, fields, data class, sharing,
retention, backup, recovery, and key-domain handling. Cross-domain work uses an
explicit purpose-bound link containing only selected fields. Revocation,
correction, deletion, retention expiry, and key rotation invalidate affected
derived views and produce receipts.

Usage-driven taxonomy can propose a tag, subdomain, or protected security
domain. A model can recommend organization. Activation, security controls, and
record migration require separate governed decisions. See
[taxonomy evolution](../taxonomy-evolution.md).

## Cryptography and key handling

- Backup objects use locally created AES-256-GCM envelopes and Ed25519-signed,
  encrypted manifests.
- Release bundles and update metadata use signed manifests and verified trust
  roots. Published preview images include keyless signature and supply-chain
  evidence.
- Security-domain migration uses distinct logical key-domain handles and
  re-encrypts selected stored content through the key-broker boundary.
- Credentials remain behind opaque references and are injected at the transport
  boundary for an authorized operation.
- Rotation, revocation, rollback detection, and independently held checkpoints
  form part of the key lifecycle.

Current tests establish software behavior with development key custody.
TPM-backed keys, Secure Boot, measured boot, hardware security modules, and
physical recovery ceremonies require qualification on named hardware.

## Service and workload isolation

The supported runtime contract uses immutable image digests, separates internal
services from developer host ports, and binds host-facing surfaces to loopback.
Service, trust, capability, inference, channel, and experience responsibilities
remain separated through versioned contracts, including when a personal-node
profile combines modules into fewer containers.

Container and dependency workflows scan source-correspondent images and reject
fixable critical findings at the release gate. Non-root execution, restricted
permissions, network policy, secret injection, and service authentication are
deployment controls that must be verified for each promoted profile.

## Software supply chain

The public preview carries:

- digest-pinned runtime images and deterministic release inputs;
- checksums, source correspondence, SPDX inventory, and provenance;
- Ed25519 release signatures and Sigstore evidence;
- vulnerability evidence tied to the candidate; and
- public-download verification that rejects incomplete or modified assets.

Threshold-signed update metadata covers expiration, version monotonicity,
channel and hardware binding, artifact integrity, and root-key rotation.
Staging verifies complete targets before activation. Checkpoints, bounded health
promotion, safe resume, and rollback protect the last known good release.

## External content and services

Websites, messages, documents, provider data, tool responses, model output, and
community claims enter as untrusted evidence with provenance. They cannot grant
authority, alter policy, select a recipient, approve an artifact, or invoke a
physical action.

External participation receives minimized fields under an explicit disclosure
decision. The decision can include provider, recipient, purpose, consequence,
reversibility, cost, and available local route. Privacy relay, VPN, and
de-identified query profiles are intended options whose residual metadata and
provider limitations remain visible.

## Detection and response

Content-minimized signals can cover authentication failures, replay attempts,
policy denials, integrity changes, vulnerable installed components, health-gate
failures, circuit breakers, and unusual service behavior. Primary private
content stays out of operational telemetry.

The response path can restrict a capability, revoke a grant, rotate a
credential, quarantine a component, stage a signed update, roll back a change,
or restore a verified checkpoint. Each action remains bounded by the authority
and recovery requirements of its owner. Firmware changes stay blocked until
vendor recovery is proven on the exact hardware.

## Evidence status

| Maturity | Evidence |
| --- | --- |
| Implemented | Unit, simulation, local integration, and hosted CI cover person and context isolation, deny-by-default policy, capability grants, exact confirmations, governed memory, signed releases, update rollback, encrypted backup, and synthetic incident paths. |
| Being proven | Physical boot and key custody, long-running intrusion monitoring, reboot health gates, repeated recovery exercises, supported model profiles, representative modality devices, and participatory trust evaluation. |
| Envisioned | Qualified hardware security profiles, supported security operations, governed threat-intelligence feeds, privacy relay profiles, and independently reviewed household-appliance deployments. |

Passing software checks establishes the listed software behavior. It does not
establish production security, physical resistance, provider certification, or
supported appliance operation.

## Vulnerability reporting

Report suspected vulnerabilities privately through the repository's
[security policy](https://github.com/project-unisonOS/unison-workspace/security/policy).
Include the affected repository and revision, observed behavior, reproduction
information, and potential impact when it is safe to do so. Public issues are
appropriate after coordinated disclosure or when the report contains no
sensitive security detail.

Continue with the [trust decisions](../trust-decisions.md),
[backup and recovery](../backup-recovery.md), or
[appliance release lifecycle](../developers/appliance-release-lifecycle.md).
Evaluators diagnosing a possible security boundary failure should follow the
[troubleshooting and incident guide](../operators/troubleshooting-incidents.md).
