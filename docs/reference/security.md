# Security

Security is a core concern in Unison’s design and deployment.

## Baseline

- Services are intended to run with least privilege, behind well-defined network boundaries.
- Authentication and authorization are centralized through dedicated services.
- Consent and policy decisions are explicit and auditable.

## Configuration

- Secrets such as JWT keys, encryption keys, and provider tokens are provided via environment variables or dedicated configuration files.
- For containerized deployments, secrets can be injected via environment, Docker secrets, or external secret managers.

## Reporting Issues

- Security vulnerabilities should be reported responsibly using contact information provided in the project’s security policy.

For detailed security notes and policies, refer to the internal SECURITY documents in the docs repository.

