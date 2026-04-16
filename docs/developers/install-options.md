# Install Options (Offline / Online)

For the current Milestone 1 production-track release, the supported install route is Ubuntu 24.04 native on x86_64 via the native installer path in `unison-platform`.

Phase 1.1 supports:

- Lean base install (devstack or deployment images)
- Post-install Model Packs for offline-capable weights distribution

Evaluation artifacts such as WSL2, Linux VM, and bare-metal ISO remain secondary channels for testing and demos, not the canonical supported install path.

## Offline

- `unison-models install --path /path/to/pack.tgz`

## Online

- `unison-models install --fetch https://…/pack.tgz`
- Or alias via `UNISON_MODEL_PACK_ALIAS_MAP_JSON`

