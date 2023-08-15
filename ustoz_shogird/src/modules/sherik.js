const { Router } = require("@grammyjs/router");
const { decision, menu } = require("../helpers/buttons");

const Io = require("../utils/io")
const Users = new Io("./database/Sherik.json")


const { sherik, ish, hodim, ustoz, shogird } = require("../command/menus");
const { writeIsh, writeSherik, writeHodim, writeUstoz, writeShogirt } = require("../middleware/writeModels");

const router = new Router((ctx)=> ctx.session.step)


const ShfullName = router.route("ShfullName");

ShfullName.hears("Ish joyi kerak",writeIsh,ish)
ShfullName.hears("Sherik kerak",writeSherik,sherik)
ShfullName.hears("Hodim kerak",writeHodim,hodim)
ShfullName.hears("Ustoz kerak",writeUstoz,ustoz)
ShfullName.hears("Shogird kerak",writeShogirt,shogird)


ShfullName.on("message:text", async (ctx) => {
    const fullName = ctx.message.text
    const id = ctx.from.id
    const username = ctx.from.username
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.fullName = fullName
    finduser.username = username
    await Users.write(users)
    await ctx.reply(`<b>📚 Texnologiya:</b>\n
    Talab qilinadigan texnologiyalarni kiriting?
    Texnologiya nomlarini vergul bilan ajrating. Masalan, 
    Java, C++, C#`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "Shteclogy" 
});


const Shteclogy = router.route("Shteclogy");

Shteclogy.hears("Ish joyi kerak",writeIsh,ish)
Shteclogy.hears("Sherik kerak",writeSherik,sherik)
Shteclogy.hears("Hodim kerak",writeHodim,hodim)
Shteclogy.hears("Ustoz kerak",writeUstoz,ustoz)
Shteclogy.hears("Shogird kerak",writeShogirt,shogird)


Shteclogy.on("message:text", async (ctx) => {
    const tecnology = ctx.message.text
    const id = ctx.from.id
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.tecnology = tecnology
    await Users.write(users)    
    await ctx.reply(`<b>📞 Aloqa:</b>\n Bog'lanish uchun raqamingizni kiriting? \nMasalan, +998901234567`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "ShNumber"
});

const ShNumber = router.route("ShNumber");

ShNumber.hears("Ish joyi kerak",writeIsh,ish)
ShNumber.hears("Sherik kerak",writeSherik,sherik)
ShNumber.hears("Hodim kerak",writeHodim,hodim)
ShNumber.hears("Ustoz kerak",writeUstoz,ustoz)
ShNumber.hears("Shogird kerak",writeShogirt,shogird)



ShNumber.on("message:text", async (ctx) => {
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
        ctx.session.step = "Shlocation";
    } else {
        await ctx.reply(
            "Noto'g'ri raqam kiritildi. Raqamni '+998' kabi boshlangan holda kiriting."
        );
    }
});

const Shlocation = router.route("Shlocation");

Shlocation.hears("Ish joyi kerak",writeIsh,ish)
Shlocation.hears("Sherik kerak",writeSherik,sherik)
Shlocation.hears("Hodim kerak",writeHodim,hodim)
Shlocation.hears("Ustoz kerak",writeUstoz,ustoz)
Shlocation.hears("Shogird kerak",writeShogirt,shogird)



Shlocation.on("message:text", async (ctx) => {
    const id = ctx.from.id
    const location = ctx.message.text
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.location = location
    await Users.write(users)
    await ctx.reply(`<b>💰 Narxi:</b>\nTolov qilasizmi yoki Tekinmi? \nKerak bo'lsa, Summani kiriting?`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "Shprice"
});

const Shprice = router.route("Shprice");

Shprice.hears("Ish joyi kerak",writeIsh,ish)
Shprice.hears("Sherik kerak",writeSherik,sherik)
Shprice.hears("Hodim kerak",writeHodim,hodim)
Shprice.hears("Ustoz kerak",writeUstoz,ustoz)
Shprice.hears("Shogird kerak",writeShogirt,shogird)


Shprice.on("message:text", async (ctx) => {
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
        ctx.session.step = "ShProfission";

});

const ShProfission = router.route("ShProfission");

ShProfission.hears("Ish joyi kerak",writeIsh,ish)
ShProfission.hears("Sherik kerak",writeSherik,sherik)
ShProfission.hears("Hodim kerak",writeHodim,hodim)
ShProfission.hears("Ustoz kerak",writeUstoz,ustoz)
ShProfission.hears("Shogird kerak",writeShogirt,shogird)


ShProfission.on("message:text", async (ctx) => {

    const id = ctx.from.id
    const profission = ctx.message.text
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.profission = profission
    await Users.write(users)

    await ctx.reply(`<b>🕰 Murojaat qilish vaqti:</b>\n Qaysi vaqtda murojaat qilish mumkin? \nMasalan, 09:00 - 18:00`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "ShAppealTime"
});

const ShAppealTime = router.route("ShAppealTime");

ShAppealTime.hears("Ish joyi kerak",writeIsh,ish)
ShAppealTime.hears("Sherik kerak",writeSherik,sherik)
ShAppealTime.hears("Hodim kerak",writeHodim,hodim)
ShAppealTime.hears("Ustoz kerak",writeUstoz,ustoz)
ShAppealTime.hears("Shogird kerak",writeShogirt,shogird)


ShAppealTime.on("message:text", async (ctx) => {
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
        ctx.session.step = "ShGoal";
    } else {
        await ctx.reply(
            "Noto'g'ri vaqt kiritildi. Ma'lumotni to'g'ri vaqt oralig'ida (09:00 - 22:00) kiriting."
        );
    }
});


const ShGoal = router.route("ShGoal");

ShGoal.hears("Ish joyi kerak",writeIsh,ish)
ShGoal.hears("Sherik kerak",writeSherik,sherik)
ShGoal.hears("Hodim kerak",writeHodim,hodim)
ShGoal.hears("Ustoz kerak",writeUstoz,ustoz)
ShGoal.hears("Shogird kerak",writeShogirt,shogird)


ShGoal.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const goal = ctx.message.text;
    const users = await Users.read();
    const finduser = users.find((a) => a.id == id);
    finduser.goal = goal;

    await Users.write(users);

    await ctx.reply(`<b>🤝 Sherik kerak:</b>
🏅<b>Sherik:</b> ${finduser.fullName}
<b>📚 Texnologiya:</b> ${finduser.tecnology}
<b>🇺🇿 Telegram:</b> @${finduser.username}
<b>📞 Aloqa:</b> ${finduser.phoneNumber}
<b>🌐 Hudud:</b> ${finduser.location}
<b>💰 Narxi:</b> ${finduser.price}
<b>👨🏻‍💻 Kasbi:</b> ${finduser.profission}
<b>🕰 Murojaat qilish vaqti:</b> ${finduser.appealTime}
<b>🔎 Maqsad:</b> ${finduser.goal}
#sherik `,
    {
        parse_mode: "HTML",
        reply_markup: {
            ...decision
        }
    });
    ctx.session.step = "Shdesition";
});


