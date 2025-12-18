# Developer Onboarding

This page consolidates the developer onboarding flow. Use it as the default path; follow the linked pages for deeper details when needed.

## 1) Get Started

Recommended path: run the devstack locally (WSL2 or Linux) and iterate against real services.

- Next step: [Prerequisites](prerequisites.md)
- Then: [Workspace & Repos](workspace-and-repos.md) → [Devstack Setup](devstack.md)

## 2) Install Options (Offline / Online)

Phase 1.1 supports a lean base install plus post-install **model packs**.

- Offline model packs: `unison-models install --path /path/to/pack.tgz`
- Online model packs: `unison-models install --fetch https://…/pack.tgz`
- Details: [Install Options](install-options.md) and [Model Packs](../architecture/deep-dive.md#model-packs)

## 3) Prerequisites

Unison is developed and tested primarily on Ubuntu (native or under WSL2).

- OS: Ubuntu 22.04/24.04 (or Windows 11 + WSL2)
- Tools: Docker (Compose v2), Python 3.10+ (3.12 recommended), Node.js 18+, Git, `make`
- Details: [Prerequisites](prerequisites.md)

## 4) Workspace & Repos

The recommended workflow is the workspace meta-repo (submodules) so versions stay aligned.

- Bootstrap: `./scripts/bootstrap.sh`
- Start devstack: `./scripts/up.sh` (ports) or `./scripts/up-security.sh` (no host ports)
- Smoke test: `./scripts/smoke.sh` (or `./scripts/smoke-security.sh`)
- Details: [Workspace & Repos](workspace-and-repos.md)

## 5) Devstack Setup

Devstack is the canonical local wiring of the core control plane, renderer, inference, and backing services.

- Bring-up and profiles: [Devstack Setup](devstack.md)

## 6) Renderer

The experience renderer is the primary “surface” during development and evaluation.

- How to run and connect surfaces: [Renderer](renderer.md)

## 7) Build, Deploy, and Images

Platform releases ship evaluator artifacts for WSL2, Linux VM, and bare metal from a single tag.

- How builds/releases are orchestrated: [Build, Deploy, and Images](workflow-design.md)
- Image types + local reproduction commands: [Images, Builds, and Releases](images-builds-and-releases.md)

## 8) Testing

Start with the smallest test that covers your change (unit), then expand to integration/smoke as needed.

- Details: [Testing](testing.md)

## 9) Hardware Deployment

Use the hardware guidance when you’re validating device installs, networking, and ports on real machines.

- Details: [Hardware Deployment](hardware.md)

## 10) Releases

One tag → one GitHub Release → multiple artifacts (WSL2 + Linux VM + bare metal) plus checksums/manifest.

- Start here: [Releases](releases.md)
