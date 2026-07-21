# Terminology

| Term | Meaning |
| --- | --- |
| **Unison** | The private personal-assistant platform and user-facing assistant. |
| **UnisonOS** | The downloadable appliance runtime, distribution, and operating surface. |
| **Unison assistant** | One independently governed assistant serving one primary person. |
| **Person** | A stable human identity, distinct from a display name or login handle. |
| **Principal** | An authenticated person, device, channel, or workload allowed to make a request. |
| **Assistant instance** | The independently governed assistant assigned to one person. |
| **Household membership** | An administrative relationship to the appliance; it does not grant access to an adult member's private data. |
| **Channel identity** | A revocable binding between an external provider subject and a person. |
| **Personal node** | The trusted edge device hosting one or more assistants. |
| **Context space** | An explicit private or shared boundary governing context, membership, purpose, and keys. |
| **Capability Host** | The architectural boundary for sandboxed tools and connectors. The repository is `unison-capability`; the runtime service identifier is `unison-capability-host`. |

UnisonOS is not a claim to replace a phone or general-purpose operating system.
“Local-first” does not mean external providers receive no data when a person has
explicitly enabled a remote model, channel, connector, or backup destination.
