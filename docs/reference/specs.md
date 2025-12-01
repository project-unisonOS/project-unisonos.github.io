# Specs and Schemas

Unison relies on shared contracts and schemas that are consumed by multiple services.

## Canonical Specs

- Event envelopes and messaging protocols.
- Consent and policy-related structures.
- Additional schemas for profiles, context, and other domain objects.

These live in the dedicated specs directory in the docs repository and are referenced by services and shared libraries.

## How to Use the Specs

- Treat schemas as the source of truth for request and response shapes.
- Align service implementations and tests with the published schemas.
- Coordinate changes across services when modifying core contracts.

For full details, refer to the internal specs directory (for example, `unison-docs/dev/specs/`).

