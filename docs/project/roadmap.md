# Roadmap

This roadmap describes the order of work, not a release date. Passing a software
or CI gate does not substitute for physical-device evidence.

## Now: complete the appliance release path

### Deterministic runtime and release inputs

The digest-required runtime, reproducible manifest, signed deterministic bundle,
pre-privilege verifier, and installation receipt are in place. The first public
preview now attaches digest-pinned images, image signatures, an SPDX inventory,
provenance, source correspondence, checksums, release notes, support status,
and vulnerability evidence to one immutable candidate. The release pipeline
verifies the published assets again from their public location.

Next, the project must qualify that exact candidate on physical hardware,
complete the remaining product journeys and release procedures, and make an
explicit human promotion decision before describing any channel as supported.

### Installer and first run

Preflight, signed bootstrap verification, exact system-change preview, receipt
reconciliation, and filesystem transaction simulations are in place. Remaining
work includes local owner enrollment, recovery material, privacy choices,
audio/model selection, backup setup, accessible onboarding, export, and
complete repair/removal integration.

### Signed updates and rollback

Threshold-signed metadata, independently verified staging authorization,
checkpointed complete-target staging, atomic activation, bounded health
promotion, safe resume, and automatic or explicit rollback simulations are in
place. Remaining work connects these controls to real promoted downloads,
physical reboot cycles, release notes, offline updates, revocation, and
end-of-support procedures.

### Hardware qualification

The project will name at least two reference x86-64 systems and publish support
tiers: reference, compatible, community-tested, and unsupported. Installer
enforcement and public guidance will derive from the same versioned matrix.
Seventeen physical checks are waiting for compatible hardware.

### Release candidate and pilot

The candidate must pass clean install, first run, supported journeys, update,
rollback, backup, replacement restore, support-bundle generation, uninstall,
factory reset, accessibility review, security review, and a reliability pilot.
Only an explicit human decision can promote it.

## In progress: adaptive maintenance qualification

The adaptive-maintenance software slices are implemented:

- versioned contracts and deterministic adversarial simulation;
- private device inventory and content-free system health observations;
- exact installed-component matching against authoritative security evidence;
  and
- locally relevant recommendations, capacity forecasts, hardware compatibility
  checks, and the System wellbeing experience;
- exact revocable grants, maintenance windows, budgets, signed staging,
  checkpoints, canaries, health gates, receipts, circuit breakers, and
  rollback for reversible action classes;
- sandboxed community claim collection, corroboration, conflict detection, and
  local test proposals with no execution authority; and
- full-stack eligibility, calibration metrics, support runbooks, and pilot
  promotion gates.

The remaining gates require physical qualification on the named reference
systems, a real opt-in pilot, and explicit human promotion of each automatic
action class. Firmware remains blocked until vendor recovery passes on the
exact hardware.

## Next: broaden a proven base

- Additional communication channels and provider integrations with the same
  identity, disclosure, confirmation, replay, and revocation boundaries.
- Additional local and remote model profiles with explicit data, cost, risk,
  and availability policies.
- More capabilities and daily workflows with recoverable external execution.
- Representative assistive-technology research and hardware qualification.
- ARM64 and additional appliance forms only after the x86-64 lifecycle passes.

## Later exploration

- Multi-device and multi-writer synchronization.
- Federation between independently governed homes.
- Richer spatial, haptic, sign, Braille, switch, and AAC interaction.
- Carefully bounded smart-home and physical actuation.

## Where to follow implementation

- [Current status](../current-status.md)
- [Appliance release lifecycle](../developers/appliance-release-lifecycle.md)
- [Platform repository](https://github.com/project-unisonOS/unison-platform)
- [Update repository](https://github.com/project-unisonOS/unison-updates)
- [Authoritative workspace plan](https://github.com/project-unisonOS/unison-workspace/blob/main/docs/planning/UNISON_IMPLEMENTATION_PLAN.md)
