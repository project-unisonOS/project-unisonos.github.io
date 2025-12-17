# Install (WSL2)

Download the `v0.5.0-alpha.N` WSL2 artifact from:
`https://github.com/project-unisonOS/unison-platform/releases/tag/v0.5.0-alpha.N`

Expected asset name:
- `unisonos-wsl2-v0.5.0-alpha.N.zip` (or `.tar.gz`)
- `SHA256SUMS-v0.5.0-alpha.N.txt`

## Install

```powershell
wsl --install

wsl --import UnisonOS `
  C:\\wsl\\unisonos `
  .\\unisonos-wsl2-v0.5.0-alpha.N.tar.gz `
  --version 2

wsl -d UnisonOS
```

## Access

- Renderer UI: `http://localhost:8092`

For deeper internals, see `unison-docs/dev/deployment/install-wsl2.md` in the `unison-docs` repo.
