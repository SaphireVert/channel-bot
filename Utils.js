const Coordinates = require('./Coordinates')

class Utils {
   static editInlineMessage(bot, inline_msg) {

      console.debug(inline_msg.message.reply_markup)
      console.debug(inline_msg.message.reply_markup.inline_keyboard)
      console.debug(inline_msg.message.reply_markup.inline_keyboard.length)
      var replyMarkup = bot.inlineKeyboard([
          [
              // First row with command callback button
              bot.inlineButton('😂', {callback: '/joy'}),
              bot.inlineButton('😍', {callback: [0, 1]}),
              bot.inlineButton('😳', {callback: 'joy'}),
              bot.inlineButton('😡', {callback: 'joy'}),
              bot.inlineButton('😇', {callback: 'joy'}),
              bot.inlineButton('🤪', {callback: 'joy'}),
              bot.inlineButton('😎', {callback: 'joy'}),
              bot.inlineButton('🥳', {callback: 'joy'}),
          ],
          [
              // Second row with regular command button
              bot.inlineButton('1', {callback: 'joy'}),
              bot.inlineButton('0', {callback: 'joy'}),
              bot.inlineButton('0', {callback: 'joy'}),
              bot.inlineButton('0', {callback: 'joy'}),
              bot.inlineButton('0', {callback: 'joy'}),
              bot.inlineButton('0', {callback: 'joy'}),
              bot.inlineButton('0', {callback: 'joy'}),
              bot.inlineButton('0', {callback: 'joy'}),
          ]
      ]);
      console.log('-------');
      console.log(replyMarkup.inline_keyboard)

      console.log('-------');
      console.log(replyMarkup);
      console.log(inline_msg.message.reply_markup);
      replyMarkup = inline_msg.message.reply_markup
      this.giveMeAName(replyMarkup)
      // var inline_buttons_obj = new Coordinates(replyMarkup)
      return bot.editMessageReplyMarkup({chatId: inline_msg.message.chat.id, messageId: inline_msg.message.message_id}, {replyMarkup})
   }

   static giveMeAName(reply_markup){
      console.log('frhijojwos---------------------------------------------');
      for (var i = 0; i < reply_markup.inline_keyboard.length; i++) {
         console.log(i);
         for (const [key, value] of Object.entries(reply_markup.inline_keyboard[i])) {
           // console.log(`${key}: ${value}`);
           for (const [key1, value1] of Object.entries(value)) {
             console.log(`${key}: ${key1}`);
          }
         }
      }
   }

   static updateInlineButtons(inline_msg, bot){
      let replyMarkup = inline_msg.message.reply_markup
      let coord = inline_msg.data.split(' ')
      let noLigne = parseInt(coord[0]) + 1
      let noColonne = parseInt(coord[1])
      for (const [key0, value0] of Object.entries(replyMarkup.inline_keyboard[noLigne])) {
         // console.log(`${key}: ${value}`);
         // console.log(`${key1}: ${value1}`);
         console.log(`${key0}: ${value0}`);
         if (key0 == noColonne) {
            console.log('Waaaaaaaaaaaaaaaa-----------------------');
            console.log(value0.text);
            // value0.text = '1'
            value0.text = (parseInt(value0.text) + 1).toString()
            console.log(value0.text);

         }
      }
      console.log(replyMarkup.inline_keyboard[noLigne]);
      return bot.editMessageReplyMarkup({chatId: inline_msg.message.chat.id, messageId: inline_msg.message.message_id}, {replyMarkup})
   }
}



module.exports = Utils
