const TOKEN = "5052074914:AAGcQh9KzjonlP9Abt202p6Xe7RDtFFk-Ss";
const HELLO = /(Привет|здарова|здоров|здаров|hi|hello|Костя)/ig;
const { Telegraf } = require('telegraf')
const command = "1"
const { rundomHello } = require('./testlib')


const bot = new Telegraf(TOKEN)
bot.start((ctx) => ctx.reply(`Детектор пидораса включен`))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.on('new_chat_members', (ctx) => ctx.reply(`Здоров ${ctx.message.from.first_name}`))
bot.hears(HELLO, (ctx) => {
    ctx.reply(rundomHello())
})
bot.launch()
