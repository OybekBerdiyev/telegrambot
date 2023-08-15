const { Router } = require("@grammyjs/router");
const { decision, menu } = require("../helpers/buttons");

const Io = require("../utils/io")
const Users = new Io("./database/shogird.json")
const { sherik, ish, hodim, ustoz, shogird } = require("../command/menus");
const { writeIsh, writeSherik, writeHodim, writeUstoz, writeShogirt } = require("../middleware/writeModels");

const router = new Router((ctx)=> ctx.session.step)

const ShogirdfullName = router.route("ShogirdfullName");

ShogirdfullName.hears("Ish joyi kerak",writeIsh,ish)
ShogirdfullName.hears("Sherik kerak",writeSherik,sherik)
ShogirdfullName.hears("Hodim kerak",writeHodim,hodim)
ShogirdfullName.hears("Ustoz kerak",writeUstoz,ustoz)
ShogirdfullName.hears("Shogird kerak",writeShogirt,shogird)


ShogirdfullName.on("message:text", async (ctx) => {
    const fullName = ctx.message.text
    const id = ctx.from.id
    const username = ctx.from.username
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.fullName = fullName
    finduser.username = username
    await Users.write(users)
    await ctx.reply(`<b>🕑 Yosh:</b>\n
    Yoshingizni kiriting?
    Masalan, 19`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "ShogirdAge" 
});


const ShogirdAge = router.route("ShogirdAge");

ShogirdAge.hears("Ish joyi kerak",writeIsh,ish)
ShogirdAge.hears("Sherik kerak",writeSherik,sherik)
ShogirdAge.hears("Hodim kerak",writeHodim,hodim)
ShogirdAge.hears("Ustoz kerak",writeUstoz,ustoz)
ShogirdAge.hears("Shogird kerak",writeShogirt,shogird)


ShogirdAge.on("message:text", async (ctx) => {
    const age = ctx.message.text
    const id = ctx.from.id
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.age = age
    await Users.write(users)
    await ctx.reply(`<b>📚 Texnologiya:</b>\n
    Talab qilinadigan texnologiyalarni kiriting?
    Texnologiya nomlarini vergul bilan ajrating. Masalan, 
    
    Java, C++, C#`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "Shogirdteclogy"
});

const Shogirdteclogy = router.route("Shogirdteclogy");

Shogirdteclogy.hears("Ish joyi kerak",writeIsh,ish)
Shogirdteclogy.hears("Sherik kerak",writeSherik,sherik)
Shogirdteclogy.hears("Hodim kerak",writeHodim,hodim)
Shogirdteclogy.hears("Ustoz kerak",writeUstoz,ustoz)
Shogirdteclogy.hears("Shogird kerak",writeShogirt,shogird)


Shogirdteclogy.on("message:text", async (ctx) => {
    const tecnology = ctx.message.text
    const id = ctx.from.id
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.tecnology = tecnology
    await Users.write(users)    
    await ctx.reply(`<b>📞 Aloqa:</b>\n Bog'lanish uchun raqamingizni kiriting? \nMasalan, +998901234567`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "ShogirdNumber"
});

const ShogirdNumber = router.route("ShogirdNumber");

ShogirdNumber.hears("Ish joyi kerak",writeIsh,ish)
ShogirdNumber.hears("Sherik kerak",writeSherik,sherik)
ShogirdNumber.hears("Hodim kerak",writeHodim,hodim)
ShogirdNumber.hears("Ustoz kerak",writeUstoz,ustoz)
ShogirdNumber.hears("Shogird kerak",writeShogirt,shogird)



ShogirdNumber.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const number = ctx.message.text;

    if (/^\+998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/.test(number)) {
        const users = await Users.read();
        const finduser = users.find((a) => a.id == id);
        finduser.phoneNumber = number;
        await Users.write(users);

        await ctx.reply(
            `<b>🌐 Hudud:</b>\n Qaysi hududdansiz? \nViloyat nomi, Toshkent shahar yoki Respublikani kiriting.`,
            {
                parse_mode: "HTML",
            }
        );
        ctx.session.step = "Shogirdlocation";
    } else {
        await ctx.reply(
            "Noto'g'ri raqam kiritildi. Raqamni '+998' kabi boshlangan holda kiriting."
        );
    }
});

const Shogirdlocation = router.route("Shogirdlocation");

Shogirdlocation.hears("Ish joyi kerak",writeIsh,ish)
Shogirdlocation.hears("Sherik kerak",writeSherik,sherik)
Shogirdlocation.hears("Hodim kerak",writeHodim,hodim)
Shogirdlocation.hears("Ustoz kerak",writeUstoz,ustoz)
Shogirdlocation.hears("Shogird kerak",writeShogirt,shogird)


Shogirdlocation.on("message:text", async (ctx) => {
    const id = ctx.from.id
    const location = ctx.message.text
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.location = location
    await Users.write(users)

    await ctx.reply(`<b>💰 Narxi:</b>\nIltimos Aniq narxni kiriting.\n Agar tekin bo'lsa 0 kiriting`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "Shogirdprice"
});

const Shogirdprice = router.route("Shogirdprice");

Shogirdprice.hears("Ish joyi kerak",writeIsh,ish)
Shogirdprice.hears("Sherik kerak",writeSherik,sherik)
Shogirdprice.hears("Hodim kerak",writeHodim,hodim)
Shogirdprice.hears("Ustoz kerak",writeUstoz,ustoz)
Shogirdprice.hears("Shogird kerak",writeShogirt,shogird)


Shogirdprice.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const price = ctx.message.text;
    const users = await Users.read();
    const finduser = users.find((a) => a.id == id);

        finduser.price = price;
        await Users.write(users);

        await ctx.reply(
            `<b>👨🏻‍💻 Kasbi: </b>\n Ishlaysizmi yoki o'qiysizmi?\nMasalan, Talaba`,
            {
                parse_mode: "HTML",
            }
        );
        ctx.session.step = "ShogirdProfission";

});

