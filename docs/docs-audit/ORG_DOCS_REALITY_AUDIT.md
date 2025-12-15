# Org Docs Reality Audit (project-unisonOS)

Generated: 2025-12-15 (UTC)

This is a documentation truth/hygiene audit. When docs conflict with code/config/runtime, code/config/runtime are the source of truth.

## Repos Audited

- `.github`
- `project-unisonos.github.io`
- `unison-actuation`
- `unison-agent-vdi`
- `unison-auth`
- `unison-common`
- `unison-comms`
- `unison-consent`
- `unison-context`
- `unison-context-graph`
- `unison-docs`
- `unison-experience-renderer`
- `unison-inference`
- `unison-intent-graph`
- `unison-io-bci`
- `unison-io-braille`
- `unison-io-core`
- `unison-io-sign`
- `unison-io-speech`
- `unison-io-vision`
- `unison-network-vpn`
- `unison-orchestrator`
- `unison-os`
- `unison-payments`
- `unison-platform`
- `unison-policy`
- `unison-security`
- `unison-sign-orchestrator`
- `unison-spec`
- `unison-storage`
- `unison-workspace`

## Inventory

Full inventory (with initial classification) is in: `docs/docs-audit/INVENTORY.md`.

## Reality-Check Findings

Add mismatch entries here during Step B. Each entry must include: doc path, incorrect claim, evidence (code/config/runtime path or endpoint), and severity (HIGH/MEDIUM/LOW).

### Finding 1 — Inference model defaults differ across code vs devstack

- Doc: `docs/architecture/inference.md`
- Claim (problematic): Presents Qwen2.5-VL as the current recommended default model without “Not implemented / aspirational” labeling.
- Reality:
  - Inference service code defaults: `unison-inference/src/settings.py` (`default_model` in code is `qwen2.5`, but `from_env()` currently defaults `UNISON_INFERENCE_MODEL` to `llama3.2` if unset).
  - Devstack config sets Ollama + `llama3.2`: `unison-workspace/unison-devstack/docker-compose.yml` (`UNISON_INFERENCE_PROVIDER=ollama`, `UNISON_INFERENCE_MODEL=llama3.2`).
  - Runtime evidence: `GET http://localhost:8087/readyz` reports `model: llama3.2` when running devstack with Ollama.
- Severity: **HIGH** (misleads developers/operators about what actually runs in the default dev environment).
- Remediation: Update `docs/architecture/inference.md` to clearly separate “current devstack default” vs “recommended targets”; add explicit “not implemented / aspirational” labels when applicable.

### Finding 2 — Devstack docs don’t mention Ollama/tools profile requirement

- Doc: `docs/developers/devstack.md`
- Claim (missing): Devstack start instructions don’t mention that the `ollama` service is behind the compose `tools` profile, which can leave inference “healthy” but “not ready”.
- Reality:
  - `ollama` is under `profiles: [tools]`: `unison-workspace/unison-devstack/docker-compose.yml`
  - `unison-inference` depends on `OLLAMA_BASE_URL=http://ollama:11434`; without starting the tools profile, requests can fail with 503 `Provider not ready: ollama unreachable`.
- Severity: **HIGH** (causes failed inference and confusing “healthy but not ready” state).
- Remediation: Update `docs/developers/devstack.md` with an explicit section “Inference requires tools profile” and example command to bring up `ollama` and pull the configured model.

## Canonicalization Plan

- Proposed canonical docs home: `project-unisonos.github.io/docs/` (MkDocs).
- `unison-docs/` appears to overlap; evaluate consolidation into GH Pages and keep only non-duplicative operational/security content.

## Removal Plan + Deletion Log

When deleting a doc, record it here with: path, repo, reason, and reference updates/redirects.

### Deletions (performed)

- `project-unisonos.github.io/docs/project/roadmap.md` — removed as planning/status content; `project-unisonos.github.io/mkdocs.yml` now removes it from nav and adds redirect `project/roadmap.md -> developers/get-started.md`.
- `unison-common/P2.2_EXISTING_IMPLEMENTATION_REVIEW.md` — removed as planning/status content; references removed by deleting the entire P2.2 doc set.
- `unison-common/P2.2_IMPLEMENTATION_PLAN.md` — removed as planning/status content; references removed by deleting the entire P2.2 doc set.
- `unison-common/P2.2_IMPLEMENTATION_SUMMARY.md` — removed as planning/status content; references removed by deleting the entire P2.2 doc set.
- `unison-context-graph/P2.4_DURABILITY_PLAN.md` — removed as planning/status content.
- `unison-io-speech/P1_2_IMPLEMENTATION_PLAN.md` — removed as planning/status content.
- `unison-io-speech/P1_2_PROGRESS_SUMMARY.md` — removed as planning/status content.
- `unison-io-braille/docs/MILESTONES.md` — removed as planning/status content; updated `unison-io-braille/README.md` to remove references.
- `unison-io-sign/docs/MODEL_SETUP.md` — removed as planning/status content; updated `unison-io-sign/README.md` to remove references.
- `unison-io-sign/docs/REAL_MODEL_TODO.md` — removed as planning/status content; updated `unison-io-sign/README.md` to remove references.
- `unison-docs/roadmap/deployment-platform-roadmap.md` — removed as planning/status content; updated `unison-docs/README.md` to remove references.
