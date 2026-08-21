# Current status

**UnisonOS is pre-release engineering software.** The privacy, household,
workflow, backup, multimodal, installer, and update foundations are increasingly
complete and tested. There is still no supported appliance release for everyday
installation.

The first public software-only appliance preview is now available:
[v0.6.0-preview.1](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1).
It remains unsupported while physical validation and promotion gates are open.

## What is in place

- **Personal and household foundations:** independent identities, assistants,
  private data domains, invitations, explicit shared context spaces, and
  cross-person isolation tests.
- **Privacy and control:** default-deny policy, minimized disclosure, exact
  confirmations, revocable permissions, audit records, and untrusted-content
  handling.
- **Useful workflows:** bounded calendar, mail, commitment, household, contact,
  research, and travel journeys with cancellation and recovery.
- **Interaction foundations:** semantic responses, local speech, captions,
  interruption controls, keyboard operation, high contrast, reduced motion,
  and simplified-language preferences.
- **Backup and recovery:** provider-independent encrypted backup, tamper and
  rollback detection, storage-provider migration, and clean-device restore
  simulations.
- **Replaceable components:** policy-aware model routing and signed, revocable
  capability packages with compatibility and permission review.
- **Governed model lifecycle:** signed per-version model manifests, hard
  task/privacy/hardware eligibility, inspectable routing, untrusted semantic
  proposals, synthetic golden evaluation, bounded canaries, content-free health
  gates, and automatic rollback to a retained prior version.
- **Private source onboarding foundation:** encrypted document and image
  quarantine, private review and correction, source provenance, duplicate and
  version tracking, rollback and deletion, plus read-only OAuth PKCE, SMART
  health sandbox, financial test-provider, selected-folder, and bounded MCP
  connection profiles.
- **Usage-driven taxonomy:** person-scoped signals can propose a tag, subdomain,
  or security domain; activation, signed security review, exact migration
  confirmation, and rollback remain separate governed decisions.

## Private sources and connection foundation

The first three private life operations slices are implemented in software.
You can select multiple documents or capture multiple camera pages, review
their names and safety flags, and admit them to a private encrypted source
library. The intake boundary checks media types, file signatures, archive paths
and expansion, size, and malware policy before admission. Extracted text,
metadata, tables, and barcode values retain exact source-region provenance and
can be corrected without rewriting the original source. Imports can resume or
roll back, and deletion removes the encrypted object and extracted indexes.

The initial Connection Broker requests only declared read-only scopes. It has
profiles for generic OAuth Authorization Code with PKCE, SMART on FHIR, a
financial sandbox, a selected local folder, and bounded MCP resources. Tokens
remain behind opaque per-person handles, incremental sync deduplicates repeated
items, and revocation stops further sync. The browser never asks you to paste a
health or financial provider password.

These are local and sandbox software contracts. Production connection
certification, live provider registrations, OCR quality on supported camera
hardware, and production malware scanning remain release qualification work.

## Model routing and lifecycle status

Unison now defines bounded interpretation, extraction, vision, semantic
construction, synthesis, and conversation tasks. Availability is inventoried
separately from eligibility. Signed immutable manifests describe each exact
model version, artifact, runtime, task support, privacy limits, hardware needs,
license, measured quality and latency, approved risk, limitations, and rollback
compatibility.

The route for each bounded operation records the selected version, minimized
disclosure, rejected candidates, rank evidence, and fallback. Models cannot
broaden context, select a remote provider, create recipients or actions, remove
recovery, or override deterministic facts. High-risk content follows a
deterministic language path.

Candidates run against synthetic golden semantic journeys in shadow before a
bounded canary. Content-free health gates cover contract success, semantic
success, fallback, errors, and latency. A degraded canary returns to the
retained prior version without changing your identity, memory, permissions,
pending actions, or interaction preferences.

This is implemented software with synthetic qualification. Physical CPU, GPU,
RAM, storage, energy, thermal, and realistic contention evidence remains open.
No model and hardware combination is currently supported by the semantic
experience program.

## Private household, health, and financial operations

The household, health, finance, and governed cross-domain software packages are
now implemented over the private source foundation.

