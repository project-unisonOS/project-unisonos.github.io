# People, relationships, and context spaces

Knowing that two people are family, colleagues, or friends helps Unison choose
tone and relevant context. It does not grant either person access to the other's
private information.

Each assistant starts with a private space. Sharing creates or references an
explicit context space with a purpose, members, data boundaries, and a distinct
key domain. Examples might include a household grocery list, a trip with friends,
or a project with colleagues. Co-location, family membership, inference, and
device-administrator status never silently promote private records into a shared
space.

## Accepted Phase 2 foundation

The accepted implementation applies these rules through a versioned contract and durable
local repository. Search starts from a person's private space. Prompt construction
requires an explicit authorized space and purpose. Sharing makes an auditable copy
in a shared space while leaving the private source private. Invitations require
acceptance; member removal revokes access and advances the space key version.

People can inspect what is known, why it is known, where it is stored, and who can
access it, then correct, delete, or explicitly share it. The web controls use
labels, native keyboard controls, confirmation checkboxes, cancellation, and a
semantic status region. The final Phase 2 gate is approved and the implementation is
not yet a supported release.

The first household model is for independently consenting adults. Child,
dependent, caregiving, incapacity, and emergency-access roles require a dedicated
design and safety review and are not represented as ordinary administrator access.

## Phase 4 review candidate

The current candidate composes two separate adult assistants on one synthetic
Ubuntu appliance profile. Each receives distinct identity, key, credential, data,
cache, index, private context, audit, and backup-policy namespaces. Both can add
calendar events and grocery items to one explicit household space. Coordination
reports that it reads zero private sources, and cross-person probes use the same
denial as nonexistent-resource probes.

The candidate also adds per-assistant queue, concurrency, CPU, and memory budgets
so one assistant cannot monopolize the shared scheduler. Invitation, removal,
share preview, shared artifacts, audit, cancellation, and recovery have semantic,
keyboard-native controls and status announcements.

This is published for architecture/security review, not as a supported release.
It does not claim protection from a compromised host administrator, production
timing-side-channel certification, child/caregiving models, remote channels, or
provider-blind backup.
