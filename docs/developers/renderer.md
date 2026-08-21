# Experience renderer

The experience renderer is one modality adapter in the Unison Surface. It
composes a native visual and keyboard experience from the same governed
semantic outcome available to conversational, Braille, tactile, sign-language,
BCI, and future modality adapters.

The browser renderer is also a practical development and evaluation surface.
Its interface remains a visual experience. Blind and visually impaired people
receive native conversational or Braille experiences through their applicable
adapters.

## Responsibility boundary

The renderer can:

- express meaning, provenance, uncertainty, choices, confirmation, cancellation,
  and recovery from a semantic outcome;
- adapt visual structure, density, language, contrast, motion, and keyboard
  interaction to the person and situation;
- collect input and return a proposed intent, selection, or confirmation; and
- maintain presentation state for the current visual experience.

Identity, consent, policy, incident state, context access, tool authority, and
physical actuation belong to their owning services. A renderer presents an
authorized decision and relays the person's response. It cannot grant itself
access, reinterpret a confirmation, or execute an action.

## Common integration point

Every modality adapter connects through the versioned semantic experience
contract. The contract carries the meaning and controls that must remain
equivalent across native expressions:

1. interpreted intent and current state;
2. facts, sources, relationships, and uncertainty;
3. available choices and actions;
4. disclosure and confirmation requirements;
5. cancellation, interruption, and recovery; and
6. content-minimized receipt information.

A visual composition can use spatial comparison and direct manipulation.
Conversation can use dialogue, pacing, and auditory structure. Braille can use
tactile regions and direct navigation. New modality contributors implement the
same contract through the strengths of their modality.

## Development surface

With the development stack running, the visual renderer is available at
`http://localhost:8092`. It exchanges semantic outcomes and proposed person
responses with the control plane through versioned interfaces.

Renderer acceptance includes semantic contract tests, keyboard operation,
reflow, zoom, high contrast, reduced motion, error recovery, cancellation, and
confirmation fidelity. Cross-modality golden journeys verify equivalent
meaning and control. Representative devices and participatory evaluation
provide the evidence required for a supported native experience.

## Continue developing

- [Bring up the development stack](devstack.md).
- [Implement a modality adapter](modality-integration.md).
- [Review multimodal interaction](../experience/multimodal.md).
- [Follow the shared-understanding journeys](../experience/shared-understanding.md).

<aside class="evidence-band" aria-label="Renderer evidence boundary">
  <p><strong>Implemented:</strong> The semantic response contract, visual renderer foundations, modality service interfaces, and synthetic golden journeys have unit and hosted CI evidence.</p>
  <p><strong>Being proven:</strong> Representative visual, conversational, and Braille devices and participatory evaluation remain required before those experiences are described as supported.</p>
  <p><strong>Envisioned:</strong> Sign-language, BCI, richer tactile, spatial, switch, and AAC adapters can join through the same semantic integration point.</p>
</aside>
