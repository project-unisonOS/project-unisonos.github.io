# VDI in the Architecture

## VDI as an actuator

VDI acts as one actuator in the broader actuation layer. The orchestrator selects it when an intent requires browser automation, graphical flows, or interaction with sites and applications that only expose graphical interfaces.

Requests arrive as action envelopes that include the person, context, and planned steps. VDI executes those steps in a controlled desktop environment and returns result envelopes that reference artifacts stored through the storage service.

## Network and privacy boundaries

VDI sessions share a network namespace with a VPN client. All traffic from the VDI environment is expected to pass through that VPN boundary so that:

- Web automation traffic uses a predictable egress path.
- Privacy is preserved by avoiding direct exposure of device IPs.
- Sessions fail closed when the VPN is unavailable.

These guarantees align with the broader platform stance on privacy, consent, and policy enforcement.

## Storage and result handling

Files and other artifacts produced by VDI runs are written to the storage service. The orchestrator and experience renderer then use storage identifiers to retrieve and present results as part of the generated experience.

For low level API details, see the [Actuation and VDI API reference](../reference/actuation-vdi-api.md).
