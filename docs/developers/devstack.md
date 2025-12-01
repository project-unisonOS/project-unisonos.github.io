# Devstack Setup

The devstack provides a Docker-based local environment that brings up the full Unison stack and backing services.

## Configure Environment

1. Change into the devstack repo.
2. Copy the provided security template:
   - Copy `.env.security` to `.env`.
   - Adjust secrets and environment variables as needed for your local setup.

## Start the Stack

- Run Docker Compose with build enabled to:
  - Build images for core services and bring up:
    - Orchestrator, policy, consent, auth, inference.
    - Context, context-graph, storage.
    - Intent-graph, renderer, IO stubs, and any backing data services.

## Ports and Health Checks

- Core services are exposed on localhost ports for development.
- Use Docker Compose commands or service health endpoints to verify that services are healthy.

## Optional Tools Profile

- Devstack can optionally start additional tools such as local model providers and skill registration services by enabling the appropriate Compose profiles.

For detailed commands and exact port mappings, refer to the internal developer guide and the devstack README.

