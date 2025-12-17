# Renderer

The experience renderer is the primary “surface” for UnisonOS development and evaluation.

## What It Does

- Renders a real-time, generated experience based on system state and a person’s preferences.
- Exchanges intents and results with the control plane (intent graph + orchestrator).
- Acts as the main UI entry point for local devstack runs.

## Devstack Defaults

- When devstack is running, the renderer is exposed on a localhost port and can be opened in a browser.
- Most evaluators use the renderer UI at `http://localhost:8092`.

## Next Steps

- Bring up the full stack: [Devstack Setup](devstack.md)
- Evaluate a release artifact: [Releases](releases.md)