const ShogirdProfission = router.route("ShogirdProfission");

ShogirdProfission.hears("Ish joyi kerak",writeIsh,ish)
ShogirdProfission.hears("Sherik kerak",writeSherik,sherik)
ShogirdProfission.hears("Hodim kerak",writeHodim,hodim)
ShogirdProfission.hears("Ustoz kerak",writeUstoz,ustoz)
ShogirdProfission.hears("Shogird kerak",writeShogirt,shogird)


ShogirdProfission.on("message:text", async (ctx) => {

    const id = ctx.from.id
    const profission = ctx.message.text
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.profission = profission
    await Users.write(users)

    await ctx.reply(`<b>🕰 Murojaat qilish vaqti:</b>\n Qaysi vaqtda murojaat qilish mumkin? \nMasalan, 09:00 - 18:00`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "ShogirdAppealTime"
});

const ShogirdAppealTime = router.route("ShogirdAppealTime");

ShogirdAppealTime.hears("Ish joyi kerak",writeIsh,ish)
ShogirdAppealTime.hears("Sherik kerak",writeSherik,sherik)
ShogirdAppealTime.hears("Hodim kerak",writeHodim,hodim)
ShogirdAppealTime.hears("Ustoz kerak",writeUstoz,ustoz)
ShogirdAppealTime.hears("Shogird kerak",writeShogirt,shogird)


ShogirdAppealTime.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const appealTime = ctx.message.text;

    if (/^(0[9-9]|1[0-9]|2[0-2]):[0-5][0-9]\s*[-–]\s*(0[9-9]|1[0-9]|2[0-2]):[0-5][0-9]$/.test(appealTime) ||
        /^(0[9-9]|1[0-9]|2[0-2]):[0-5][0-9]\s*$/.test(appealTime) ||
        /^(0[9-9]|1[0-9]|2[0-2]):[0-5][0-9]$/.test(appealTime)) {
        const users = await Users.read();
        const finduser = users.find((a) => a.id == id);
        finduser.appealTime = appealTime.replace(/\s/g, ''); 
        await Users.write(users);

        await ctx.reply(
            `<b>🔎 Maqsad: </b>\n Maqsadingizni qisqacha yozib bering`,
            {
                parse_mode: "HTML",
            }
        );
        ctx.session.step = "ShogirdGoal";
    } else {
        await ctx.reply(
            "Noto'g'ri vaqt kiritildi. Ma'lumotni to'g'ri vaqt oralig'ida (09:00 - 22:00) kiriting."
        );
    }
});


