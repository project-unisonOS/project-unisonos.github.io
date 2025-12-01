# Hardware Deployment

This page summarizes how to run Unison on physical devices or edge hardware.

## Hardware Requirements

- CPU: 4 cores minimum (8 preferred).
- RAM: 8 GB minimum (12–16 GB preferred for local inference).
- Storage: At least 40 GB of free SSD space.
- Network: Stable broadband, with wired connections preferred for render and agent workloads.

## Operating System

- Ubuntu 22.04 LTS or 24.04 LTS (server or desktop).
- Enable OpenSSH for remote access where appropriate.

## Prepare the Device

- Install required packages such as Docker, Docker Compose, Python, and Git.
- Enable and start the Docker service.
- Add the user to the Docker group for convenience.

## Fetch Repos and Configure

- Clone the same set of repos you use in development (devstack and core services).
- Copy environment templates (such as `.env.security`) to `.env` and update:
  - JWT secrets.
  - Consent secrets.
  - Database credentials.

## Run and Upgrade

- Use the devstack or production compose files to start the stack on the device.
- Access the renderer and APIs via the device’s IP and configured ports.
- For upgrades:
  - Pull latest code or images.
  - Rebuild and restart the stack.
  - Preserve data volumes as needed.

For more detailed commands and guidance, see the internal hardware deployment guide.

