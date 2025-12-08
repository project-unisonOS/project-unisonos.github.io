# Inference: AI-First Compute in UnisonOS

UnisonOS boots directly into an AI experience: power on → agentic interface, not “OS then app.” Inference is local-first, model-pluggable, and wired into the same orchestrator that routes all modalities (speech, vision, sign, Braille, BCI).

## Experience
- A resident agent greets you at boot with full session context; no app launch required.
- Any modality can drive intent; the model calls tools and skills through the orchestrator.
- Responses stay contextual as models are upgraded or swapped.

## Architecture
- Local-first inference service loads a configured model (multimodal by default).
- Tool/skill calls flow through the core orchestrator; policy, consent, and identity stay centralized.
- Context/state are persisted in profile/context services so model upgrades do not lose history.
- Cloud is optional: can chain/ensemble with remote models when allowed by policy.

## Model strategy (2025–2026 high-end consumer devices)
- Target hardware: upper-tier NUCs/laptops/desktops with modern GPUs/NPUs (think 24–48 GB VRAM or strong NPU). CPU-only runs are supported but de-prioritized for latency.
- Recommended open-source multimodal model: **Qwen2.5-VL** (choose size to fit hardware; e.g., 7B/14B quantized for laptops, larger for desktops with >24 GB). It handles vision + text and is agent/tool-call friendly.
- Keep model config swappable via env/config; fall back to smaller local or remote assist when hardware is limited.

## Agentic behavior
- The model acts as the key experience driver, translating multimodal inputs into intents and tool calls.
- Tool use is mediated by the orchestrator; all side effects pass through the same policy/consent path used by other channels.
- The agent can delegate to cloud models when explicitly permitted (e.g., retrieval, heavy generation, translation), while preserving local context.

## Modality convergence
- Speech, vision, sign, Braille, and BCI all emit `IntentRequest` with channel metadata.
- The model consumes shared context (identity, session, baton) and produces orchestrator-compatible intents or responses.
- Outputs can be rendered as speech, text, captions, signing avatar, Braille, or UI updates.

## Forward path
- Swap/upgrade models without losing history because session/context live outside the model weights.
- Track rapid local-model improvements; UnisonOS will ship updated defaults as better open models land.
- Continue optimizing for local-first latency while keeping cloud augmentation optional and policy-gated.
