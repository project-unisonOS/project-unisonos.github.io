# Installation status and paths

UnisonOS has one public software preview and no supported production
installation. This page is the canonical public router for installation,
evaluation, and development paths.

## Choose a path

| Your goal | Current path | Status |
| --- | --- | --- |
| Inspect the release without changing a system | Verify the public assets and evidence | Available, unsupported preview |
| Evaluate the native appliance transaction | Use a disposable Ubuntu 24.04 LTS x86-64 UEFI system | Available, unsupported preview |
| Develop Unison components | Use `unison-workspace` on Ubuntu or WSL2 with Docker | Active development path |
| Install an everyday household appliance | Wait for a promoted release and named compatible hardware | Not available |
| Use a WSL image, VM image, or installer ISO | Review archived engineering history only | Archived, no current artifact |

The current candidate is
[`v0.6.0-preview.1`](https://github.com/project-unisonOS/unison-platform/releases/tag/v0.6.0-preview.1),
published July 24, 2026. Keep irreplaceable personal information out of an
evaluator installation.

## Evaluate the public preview

The preview targets Ubuntu 24.04 LTS on x86-64 UEFI hardware. Download the
bundle, `SHA256SUMS`, its Ed25519 signature, and the preview public key from the
same release. Verify the artifact and review its exact system-change plan before
installation.

The candidate is owned by
[`unison-platform`](https://github.com/project-unisonOS/unison-platform) and
contains:

- the native installer and `unisonctl` lifecycle entry point;
- `compose/compose.supported.yaml`;
- one digest-pinned image reference for every required service;
- a deterministic release manifest and signed bundle;
- pre-privilege verification and an exact system-change plan; and
- transactional activation and an installation receipt.

Follow the [preview evaluation walkthrough](evaluate-preview.md). It offers
artifact-only, integrity, and isolated-install depths without implying support.

## Develop from the workspace

The development path uses
[`unison-workspace`](https://github.com/project-unisonOS/unison-workspace) as
the version and integration authority. It pins component repositories and
provides bootstrap, doctor, startup, smoke-test, security-overlay, and shutdown
commands.

Continue with [developer setup](onboarding.md), then use the
[workspace and repository guide](workspace-and-repos.md). Development
environments do not establish appliance or hardware compatibility.

## Understand what the preview proves

Automated evidence covers platform preflight, deterministic release inputs,
artifact signatures and digests, public-download verification, simulated
transactional installation, interruption recovery, repair, safe software
removal, and separately confirmed factory reset.

It does not establish clean physical installation, reboot and power recovery,
accessible first run, microphone and speaker behavior, TPM operation, thermal
and energy limits, update and rollback on a physical device, replacement
restore, or supported household use.

Review the [appliance release lifecycle](appliance-release-lifecycle.md),
[compatibility reference](../reference/compatibility.md), and
[public evidence index](../project/evidence-index.md) for exact gates.

## Historical channels

The current release publishes no WSL distribution, VM disk image, or installer
ISO. Their historical pages remain available as archived engineering context:

- [archived WSL2 channel](install-wsl2.md);
- [archived Linux VM channel](install-linux-vm.md); and
- [archived bare-metal ISO channel](install-bare-metal.md).

Historical artifacts and instructions do not become current installation paths.
