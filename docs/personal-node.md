# The personal node

A capable Ubuntu device in the home is the first deployment target. It can host
one or several Unison assistants while keeping each adult's keys, private context,
credentials, memory, goals, audit view, backup, export, and deletion independently
governed.

The node remains authoritative even when it uses a cloud model, messaging
provider, or encrypted storage provider. Those services supply transport,
inference, or ciphertext storage. The node retains the assistant's identity and
memory.

Remote interaction is outbound-first: the node establishes approved connections
while keeping the administrative service private by default. Backup, device
sync, and remote access are separate subsystems with separate permissions.

!!! info "Initial target"
    Ubuntu 24.04 LTS on x86_64 is approved as the first appliance target. WSL2
    and Linux virtual machines remain development and evaluation environments.
