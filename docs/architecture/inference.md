# Inference

Inference in UnisonOS is a dedicated service that runs models and exposes a stable API to the rest of the platform. This keeps model runtimes swappable without requiring every service to embed model tooling.

## How It Fits in the Architecture

- **Orchestrator calls inference**: when planning, tool selection, summarization, or generation is needed, the orchestrator calls the inference service over HTTP.
- **Local-first**: deployments are designed to run fully on local hardware; remote model providers are optional and must be explicitly configured.
- **Governed side-effects**: policy/consent checks happen in the orchestrator before high-impact actions are executed by tools/actuators.

## Providers (Local and Optional Remote)

The inference service is provider-backed. For example, current compose configurations commonly use:

- **Ollama** as a local provider
- A small default model for dev flows (example: `qwen2.5:1.5b`)

Exact defaults are configuration-driven and may vary by release; the important architectural constraint is that providers are interchangeable behind the inference service boundary.

Common configuration knobs:

- `UNISON_INFERENCE_PROVIDER` (example: `ollama`)
- `UNISON_INFERENCE_MODEL` (example: `qwen2.5:1.5b`)
- `UNISON_MODEL_DIR` (example: `/var/lib/unison/models`)

## Model Packs

Phase 1.1 ships lean base images and distributes model weights as **model packs** that can be installed offline or fetched online.

### Storage

- Default: `/var/lib/unison/models`
- Override: `UNISON_MODEL_DIR`

### CLI

`unison-models` (from `unison-common`):

- `unison-models list`
- `unison-models verify`
- `unison-models install --path <pack.tgz>`
- `unison-models install --fetch <url-or-alias>`

Aliases for `--fetch` are resolved via `UNISON_MODEL_PACK_ALIAS_MAP_JSON` (alias → URL).

### Boot Enforcement

Set `UNISON_MODEL_PACK_REQUIRED=pack_id@version` to require a pack at boot. Missing/invalid packs emit `modelpack.*` events into the Phase 1 NDJSON trace.

## Prompt Engine and System Prompt Injection

UnisonOS separates the **model** from the **assistant identity**. The model is treated as stateless: UnisonOS compiles and injects the active system prompt at runtime.

### Prompt Layers

UnisonOS assembles a deterministic system prompt from four layers:

1. **Unison Base Policy** (immutable)
2. **Person Identity & Values** (persistent)
3. **Person Priorities & Directives** (mutable)
4. **Session Context** (ephemeral)

See [Default System Prompt (Canonical)](../experience/system-prompt.md) for the base prompt text.

### Prompt Root (Person-Owned)

Prompt root directory:

- `UNISON_PROMPT_ROOT` (default: `~/.unison/prompt`)

Default layout:

```
~/.unison/prompt/
├── base/
│   └── unison_base.md
├── user/
│   ├── identity.json
│   ├── priorities.json
│   └── schema/
│       ├── identity.schema.json
│       └── priorities.schema.json
├── compiled/
│   └── active_system_prompt.md
└── history/
    └── changes.log
```

### Injection Rules

UnisonOS injects the compiled system prompt into **all model call sites**, including:

- Interaction model (user-facing language realization)
- Planner model (tool-planning; must not emit user prose)

Runtime model callers load `~/.unison/prompt/compiled/active_system_prompt.md` and inject it as the **system** message.

For observability, UnisonOS emits `prompt.injection.applied` trace events containing:

- `config_path` (the active compiled prompt path)
- `config_hash` (sha256 of the injected prompt text)

Prompt content is never logged.

### How To Update the Prompt (Local)

- Edit prompt layers under your prompt root:
  - Base prompt: `~/.unison/prompt/base/unison_base.md`
  - Identity: `~/.unison/prompt/user/identity.json`
  - Priorities: `~/.unison/prompt/user/priorities.json`
- Hot reload is “next turn by default”: edits take effect on the next assistant turn (or after a service restart, depending on the runtime).

To reset to defaults:

- Move aside the directory: `mv ~/.unison/prompt ~/.unison/prompt.bak`
- Restart services; UnisonOS will recreate the default files.

### Modality Awareness

Prompts should assume experiences may be rendered through Voice, Vision, gesture, touch, Braille, sign, and BCI. Responses must remain valid without relying on a screen unless a screen is known to be available.