Household operations organize products, receipts, manuals, warranties, service
history, renewals, returns, recalls, subscriptions, procedures, and optional
read-only Matter and energy observations. Product matching shows the exact
identifiers compared and its uncertainty. Recall notices require an exact
owned-product match. Purchases stay private until you explicitly share a copy,
and repair or service work remains a draft. Unison does not purchase, schedule
service, or control a physical device through this package.

The private health package normalizes supported FHIR sandbox records, preserves
clinical and self-reported sources, shows contradictions, supports
person-selected descriptive trends, and prepares cited timelines, visit briefs,
and provider-message drafts. Inferred conditions cannot become confirmed
diagnoses. Unison does not diagnose, change medication or treatment, or dismiss
urgent care. Deterministic urgent-language rules direct you toward appropriate
human help without claiming to rule out an emergency.

The read-only finance package reconciles source amounts, distinguishes observed
facts from inferred categories and forecasts, detects duplicate charges, price
changes, overdue refunds, subscriptions, and obligations, and prepares a cited
weekly exception brief. Your private account contributes nothing to household
totals unless you create an explicit contribution rule. Unison cannot move
money, trade, open credit, file taxes, close accounts, or submit disputes.

Cross-domain packets require a purpose, selected fields, named recipients, and
your approval. Removing a link preserves both independent sources. The unified
attention review explains how risk, deadlines, your selected goals, and review
burden affect priority.

The synthetic value baseline meets the current targets with a four-minute first
useful result, 96 percent extraction precision, 90 percent useful-attention
precision, two attention items weekly, complete deletion, 35 estimated minutes
returned, and no boundary or unsafe-action incidents. These are synthetic
software results. A genuinely opted-in human pilot and explicit human package
and provider decisions remain required.

## Appliance release work now implemented

The first support candidate is a native Ubuntu 24.04 LTS, x86-64, UEFI
installation bundle. The current release does not publish WSL2, VM,
bare-metal ISO, or arm64 downloads.

The candidate release path now has:

- one lifecycle owner in `unison-platform` and one signed-update owner in
  `unison-updates`, both pinned by the authoritative workspace;
- a 13-service supported runtime contract that requires immutable image digests,
  removes developer host ports from internal services, and binds its two
  host-facing surfaces to loopback;
- a deterministic release manifest covering source and Compose hashes, service
  digests, host packages and resources, schema/configuration/backup/model
  versions, model-profile hash, and licenses;
- byte-for-byte manifest reproducibility tests and rejection of missing,
  mutable, or placeholder image digests;
- a deterministic Ed25519-signed bundle containing the manifest, Compose
  contract, immutable image environment, host requirements, licenses, and
  model profile;
- pre-privilege bootstrap verification that rejects tamper, missing or extra
  files, substituted trust roots, and service/image reassignment, then binds
  confirmation to the exact bundle, key, installation path, and data path;
- installer preflight checks for the supported OS, architecture, CPU, memory,
  storage, virtualization, UEFI, Docker/Compose, clock, and audio;
- simulated transactional installation with atomic activation, idempotent
  reinstall, interruption recovery, repair, safe uninstall, and separately
  confirmed factory reset, plus a receipt that reconciles the installed tree
  with its release manifest and source commit;
- threshold-signed update metadata with expiration, monotonic channel and target
  versions, channel/hardware binding, artifact integrity, and dual-authority
  root-key rotation; and
- an independently verified staging authorization, pre-update data and receipt
  checkpoint, complete target staging, atomic activation, bounded health
  promotion, safe interruption resume, and automatic or explicit rollback.
- a public unsupported prerelease containing a signed x86-64 bundle, 13
  digest-pinned runtime images, checksums, source correspondence, SPDX
  inventory, provenance, support status, vulnerability evidence, Ed25519
  signatures, and Sigstore evidence;
- keyless signatures and scans for ten source-correspondent project images,
  with current base OS security updates and rejection of fixable critical
  findings; and
- a public-download job that verifies the published bytes, performs an
  installer transaction, and rejects incomplete or tampered mirrors.

