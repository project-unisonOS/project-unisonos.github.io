# Accessibility is part of correctness

Unison is intended to accept and return information in the form that works for
the person and situation: text, speech, visual interaction, touch, keyboard,
switch, Braille, sign, simplified language, and future modalities.

Every result begins as a semantic response describing meaning, status, urgency,
actions, confirmation, privacy state, provenance, errors, cancellation, and
recovery. Renderers adapt that meaning without creating a less safe or less
complete path for one modality.

A capability is not complete if a person can start it with a modality but cannot
understand its disclosure, confirm it, cancel it, recover from an error, or review
the outcome through that modality. Automated WCAG checks are a baseline; testing
with disabled people and assistive technology is required before release claims.
