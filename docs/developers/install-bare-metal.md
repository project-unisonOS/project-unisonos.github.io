# Install (Bare Metal)

Download the `v0.5.0-alpha.N` bare-metal ISO from:
`https://github.com/project-unisonOS/unison-platform/releases/tag/v0.5.0-alpha.N`

Expected asset names:
- `unisonos-baremetal-v0.5.0-alpha.N.iso.part00` (and subsequent `part*`)
- `unisonos-baremetal-v0.5.0-alpha.N.iso.REASSEMBLE.txt`
- `SHA256SUMS-v0.5.0-alpha.N.txt`

## Install

1. Reassemble the ISO:
   - `cat unisonos-baremetal-v0.5.0-alpha.N.iso.part* > unisonos-baremetal-v0.5.0-alpha.N.iso`
2. Flash the ISO to a USB drive (Rufus/balenaEtcher or `dd`).
2. Boot the target machine from USB.
3. Follow the installer prompts, then reboot.

## Access

- Renderer UI: `http://<device-ip>:8092`

## Login

- Default user: `unison`
- Default password: `unison` (alpha evaluator default; change immediately for real installs)

For deeper internals, see `unison-docs/dev/deployment/install-bare-metal.md` in the `unison-docs` repo.
