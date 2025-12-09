# Actuation / VDI API Reference

## Overview

The actuation surface exposes endpoints used by the orchestrator to execute high-impact tasks. VDI is one actuator that follows the same envelope pattern as other tools.

## VDI Task Endpoints

- `POST /vdi/tasks` – Submit an Action Envelope describing browser/desktop steps (for example, open URL, fill form, click, download). Returns a task ID.
- `GET /vdi/tasks/{id}` – Retrieve task status and result envelope, including any storage object IDs created during execution.

## Action Envelope Shape (High Level)

- **intent_id / action_id** – Correlates back to the originating intent.
- **person/context** – Person identifier and relevant context snapshot.
- **steps** – Structured steps the VDI actuator should perform (navigate, fill, click, wait, download).
- **policy/consent hints** – Evidence that policy and consent checks have passed upstream.

## Results

- **status** – pending, running, succeeded, failed.
- **artifacts** – Storage object IDs for downloaded files plus metadata (URLs, timestamps).
- **logs** – Optional audit trail references written via the storage audit API.

See [Actuation / VDI & VPN](../architecture/components/actuation-vdi-vpn.md) for how these APIs fit into the intent → action → result flow and the VPN boundary.
