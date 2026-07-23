# Current status

**Overall maturity: pre-release engineering.** Phases 0 through 6 are complete.
Phase 7 bounded assistant workflows passed their engineering gate on
2026-07-23. They remain pre-release and are not a supported production service.
The Phase 6 provider-blind backup and replacement-device restore boundary
passed its architecture/security gate on 2026-07-23. The Phase 5 Channel
Gateway and Telegram remote-text boundary passed
its architecture/security gate on 2026-07-21.
The Phase 4 architecture/security gate passed on 2026-07-21. The Phase 3 architecture/security
gate passed on 2026-07-21. The
multi-person identity and trusted request-binding gate passed after publication,
fresh-clone validation, and human acceptance; this is still not a supported
product release.

## Implemented foundations

- Multiple Python service prototypes and shared JSON contracts.
- Unit coverage for orchestration, policy, communications, capabilities, and rendering.
- Docker Compose development topology and native-appliance experiments.
- Semantic multimodal response and accessibility-oriented web foundations.
- Transactional people, assistant instances, households, memberships, devices,
  channels, workloads, sessions, passkeys, invitations, and per-person isolation handles.
- Signed principal context with protected-service audience, revocation, and
  caller-identity mismatch enforcement.
- Accessible first-person enrollment and additional-adult invitation foundations.
- An accepted Phase 2 implementation for private/shared context spaces, non-authorizing
  relationship context, governed memory, personal charters, goals, commitments,
  explicit record sharing, correction, deletion, retention, and export.
- Two-person canary tests across memory, summary, index, search, prompt, and export,
  plus semantic keyboard-native context/privacy controls.
- An accepted Phase 3 implementation for default-deny trust decisions, disclosure
  minimization, one-use confirmation, task credentials, bounded capability
  authority, untrusted-content handling, and accessible decision review.
- An accepted Phase 4 implementation for two independent adult assistants on one node,
  with explicit shared calendar/grocery coordination, cross-person canary tests,
  minimized household administration, fair resource quotas, and accessible
  invitation/removal/share-preview controls.
- The accepted Phase 5 boundary for private-chat Telegram long polling, strong local
  pairing, per-person encrypted credentials and bindings, replay/rate/outage
  defenses, low-assurance step-up, draft-first outbound messaging, revocation,
  accessible disclosure, and a no-public-listener deployment profile.
- The accepted Phase 6 boundary for independent person/shared-space encrypted
  backups, signed anchored lineage, hostile-provider detection, retention,
  encrypted export and deletion, provider migration, and clean-device restore
  with revocation and key rotation.

## Approved, not yet implemented end to end

- Consolidated six-boundary appliance topology.
- A supported Ubuntu 24.04 x86_64 appliance installer and update channel.

The accepted Phase 2 implementation builds governed relationship context spaces
on the completed Phase 1 identity boundary, but it is not a supported product
release yet. The accepted Phase 5 boundary does not turn
Telegram into a high-assurance or end-to-end encrypted surface. It also does not
make the accepted Phase 6 boundary a supported backup service or deliver a
supported downloadable appliance. Public pages use **implemented**,
**experimental**, **planned**, and **long-term vision** to distinguish evidence
from intent.
