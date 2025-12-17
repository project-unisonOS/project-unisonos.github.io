# UnisonOS Experience Doctrine (Canonical)

This document defines the foundational experience philosophy of UnisonOS. It exists to keep design, engineering, and agent-driven implementation aligned as the system scales.

---

## Purpose

This document defines the **foundational experience philosophy** of UnisonOS.  
It serves as the canonical source of directional context for all design, engineering, and agent-driven implementation work.

Its purpose is to ensure that UnisonOS:

- Remains intention-centric and does not drift back to legacy computing metaphors
- Centers people, not “users”
- Prioritizes abstraction over tools, interfaces, and devices
- Treats multimodal interaction and embodiment as first-class
- Scales coherently across domains, modalities, and form factors
- Builds and preserves trust as the primary product

This document is intended to be reused verbatim as **context for development agents (e.g., Codex)** to maintain conceptual consistency as the project scales.

---

## 1. Foundational Ethos

### 1.1 There Are No “Users”

UnisonOS does not have users.

There are **people**.

A person is:
- Intent-driven, not task-driven
- Objective-oriented, not workflow-bound
- Continuous over time, not session-bound

The term *user* implies adaptation to a system.  
UnisonOS inverts this relationship.

The system adapts to the person.

---

### 1.2 UnisonOS Is Not a Computer Experience

UnisonOS is not designed to make computers easier to use.

It is designed to make **the computer irrelevant**.

If a person is thinking about:
- Devices
- Interfaces
- Input mechanisms
- Software tools

then UnisonOS has failed to abstract sufficiently.

---

## 2. Abstraction as a Core Principle

### 2.1 Intent as an Abstraction Boundary

Intent is the primary abstraction layer in UnisonOS.

A guiding principle:

> If a person believes they need a keyboard to accomplish something, the system has not achieved sufficient abstraction.

Key implications:
- Keyboards are not primary interfaces
- Screens are not primary interfaces
- Commands are not experiential primitives

They are implementation artifacts.

---

### 2.2 From Action to Outcome

Traditional systems require people to:
- Select tools
- Navigate interfaces
- Execute steps
- Recover from errors

UnisonOS inverts this model.

A person expresses:
- What they want to accomplish
- Why it matters
- Constraints and preferences

The system determines:
- Which agents act
- Which abstraction layers apply
- Which tools or embodiments are appropriate

The person remains focused on **outcomes**, not actions.

---

## 3. Intent as the Atomic Unit

The smallest meaningful unit in UnisonOS is **intent**, not:
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

## 4. Experience Is Generated, Not Navigated

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

Every experience must assume:
- No screen
- No keyboard
- Possibly no speech
- Possibly multiple simultaneous modalities

If an experience collapses when one modality is removed, it is incomplete.

---

### 5.2 Needs and Preferences Are Context

Accessibility needs, sensory preferences, and cognitive constraints are:
- Persistent
- First-class
- Applied consistently

They are not optional settings.

---

## 6. Power-On Experience (The First Promise)

Power-on is not a boot sequence.  
It is the first expression of presence.

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

The goal is reassurance, not spectacle.

---

## 7. The Renderer

The renderer is not a UI layer.  
It is a **translation surface** between intent and perception.

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

Latency is a trust violation, not merely a performance issue.

---

## 8. Legacy Systems and the VDI-Agent

Legacy applications, files, and workflows still exist.

They are accessed via:
- The VDI-agent
- Tool invocation
- Background execution

Rules:
- The person should not know when legacy systems are involved
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

Digital-only outcomes are not privileged.

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

Actuation is not manual by default.

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

UnisonOS does not sell features.

It earns trust.

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

UnisonOS serves **objectives**, not moments.

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

> An intention-centric, multimodal operating surface that abstracts tools, interfaces, and embodiments to generate real-time digital and physical experiences in service of a person’s objectives.

This statement is approved for direct reuse as agent system context.

---

## 15. Closing Principle

UnisonOS is not redefining computing.

It is dissolving it.

What remains is:
- Intent
- Trust
- Action
- Outcome

Everything else is abstraction.
