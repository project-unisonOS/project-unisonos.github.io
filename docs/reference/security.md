# Security

Security is a core concern in Unison’s design and deployment.

## Baseline

- Services are intended to run with least privilege, behind well-defined network boundaries.
- Authentication and authorization are centralized through dedicated services.
- Consent and policy decisions are explicit and auditable.

## Configuration

- Secrets such as JWT keys, encryption keys, and provider tokens are provided via environment variables or dedicated configuration files.
- For containerized deployments, secrets can be injected via environment, Docker secrets, or external secret managers.

## Wake-Word and Always-On Mic (Labs)

Wake-word and always-on microphone behavior are treated as **labs** features and are opt-in:

- Wake-word detection in the renderer runs locally (Porcupine WebAssembly where configured, or a lightweight stub); audio never leaves the device unless the operator explicitly wires a cloud STT provider behind `unison-io-speech`.
- The active wake word is stored in the person’s profile (`voice.wakeword`) and updated via the orchestrator’s `wakeword.update` skill. Profiles remain in `unison-context` by default.
- The “always-on” mic profile is controlled via environment flags:
  - `UNISON_ALWAYS_ON_MIC=false` (default) — mic is only activated when the user explicitly starts it in the renderer UI.
  - `UNISON_ALWAYS_ON_MIC=true` — renderer attempts to start the mic on load when the device and browser allow it.
- Operators can centrally disable wake-word/mic behavior by:
  - Leaving `PORCUPINE_ACCESS_KEY` and `PORCUPINE_KEYWORD_BASE64` unset (no Porcupine engine).
  - Forcing `UNISON_ALWAYS_ON_MIC=false` in renderer deployments.
  - Removing or gating wake-word-related UI in shells and renderers where appropriate.

These options ensure that “labs” wake-word behavior stays aligned with Unison’s privacy and edge-first guarantees and can be disabled entirely for sensitive deployments.

## Reporting Issues

- Security vulnerabilities should be reported responsibly using contact information provided in the project’s security policy.

For detailed security notes and policies, refer to the internal SECURITY documents in the docs repository.

