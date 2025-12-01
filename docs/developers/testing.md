# Testing

Unison uses a combination of unit tests, integration tests, and end-to-end smoke tests.

## Python Services

- Each core Python service typically:
  - Uses virtual environments for isolation.
  - Installs dependencies using a shared `constraints.txt`.
  - Runs tests with a standard pytest invocation that disables external plugins and optional telemetry.

## End-to-End Smoke Tests

- The devstack repo provides a smoke test script that:
  - Assumes devstack is running.
  - Exercises a basic end-to-end flow through the stack.

## Docs and Linting

- Workspace-level Markdown linting is configured via a shared configuration file.
- New or updated documentation should pass lint checks before merging.

For per-service test commands and details, refer to the internal repository map and service READMEs.

