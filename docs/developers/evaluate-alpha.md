# Alpha Evaluation

UnisonOS `v0.5.0-alpha.N` is intended for developer evaluation: installable, boots to “ready”, and end-to-end interaction works — with expected rough edges.

## Choose an artifact

- **WSL2**: fastest path for Windows developers (recommended if you already use Docker Desktop + WSL2).
- **Linux VM**: isolated evaluation environment; good for demos and experimentation.
- **Bare metal ISO**: closest to real hardware behavior; use for device validation.

## Download

Use the GitHub Release `v0.5.0-alpha.N` in `unison-platform`:
`https://github.com/project-unisonOS/unison-platform/releases/tag/v0.5.0-alpha.N`

Required assets include:
- `unisonos-wsl2-v0.5.0-alpha.N.*`
- `unisonos-linux-vm-v0.5.0-alpha.N.*`
- `unisonos-baremetal-v0.5.0-alpha.N.iso.part00` (and subsequent `part*`, plus `...REASSEMBLE.txt`)
- `unisonos-manifest-v0.5.0-alpha.N.json`
- `SHA256SUMS-v0.5.0-alpha.N.txt`

## First interaction (10 minutes)

1. Install one target (below).
2. Open the renderer at `http://localhost:8092` (or `http://<host-ip>:8092`).
3. Confirm inference works end-to-end (default interaction model is **Qwen** via the default alpha model pack).
4. If models are missing, follow the prompt to fetch/import the selected model pack.

## Install quickstarts

- WSL2: `install-wsl2.md`
- Linux VM: `install-linux-vm.md`
- Bare metal: `install-bare-metal.md`

## Report issues

- Packaging/install/release issues: `https://github.com/project-unisonOS/unison-platform/issues`
- Devstack issues: `https://github.com/project-unisonOS/unison-devstack/issues`
