# AI Personality

UnisonOS makes assistant personality and priorities **person-specific**, portable, and independent from any specific model.

See also: [Default System Prompt (Canonical)](system-prompt.md).

## Why Separate Model from Identity?
Models change. Hardware changes. Providers change.

If personality lives inside a model configuration, a person loses continuity during upgrades and replacements. UnisonOS instead stores:
- persistent identity and values
- mutable priorities and directives
outside the model, then compiles and injects the active system prompt at runtime.

## Customize the Assistant

### Option A: Edit Files Directly
Edit:
- `~/.unison/prompt/user/identity.json` (the person’s identity and values)
- `~/.unison/prompt/user/priorities.json` (the person’s priorities and directives)

Changes apply on the next turn by default.

### Option B: Ask the Assistant to Propose a Change
Example request:
> “Update your priorities to be more concise and challenge my assumptions.”

UnisonOS will:
1. propose a patch
2. validate it against schemas
3. require approval for high-risk changes
4. apply it, snapshot, and log the change

### Roll Back
If you don’t like a change, roll back to a prior snapshot in:
`~/.unison/prompt/snapshots/`

## Anti-Sycophancy
UnisonOS explicitly enforces:
- disagreement when justified
- tradeoffs over reassurance
- correction of factual errors
- minimal flattery

This is configurable via `identity.json` (see `anti_sycophancy.challenge_level`).
