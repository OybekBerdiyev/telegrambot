const {Router} = require("@grammyjs/router")
const { sherik, ish, hodim, ustoz, shogird } = require("../command/menus")
const { writeSherik, writeIsh, writeHodim, writeUstoz, writeShogirt } = require("../middleware/writeModels")

const router = new Router((ctx)=> ctx.session.step)

const home = router.route("home")

home.hears("Ish joyi kerak",writeIsh,ish)
home.hears("Sherik kerak",writeSherik,sherik)
home.hears("Hodim kerak",writeHodim,hodim)
home.hears("Ustoz kerak",writeUstoz,ustoz)
home.hears("Shogird kerak",writeShogirt,shogird)
home.hears("id",(ctx)=>{
    console.log(ctx);
})


home.on("message",async(ctx)=>{
    await ctx.reply("Iltimos Tugmalardan birini tanlang")
})


module.exports = router