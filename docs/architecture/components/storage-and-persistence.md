# Storage & Persistence

## Overview

Storage is the unified persistence layer for UnisonOS artifacts and durable service records. It provides a single API for:

- Durable key/value records
- Working memory entries
- Vault entries (encrypted blobs)
- Audit events
- Objects (binary artifacts + metadata)

In current implementations, the storage service persists metadata to **Postgres** (required in production; SQLite is only allowed for local/dev), and stores object payloads on the local storage volume.

## Responsibilities

- **Working memory** – Long-lived state for tasks and sessions, including summaries and embeddings metadata.
- **Vault** – Encrypted secrets such as credentials, tokens, and API keys.
- **Objects and files** – Documents, downloads, and artifacts with metadata.
- **Audit** – Append-only records of who did what and when for sensitive operations.
- **API-first access** – Other services use the storage API instead of talking directly to databases.

## Data Types

- **Memory** – Session-scoped data with TTL controls for bounded retention.
- **Vault** – Secret values encrypted at rest and scoped per person or tenant.
- **Objects/Files** – Binary payloads plus metadata like filename, content type, hashes, and storage IDs.
- **Audit Events** – Structured events that capture actor, action, target, and timestamps.

## How Other Components Use Storage

- **Orchestrator** – Writes action/event logs and task outcomes.
- **Inference** – Reads/writes working state and artifacts when a flow requires durable references.
- **VDI / Actuation** – Stores downloaded files and workflow outputs from remote browser sessions.
- **Renderer** – Reads stored results and presents them according to the person’s profile and context.

## Why Storage Matters

Storage centralizes persistence, security, and auditability:
- One place for durable state, secrets, and artifacts.
- Consistent scoping and encryption for sensitive fields.
- Foundation for cross-session continuity and personalized experiences.

## Security & Privacy

- Per-person and per-tenant scoping enforced at the API layer.
- Secrets and sensitive fields are encrypted at rest.
- Audit events are append-only from the API perspective to preserve provenance.

Note: Redis is used elsewhere in the stack for caching/coordination, but it is not the primary durable store for storage service records.
