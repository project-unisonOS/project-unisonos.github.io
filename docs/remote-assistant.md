# Remote assistant

<section class="story-hero" aria-labelledby="remote-introduction">
  <p class="story-kicker">Continue a conversation away from home</p>
  <h2 id="remote-introduction">A remote channel reaches the same personal assistant</h2>
  <p class="story-lead">Unison can connect a person to their assistant through a governed text channel while the personal node retains identity, policy, context, drafts, and decision authority.</p>
</section>

## The current reference channel

Telegram Bot API long polling is the first implemented reference provider. It
demonstrates remote text continuity through third-party infrastructure and
remains an engineering preview awaiting supported-release qualification.

The personal node initiates outbound HTTPS requests to retrieve updates. This
topology avoids a public webhook or listener on the home network. A committed
replay cursor supports orderly recovery after a provider or network outage.

## Privacy and assurance stay visible

Telegram processes message content and account, chat, network, bot, and delivery
metadata. Bot chats do not provide end-to-end encryption to the personal node.
The channel therefore carries a low-assurance classification and is suited to
routine conversation and preparation.

Passwords, recovery material, payment information, medical records, and other
secrets belong on a trusted local experience. Sensitive, ambiguous, recovery,
and consequential requests return a clear route to continue on that device.

Only a paired private conversation participates in the current profile. The
channel adapter rejects groups, channels, unsupported content, stale events,
duplicates, replays, unbound senders, and traffic beyond the configured rate.

## Pairing preserves person-level control

Pairing begins through a trusted local Unison experience after a passkey or
equivalent strong authentication. A single-use code expires after ten minutes.
Each person has a separate provider account, encrypted bot credential, channel
binding, thread state, drafts, and audit summary.

Outbound communication remains a draft until the same person confirms it
locally with the assurance required by policy. The remote channel contributes
intent and conversation. It does not authorize disclosure or consequential
action.

## Disconnect and recover

A person can disconnect the channel from a trusted local device. The process
clears the stored credential and revokes its binding. A suspected token exposure
also calls for provider-side revocation, replacement, and a new strong local
pairing ceremony.

Provider documentation describes the external service and its current data
practices:

- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Telegram bot platform](https://core.telegram.org/bots)
- [Telegram privacy policy](https://telegram.org/privacy)

<aside class="evidence-band" aria-label="Remote-assistant evidence">
  <p><strong>Implemented:</strong> Synthetic provider tests cover two independent people, pairing, reassignment defense, stolen senders, replay and delay, outage recovery, rate limits, stronger local assurance, encrypted drafts, revocation, and the outbound-only topology.</p>
  <p><strong>Being proven:</strong> Supported provider operation, long-running reliability, representative native experiences, person-centered evaluation, and release qualification require additional evidence.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring remote interaction">
  <a href="../privacy-security/"><strong>Review privacy and security</strong><span>See how channels, disclosure, credentials, and person-level authority fit together.</span></a>
  <a href="../backup-recovery/"><strong>Review backup and recovery</strong><span>Understand how assistant continuity survives device and service interruption.</span></a>
</nav>
