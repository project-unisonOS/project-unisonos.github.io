# Testing

Unison uses a combination of unit tests, integration tests, and end-to-end smoke tests.

## Python Services

- Each core Python service typically:
  - Uses virtual environments for isolation.
  - Installs dependencies using a shared `constraints.txt`.
  - Runs tests with a standard pytest invocation that disables external plugins and optional telemetry.

## End-to-End Smoke Tests

- With `unison-workspace`, smoke tests are run via scripts:
  - Development mode: `./scripts/smoke.sh` (may run on host or in-network depending on your environment).
  - Security overlay mode: `./scripts/smoke-security.sh` (runs in-network and asserts key ports are not published).

## Docs and Linting

- Workspace-level Markdown linting is configured via a shared configuration file.
- New or updated documentation should pass lint checks before merging.

For per service test commands and details, refer to the internal repository map and service READMEs. For image build verification and channel semantics, see [Developers → Images, Builds, and Releases](images-builds-and-releases.md).
