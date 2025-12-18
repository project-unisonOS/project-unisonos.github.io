# System Capabilities

UnisonOS connects to tools, services, and external resources through a growing set of **system capabilities**. Capabilities are the bridge between what a person asks for (“intent”) and the concrete mechanism that fulfills it (local tools, connectors, MCP servers, or skill packs).

## What a person experiences

Capabilities are designed to feel like “Unison just knows how to do it,” while still keeping safety, consent, and privacy explicit where it matters.

Examples of experiences powered by capabilities:

- **Instant local answers and actions**
  - “What device am I on?” → host and OS information
  - “Summarize system health” → CPU/memory/disk and bounded process inspection
  - “Read this file and summarize it” → scoped filesystem read
- **Workflows that compose multiple tools**
  - “Summarize my recent meetings” → calendar + meeting artifacts + summarization
  - “Find that email and draft a response” → email search + drafting (draft-only unless explicitly enabled)
  - “Give me a system diagnostics summary I can share” → safe local inspection + formatted output
- **Optional connectors to external systems (disabled by default)**
  - Email and calendar providers
  - Chat/workspace providers (for example, Slack-style integrations)

As UnisonOS evolves, new capabilities will be added and existing ones will mature, expanding what Unison can do while keeping the execution model consistent.

## How capabilities connect UnisonOS to the outside world

Capabilities are not ad-hoc integrations. They are declared, validated, and executed through a platform runtime designed to enforce safe defaults.

At a high level, the platform can represent capabilities as:

- **Local tools** (no network, fast, safe-by-default)
- **Connectors** (networked integrations, typically requiring onboarding)
- **MCP servers / tools** (a standardized tool transport aligned with modern agentic runtimes)
- **Skill packs** (curated procedural bundles that planners can follow for common tasks)
- **A2A peers** (delegated work to another agent, mediated by the platform)

## Onboarding and privacy (what happens when you “connect” something)

Some capabilities require account access (email/calendar/chat). Those are shipped **disabled by default** and require onboarding before use.

In practice, a person can expect:

1. **Clear enablement moments**
   - Unison will not silently turn on connectors or network access.
   - When a connector is needed, the system prompts for explicit enablement (or an operator enables it).
2. **OAuth flows designed for headless / voice-first environments**
   - Onboarding uses device-style authorization flows where possible.
3. **No secrets stored in capability manifests**
   - Tokens and credentials are stored in a secrets backend.
   - Manifests store only references/handles, never token values.
4. **Policy-governed network behavior**
   - Each connector has explicit network allowlists and is executed through policy/egress gates.

## Growth over time

The shipped baseline capabilities cover common local actions and provide placeholders for connectors. Additional capabilities can be discovered and installed from configured registries when policy allows.

This means the set of available capabilities will expand over time as:

- more connectors and tool surfaces become available,
- skill packs mature into richer workflows,
- safety policies and trust verification improve.

The goal is consistent: UnisonOS grows its ability to help, without growing a “wild west” of uncontrolled integrations.

