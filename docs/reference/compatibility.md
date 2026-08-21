# Compatibility and support status

No physical system, model, peripheral, provider, or modality device is
currently represented as supported. Ubuntu 24.04 LTS, x86-64, and UEFI define
the first appliance candidate boundary.

## Status terms

| Status | Meaning | Promotion authority |
| --- | --- | --- |
| Reference | The complete release gate passes repeatedly on a named, versioned system | Release and hardware qualification owners |
| Compatible | The exact configuration meets the enforced profile and passes the published suite | Maintained compatibility decision |
| Community-tested | External evidence is useful and attributable but has not completed the maintained gate | Evidence review only |
| Unsupported | Outside the declared profile, known incompatible, or not yet qualified | No support claim |
| Archived | A historical route or artifact retained for context | No current installation claim |

## Current matrix

| Area | Candidate or active boundary | Current status | Evidence owner |
| --- | --- | --- | --- |
| Appliance host | Ubuntu 24.04 LTS, x86-64, UEFI | Unsupported preview | `unison-platform`, `unison-hardware` |
| Runtime | Signed 13-service digest-pinned candidate | Software preview | `unison-platform` release assets |
| Development | Ubuntu and WSL2 workspace workflows | Development only | `unison-workspace`, `unison-infrastructure` |
| Models | Signed manifests and synthetic qualification | No supported model profile | `unison-inference`, `unison-platform` |
| Audio and other peripherals | Contract and test plans | No supported device matrix | modality owner, `unison-hardware` |
| Conversation, visual, and Braille | Software contracts and synthetic expressions | No participatory support claim | modality owners and semantic experience evidence |
| Sign, BCI, switch/AAC, and haptics | Modular integration boundary and early research | Experimental or envisioned | modality-specific owner |
| Backup providers | S3-compatible engineering contract | No supported provider | `unison-storage` |
| Health and financial providers | Sandbox and read-only connection contracts | No certified live provider | package and connection owners |

## Candidate software minimums

The signed preview contract currently evaluates:

- Ubuntu 24.04 LTS;
- x86-64 CPU with virtualization support;
- UEFI;
- 4 CPU cores;
- 8 GB RAM;
- 20 GB free storage for the minimum model profile; and
- Docker 26 through 29 with Docker Compose 2.24 or newer.

These are enforced software-contract values for the preview. They do not make a
particular machine compatible. Recommended capacity requires measured latency,
memory, storage, acoustic, thermal, energy, and concurrent-workload evidence.

## Evidence required for a supported matrix

Qualification binds results to the exact system, firmware, CPU, accelerator,
memory, storage, network, peripheral, release, model profile, and test method.
The open physical program covers:

- cold start, reboot, shutdown, suspend, resume, disk pressure, clock skew, and
  dependency loss;
- clean install, interruption, repeat install, repair, update, rollback,
  removal, and factory reset;
- keyboard and non-voice onboarding plus native modality devices;
- firmware, Secure Boot, TPM, storage integrity, thermal, acoustic, and power;
- USB and Bluetooth attachment and reconnection;
- backup and replacement restore; and
- installation from public artifacts using only public documentation.

The versioned matrix and installer must agree before promotion. Community
reports remain community-tested until the maintained gate is repeated.

Review [installation status and paths](../developers/install-unisonos.md), the
[public evidence index](../project/evidence-index.md), or
[`unison-hardware`](https://github.com/project-unisonOS/unison-hardware).
