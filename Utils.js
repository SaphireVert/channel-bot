
class Utils {
   static editInlineMessage(bot, inline_msg) {

      var replyMarkup = bot.inlineKeyboard([
          [
              // First row with command callback button
              bot.inlineButton('😂', {callback: '/joy'}),
              bot.inlineButton('😍', {callback: 'joy'}),
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

      return bot.editMessageReplyMarkup({chatId: inline_msg.message.chat.id, messageId: inline_msg.message.message_id}, {replyMarkup})
   }
   
}


module.exports = Utils
