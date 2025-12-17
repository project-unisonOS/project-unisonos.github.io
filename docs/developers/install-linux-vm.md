# Install (Linux VM)

Download the `v0.5.0-alpha.N` VM artifact from:
`https://github.com/project-unisonOS/unison-platform/releases/tag/v0.5.0-alpha.N`

Expected asset name:
- `unisonos-linux-vm-v0.5.0-alpha.N.qcow2` (and/or `.vmdk`)
- `SHA256SUMS-v0.5.0-alpha.N.txt`

## Run (QEMU example)

```bash
qemu-system-x86_64 \
  -m 8192 -smp 4 \
  -drive file=unisonos-linux-vm-v0.5.0-alpha.N.qcow2,format=qcow2 \
  -nic user,model=virtio-net-pci,hostfwd=tcp::8092-:8092 \
  -display none -serial mon:stdio
```

## Access

- Renderer UI: `http://localhost:8092` (if you forwarded ports) or `http://<vm-ip>:8092`

## Login

- Default user: `unison`
- Default password: `unison` (alpha evaluator default; change immediately for real installs)

For deeper internals, see `unison-docs/dev/deployment/install-linux-vm.md` in the `unison-docs` repo.
