# Model Packs

Phase 1.1 ships lean base images and distributes model weights as **Model Packs** that can be installed offline or fetched online.

## Storage

- Default: `/var/lib/unison/models`
- Override: `UNISON_MODEL_DIR`

## CLI

`unison-models` (from `unison-common`):

- `unison-models list`
- `unison-models verify`
- `unison-models install --path <pack.tgz>`
- `unison-models install --fetch <url-or-alias>`

Aliases for `--fetch` are resolved via `UNISON_MODEL_PACK_ALIAS_MAP_JSON` (alias → URL).

## Boot Enforcement

Set `UNISON_MODEL_PACK_REQUIRED=pack_id@version` to require a pack at boot. Missing/invalid packs emit `modelpack.*` events into the Phase 1 NDJSON trace.

