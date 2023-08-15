const { Router } = require("@grammyjs/router");
const { decision, menu } = require("../helpers/buttons");

const Io = require("../utils/io")
const Users = new Io("./database/Ish.json")
const { sherik, ish, hodim, ustoz, shogird } = require("../command/menus");
const { writeIsh, writeSherik, writeHodim, writeUstoz, writeShogirt } = require("../middleware/writeModels");

const router = new Router((ctx)=> ctx.session.step)

const IshfullName = router.route("IshfullName");

IshfullName.hears("Ish joyi kerak",writeIsh,ish)
IshfullName.hears("Sherik kerak",writeSherik,sherik)
IshfullName.hears("Hodim kerak",writeHodim,hodim)
IshfullName.hears("Ustoz kerak",writeUstoz,ustoz)
IshfullName.hears("Shogird kerak",writeShogirt,shogird)


IshfullName.on("message:text", async (ctx) => {
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
    ctx.session.step = "IshAge" 
});


const IshAge = router.route("IshAge");

IshAge.hears("Ish joyi kerak",writeIsh,ish)
IshAge.hears("Sherik kerak",writeSherik,sherik)
IshAge.hears("Hodim kerak",writeHodim,hodim)
IshAge.hears("Ustoz kerak",writeUstoz,ustoz)
IshAge.hears("Shogird kerak",writeShogirt,shogird)


IshAge.on("message:text", async (ctx) => {
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
    ctx.session.step = "Ishteclogy"
});

const Ishteclogy = router.route("Ishteclogy");

Ishteclogy.hears("Ish joyi kerak",writeIsh,ish)
Ishteclogy.hears("Sherik kerak",writeSherik,sherik)
Ishteclogy.hears("Hodim kerak",writeHodim,hodim)
Ishteclogy.hears("Ustoz kerak",writeUstoz,ustoz)
Ishteclogy.hears("Shogird kerak",writeShogirt,shogird)


Ishteclogy.on("message:text", async (ctx) => {
    const tecnology = ctx.message.text
    const id = ctx.from.id
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.tecnology = tecnology
    await Users.write(users)    
    await ctx.reply(`<b>📞 Aloqa:</b>\n Bog'lanish uchun raqamingizni kiriting? \nMasalan, +998901234567`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "IshNumber"
});

const IshNumber = router.route("IshNumber");

IshNumber.hears("Ish joyi kerak",writeIsh,ish)
IshNumber.hears("Sherik kerak",writeSherik,sherik)
IshNumber.hears("Hodim kerak",writeHodim,hodim)
IshNumber.hears("Ustoz kerak",writeUstoz,ustoz)
IshNumber.hears("Shogird kerak",writeShogirt,shogird)



IshNumber.on("message:text", async (ctx) => {
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
        ctx.session.step = "Ishlocation";
    } else {
        await ctx.reply(
            "Noto'g'ri raqam kiritildi. Raqamni '+998' kabi boshlangan holda kiriting."
        );
    }
});

const Ishlocation = router.route("Ishlocation");

Ishlocation.hears("Ish joyi kerak",writeIsh,ish)
Ishlocation.hears("Sherik kerak",writeSherik,sherik)
Ishlocation.hears("Hodim kerak",writeHodim,hodim)
Ishlocation.hears("Ustoz kerak",writeUstoz,ustoz)
Ishlocation.hears("Shogird kerak",writeShogirt,shogird)


Ishlocation.on("message:text", async (ctx) => {
    const id = ctx.from.id
    const location = ctx.message.text
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.location = location
    await Users.write(users)

    await ctx.reply(`<b>💰 Narxi:</b>\nIltimos Aniq narxni kiriting.\n Agar tekin bo'lsa 0 kiriting`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "Ishprice"
});

const Ishprice = router.route("Ishprice");

Ishprice.hears("Ish joyi kerak",writeIsh,ish)
Ishprice.hears("Sherik kerak",writeSherik,sherik)
Ishprice.hears("Hodim kerak",writeHodim,hodim)
Ishprice.hears("Ustoz kerak",writeUstoz,ustoz)
Ishprice.hears("Shogird kerak",writeShogirt,shogird)


Ishprice.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const price = ctx.message.text;
    const users = await Users.read();
    const finduser = users.find((a) => a.id == id);

    if (/^\d+(\.\d{1,2})?$/.test(price) || /[₽$€]/.test(price)) {
        finduser.price = price;
        await Users.write(users);

        await ctx.reply(
            `<b>👨🏻‍💻 Kasbi: </b>\n Ishlaysizmi yoki o'qiysizmi?\nMasalan, Talaba`,
            {
                parse_mode: "HTML",
            }
        );
        ctx.session.step = "IshProfission";
    } else {
        await ctx.reply("Noto'g'ri ma'lumot kiritildi. Raqam va pul birliklarining simvollari bilan yozing.");
    }
});

