const TeleBot = require('telebot')
const SECRETS_FILE = require('./secrets.json')
var BOT_TOKEN = SECRETS_FILE.BOT_TOKEN
const bot = new TeleBot({
    token: BOT_TOKEN,
    pluginFolder: '../plugins/',
    usePlugins: ['askUser', 'commandButton'],
});

const UTILS = require('./Utils')



// bot.on('text', (msg) => msg.reply.text(msg.text))
// bot.on('text', (msg) => {
//    bot.button('contact', 'text')
//    msg.reply.text(msg.text)
// })



bot.on('/start', msg => {

    // Inline keyboard markup
    var replyMarkup = bot.inlineKeyboard([
        [
            // First row with command callback button
            bot.inlineButton('😂', {callback: '/joy'}),
            bot.inlineButton('😍', {callback: '0 1'}),
            bot.inlineButton('😳', {callback: '0 2'}),
            bot.inlineButton('😡', {callback: '0 3'}),
            bot.inlineButton('😇', {callback: '0 4'}),
            bot.inlineButton('🤪', {callback: '0 5'}),
            bot.inlineButton('😎', {callback: '0 6'}),
            bot.inlineButton('🥳', {callback: '0 7'}),
        ],
        [
            // Second row with regular command button
            bot.inlineButton('0', {callback: '1 0'}),
            bot.inlineButton('0', {callback: '1 1'}),
            bot.inlineButton('0', {callback: '1 2'}),
            bot.inlineButton('0', {callback: '1 3'}),
            bot.inlineButton('0', {callback: '1 4'}),
            bot.inlineButton('0', {callback: '1 5'}),
            bot.inlineButton('0', {callback: '1 6'}),
            bot.inlineButton('0', {callback: '1 7'}),
        ]
    ]);

    // Send message with keyboard markup
    return bot.sendMessage(msg.from.id, 'Blablabla\n\nMessage du canal', {replyMarkup});

});


// Command /hello
bot.on('/joy', async (msg) => {
    // return bot.sendMessage(msg.from.id, 'Hello!');
    // console.log(msg);
    // UTILS.giveMeAName(msg.message.reply_markup.inline_keyboard)
    return UTILS.editInlineMessage(bot, msg)
});

bot.on('callbackQuery', (msg) => {
   console.log(msg);
   // console.log(msg.message.reply_markup.inline_keyboard[1]);
})

bot.on('callbackQuery', (msg) => {

    console.log(typeof msg.data)
    let coord = msg.data.split(' ')[0]
    console.log(coord);
    console.log('callbackQuery data:', msg.data);
    for (const [key, value] of Object.entries(msg.data)) {
      console.log(`${key}: ${value}`);
    }

    UTILS.updateInlineButtons(msg, bot)
    // bot.answerCallbackQuery(msg.id);
    // return bot.editMessageReplyMarkup({inlineMessageId: callbackQuery.inline_message_id}, {replyMarkup})


});


bot.on('inlineQuery', (msg) => {

    console.log('inlineQuery data:', msg.data);
    // bot.answerCallbackQuery(msg.id);
    return bot.editMessageReplyMarkup({inlineMessageId: callbackQuery.inline_message_id}, {replyMarkup})
});



bot.start();
