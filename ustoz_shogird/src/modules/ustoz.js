const { Router } = require("@grammyjs/router");
const { decision, menu } = require("../helpers/buttons");

const Io = require("../utils/io")
const Users = new Io("./database/ustoz.json")
const { sherik, ish, hodim, ustoz, shogird } = require("../command/menus");
const { writeIsh, writeSherik, writeHodim, writeUstoz, writeShogirt } = require("../middleware/writeModels");

const router = new Router((ctx)=> ctx.session.step)

const UsstozfullName = router.route("UsstozfullName");

UsstozfullName.hears("Ish joyi kerak",writeIsh,ish)
UsstozfullName.hears("Sherik kerak",writeSherik,sherik)
UsstozfullName.hears("Hodim kerak",writeHodim,hodim)
UsstozfullName.hears("Ustoz kerak",writeUstoz,ustoz)
UsstozfullName.hears("Shogird kerak",writeShogirt,shogird)


UsstozfullName.on("message:text", async (ctx) => {
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
    ctx.session.step = "UAge" 
});


const UAge = router.route("UAge");

UAge.hears("Ish joyi kerak",writeIsh,ish)
UAge.hears("Sherik kerak",writeSherik,sherik)
UAge.hears("Hodim kerak",writeHodim,hodim)
UAge.hears("Ustoz kerak",writeUstoz,ustoz)
UAge.hears("Shogird kerak",writeShogirt,shogird)


UAge.on("message:text", async (ctx) => {
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
    ctx.session.step = "Uteclogy"
});

const Uteclogy = router.route("Uteclogy");

Uteclogy.hears("Ish joyi kerak",writeIsh,ish)
Uteclogy.hears("Sherik kerak",writeSherik,sherik)
Uteclogy.hears("Hodim kerak",writeHodim,hodim)
Uteclogy.hears("Ustoz kerak",writeUstoz,ustoz)
Uteclogy.hears("Shogird kerak",writeShogirt,shogird)


Uteclogy.on("message:text", async (ctx) => {
    const tecnology = ctx.message.text
    const id = ctx.from.id
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.tecnology = tecnology
    await Users.write(users)    
    await ctx.reply(`<b>📞 Aloqa:</b>\n Bog'lanish uchun raqamingizni kiriting? \nMasalan, +998901234567`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "UNumber"
});

const UNumber = router.route("UNumber");

UNumber.hears("Ish joyi kerak",writeIsh,ish)
UNumber.hears("Sherik kerak",writeSherik,sherik)
UNumber.hears("Hodim kerak",writeHodim,hodim)
UNumber.hears("Ustoz kerak",writeUstoz,ustoz)
UNumber.hears("Shogird kerak",writeShogirt,shogird)



UNumber.on("message:text", async (ctx) => {
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
        ctx.session.step = "Ulocation";
    } else {
        await ctx.reply(
            "Noto'g'ri raqam kiritildi. Raqamni '+998' kabi boshlangan holda kiriting."
        );
    }
});

const Ulocation = router.route("Ulocation");

Ulocation.hears("Ish joyi kerak",writeIsh,ish)
Ulocation.hears("Sherik kerak",writeSherik,sherik)
Ulocation.hears("Hodim kerak",writeHodim,hodim)
Ulocation.hears("Ustoz kerak",writeUstoz,ustoz)
Ulocation.hears("Shogird kerak",writeShogirt,shogird)


Ulocation.on("message:text", async (ctx) => {
    const id = ctx.from.id
    const location = ctx.message.text
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.location = location
    await Users.write(users)

    await ctx.reply(`<b>💰 Narxi:</b>\nIltimos Aniq narxni kiriting.\n Agar tekin bo'lsa 0 kiriting`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "Uprice"
});

const Uprice = router.route("Uprice");

Uprice.hears("Ish joyi kerak",writeIsh,ish)
Uprice.hears("Sherik kerak",writeSherik,sherik)
Uprice.hears("Hodim kerak",writeHodim,hodim)
Uprice.hears("Ustoz kerak",writeUstoz,ustoz)
Uprice.hears("Shogird kerak",writeShogirt,shogird)


Uprice.on("message:text", async (ctx) => {
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
        ctx.session.step = "UProfission";
});

const UProfission = router.route("UProfission");

UProfission.hears("Ish joyi kerak",writeIsh,ish)
UProfission.hears("Sherik kerak",writeSherik,sherik)
UProfission.hears("Hodim kerak",writeHodim,hodim)
UProfission.hears("Ustoz kerak",writeUstoz,ustoz)
UProfission.hears("Shogird kerak",writeShogirt,shogird)


UProfission.on("message:text", async (ctx) => {

    const id = ctx.from.id
    const profission = ctx.message.text
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.profission = profission
    await Users.write(users)

    await ctx.reply(`<b>🕰 Murojaat qilish vaqti:</b>\n Qaysi vaqtda murojaat qilish mumkin? \nMasalan, 09:00 - 18:00`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "UAppealTime"
});

const UAppealTime = router.route("UAppealTime");

UAppealTime.hears("Ish joyi kerak",writeIsh,ish)
UAppealTime.hears("Sherik kerak",writeSherik,sherik)
UAppealTime.hears("Hodim kerak",writeHodim,hodim)
UAppealTime.hears("Ustoz kerak",writeUstoz,ustoz)
UAppealTime.hears("Shogird kerak",writeShogirt,shogird)


UAppealTime.on("message:text", async (ctx) => {
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
        ctx.session.step = "UGoal";
    } else {
        await ctx.reply(
            "Noto'g'ri vaqt kiritildi. Ma'lumotni to'g'ri vaqt oralig'ida (09:00 - 22:00) kiriting."
        );
    }
});


const UGoal = router.route("UGoal");

UGoal.hears("Ish joyi kerak",writeIsh,ish)
UGoal.hears("Sherik kerak",writeSherik,sherik)
UGoal.hears("Hodim kerak",writeHodim,hodim)
UGoal.hears("Ustoz kerak",writeUstoz,ustoz)
UGoal.hears("Shogird kerak",writeShogirt,shogird)


UGoal.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const goal = ctx.message.text;
    const users = await Users.read();
    const finduser = users.find((a) => a.id == id);
    finduser.goal = goal;


    await Users.write(users);

    await ctx.reply(`<b>🤝 Ish joyi kerak:</b>
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
    ctx.session.step = "Udesition";
});


const Udesition = router.route("Udesition");

Udesition.hears("Sherik kerak",sherik)
Udesition.hears("Ish joyi kerak",ish)
Udesition.hears("Hodim kerak",hodim)
Udesition.hears("Ustoz kerak", ustoz)
Udesition.hears("Shogird kerak", shogird)


Udesition.hears("Ha",async(ctx)=>{
    const id = ctx.from.id
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.status = "waiting"
    await Users.write(users)
    await ctx.reply("Barcha ma'lumotlar to'g'rimi?")
    const message = `<b>🤝 Ish joyi kerak:</b>
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
            ...menu,
        }
    }
    )
})


Udesition.hears("Yo'q", async (ctx) => {
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

Udesition.on("message", async(ctx)=>{
    await ctx.reply("Iltimos! Buyruqlardan birini tanglang")
})

module.exports = router;