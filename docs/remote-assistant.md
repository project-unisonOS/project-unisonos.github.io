# Remote assistant

Phase 5 established an accepted boundary for reaching the same personal assistant through one remote text channel. Telegram Bot API long polling is the first reference provider. This is a bounded engineering proof—not a supported release or a claim that Telegram is private infrastructure.

## What the boundary means

- Telegram is always treated as **low assurance**. Telegram can process message content and account, chat, network, bot, and delivery metadata.
- Bot chats are not end-to-end encrypted to the UnisonOS node. Do not send passwords, account-recovery material, payment information, medical records, or other secrets.
- Only private one-to-one chats are accepted. Groups, channels, unsupported content, stale events, duplicates, replays, unbound senders, and excessive rates fail closed.
- Each person owns a separate encrypted bot credential, provider account, binding, thread state, drafts, and audit summary. Household administration cannot read or reassign them.
- Pairing begins on the trusted local UnisonOS surface after a passkey or equivalent strong authentication. The one-use code expires after ten minutes.
- Sensitive, recovery, ambiguous, and consequential requests stop with **Continue on your trusted local device**. The remote message never authorizes the action.
- Outbound messages are drafts first and require strong local confirmation by the same person. They can be cancelled before sending.

## Why long polling

The appliance initiates outbound HTTPS requests to Telegram's `getUpdates` API. It does not expose a webhook or public listener. A provider outage leaves the committed replay cursor unchanged and the worker resumes from the next event after reconnection.

Telegram reports that pending Bot API updates are retained for no longer than 24 hours. Review the [Bot API](https://core.telegram.org/bots/api), [bot platform security model](https://core.telegram.org/bots), and [Telegram privacy policy](https://telegram.org/privacy) before enabling the channel.

## Disconnect and recovery

Revoke the channel from a trusted local device. If a bot token may be stolen, revoke it with BotFather too, create a replacement, and repeat strong local pairing. Disconnect clears the stored credential and revokes the binding; it never silently restores or transfers the prior connection.

The proof uses a fake provider with no real credentials to test two independent people, pairing and reassignment defense, stolen senders, replay and delay, outage and reconnect, rate limits, step-up, encrypted drafts, revocation, and the no-public-listener topology. The Phase 5 architecture/security gate passed on 2026-07-21; Phase 6 is not started.
