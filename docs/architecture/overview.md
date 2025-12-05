# Architecture Overview

This page summarizes how the core Unison services cooperate to deliver edge-first, agentic experiences.

## Core Control Plane

- **Intent Graph** – First stop for user intents (from renderer, shell, VDI, or device I/O). Normalizes requests and forwards them to the orchestrator.
- **Orchestrator** – Central router and planner. Enforces auth and consent, orchestrates skills, calls inference, and manages conversational or task state.
- **Policy and Consent** – Evaluate safety and consent before actions are executed and provide audit records.
- **Auth** – Issues and validates tokens for service-to-service and user-bound flows.
- **Inference** – Gateway to model providers (local and cloud), invoked by orchestrator and intent-graph when generation or planning is needed.

## Context, Storage, and Profiles

- **Context Graph** – Fuses signals and preferences into a graph view of the user’s state.
- **Context Store** – Provides profile and key–value storage with consent-aware reads and writes (including per-person dashboards).
- **Storage** – Encrypted working memory, vault, and long-term store for sensitive or durable data.

Together, these services implement secure edge profiles that other components can read and update under policy and consent.

## Experience and I/O Surfaces

- **Experience Renderer** – Renders UI/UX, mediates wake-word UX, and exchanges intents and responses with intent-graph and orchestrator. It presents the dynamic dashboard “Operating Surface” as a per-person, card-based home view backed by the context store and orchestrator.
- **Shell** – Electron-based onboarding and developer shell that proxies to renderer and intent-graph.
- **Agent VDI** – Thin desktop/VDI agent that fronts renderer and intent-graph.
- **IO Services (speech, vision, core, bci, braille)** – Device-side emitters that produce event envelopes from speech, vision, BCI, Braille, or other IO and send them into the control plane.

## Runtime and Devstack

- **Devstack** – Docker Compose wiring for local end-to-end runs. Brings up the control plane, inference gateway, renderer, IO stubs, and backing services such as Redis and Postgres.
- **Base Images** – Shared base images used by service Dockerfiles.
- **Shared Docs and Libraries** – Canonical specs and schemas plus shared Python helpers for auth, tracing, HTTP, and envelope validation.