const ShogirdGoal = router.route("ShogirdGoal");

ShogirdGoal.hears("Ish joyi kerak",writeIsh,ish)
ShogirdGoal.hears("Sherik kerak",writeSherik,sherik)
ShogirdGoal.hears("Hodim kerak",writeHodim,hodim)
ShogirdGoal.hears("Ustoz kerak",writeUstoz,ustoz)
ShogirdGoal.hears("Shogird kerak",writeShogirt,shogird)


ShogirdGoal.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const goal = ctx.message.text;
    const users = await Users.read();
    const finduser = users.find((a) => a.id == id);
    finduser.goal = goal;


    await Users.write(users);

    await ctx.reply(`<b>🤝Shogird kerak:</b>
<b>🏅 Xodim:</b> ${finduser.fullName}
<b>🕑 Yosh:</b> ${finduser.age}
<b>📚 Texnologiya:</b> ${finduser.tecnology}
<b>🇺🇿 Telegram:</b> @${finduser.username}
<b>📞 Aloqa:</b> ${finduser.phoneNumber}
<b>🌐 Hudud:</b> ${finduser.location}
<b>💰 Narxi:</b> ${finduser.price}
<b>👨🏻‍💻 Kasbi:</b> ${finduser.profission}
<b>🕰 Murojaat qilish vaqti:</b> ${finduser.appealTime}
<b>🔎 Maqsad:</b> ${finduser.goal} 

#shogird`,
    {
        parse_mode: "HTML",
        reply_markup: {
            ...decision
        }
    });
    ctx.session.step = "Shogirddesition";
});


const Shogirddesition = router.route("Shogirddesition");

Shogirddesition.hears("Sherik kerak",sherik)
Shogirddesition.hears("Ish joyi kerak",ish)
Shogirddesition.hears("Hodim kerak",hodim)
Shogirddesition.hears("Ustoz kerak", ustoz)
Shogirddesition.hears("Shogird kerak", shogird)


Shogirddesition.hears("Ha",async(ctx)=>{
    const id = ctx.from.id
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.status = "waiting"
    await Users.write(users)
    await ctx.reply("Barcha ma'lumotlar to'g'rimi?")
    const message = `<b>🤝Shogird kerak:</b>
    <b>🏅 Xodim:</b> ${finduser.fullName}
    <b>🕑 Yosh:</b> ${finduser.age}
    <b>📚 Texnologiya:</b> ${finduser.tecnology}
    <b>🇺🇿 Telegram:</b> @${finduser.username}
    <b>📞 Aloqa:</b> ${finduser.phoneNumber}
    <b>🌐 Hudud:</b> ${finduser.location}
    <b>💰 Narxi:</b> ${finduser.price}
    <b>👨🏻‍💻 Kasbi:</b> ${finduser.profission}
    <b>🕰 Murojaat qilish vaqti:</b> ${finduser.appealTime}
    <b>🔎 Maqsad:</b> ${finduser.goal} 
    
    #shogird`

    const chatId = "-1001989286215";
    await ctx.api.sendMessage(chatId, message, {
        parse_mode: "HTML",
    });

    ctx.reply(`<b>📪 So'rovingiz tekshirish uchun adminga jo'natildi!</b> \nE'lon 24-48 soat ichida kanalda chiqariladi.`,{
        parse_mode: "HTML",
        reply_markup: {
            ...menu
        }
    }
    )
})


Shogirddesition.hears("Yo'q", async (ctx) => {
    const id = ctx.from.id;
    const users = await Users.read();
    const updatedUsers = users.filter((user) => user.id !== id);
    await Users.write(updatedUsers);
    
    await ctx.reply(`<b>🙅‍♂️Qabul qilinmadi</b>`, {
        reply_markup: {
            ...menu,
        },
        parse_mode: "HTML",
    });
    
    ctx.session.step = "home";
});

Shogirddesition.on("message", async(ctx)=>{
    await ctx.reply("Iltimos! Buyruqlardan birini tanglang")
})

module.exports = router;