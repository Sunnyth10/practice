require('dotenv').config();

const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const parseBoolean = (value, fallback = false) => {
  if (typeof value !== 'string') return fallback;
  return ['1', 'true', 'yes', 'on'].includes(value.trim().toLowerCase());
};

const parseOutboundMessages = () => {
  const raw = process.env.OUTBOUND_MESSAGES;
  if (!raw) return [];

  return raw
    .split(';')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const separator = entry.indexOf(':');
      if (separator === -1) return null;

      const chatId = entry.slice(0, separator).trim();
      const message = entry.slice(separator + 1).trim();

      if (!chatId || !message) return null;

      return { chatId, message };
    })
    .filter(Boolean);
};

const parseKeywordReplies = () => {
  const raw = process.env.KEYWORD_REPLIES;
  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return Object.fromEntries(
        Object.entries(parsed).map(([key, value]) => [key.toLowerCase(), String(value)])
      );
    }
  } catch (error) {
    console.error('Failed to parse KEYWORD_REPLIES JSON, using default reply only.');
  }

  return {};
};

const config = {
  autoReplyEnabled: parseBoolean(process.env.AUTO_REPLY_ENABLED, true),
  autoReplyText:
    process.env.AUTO_REPLY_TEXT ||
    'Hi! I am currently unavailable. I will get back to you soon.',
  replyInGroups: parseBoolean(process.env.REPLY_IN_GROUPS, false),
  outboundMessages: parseOutboundMessages(),
  keywordReplies: parseKeywordReplies(),
};

const client = new Client({
  authStrategy: new LocalAuth({ clientId: 'whatsapp-automation' }),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
});

client.on('qr', (qr) => {
  console.log('Scan this QR code from WhatsApp to log in:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
  console.log('WhatsApp automation is ready.');

  for (const outbound of config.outboundMessages) {
    try {
      await client.sendMessage(outbound.chatId, outbound.message);
      console.log(`Sent message to ${outbound.chatId}`);
    } catch (error) {
      console.error(`Failed to send message to ${outbound.chatId}:`, error.message);
    }
  }
});

client.on('message', async (message) => {
  if (!config.autoReplyEnabled) return;
  if (message.fromMe) return;
  if (!config.replyInGroups && message.from.endsWith('@g.us')) return;

  const incomingText = String(message.body || '').trim().toLowerCase();
  const keywordReply = config.keywordReplies[incomingText];
  const replyText = keywordReply || config.autoReplyText;

  try {
    await message.reply(replyText);
    console.log(`Replied to ${message.from}`);
  } catch (error) {
    console.error(`Failed to reply to ${message.from}:`, error.message);
  }
});

client.on('auth_failure', (error) => {
  console.error('Authentication failed:', error);
});

client.on('disconnected', (reason) => {
  console.warn('WhatsApp client disconnected:', reason);
});

client.initialize();
