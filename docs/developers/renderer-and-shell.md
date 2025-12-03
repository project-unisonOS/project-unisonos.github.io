# Renderer and Shell

The renderer and shell provide the primary experience surfaces for Unison.

## Experience Renderer

- Runs as a FastAPI-based service that:
  - Renders UI and mediates wake-word UX.
  - Exchanges intents and responses with the intent-graph and orchestrator.
  - Presents a per-person dashboard (“Priority Cards” panel) backed by the context service’s `/dashboard/{person_id}` API and the orchestrator’s `dashboard.refresh` skill.
- In devstack:
  - Exposed on a localhost port accessible via browser.
  - By default, loads the dashboard for the configured `UNISON_DEFAULT_PERSON_ID` and keeps it updated as experiences arrive from the orchestrator.
- For direct development:
  - Use a Python virtual environment and install dependencies based on the shared constraints file.
  - Configure environment variables such as:
    - Orchestrator and context service URLs.
    - Speech service URL.
    - Wake-word defaults and test flags.
    - `UNISON_DEFAULT_PERSON_ID` for the dashboard person, and `CONTEXT_BASE_URL` if you are not running devstack.

## Shell (Electron)

- Desktop shell used for onboarding and local developer flows.
- Proxies requests to the renderer and intent-graph.
- For development:
  - Use Node.js 18+.
  - Install dependencies via the package manager.
  - Run the shell in development mode using the provided scripts.
  - The shell surfaces the active wake word in its HUD by calling the rendererâ€™s `/wakeword` endpoint, and its panels follow basic accessibility guidance (headings, status messages, and keyboard-usable controls).

With devstack running, both the renderer and shell can target the local services for end-to-end testing and experience development, including the dynamic dashboard / Operating Surface view.
