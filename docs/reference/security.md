# Security

## What this page covers

- The core security and privacy stance for UnisonOS.
- How identity, policy, consent, and logging work together.
- Where to report issues and find deeper security material.

## Who this page is for

- Operators responsible for running UnisonOS in production or lab environments.
- Developers who need to understand the security expectations for services and features.

## Before you read this

- Review [Architecture Overview](../architecture/overview.md) for the main components and flows.
- See [Storage API](storage-api.md) for details on how data and audit events are persisted.

Security and privacy are baked into UnisonOS by design. The sections that follow describe how the platform remains trustworthy for people and their data.

## Core stance (plain language)

- **Identity and trust**: Every service proves who it is before it talks to another. Mutual TLS, or two way HTTPS, ensures data only flows between trusted components.
- **Least privilege everywhere**: Each component only gets the minimum access it needs. Networks are segmented so a compromise in one area does not open the rest.
- **Signed software**: Images and artifacts are cryptographically signed and verified before release to prevent tampering.
- **Safe handling of secrets**: Passwords, keys, and tokens never live in source code. They are injected at runtime from secure stores.
- **Privacy by design**: Data is classified as public, internal, sensitive, or highly sensitive and treated accordingly, with encryption, access checks, and minimal logging. Consent is enforced before sensitive data is used.
- **Defense in depth**: Containers run as non root with locked down permissions and security profiles. Health and safety checks are built in so services fail safely.
- **Policy and consent enforcement**: A central policy layer governs who can access what, and high risk actions such as device control require extra confirmation and trusted devices.
- **Logging and auditing with redaction**: Important security events are logged in a structured way without personal or secret data. Alerts trigger on unusual patterns such as repeated login failures, policy denials, or signature verification failures.
- **Automation and updates**: Automated scans watch for vulnerable dependencies. Shared security checks run in every repository and dependency management keeps components current.
- **Accessibility and privacy for labs features**: Opt in features such as wake words default to off and can be centrally disabled. They are designed to keep audio local unless explicitly configured otherwise.

## Wake Word and Always On Mic (Labs)

These features are opt in and off by default:

- Wake word detection runs locally. Audio stays on the device unless an operator explicitly connects a cloud speech provider behind `unison-io-speech`.
- The active wake word lives in the person profile in `unison-context`.
- Environment flags control always on microphone behavior:
  - `UNISON_ALWAYS_ON_MIC=false` (default) means the microphone activates only when the user starts it.
  - `UNISON_ALWAYS_ON_MIC=true` means the microphone starts on load when permitted by the device and browser.
- Operators can disable wake word and microphone behavior by leaving Porcupine keys unset, forcing `UNISON_ALWAYS_ON_MIC=false`, or removing related user interface elements.

## Reporting Issues

Please report suspected vulnerabilities privately using the contact in the project’s security policy (e.g., **darryl.adams@accessinsights.net**). Do not open public issues for security findings.

For detailed technical notes, see the SECURITY documents and threat models in the docs repository.
