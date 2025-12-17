# Inference

Inference in UnisonOS is a dedicated service that runs models and exposes a stable API to the rest of the platform. This keeps model runtimes swappable without requiring every service to embed model tooling.

## How It Fits in the Architecture

- **Orchestrator calls inference**: when planning, tool selection, summarization, or generation is needed, the orchestrator calls the inference service over HTTP.
- **Local-first**: deployments are designed to run fully on local hardware; remote model providers are optional and must be explicitly configured.
- **Governed side-effects**: policy/consent checks happen in the orchestrator before high-impact actions are executed by tools/actuators.

## Providers (Local and Optional Remote)

The inference service is provider-backed. For example, current compose configurations commonly use:

- **Ollama** as a local provider
- A small default model for dev flows (example: `qwen2.5:1.5b`)

Exact defaults are configuration-driven and may vary by release; the important architectural constraint is that providers are interchangeable behind the inference service boundary.

## Model Packs

UnisonOS uses **model packs** to ship and configure models in a repeatable, versioned way:

- Model packs describe what models to load for different tasks/modalities and where they live on disk.
- The devstack uses a shared model directory (commonly `/var/lib/unison/models`) and can require a specific pack via environment configuration.

See [Model packs](../developers/model-packs.md) for the pack format and developer workflow.
