# Compatibility

No physical configuration is currently represented as supported. Ubuntu 24.04
LTS, x86-64, and UEFI define the first candidate boundary.

## Support tiers

| Tier | Meaning |
| --- | --- |
| Reference | A named system on which the complete release gate is repeated |
| Compatible | A configuration that meets the enforced profile and passes the published suite |
| Community-tested | Useful external evidence that has not completed the maintained support gate |
| Unsupported | Known incompatible or outside the declared target |

## Candidate minimums

- Ubuntu 24.04 LTS
- x86-64 CPU with virtualization support
- UEFI
- 4 CPU cores
- 8 GB RAM
- 20 GB free storage for the minimum model profile
- Docker 26 to 29 and Docker Compose 2.24 or newer

These are enforced software-contract values. Support for a particular machine
requires separate evidence. Recommended capacity will be set from measured latency,
memory, storage, acoustic, thermal, and energy results.

## Physical evidence still pending

The qualification ledger contains 17 tests covering:

- cold start, reboot, shutdown, disk pressure, clock skew, and dependency loss;
- clean install, interruption, repeat install, repair, removal, and reset;
- keyboard, screen reader, captions, and non-voice onboarding;
- real update and automatic rollback cycles;
- firmware, Secure Boot, TPM, storage, thermals, and power;
- USB and Bluetooth microphones and speakers;
- suspend, resume, and peripheral reconnection;
- backup and replacement restore;
- public-download installation; and
- a full reference-matrix pilot.

Installer warnings and this page will eventually be generated from the same
versioned matrix. Until that matrix contains candidate-bound lab records, no
model or peripheral should be inferred as supported.
