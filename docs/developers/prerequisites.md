# Prerequisites

Unison is developed and tested primarily on Ubuntu (including WSL2) with Docker. This page summarizes the recommended setup.

## Operating System

- Ubuntu 22.04 or 24.04 (native or under WSL2 on Windows).
- Windows 11 with WSL2 for a Windows-based workflow.

## Hardware

- Minimum: 4 CPUs and 8 GB RAM.
- Recommended for smoother Docker builds and inference:
  - 6–8 CPUs.
  - 12–16 GB RAM.
- At least 40 GB of free SSD storage.

## Tools

- Docker Desktop with WSL2 backend and Docker Compose v2.
- Python 3.10+ (3.12 recommended) and `pip`.
- Node.js 18+ for tooling and the Electron shell.
- Git and `make`.

Optional but recommended:

- VS Code with extensions for Docker, Python, YAML, and Markdown.
- `direnv` or a `.env` file mechanism for managing secrets locally.

For detailed setup notes, see the internal developer guide in `unison-docs/dev/developer-guide.md` and `unison-docs/dev/SETUP.md`.

