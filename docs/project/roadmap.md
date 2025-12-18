# Roadmap

This roadmap is high-level directional guidance for the evolution of UnisonOS. It describes what we intend to standardize and harden over time, without committing to specific dates.

## North Star

UnisonOS delivers a calm, intention-centric, real-time generated experience that adapts to each person and each device’s capabilities, while keeping privacy, consent, and auditability central.

## Near-Term Focus (Now → Next)

- **Standardized Skills**: define and enforce a consistent “skill” interface for intent handlers (registration, discovery, versioning, schema validation, and policy hooks).
- **Tool registry as a first-class concept**: keep a central list of available tools/skills/service APIs and their constraints so the system never guesses capabilities.
- **Multi-agent orchestration**: enable orchestrator-driven delegation to specialist agents for parallel work (research, code, extraction, actuation), with clear boundaries and deterministic interfaces where required.
- **MCP-enabled extensions**: add support for Model Context Protocol (MCP) servers as a standard way to extend tools and context sources safely and consistently.

## Platform and Payments

- **Payments capability**: integrate the payments service into end-to-end flows (intent → policy/consent → payment approval → audit trail).
  - Repo: https://github.com/project-unisonOS/unison-payments
- **Policy-governed monetization**: ensure financial actions are explicit, confirmable, and auditable, with safe defaults and clear rollback paths.

## Performance and Device-Specific Optimization

- **Device-aware profiles**: tune default behavior for different device classes (WSL2, VM, bare metal, low-power devices) while keeping the same core experience model.
- **Latency and throughput**: focus on startup time, turn latency, streaming responsiveness, and resource usage (CPU/GPU/RAM/IO) across the full stack.
- **Model efficiency**: improve model selection and runtime settings per device capability (quantization, context sizing, batching) while remaining local-first.

## Updates and Lifecycle Management

- **Kernel and OS updates**: enable safe, reversible updates for the underlying OS and kernel where applicable.
- **UnisonOS capability updates**: support updating core services and capabilities with compatibility-aware versioning and clear release notes.
- **Model updates**: support predictable model pack updates (install, verify, roll back) and safe prompt/template evolution.

## Longer-Term Exploration

- **Richer orchestration patterns**: higher-level workflows, background monitoring with consent, and more powerful actuation patterns with stronger guarantees.
- **New interaction modes**: broaden the set of supported interaction modes while keeping modality-complete outcomes (voice, vision, sign, Braille, BCI, gesture, touch).

## Where to Track Work

- Platform releases and artifact strategy: https://github.com/project-unisonOS/unison-platform
- Shared runtime library (schemas, prompt engine, model packs): https://github.com/project-unisonOS/unison-common
