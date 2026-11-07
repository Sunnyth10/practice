require('dotenv').config();

const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const REQUIRED_PREFIX = process.env.REQUIRED_PREFIX || '';
const AUTO_REPLY_ENABLED = process.env.AUTO_REPLY_ENABLED !== 'false';
const AUTO_REPLY_TEXT = process.env.AUTO_REPLY_TEXT || 'Hi! I got your message and will reply soon.';
const STARTUP_MESSAGES = (process.env.STARTUP_MESSAGES || '')
  .split(',')
  .map((entry) => entry.trim())
  .filter(Boolean)
  .map((entry) => {
    const [to, ...messageParts] = entry.split('|');
    return {
      to: to?.trim(),
      message: messageParts.join('|').trim(),
    };
  })
  .filter(({ to, message }) => to && message);

const repliedChatIds = new Set();

function canAutoReply(body) {
  if (!REQUIRED_PREFIX) {
    return true;
  }

  return body.trim().toLowerCase().startsWith(REQUIRED_PREFIX.toLowerCase());
}

async function sendStartupMessages(client) {
  for (const { to, message } of STARTUP_MESSAGES) {
    try {
      await client.sendMessage(to, message);
      console.log(`Sent startup message to ${to}`);
    } catch (error) {
      console.error(`Failed to send startup message to ${to}:`, error.message);
    }
  }
}

const client = new Client({
  authStrategy: new LocalAuth({ clientId: process.env.SESSION_ID || 'default' }),
  puppeteer: {
    headless: process.env.HEADLESS !== 'false',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
});

client.on('qr', (qr) => {
  console.log('Scan this QR code with WhatsApp:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
  console.log('WhatsApp automation is ready.');
  await sendStartupMessages(client);
});

client.on('message', async (message) => {
  if (!AUTO_REPLY_ENABLED || message.fromMe || !message.from || message.isStatus) {
    return;
  }

  if (!canAutoReply(message.body || '')) {
    return;
  }

  if (repliedChatIds.has(message.from)) {
    return;
  }

  try {
    await client.sendMessage(message.from, AUTO_REPLY_TEXT);
    repliedChatIds.add(message.from);
    console.log(`Auto replied to ${message.from}`);
  } catch (error) {
    console.error(`Failed to auto reply to ${message.from}:`, error.message);
  }
});

client.on('disconnected', (reason) => {
  console.warn(`Client disconnected: ${reason}`);
});

client.initialize();
