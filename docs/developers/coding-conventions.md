# Coding Conventions

Unison services and docs follow a set of shared conventions to keep repos consistent and easy to work with.

## Python Services

- FastAPI-based HTTP services.
- Dependencies pinned via a shared `constraints.txt` file.
- Virtual environments used for local development.
- Tests run with pytest using a standard command line that disables external plugins and optional telemetry.

## Documentation

- Markdown with semantic headings and clear summaries.
- Alt text for images and diagrams.
- Accessibility aligned with accessibility guidance described in the internal docs.
- Shared Markdown lint configuration applied across repos where possible.

## Configuration and Secrets

- Environment variables and `.env` files (with `.env.example` templates) for local development.
- Docker and Compose used for containerized development and deployment.

See each service’s README and the internal docs for additional, repo-specific conventions.

