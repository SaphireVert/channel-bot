async function main(){
   const TeleBot = require('telebot')
   const SECRETS_FILE = require('./secrets.json')
   var BOT_TOKEN = SECRETS_FILE.BOT_TOKEN
   const bot = new TeleBot({
      token: BOT_TOKEN,
      pluginFolder: '../plugins/',
      usePlugins: ['askUser', 'commandButton'],
   });

   const UTILS = require('./Utils')
   const meBot = await bot.getMe()
   let botName = meBot.username
   console.log(botName);
   bot.on(new RegExp(`^\/send(@${botName})(.)(.+)?$`), (msg, props) => {

      var message = props.match[3]
      
      // Inline keyboard markup
      var replyMarkup = bot.inlineKeyboard([
         [
            // First row with command callback button
            bot.inlineButton('😂', {callback: '0 0'}),
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
            bot.inlineButton('0', {callback: '0 0'}),
            bot.inlineButton('0', {callback: '0 1'}),
            bot.inlineButton('0', {callback: '0 2'}),
            bot.inlineButton('0', {callback: '0 3'}),
            bot.inlineButton('0', {callback: '0 4'}),
            bot.inlineButton('0', {callback: '0 5'}),
            bot.inlineButton('0', {callback: '0 6'}),
            bot.inlineButton('0', {callback: '0 7'}),
         ]
      ]);

      // Send message with keyboard markup
      console.log(msg.message_id);
      return bot.sendMessage(msg.chat.id, message, {replyMarkup});

   });

   bot.on('callbackQuery', (msg) => {
      console.log(typeof msg.data)
      let coord = msg.data.split(' ')[0]
      console.log(coord);
      console.log('callbackQuery data:', msg.data);
      for (const [key, value] of Object.entries(msg.data)) {
         console.log(`${key}: ${value}`);
      }
      UTILS.updateInlineButtons(msg, bot)
   });

   bot.start();
}
main()
