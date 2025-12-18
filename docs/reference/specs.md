# Specs and Schemas

UnisonOS relies on shared contracts and schemas that are consumed by multiple services. These are the source of truth for envelopes, payload shapes, and versioned compatibility.

## Where the Specs Live

- `unison-docs` (canonical docs, including specs): https://github.com/project-unisonOS/unison-docs/tree/main/dev/specs
- `unison-spec` (spec-only repo): https://github.com/project-unisonOS/unison-spec/tree/main/docs
- `unison-common` (runtime schemas shipped with services): https://github.com/project-unisonOS/unison-common/tree/main/src/unison_common/schemas

## Key Schemas You’ll See in the Current Stack

- Event/action envelope schemas (used across services): https://github.com/project-unisonOS/unison-docs/tree/main/dev/specs
- Model pack manifest schema (Phase 1.1): `unison-common/src/unison_common/schemas/modelpack/manifest.v1.schema.json`
- Prompt schemas + default templates:
  - `unison-common/src/unison_common/schemas/prompt/unison_base.md`
  - `unison-common/src/unison_common/schemas/prompt/identity.schema.json`
  - `unison-common/src/unison_common/schemas/prompt/priorities.schema.json`
- Multimodal manifest schema: `unison-common/src/unison_common/schemas/multimodal_manifest.schema.json`

## How to Use the Specs

- Treat schemas as the source of truth for request and response shapes.
- Align service implementations and tests with the published schemas.
- Coordinate changes across services when modifying core contracts.

When you update a core schema, also update:

- The services that validate/emit the schema
- Any release notes or compatibility notes that describe the change
