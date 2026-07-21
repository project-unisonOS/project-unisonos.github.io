# Your assistant should work for you.

Unison is an open, private personal-assistant platform designed to return time to
the person it serves. **UnisonOS** is the downloadable appliance runtime being
built to run Unison on a trusted device, usually in a person's home.

<p class="hero-lede">One home node. An independently governed assistant for each person. Explicit spaces for the context people choose to share.</p>

[Understand the vision](vision.md){ .cta .cta-primary }
[See the current status](current-status.md){ .cta .cta-secondary }

!!! warning "Development status"
    UnisonOS is pre-release research and engineering software. The repository
    contains working service prototypes and tests, but there is not yet a
    supported appliance image for personal use.

## A different incentive

Unison is intended to optimize for your objectives—not advertising, sponsored
placement, engagement, or a provider's commercial agenda. Its success should be
measured in useful outcomes, commitments completed, accessibility, recoverability,
and time returned to you.

<div class="principle-grid">
  <section class="principle-card"><h3>Private by architecture</h3><p>Your home node is the authority. External models, channels, and backup services are optional, minimized, and replaceable.</p></section>
  <section class="principle-card"><h3>Personal, not household-wide</h3><p>Each adult has an independent assistant and private data domain. Sharing happens only in explicit context spaces.</p></section>
  <section class="principle-card"><h3>Accessible from the start</h3><p>Text, speech, visual, touch, Braille, sign, and future modalities must preserve the same meaning and control.</p></section>
</div>

## One assistant across daily life

At home, a person can interact locally. Away from home, approved channels such
as messaging or voice can connect back to the authoritative node through an
outbound-first gateway. A low-assurance channel can ask, draft, or notify; a
sensitive action requires stronger authentication and an understandable
confirmation.

Unison is not meant to replace the phone or the apps people enjoy. It is meant
to become an excellent personal, administrative, and executive assistant that
can coordinate those tools without turning a person's context into a product.

## What exists today

| Area | Maturity | Meaning |
| --- | --- | --- |
| Service prototypes and shared contracts | Experimental | Code and unit tests exist; boundaries are being reconciled. |
| Semantic experience renderer | Experimental | A working foundation, not a complete multimodal product. |
| Household isolation model | Designed | Approved architecture; enforcement implementation has not begun. |
| Installable UnisonOS appliance | Planned | Ubuntu 24.04 x86_64 is the first target; no supported image yet. |
| Remote channels and encrypted backup | Planned | Architecture principles approved; provider integrations are not production-ready. |

Continue with [how Unison works](how-unison-works.md), the
[privacy and security promise](privacy-security.md), or the
[engineering documentation](developers/get-started.md).
