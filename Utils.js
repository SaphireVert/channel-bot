const Coordinates = require('./Coordinates')

class Utils {

   static updateInlineButtons(inline_msg, bot){
      let replyMarkup = inline_msg.message.reply_markup
      let coord = inline_msg.data.split(' ')
      let noLigne = parseInt(coord[0]) + 1
      let noColonne = parseInt(coord[1])
      for (const [key0, value0] of Object.entries(replyMarkup.inline_keyboard[noLigne])) {
         if (key0 == noColonne) {
            value0.text = (parseInt(value0.text) + 1).toString()
         }
      }
      return bot.editMessageReplyMarkup({chatId: inline_msg.message.chat.id, messageId: inline_msg.message.message_id}, {replyMarkup})
   }
}

module.exports = Utils