const IshProfission = router.route("IshProfission");

IshProfission.hears("Ish joyi kerak",writeIsh,ish)
IshProfission.hears("Sherik kerak",writeSherik,sherik)
IshProfission.hears("Hodim kerak",writeHodim,hodim)
IshProfission.hears("Ustoz kerak",writeUstoz,ustoz)
IshProfission.hears("Shogird kerak",writeShogirt,shogird)


IshProfission.on("message:text", async (ctx) => {

    const id = ctx.from.id
    const profission = ctx.message.text
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.profission = profission
    await Users.write(users)

    await ctx.reply(`<b>🕰 Murojaat qilish vaqti:</b>\n Qaysi vaqtda murojaat qilish mumkin? \nMasalan, 09:00 - 18:00`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "IshAppealTime"
});

const IshAppealTime = router.route("IshAppealTime");

IshAppealTime.hears("Ish joyi kerak",writeIsh,ish)
IshAppealTime.hears("Sherik kerak",writeSherik,sherik)
IshAppealTime.hears("Hodim kerak",writeHodim,hodim)
IshAppealTime.hears("Ustoz kerak",writeUstoz,ustoz)
IshAppealTime.hears("Shogird kerak",writeShogirt,shogird)


IshAppealTime.on("message:text", async (ctx) => {
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
        ctx.session.step = "IshGoal";
    } else {
        await ctx.reply(
            "Noto'g'ri vaqt kiritildi. Ma'lumotni to'g'ri vaqt oralig'ida (09:00 - 22:00) kiriting."
        );
    }
});


const IshGoal = router.route("IshGoal");

IshGoal.hears("Ish joyi kerak",writeIsh,ish)
IshGoal.hears("Sherik kerak",writeSherik,sherik)
IshGoal.hears("Hodim kerak",writeHodim,hodim)
IshGoal.hears("Ustoz kerak",writeUstoz,ustoz)
IshGoal.hears("Shogird kerak",writeShogirt,shogird)


IshGoal.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const goal = ctx.message.text;
    const users = await Users.read();
    const finduser = users.find((a) => a.id == id);
    finduser.goal = goal;


    const tec = finduser.tecnology;
    const techHashtags = tec.split(",").map(item => `#${item.trim()}`).join(" ");

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

#xodim`,
    {
        parse_mode: "HTML",
        reply_markup: {
            ...decision
        }
    });
    ctx.session.step = "Ishdesition";
});


const Ishdesition = router.route("Ishdesition");

Ishdesition.hears("Sherik kerak",sherik)
Ishdesition.hears("Ish joyi kerak",ish)
Ishdesition.hears("Hodim kerak",hodim)
Ishdesition.hears("Ustoz kerak", ustoz)
Ishdesition.hears("Shogird kerak", shogird)



Ishdesition.hears("Ha",async(ctx)=>{
    const id = ctx.from.id
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
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

#xodim`

    const chatId = "-1001989286215";

    await ctx.api.sendMessage(chatId, message, {
        parse_mode: "HTML",
    });

    await Users.write(users)
    ctx.reply(`<b>📪 So'rovingiz tekshirish uchun adminga jo'natildi!</b> \nE'lon 24-48 soat ichida kanalda chiqariladi.`,{
        parse_mode: "HTML",
        reply_markup: {
            ...menu
        }
    }
    )
})


Ishdesition.hears("Yo'q", async (ctx) => {
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

Ishdesition.on("message", async(ctx)=>{
    await ctx.reply("Iltimos! Buyruqlardan birini tanglang")
})

module.exports = router;