# Storage API Reference

## Overview

Storage exposes an HTTP surface for unified persistence. Most services access storage via these APIs instead of direct database calls.

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