const Shdesition = router.route("Shdesition");

Shdesition.hears("Ish joyi kerak",writeIsh,ish)
Shdesition.hears("Sherik kerak",writeSherik,sherik)
Shdesition.hears("Hodim kerak",writeHodim,hodim)
Shdesition.hears("Ustoz kerak",writeUstoz,ustoz)
Shdesition.hears("Shogird kerak",writeShogirt,shogird)


Shdesition.hears("Ha", async (ctx) => {
    const id = ctx.from.id;
    const users = await Users.read();
    const finduser = users.find((a) => a.id == id);

    await ctx.reply("Barcha ma'lumotlar to'g'rimi?")

    const message = `<b>🤝 Sherik kerak:</b>
🏅<b>Sherik:</b> ${finduser.fullName}
<b>📚 Texnologiya:</b> ${finduser.tecnology}
<b>🇺🇿 Telegram:</b> @${finduser.username}
<b>📞 Aloqa:</b> ${finduser.phoneNumber}
<b>🌐 Hudud:</b> ${finduser.location}
<b>💰 Narxi:</b> ${finduser.price}
<b>👨🏻‍💻 Kasbi:</b> ${finduser.profission}
<b>🕰 Murojaat qilish vaqti:</b> ${finduser.appealTime}
<b>🔎 Maqsad:</b> ${finduser.goal}
#sherik`;

    const chatId = "-1001989286215";

    await ctx.api.sendMessage(chatId, message, {
        parse_mode: "HTML",
    });

    ctx.reply(`<b>📪 So'rovingiz tekshirish uchun adminga jo'natildi!</b> \nE'lon 24-48 soat ichida kanalda chiqariladi.`, {
        parse_mode: "HTML",
        reply_markup: {
            ...menu
        },
    });
});


Shdesition.hears("Yo'q", async (ctx) => {
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



module.exports = router;