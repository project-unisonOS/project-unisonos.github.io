# Prompt Engine (Developers)

UnisonOS separates the **model** from the **assistant identity**. The model is treated as stateless: UnisonOS compiles and injects the active system prompt at runtime.

## Prompt Layers
UnisonOS assembles a deterministic system prompt from four layers:
1. **Unison Base Policy** (immutable)
2. **User Identity & Values** (persistent)
3. **User Priorities & Directives** (mutable)
4. **Session Context** (ephemeral)

## Filesystem Layout (User-Owned)
Default prompt root (configurable): `~/.unison/prompt/`

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
├── history/
│   └── changes.log
└── snapshots/
    └── <timestamp>.tar
```

## Compiler & Hot Reload
Hot reload is “next turn by default”:
- Editing `identity.json` or `priorities.json` takes effect on the next assistant turn.
- “Apply now” corresponds to forcing recompile (or restarting a model runner, if required by the backend).

## Tool APIs
UnisonOS uses controlled tools so the model cannot self-edit:
- `propose_prompt_update`
- `apply_prompt_update`
- `rollback_prompt_update`

High-risk changes require explicit approval.

## Extension Points
- Add new fields to schemas (versioned) and extend compiler rendering.
- Add additional conflict detection rules for inconsistent preferences.

