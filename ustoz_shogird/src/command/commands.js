const {Composer} = require("grammy")
const {menu} = require("../helpers/buttons")

const bot = new Composer()

bot.command("start",async(ctx)=> {
    await ctx.reply(`<b>Assalom alaykum ${ctx.from.first_name} UstozShogird kanalining rasmiy botiga xush kelibsiz!</b> \n \n/help yordam buyrugi orqali nimalarga qodir ekanligimni bilib oling!`,
    {
        parse_mode: "HTML",
        reply_markup: {
            ...menu
        }
    }
    )
})


bot.command("help",async(ctx)=> {
    await ctx.reply("@oybek25 tomonidan tuzilgan Ustoz-Shogird boti. \n Bu yerda Programmalash bo'yicha \n #Ustoz,   \n#Shogird,\n#oquvKursi,\n#Sherik,\n#Xodim va #IshJoyi topishingiz mumkin.\nE'lon berish: @UstozShogirdBot \nAdmin @UstozShogirdAdminBot")
})

module.exports = bot
