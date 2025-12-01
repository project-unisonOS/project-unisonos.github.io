# Renderer and Shell

The renderer and shell provide the primary experience surfaces for Unison.

## Experience Renderer

- Runs as a FastAPI-based service that:
  - Renders UI and mediates wake-word UX.
  - Exchanges intents and responses with the intent-graph and orchestrator.
- In devstack:
  - Exposed on a localhost port accessible via browser.
- For direct development:
  - Use a Python virtual environment and install dependencies based on the shared constraints file.
  - Configure environment variables such as:
    - Orchestrator and context service URLs.
    - Speech service URL.
    - Wake-word defaults and test flags.

## Shell (Electron)

- Desktop shell used for onboarding and local developer flows.
- Proxies requests to the renderer and intent-graph.
- For development:
  - Use Node.js 18+.
  - Install dependencies via the package manager.
  - Run the shell in development mode using the provided scripts.

With devstack running, both the renderer and shell can target the local services for end-to-end testing and experience development.

