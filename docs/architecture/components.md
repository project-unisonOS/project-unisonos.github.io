# Components

This page summarizes the main services and libraries in the Unison workspace and how they fit into the architecture.

## Core Control Plane

- **Orchestrator** – Central intent router and coordinator for all modules.
- **Intent Graph** – Front-end for routing intents into the orchestrator.
- **Policy** – Safety and policy evaluation for high-impact actions.
- **Consent** – Dedicated service for consent grant issuance and introspection.
- **Auth** – Authentication, RBAC, and token issuance.
- **Inference** – Gateway service that fronts local and cloud model providers.

## Context and Storage

- **Context Store** – Profile and key–value context store with consent-aware access.
- **Context Graph** – Graph-based context fusion and preference modeling.
- **Storage** – Encrypted working memory, vault, and long-term storage.

## Experience and IO

- **Experience Renderer** – UI and UX renderer mediating wake-word and capability manifests.
- **Shell** – Electron-based onboarding and developer shell.
- **Agent VDI** – Thin desktop/VDI agent that fronts renderer and intent-graph.
- **IO Core / Speech / Vision** – Device-side services that emit event envelopes for different modalities.

## Shared Docs, Libraries, and Infra

- **Docs** – Canonical cross-cutting docs and specs, including schemas and protocol definitions.
- **Common Library** – Shared Python helpers for auth, tracing, HTTP, and envelope validation.
- **Base OS Images** – Common container base images used by service Dockerfiles.
- **Devstack** – Docker Compose stack and helper scripts for local end-to-end runs.

For per-repo details and commands, refer to the internal repository map in `unison-docs/dev/unison-repo-map.md`.

