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
- Enable and start the Docker service; add the user to the Docker group for convenience.
- For IO adapters:
  - Enable `libusb`/`hidapi` support for USB Braille displays; ensure udev rules allow access to vendor VID/PIDs.
  - Install `evdev`/`pyedflib` where needed for BCI HID mappings and EDF exports; BLE adapters are required for Muse/OpenBCI.

## Installation options

- Installers (platform repo): `install-native.sh`, `install-docker.sh`, `install-wsl.sh` configure env, pull images, and enable the platform service.
- Artifacts: WSL bundle, Linux VM disk image, and bare-metal installer ISO are produced via `make image-wsl`, `make linux-vm`, and `make baremetal-iso` (see Developers → Images, Builds, and Releases).
- Manual: use devstack or production compose files with your own `.env` secrets.

## Run and Upgrade

- Start via installer (platform service) or compose files; access renderer/APIs via the device’s IP.
- For upgrades, pull new images or code, rebuild/restart, and preserve volumes as needed.

For more detailed commands and guidance, see the internal hardware deployment guide.
