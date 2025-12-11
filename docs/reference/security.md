# Security

Security and privacy are baked into UnisonOS by design. Here’s how we keep the platform trustworthy for people and their data.

## Core stance (plain language)

- **Identity and trust**: Every service proves who it is before it talks to another. We use mutual TLS (two-way HTTPS) so data only flows between trusted pieces.
- **Least privilege everywhere**: Each component only gets the minimum access it needs. Networks are segmented so a compromise in one area doesn’t open the rest.
- **Signed software**: Images and artifacts are cryptographically signed and verified before release to prevent tampering.
- **Safe handling of secrets**: Passwords, keys, and tokens never live in source code. They’re injected at runtime from secure stores.
- **Privacy by design**: Data is classified (public, internal, sensitive, highly sensitive) and treated accordingly—encrypted, access-checked, and minimally logged. Consent is enforced before sensitive data is used.
- **Defense in depth**: Containers run as non‑root with locked-down permissions and security profiles. Health and safety checks are built in so services fail safely.
- **Policy and consent enforcement**: A central policy layer governs who can access what, and high-risk actions (like device control) require extra confirmation and trusted devices.
- **Logging and auditing with redaction**: We log important security events in a structured way, but avoid personal or secret data. Alerts trigger on unusual patterns (repeated login failures, policy denials, signature verification failures).
- **Automation and updates**: Automated scans watch for vulnerable dependencies. Shared security checks run in every repository. Dependabot keeps components current.
- **Accessibility and privacy for “labs” features**: Opt-in features like wake words default to off and can be centrally disabled. They’re designed to keep audio local unless explicitly configured otherwise.

## Wake-Word and Always-On Mic (Labs)

These features are opt-in and off by default:

- Wake-word detection runs locally; audio stays on the device unless an operator explicitly connects a cloud speech provider behind `unison-io-speech`.
- The active wake word lives in the person’s profile in `unison-context`.
- Environment flags control “always-on” mic behavior:
  - `UNISON_ALWAYS_ON_MIC=false` (default) — mic activates only when the user starts it.
  - `UNISON_ALWAYS_ON_MIC=true` — mic starts on load when permitted by device/browser.
- Operators can disable wake-word/mic by leaving Porcupine keys unset, forcing `UNISON_ALWAYS_ON_MIC=false`, or gating/removing related UI.

## Reporting Issues

Please report suspected vulnerabilities privately using the contact in the project’s security policy (e.g., **darryl.adams@accessinsights.net**). Do not open public issues for security findings.

For detailed technical notes, see the SECURITY documents and threat models in the docs repository.
