# WhatsApp Automation

This automation can:
- send WhatsApp messages on your behalf
- auto-reply to incoming messages

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and adjust values.
3. Start the automation:
   ```bash
   npm start
   ```
4. Scan the QR code shown in terminal using WhatsApp linked devices.

## Configuration

- `AUTO_REPLY_ENABLED`: enables/disables auto-replies.
- `AUTO_REPLY_TEXT`: default message for replies.
- `REPLY_IN_GROUPS`: if `true`, replies to group messages too.
- `KEYWORD_REPLIES`: JSON object for exact-match keyword replies.
- `OUTBOUND_MESSAGES`: messages to send after login in format `chat_id:message;chat_id:message`.

## Chat ID format

- Individual chat: `<countrycode><number>@c.us`
- Group chat: `<group_id>@g.us`

Example:
```
OUTBOUND_MESSAGES=911234567890@c.us:Hello from my bot
```
