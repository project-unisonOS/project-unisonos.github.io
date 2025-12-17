# UnisonOS Renderer Design Language Specification (Canonical)

## Purpose

This document defines the **design language and behavioral contract** of the UnisonOS renderer.

The renderer is not a UI framework, a windowing system, or a visualization layer.  
It is a **real-time experiential surface** that translates intent into perception.

This specification governs:
- Motion
- Layout
- Presence
- Transitions
- Silence and emptiness
- Modality coexistence

All renderer implementations must conform to this document to avoid regression into legacy interface metaphors.

---

## 1. Core Principle

### 1.1 The Renderer Is an Abstraction Boundary

The renderer sits **between intent and perception**.

Its responsibility is not to expose system structure.  
Its responsibility is to:
- Reveal meaning
- Reduce cognitive load
- Maintain trust
- Disappear when not needed

If the renderer draws attention to itself, it has failed.

---

## 2. Presence Before Information

### 2.1 Presence Is the First State

The renderer’s default state is **presence**, not content.

Presence means:
- The system feels available
- The system feels attentive
- The system is not demanding interaction

Presence may be expressed through:
- Subtle motion
- Ambient sound
- Spatial positioning
- Stillness

Presence must never:
- Compete for attention
- Request action
- Display menus or affordances

---

### 2.2 Empty Is a Valid State

An empty renderer is not a failure.

Silence, darkness, or stillness may be the **correct response** to intent.

If there is nothing valuable to present:
- Present nothing
- Do not fill space
- Do not “idle animate” for reassurance

Presence ≠ activity.

---

## 3. Layout: Field, Not Frames

### 3.1 No Windows, No Panels, No Cards

The renderer must not implement:
- Windows
- Cards
- Panels
- Sidebars
- Docked regions

These imply:
- Persistent structure
- Navigation
- Tool ownership

All content exists within a **single perceptual field**.

---

### 3.2 Centering Is Meaningful

The center of the field represents:
- Current intent
- Highest relevance
- Immediate focus

Peripheral regions may be used for:
- Contextual information
- Transient cues
- Secondary awareness

Nothing should be permanently anchored.

---

### 3.3 Spatial Hierarchy Over Visual Hierarchy

Hierarchy is conveyed through:
- Spatial position
- Depth
- Motion
- Temporal sequencing

Not through:
- Borders
- Containers
- UI chrome
- Typography alone

---

## 4. Motion Language

### 4.1 Motion Is Semantic

Motion is never decorative.

Every motion must communicate at least one of:
- Intent recognition
- State change
- Progression
- Causality
- Completion

If motion does not convey meaning, it must be removed.

---

### 4.2 Organic, Not Mechanical

Motion characteristics:
- Continuous
- Eased
- Non-linear
- Physically plausible

Avoid:
- Snapping
- Bouncing
- Elastic UI effects
- Gamified transitions

The renderer should feel **alive**, not animated.

---

### 4.3 Motion as Feedback, Not Control

Motion confirms action. It does not request it.

The renderer should never:
- Prompt interaction through motion
- Animate to attract attention unnecessarily
- Signal urgency unless intent or safety requires it

---

## 5. Temporal Design

### 5.1 Time Is a First-Class Dimension

The renderer must respect:
- Cognitive pacing
- Sensory load
- Intent urgency

Transitions should:
- Match the seriousness of the intent
- Slow down for reflection
- Speed up for execution

Time is **contextual**.

---

### 5.2 No Artificial Waiting

Loading states, spinners, and progress bars are discouraged.

Instead:
- Acknowledge intent immediately
- Transition into presence
- Reveal progress implicitly through motion or state evolution

Waiting should feel like **thinking**, not blocking.

---

## 6. Presence Cues

### 6.1 Visual Presence

Visual presence may include:
- Subtle breathing motion
- Gentle luminance shifts
- Minimal geometric forms
- Ambient depth changes

Constraints:
- No text
- No icons
- No indicators that imply “clickability”

---

### 6.2 Auditory Presence

Auditory cues:
- Must be calm
- Must be brief
- Must be optional
- Must respect accessibility preferences

Sounds should signal:
- Awareness
- Readiness
- Completion

Never:
- Notification fatigue
- Anthropomorphic speech by default
- Repetitive cues

---

### 6.3 Haptic Presence (Where Applicable)

Haptics should:
- Be deliberate
- Be rare
- Reinforce state changes

Never use haptics for decoration.

---

## 7. Modality Coexistence

### 7.1 No Primary Modality

The renderer must assume:
- The screen may disappear
- Audio may be unavailable
- Haptics may be absent

No experience should depend on a single modality to preserve meaning.

---

### 7.2 Cross-Modal Coherence

When multiple modalities are active:
- They must reinforce the same meaning
- They must not duplicate excessively
- They must not contradict

The renderer orchestrates modalities; it does not mirror them.

---

## 8. Information Density

### 8.1 Less Is the Default

Information density must be:
- Minimal
- Contextual
- Progressive

Reveal information only when:
- It advances intent
- It reduces uncertainty
- It supports decision-making

Never preload “just in case” information.

---

### 8.2 Progressive Disclosure Without Navigation

Additional detail is revealed through:
- Temporal progression
- Focus shifts
- Clarifying questions
- Intent refinement

Never through:
- Drill-downs
- Tabs
- Menus
- Navigation trees

---

## 9. Trust and Safety in Rendering

### 9.1 Renderer Never Surprises

The renderer must never:
- Change state without cause
- Introduce information without relevance
- Trigger physical actuation cues without confirmation

All perceivable changes must be traceable to:
- Intent
- System state
- Safety requirements

---

### 9.2 High-Trust Domains

In domains like health, finance, or actuation:
- Motion must slow
- Transitions must clarify causality
- Confirmations must be explicit
- Ambiguity must be reduced

The renderer shifts tone to reinforce seriousness.

---

## 10. Actuation Representation

### 10.1 Physical Action Is Reflected, Not Simulated

When physical actuation occurs:
- The renderer reflects state and outcome
- It does not mimic robotics controls
- It does not expose mechanical detail unless requested

Actuation is treated as **intent resolution**, not device control.

---

## 11. Anti-Patterns (Explicitly Forbidden)

The renderer must not implement:
- App-like surfaces
- Persistent dashboards
- File metaphors
- Toolbars
- Icons implying actions
- Cursor-centric interaction models
- Keyboard-first assumptions

If these appear, abstraction has failed.

---

## 12. Canonical Renderer Test

Before approving any renderer behavior, ask:

1. Does this expose system structure?
2. Does this require learning?
3. Does this assume a device?
4. Does this add cognitive load?
5. Does this reduce trust?

If any answer is “yes,” the design must be revised.

---

## 13. Closing Principle

The renderer is successful when it feels:
- Inevitable
- Calm
- Obvious
- Forgettable

The best renderer is the one a person never thinks about.

