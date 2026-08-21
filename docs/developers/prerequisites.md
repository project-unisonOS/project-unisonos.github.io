# Development prerequisites

These prerequisites apply to repository development. The public preview carries
its own signed host requirements and preflight checks.

## Supported development topology

Use Linux for authoritative component and workspace validation. The current project
topology uses Windows and coding agents as a control plane and an Ubuntu 24.04
system as the stable Linux build and integration host. WSL2 remains useful for
local development.

## Required tools

- Git with recursive submodule support
- Python 3.12 and virtual environments
- Docker with Docker Compose v2
- Bash and standard Linux command-line tools
- Node.js for components and documentation checks that declare it

Component READMEs own additional dependencies and exact version constraints.
Use the workspace bootstrap and validation commands instead of assembling a
parallel toolchain from this summary.

## Capacity guidance

Development capacity depends on the components and models selected. The full
stack requires more resources than a focused component test. Begin with the
workspace environment validation and use the named development profile as the
authority for CPU, memory, storage, and service selection.

No development profile implies appliance compatibility, model support, or
measured performance. The [compatibility reference](../reference/compatibility.md)
tracks the separate appliance boundary.

## Local security

- Keep secrets in ignored local configuration or an approved secret store.
- Never commit credentials, tokens, private keys, recovery material, personal
  records, raw household media, or machine-specific network details.
- Use synthetic fixtures for development and public evidence.
- Use the security overlay when validating internal network exposure.
- Preserve unrelated work and use a clean branch or worktree.

Continue with [developer setup](onboarding.md).
