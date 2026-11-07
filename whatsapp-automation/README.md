# WhatsApp Automation

A simple WhatsApp automation that can:

- Send configured messages when the bot starts
- Auto-reply to incoming messages

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your env file:

   ```bash
   cp .env.example .env
   ```

3. Update `.env` values as needed.

## Run

```bash
npm start
```

On first run, scan the QR code shown in terminal with your WhatsApp mobile app.

## Environment variables

- `SESSION_ID`: Name for stored login session
- `HEADLESS`: `true` or `false` for browser mode
- `AUTO_REPLY_ENABLED`: Enable or disable auto replies
- `AUTO_REPLY_TEXT`: Message sent as auto reply
- `REQUIRED_PREFIX`: Optional text prefix required before auto-replying
- `STARTUP_MESSAGES`: Comma-separated list in `contact|message` format

## Contact format

Use WhatsApp IDs:

- Individual: `<countrycode><number>@c.us`
- Group: `<groupid>@g.us`
