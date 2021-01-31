const TeleBot = require('telebot')
const SECRETS_FILE = require('./secrets.json')
var BOT_TOKEN = SECRETS_FILE.BOT_TOKEN
const bot = new TeleBot(BOT_TOKEN)

bot.on('text', (msg) => msg.reply.text(msg.text))

bot.start();
