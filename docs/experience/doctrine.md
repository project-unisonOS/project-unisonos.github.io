# UnisonOS Experience Doctrine (Canonical)

This document defines the foundational experience philosophy of UnisonOS. It exists to keep design, engineering, and agent-driven implementation aligned as the system scales.

---

## Purpose

This document defines the **foundational experience philosophy** of UnisonOS.  
It serves as the canonical source of directional context for all design, engineering, and agent-driven implementation work.

Its purpose is to ensure that UnisonOS:

- Remains intention-centric as it moves beyond legacy computing metaphors
- Centers the people it serves
- Prioritizes abstraction over tools, interfaces, and devices
- Treats multimodal interaction and embodiment as first-class
- Scales coherently across domains, modalities, and form factors
- Builds and preserves trust as the primary product

---

## 1. Foundational Ethos

### 1.1 There Are No “Users”

UnisonOS serves **people**.

Your relationship with UnisonOS is:
- Driven by intent
- Oriented around objectives
- Continuous over time

The term *user* implies adaptation to a system.  
UnisonOS inverts this relationship.

The system adapts to you.

Language matters. As Edward Tufte observed, “There are only two industries that
call their customers ‘users’: illegal drugs and software.” UnisonOS rejects that
framing. The system exists to serve, adapt to, and respect you.

---

## 2. Abstraction as a Core Principle

### 2.1 Intent as an Abstraction Boundary

Intent is the primary abstraction layer in UnisonOS.

A guiding principle:

> If you believe you need a keyboard to accomplish something, the system has not achieved sufficient abstraction.

Key implications:
- Keyboards are optional input tools
- Screens are optional output surfaces
- Commands remain implementation artifacts

They are implementation artifacts.

---

### 2.2 From Action to Outcome

Traditional systems require people to:
- Select tools
- Navigate interfaces
- Execute steps
- Recover from errors

UnisonOS inverts this model.

You express:
- What they want to accomplish
- Why it matters
- Constraints and preferences

The system determines:
- Which agents act
- Which abstraction layers apply
- Which tools or embodiments are appropriate

You remain focused on **outcomes** while UnisonOS coordinates the actions.

---

## 3. Intent as the Atomic Unit

The smallest meaningful unit in UnisonOS is **intent**. The system abstracts interaction mechanics such as:
- Clicks
- Keystrokes
- Commands
- Gestures

Intents may be:
- Explicit or implicit
- Short-lived or persistent
- Singular or composite
- Digital or world-affecting

The system continuously:
1. Interprets intent  
2. Selects agents  
3. Chooses abstraction layers  
4. Generates an experience  
5. Executes actions  
6. Reflects outcomes  
7. Learns preferences (within policy bounds)

---

## 4. Experience Is Generated Around Your Intent

There is no navigation model.

There are no:
- Menus
- App launchers
- File trees
- Workspaces

These constructs exist only where abstraction is insufficient.

UnisonOS **generates experiences** appropriate to current intent and context.

What appears is:
- Contextual
- Ephemeral unless persistence adds value
- Tailored to modality and embodiment

---

## 5. Multimodal I/O as a First-Class Contract

### 5.1 Modality Independence

Every experience must be **capability-aware**:
- If a screen is available, the renderer can use it.
- If there is no screen, the experience must remain complete.
- Do not assume a keyboard is present.
- Speech may be unavailable or inappropriate.
- Multiple simultaneous modalities may be available and should remain coherent.

If an experience collapses when one modality is removed, it is incomplete.

---

### 5.2 Needs and Preferences Are Context

Accessibility needs, sensory preferences, and cognitive constraints are:
- Persistent
- First-class
- Applied consistently

They are integral parts of the experience.

---

## 6. Power-On Experience (The First Promise)

Power-on is the first expression of presence.

### Visual Path
- Full black field
- White UnisonOS logo centered
- Subtle, organic motion
- No text
- No progress indicators

### Auditory Path
- Calm, distinctive cue
- Signals presence and readiness
- Neither mechanical nor anthropomorphic

### Screenless Path
- Audio or haptic acknowledgment
- Immediate confirmation of presence

The goal is calm reassurance.

---

## 7. The Renderer

The renderer is a **translation surface** between intent and perception.

Characteristics:
- Full-field
- Fluid
- Non-windowed
- Context-aware
- Ephemeral by default

It must not resemble:
- Desktops
- Dashboards
- Web pages
- Application shells

Latency affects trust as well as performance.

---

## 8. Legacy Systems and the VDI-Agent

Legacy applications, files, and workflows still exist.

They are accessed via:
- The VDI-agent
- Tool invocation
- Background execution

Rules:
- You should not need to know when legacy systems are involved
- Legacy flows are fallback mechanisms
- VDI is a means, never the experience

---

## 9. Actuation and Embodiment

### 9.1 Intent Extends Beyond the Screen

Intent may resolve into:
- Information
- Decisions
- Automation
- Simulation
- Physical action

Digital and physical outcomes receive equal consideration.

---

### 9.2 Evolving Embodiment

Valid embodiments include:
- Screens and speakers
- Audio-only devices
- Spatial or holographic projections
- Simulated or immersive environments
- Robotics and physical automation
- Assistive and augmentative devices

Form factor is selected by:
- Intent
- Context
- Safety
- Trust boundaries
- Capability availability

---

### 9.3 Actuation as an Agent Choice

Actuation begins with intent and follows the applicable consent boundary.

Agents determine:
- Whether physical action is appropriate
- Which embodiment is safest and most effective
- How authorization is confirmed
- How outcomes are reflected

Robotic action is architecturally equivalent to any other intent realization.

---

## 10. Domain Modules and High-Trust Capabilities

Certain domains require heightened trust and isolation.

Examples:
- Health
- Finance
- Identity
- Legal

These are implemented as **modular domain capabilities** with:
- Clear boundaries
- Explicit consent
- Policy-governed agent authority
- Verifiable behavior

---

## 11. Trust Is the Product

UnisonOS earns trust through every capability and interaction.

Trust is reinforced by:
- Predictability
- Transparency
- Respect for intent
- Respect for boundaries
- Explainable behavior

Every decision must answer:

Does this increase or reduce trust?

---

## 12. Objectives Over Tasks

UnisonOS serves **objectives** across individual moments.

Objectives:
- Span time
- Evolve
- Conflict
- Require tradeoffs

The system exists to:
- Help articulate objectives
- Track progress
- Surface conflicts
- Suggest adjustments
- Act when authorized

---

## 13. Non-Negotiable Design Constraints

- No app-centric framing
- No file-centric primary flows
- No keyboard-dependent assumptions
- No modality assumed as default
- No requirement to “learn” the system
- No opaque behavior in high-trust domains

---

## 14. Canonical Agent Framing

When instructing agents, UnisonOS must always be framed as:

> An intention-centric, multimodal operating surface that abstracts tools, interfaces, and embodiments to generate real-time digital and physical experiences in service of your objectives.

This statement is approved for direct reuse as agent system context.

---

## 15. Closing Principle

UnisonOS is dissolving the friction of computing.

What remains is:
- Intent
- Trust
- Action
- Outcome

Everything else is abstraction.
