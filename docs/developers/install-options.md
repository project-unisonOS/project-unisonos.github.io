# Install Options (Offline / Online)

Phase 1.1 supports:

- Lean base install (devstack or deployment images)
- Post-install Model Packs for offline-capable weights distribution

## Offline

- `unison-models install --path /path/to/pack.tgz`

## Online

- `unison-models install --fetch https://…/pack.tgz`
- Or alias via `UNISON_MODEL_PACK_ALIAS_MAP_JSON`