Update simulations reject replay, freeze, expiration, wrong-channel metadata,
corrupt artifacts, wrong architecture, target rollback, signed-payload
tampering, invalid root rotation, changed authorization, expired roots, and
insufficient disk. They exercise successful `N-1` to `N`, failed `N` to
`N+1`, migration failure, staged and post-activation interruption, and
replacement-restored state without losing the last known good release or data.

## Adaptive maintenance software boundaries now implemented

Unison can now build a privacy-minimized profile of the current device, evaluate
content-free health indicators, match authoritative security evidence to exact
installed component versions, forecast capacity pressure, and explain software,
configuration, model, or compatible hardware adjustments.

The System wellbeing experience reports security, reliability, performance,
capacity, compatibility, and improvement opportunities. Recommendations include
the measured need, expected effect, alternatives, authority level, confirmation,
confidence, and rollback information. Memory pressure recommends a smaller or
more efficient model before suggesting a RAM purchase. Hardware candidates fail
closed unless their architecture, support tier, upgrade topology, firmware, and
power requirements match the device profile.

The default autonomy is Recommend. You can grant a narrow, revocable
maintenance window for reversible service recovery, disposable housekeeping,
signed patch staging, or restoration of a last-known-good model or
configuration. The Lifecycle boundary independently checks the exact device,
action class, time window, action and downtime budgets, signed artifact,
checkpoint, health gate, rollback, and circuit breaker. Every attempted action
produces a receipt.

Reviewed community sources can now produce sandboxed, content-hashed claims.
Unison clusters duplicates, records corroboration and conflicts, and may
propose a bounded local test. External content remains untrusted and can never
create a grant, approve an artifact, or invoke maintenance.

Eligibility checks now cover OS packages, containers, drivers, model runtimes,
models, capabilities, and data/configuration. Firmware stays blocked until
recovery is verified on the exact hardware. System wellbeing also exposes
allowlisted maintenance history and discovery-only test proposals.

The maintenance pieces are now connected into one restart-safe appliance
workflow. An authenticated device owner can grant one reversible action for a
short window, revoke it, or defer a recommendation. The renderer only queues
that decision. Appliance Lifecycle independently verifies the grant, signed
artifact, checkpoint, health gate, and rollback before changing anything.
Grants, budgets, cooldowns, circuit breakers, decisions, and receipts persist
across service restarts.

The signed preview bundle now contains the maintenance service and hourly
timer. Its release-signed source registry begins with read-only Unison release,
Ubuntu security notice, GitHub reviewed advisory, and Hacker News discovery
feeds. Collectors enforce HTTPS, signed host limits, redirect and size checks,
JSON parsing, content hashes, and private local snapshots. Hacker News remains
discovery-only and cannot authorize an action.

## What is still required

These controls are implementation and CI evidence. A support announcement
requires the remaining promotion gates.
Before promotion, the project still needs:

- promotion of the preview image digests and trust roots into a supported
  channel after the remaining gates pass;
- deeper installer onboarding, repair, export, backup, and accessible first-run
  integration;
- real promoted update downloads, reboot health gating, repeated physical
  upgrade and rollback cycles, offline updates, and revocation procedures;
- two named reference systems and a versioned compatibility matrix;
- physical audio, firmware, Secure Boot, TPM, suspend, thermal, power, backup,
  restore, install, update, rollback, removal, and factory-reset results; and
- a time-bounded opt-in pilot, calibration on real workloads, and an explicit
  human decision before promoting any automatic action class.
- live-provider certification and a genuinely opted-in value pilot for the
  implemented household, health, and financial packages.

Seventeen physical checks are tracked separately so CI or simulation cannot be
mistaken for hardware acceptance.

## What that means for you

You can inspect the contracts, run the development stack, and evaluate the
native preview. You should not yet depend on UnisonOS as a supported production
appliance or put irreplaceable personal data into an evaluator installation.

Continue with the [appliance release lifecycle](developers/appliance-release-lifecycle.md),
[current download](developers/releases.md),
[installation status](developers/install-unisonos.md), or
[compatibility guidance](reference/compatibility.md).
