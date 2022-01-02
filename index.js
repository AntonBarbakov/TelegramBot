const TOKEN = "5052074914:AAGcQh9KzjonlP9Abt202p6Xe7RDtFFk-Ss";
const TY_STICKER = 'CAACAgUAAxkBAAPwYdCOYTkq6zBxWbb48u8B9MlxCsYAAm8DAALpCsgDr86-2QK6XXQjBA';
const PD_STIKER = 'CAACAgIAAxkBAAIBm2HQnqxsVWR1FfjZrMV_ok4kKB-TAAL2AAMIBwIAAao2rPRta17yIwQ';
const LOL_STIKER = 'CAACAgIAAxkBAAIB3mHQqCcxD2vXmU50OgGIWCs-LBCRAAL6AAMIBwIAASxp8LbwtSi9IwQ';
const HELLO = /(Привет|здарова|здоров|здаров|hi|hello|Костя)/ig;
const TY = /(Спасибо бот|спасибо робот|Спасибо)/ig
const LOL = /(фхфх|ахахах|ахах|хехехе|хехе|ахаха|пхпхп|пхп|\)|хехе)/ig
const NEWS = /(новости|новое|что там нового?|news|нового)/ig
const { Telegraf } = require('telegraf')
const { rundomHello, isHere, getList } = require('./testlib')

let text, chatId; 
let count = 0;
let arrNames = [];

const bot = new Telegraf(TOKEN)
bot.start((ctx) => ctx.reply(`Детектор пидораса включен`))

bot.on('sticker', (ctx) => console.log(ctx.message))
bot.on('new_chat_members', (ctx) => ctx.reply(`Здоров ${ctx.message.from.first_name}`))

//////////////////////////////////////////////////////////////////////////////////////////
//                                    HEARS                                             //
//////////////////////////////////////////////////////////////////////////////////////////

bot.hears(HELLO, (ctx, next) => {
    ctx.reply(rundomHello())
    return next()
})
bot.hears(TY, async (ctx, next) => {
    await ctx.replyWithSticker(TY_STICKER)
    return next()
})
bot.hears(LOL, async (ctx, next) => {
    await ctx.replyWithSticker(LOL_STIKER)
    return next()
})
bot.hears(NEWS, async (ctx, next) => {
    ctx.reply(await getList())
    return next()
})
//////////////////////////////////////////////////////////////////////////////////////////
//                                    COMMANDS                                          //
//////////////////////////////////////////////////////////////////////////////////////////

bot.command('pidorDnya', (ctx)=>{
    const index = Math.floor(Math.random() * arrNames.length);
    if(count >= 15) {
        ctx.reply(`И почетное звание "Пидор Дня" присуждается тебе, ${arrNames[index]}!`)
    }else{
        ctx.reply(`Извини, в своих ответах я ограничен`)
    }    
})

bot.on('message',async (ctx)=>{
    isHere(ctx.message.from.first_name, arrNames)
    count++;
    if(count === 15||count === 20) {
        await ctx.replyWithSticker(PD_STIKER)
        ctx.reply(`Пришло время найти пидораса. Клацай по команде и узнай кто тут пидор! \/pidorDnya`)
    }else{
        
    }
    if(count > 20) {
        count = 0;
    }
})
bot.launch()
