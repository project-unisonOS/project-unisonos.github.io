# BCI Overview

UnisonOS treats brain-computer interface (BCI) input as a first-class modality alongside keyboard, pointer, voice, gaze, and touch. This page summarizes current capabilities, repos, and how to try it in devstack.

## What exists today
- Service: [`unison-io-bci`](https://github.com/project-unisonOS/unison-io-bci)
  - Ingest: LSL streams, BLE/serial discovery with seeded profiles (Muse-S/Muse-2/OpenBCI) and streaming stubs.
  - Decoders: window/RMS, per-device thresholds; registry exposed via `/bci/decoders`.
  - Endpoints: `/bci/devices{attach,get}`, `/bci/decoders`, `/bci/intents` (WS), `/bci/raw` (WS, stream/limit), `/bci/export` (XDF/EDF), `/bci/hid-map`, health/metrics.
  - Security: JWT/consent middleware; scopes `bci.intent.subscribe`, `bci.raw.read`, `bci.export`, `bci.hid.map`, `bci.device.pair`, `bci.profile.manage`.
  - Extras: caps.report emission, HID mapping, raw snapshots, device profile registry, parsers for Muse/OpenBCI CSV.
- Specs/Docs: `unison-docs/dev/BCI_INTEGRATION.md`, `unison-docs/dev/specs/bci-permissions.md`, `unison-docs/dev/specs/schemas/event-envelope.md` (`bci.intent`, `input.hid`), `unison-docs/dev/startup-modality.md`.

## Try it in devstack (MVP)
1) Clone workspace and start devstack from `unison-workspace`:
   - Development mode: `./scripts/up.sh`
   - Security overlay mode: `./scripts/up-security.sh` (no host ports; access via in-network smoke or `docker compose exec`)
2) `unison-io-bci` endpoints (default port `8097` in devstack):
   - `GET /health`, `GET /ready`
   - `WS /bci/intents` (requires `bci.intent.subscribe` scope)
   - `WS /bci/raw?stream=<id>&limit=100` (requires `bci.raw.read`)
   - `POST /bci/devices/attach` with optional decoder config
   - `GET /bci/decoders`
   - `POST /bci/export` (requires `bci.export`)
   - `POST /bci/hid-map` (requires `bci.hid.map`)
3) Device profiles auto-attach on BLE/serial detection; LSL streams are ingested automatically.

## Security & privacy
- Default scopes are required for raw, intents, export, HID; consent and policy are expected to gate these.
- Raw data stays local; exports are opt-in and scoped; profiles/calibration should be stored encrypted (`unison-context`/`unison-storage`).

## Roadmap highlights
- Add tested BLE/serial streaming for specific headsets, richer decoders (SSVEP/SMR), per-user profiles/HID mappings.
- Linux/WSL CI to run `unison-io-bci` tests (auth/export/raw).
- UI/UX hooks in renderer/VDI for BCI control mode and indicators.
