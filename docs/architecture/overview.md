# Architecture Overview

This page summarizes how the core Unison services cooperate to deliver edge-first, real-time generated experiences.

## Core Control Plane

- **Intent Graph** – First stop for intents coming from the experience renderer, Agent VDI, or I/O services. Normalizes requests and forwards them to the orchestrator.
- **Orchestrator** – Central router and planner. Enforces auth and consent, orchestrates skills/tools, calls inference, and manages conversational or task state.
- **Policy and Consent** – Evaluate safety and consent before actions are executed and provide audit records.
- **Auth** – Issues and validates tokens for service-to-service and user-bound flows.
- **Inference** – Gateway to model providers (local-first; remote providers are optional), invoked by the orchestrator when generation is needed.

## Context, Storage, and Profiles

- **Context** – The consent-aware profile and session store (typically backed by Postgres in the devstack and platform compose).
- **Context Graph** – Maintains graph-shaped context used for recall, relationships, and cross-signal fusion (devstack uses Neo4j; other deployments may run the graph service with Postgres-backed persistence).
- **Storage** – Durable KV + artifacts + vault + audit, exposed through a single service API (metadata in Postgres; artifacts stored on the local storage volume).

Together, these services implement secure edge profiles that other components can read and update under policy and consent.

## Experience and I/O Surfaces

- **Experience Renderer** – The real-time renderer that turns system state into an experience, and turns multimodal inputs into intents for the control plane.
- **Agent VDI** – A desktop/browser automation actuator used when an outcome requires interacting with graphical software.
- **I/O Services (speech, vision, core, BCI, braille, sign, …)** – Device-side emitters that normalize modality events into the control plane.

## Runtime and Devstack

- **Devstack** – Docker Compose wiring for local end-to-end runs. Brings up the control plane, inference, renderer, I/O services, and backing services such as Postgres, Redis, and Neo4j.
- **Base Images** – Shared base images used by service Dockerfiles.
- **Shared Docs and Libraries** – Canonical specs and schemas plus shared Python helpers for auth, tracing, HTTP, and envelope validation.

## Models in the Architecture

- **Inference is a service**: the orchestrator calls the inference service over HTTP to run models, rather than linking model runtimes into every service.
- **Model packs**: releases ship versioned “model packs” that describe which models to load for a given modality/task and where to put them on disk. See [Model Packs](deep-dive.md#model-packs).

Next: see [Architecture Deep Dive](deep-dive.md) for flows, boundaries, and model execution details.
