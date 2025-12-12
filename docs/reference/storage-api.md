# Storage API Reference

## What this page covers

- The HTTP surfaces exposed by the storage service.
- How memory, vault, objects, and audit fit together.
- Where to look for architectural context.

## Who this page is for

- Developers using storage from application or platform services.
- Operators reviewing how data is persisted and retrieved.

## Before you read this

- Review [Architecture Overview](../architecture/overview.md) for the main components.
- Read [Storage and Persistence](../architecture/components/storage-and-persistence.md) for the high level design.

## Overview

Storage exposes an HTTP surface for unified persistence. Most services access storage through these APIs instead of direct database calls.

## Memory

- `POST /memory` – Write or update memory entries with optional TTL.
- `GET /memory/{key}` – Retrieve a memory entry.

## Vault

- `POST /vault` – Store or update an encrypted secret (credentials, tokens, API keys).
- `GET /vault/{key}` – Retrieve a secret when authorized. Vault access is heavily restricted and scoped per person or tenant.

## Objects

- `POST /objects` – Upload files or binary artifacts; returns a storage ID and metadata.
- `GET /objects/{id}` – Download an object by ID with appropriate authorization.

## Audit

- `POST /audit` – Append structured audit events (actor, action, target, timestamps).
- `GET /audit` – Query audit records where enabled.

For architectural context on responsibilities and security, see [Storage & Persistence](../architecture/components/storage-and-persistence.md).
