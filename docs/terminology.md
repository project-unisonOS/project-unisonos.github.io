# Terminology

| Term | Meaning |
| --- | --- |
| **Unison** | The private personal-assistant platform and user-facing assistant. |
| **UnisonOS** | The downloadable appliance runtime, distribution, and operating surface. |
| **Unison assistant** | One independently governed assistant serving one primary person. |
| **Person** | A stable human identity, distinct from a display name or login handle. |
| **Principal** | An authenticated person, device, channel, or workload allowed to make a request. |
| **Assistant instance** | The independently governed assistant assigned to one person. |
| **Household membership** | An administrative relationship to the appliance. Each adult member's private data remains separately protected. |
| **Channel identity** | A revocable binding between an external provider subject and a person. |
| **Personal node** | The trusted edge device hosting one or more assistants. |
| **Context space** | An explicit private or shared boundary governing context, membership, purpose, and keys. |
| **Capability Host** | The architectural boundary for sandboxed tools and connectors. The repository is `unison-capability`; the runtime service identifier is `unison-capability-host`. |

UnisonOS is a personal-assistant platform designed to coexist with phones and
general-purpose operating systems. “Local-first” keeps authority on your node
while allowing the remote models, channels, connectors, and backup destinations
you explicitly enable.
