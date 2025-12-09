# Actuation / VDI & VPN

## What is Actuation?

Actuation is the layer that allows UnisonOS to cause effects in external systems, beyond returning text or speech. Actuators are accessed through tools/agents and are governed by policy and consent. Examples include:
- **VDI** – Virtual desktop and browser automation.
- **Future actuators** – Robotics, IoT, and other physical or logical endpoints.

## VDI: Virtual Desktop & Browser Automation

VDI provides a headless desktop/browser environment that only Unison agents see. It is used for GUI-style web flows such as logging into sites, navigating multi-page forms, and downloading files. VDI is one possible actuator; many intents are satisfied by other tools or API calls.

## Role of VPN

The VDI container shares a network namespace with a VPN client. All egress from VDI goes through the VPN to:
- Preserve privacy by presenting the VPN exit IP.
- Enforce a single, observable boundary for web automation traffic.
- Fail closed: if the VPN is not healthy, the VDI actuator does not send traffic.

## Intent → VDI Flow

1. **Intent** – A person requests an outcome (for example, “Get my latest bank statement and file it”).
2. **Intent Envelope** – Input is wrapped with person, device, time, and context metadata.
3. **Policy & Consent** – Orchestrator checks whether the requested action is allowed.
4. **Action Envelope** – Orchestrator describes what must happen to satisfy the intent.
5. **Tool Selection** – Actuation chooses the VDI actuator when a browser workflow is required.
6. **VDI Session** – Actuation creates or reuses a VDI session in a VPN-protected container.
7. **Execution** – VDI agent performs headless browser steps: navigate, authenticate with vault-managed credentials, interact, and download.
8. **Storage** – Downloaded files and context updates are stored via the storage service (objects + metadata).
9. **Result Envelope** – Outcomes are returned to the orchestrator.
10. **Render** – Renderer retrieves stored results and presents them according to the person’s profile and context.

Many intents bypass VDI entirely, using inference, local tools, or API integrations instead.

## How VDI Fits With Other Components

- **Orchestrator** – Builds intent/action envelopes and routes to tools or actuators.
- **Agents/Tools** – Treat VDI as an actuation tool following the same envelope pattern.
- **Storage** – Receives artifacts and metadata from VDI runs.
- **Renderer** – Presents the results using the person’s preferences and context.

## Safety & Governance

- Policy and consent gate all high-impact actions.
- VDI actions can be logged to storage audit APIs.
- Credentials originate from the vault, not from hard-coded configuration.
