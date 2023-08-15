const { Router } = require("@grammyjs/router");
const { decision, menu } = require("../helpers/buttons");

const Io = require("../utils/io")
const Users = new Io("./database/hodim.json")


const { sherik, ish, hodim, ustoz, shogird } = require("../command/menus");
const { writeIsh, writeSherik, writeHodim, writeUstoz, writeShogirt } = require("../middleware/writeModels");

const router = new Router((ctx)=> ctx.session.step)


const HodimfullName = router.route("HodimfullName");

HodimfullName.hears("Ish joyi kerak",writeIsh,ish)
HodimfullName.hears("Sherik kerak",writeSherik,sherik)
HodimfullName.hears("Hodim kerak",writeHodim,hodim)
HodimfullName.hears("Ustoz kerak",writeUstoz,ustoz)
HodimfullName.hears("Shogird kerak",writeShogirt,shogird)


HodimfullName.on("message:text", async (ctx) => {
    const officeName = ctx.message.text
    const id = ctx.from.id
    const username = ctx.from.username
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.officeName = officeName
    finduser.username = username
    await Users.write(users)
    await ctx.reply(`<b>📚 Texnologiya:</b>\n
    Talab qilinadigan texnologiyalarni kiriting?
    Texnologiya nomlarini vergul bilan ajrating. Masalan, 
    Java, C++, C#`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "Hteclogy" 
});


const Hteclogy = router.route("Hteclogy");

Hteclogy.hears("Ish joyi kerak",writeIsh,ish)
Hteclogy.hears("Sherik kerak",writeSherik,sherik)
Hteclogy.hears("Hodim kerak",writeHodim,hodim)
Hteclogy.hears("Ustoz kerak",writeUstoz,ustoz)
Hteclogy.hears("Shogird kerak",writeShogirt,shogird)


Hteclogy.on("message:text", async (ctx) => {
    const tecnology = ctx.message.text
    const id = ctx.from.id
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.tecnology = tecnology
    await Users.write(users)    
    await ctx.reply(`<b>📞 Aloqa:</b>\n Bog'lanish uchun raqamingizni kiriting? \nMasalan, +998901234567`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "HNumber"
});

const HNumber = router.route("HNumber");

HNumber.hears("Ish joyi kerak",writeIsh,ish)
HNumber.hears("Sherik kerak",writeSherik,sherik)
HNumber.hears("Hodim kerak",writeHodim,hodim)
HNumber.hears("Ustoz kerak",writeUstoz,ustoz)
HNumber.hears("Shogird kerak",writeShogirt,shogird)



HNumber.on("message:text", async (ctx) => {
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
        ctx.session.step = "Hlocation";
    } else {
        await ctx.reply(
            "Noto'g'ri raqam kiritildi. Raqamni '+998' kabi boshlangan holda kiriting."
        );
    }
});

const Hlocation = router.route("Hlocation");

Hlocation.hears("Ish joyi kerak",writeIsh,ish)
Hlocation.hears("Sherik kerak",writeSherik,sherik)
Hlocation.hears("Hodim kerak",writeHodim,hodim)
Hlocation.hears("Ustoz kerak",writeUstoz,ustoz)
Hlocation.hears("Shogird kerak",writeShogirt,shogird)



Hlocation.on("message:text", async (ctx) => {
    const id = ctx.from.id
    const location = ctx.message.text
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.location = location
    await Users.write(users)

    await ctx.reply(`✍️ Mas'ul ism sharifi?`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "H_Hr"
});


const H_Hr = router.route("H_Hr");

H_Hr.hears("Ish joyi kerak",writeIsh,ish)
H_Hr.hears("Sherik kerak",writeSherik,sherik)
H_Hr.hears("Hodim kerak",writeHodim,hodim)
H_Hr.hears("Ustoz kerak",writeUstoz,ustoz)
H_Hr.hears("Shogird kerak",writeShogirt,shogird)


H_Hr.on("message:text", async (ctx) => {

    const id = ctx.from.id
    const hr = ctx.message.text
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.hr = hr
    await Users.write(users)

    await ctx.reply(`<b>🕰 Murojaat qilish vaqti:</b>\n Qaysi vaqtda murojaat qilish mumkin? \nMasalan, 09:00 - 18:00`,{
        parse_mode: "HTML"
    })
    ctx.session.step = "HAppealTime"
});


const HAppealTime = router.route("HAppealTime");

HAppealTime.hears("Ish joyi kerak",writeIsh,ish)
HAppealTime.hears("Sherik kerak",writeSherik,sherik)
HAppealTime.hears("Hodim kerak",writeHodim,hodim)
HAppealTime.hears("Ustoz kerak",writeUstoz,ustoz)
HAppealTime.hears("Shogird kerak",writeShogirt,shogird)


HAppealTime.on("message:text", async (ctx) => {
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
            `<b>🕰 Ish vaqtini kiriting?</b>`,
            {
                parse_mode: "HTML",
            }
        );
        ctx.session.step = "HworkTime";
    } else {
        await ctx.reply(
            "Noto'g'ri vaqt kiritildi. Ma'lumotni to'g'ri vaqt oralig'ida (09:00 - 22:00) kiriting."
        );
    }
});

const HworkTime = router.route("HworkTime");

HworkTime.hears("Ish joyi kerak",writeIsh,ish)
HworkTime.hears("Sherik kerak",writeSherik,sherik)
HworkTime.hears("Hodim kerak",writeHodim,hodim)
HworkTime.hears("Ustoz kerak",writeUstoz,ustoz)
HworkTime.hears("Shogird kerak",writeShogirt,shogird)


HworkTime.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const work = ctx.message.text;

    if (/^(0[9-9]|1[0-9]|2[0-2]):[0-5][0-9]\s*[-–]\s*(0[9-9]|1[0-9]|2[0-2]):[0-5][0-9]$/.test(work) ||
        /^(0[9-9]|1[0-9]|2[0-2]):[0-5][0-9]\s*$/.test(work) ||
        /^(0[9-9]|1[0-9]|2[0-2]):[0-5][0-9]$/.test(work)) {
        const users = await Users.read();
        const finduser = users.find((a) => a.id == id);
        finduser.WorkTime = work.replace(/\s/g, ''); 
        await Users.write(users);

        await ctx.reply(
            `<b>💰 Maoshni kiriting?</b>`,
            {
                parse_mode: "HTML",
            }
        );
        ctx.session.step = "Hprice";
    } else {
        await ctx.reply(
            "Noto'g'ri vaqt kiritildi. Ma'lumotni to'g'ri vaqt oralig'ida (09:00 - 22:00) kiriting."
        );
    }
});


const Hprice = router.route("Hprice");

Hprice.hears("Ish joyi kerak",writeIsh,ish)
Hprice.hears("Sherik kerak",writeSherik,sherik)
Hprice.hears("Hodim kerak",writeHodim,hodim)
Hprice.hears("Ustoz kerak",writeUstoz,ustoz)
Hprice.hears("Shogird kerak",writeShogirt,shogird)


Hprice.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const price = ctx.message.text;
    const users = await Users.read();
    const finduser = users.find((a) => a.id == id);

    finduser.price = price;
    await Users.write(users);

    await ctx.reply(
        `‼ Qo'shimcha ma'lumotlar?`,
        {
                parse_mode: "HTML",
        }
    );
    ctx.session.step = "Hdescription";

});


const Hdescription = router.route("Hdescription");

Hdescription.hears("Ish joyi kerak",writeIsh,ish)
Hdescription.hears("Sherik kerak",writeSherik,sherik)
Hdescription.hears("Hodim kerak",writeHodim,hodim)
Hdescription.hears("Ustoz kerak",writeUstoz,ustoz)
Hdescription.hears("Shogird kerak",writeShogirt,shogird)


Hdescription.on("message:text", async (ctx) => {
    const id = ctx.from.id;
    const description = ctx.message.text;
    const users = await Users.read();
    const finduser = users.find((a) => a.id == id);
    finduser.description = description;
    await Users.write(users);


    await ctx.reply(`<b>Xodim kerak:</b>
<b>🏢 Idora:</b> ${finduser.officeName}
<b>📚 Texnologiya:</b> ${finduser.tecnology}
<b>🇺🇿 Telegram:</b> @${finduser.username}
<b>📞 Aloqa:</b> ${finduser.phoneNumber}
<b>🌐 Hudud:</b> ${finduser.location}
<b>✍️ Mas'ul:</b> ${finduser.hr}
<b>🕰 Murojaat qilish vaqti:</b> ${finduser.appealTime}
<b>🕰 Ish vaqti:</b> ${finduser.WorkTime}
<b>💰 Maosh:</b> ${finduser.price}
<b>‼️ Qo'shimcha:</b> ${finduser.description}
#ishJoyi `,
    {
        parse_mode: "HTML",
        reply_markup: {
            ...decision
        }
    });
    ctx.session.step = "Hdesition";
});


const Hdesition = router.route("Hdesition");

Hdesition.hears("Ish joyi kerak",writeIsh,ish)
Hdesition.hears("Sherik kerak",writeSherik,sherik)
Hdesition.hears("Hodim kerak",writeHodim,hodim)
Hdesition.hears("Ustoz kerak",writeUstoz,ustoz)
Hdesition.hears("Shogird kerak",writeShogirt,shogird)


Hdesition.hears("Ha",async(ctx)=>{
    const id = ctx.from.id
    const users = await Users.read()
    const finduser = users.find((a)=>a.id == id)
    finduser.status = "waiting"
    await Users.write(users)
    const message = `<b>Xodim kerak:</b>
    <b>🏢 Idora:</b> ${finduser.officeName}
    <b>📚 Texnologiya:</b> ${finduser.tecnology}
    <b>🇺🇿 Telegram:</b> @${finduser.username}
    <b>📞 Aloqa:</b> ${finduser.phoneNumber}
    <b>🌐 Hudud:</b> ${finduser.location}
    <b>✍️ Mas'ul:</b> ${finduser.hr}
    <b>🕰 Murojaat qilish vaqti:</b> ${finduser.appealTime}
    <b>🕰 Ish vaqti:</b> ${finduser.WorkTime}
    <b>💰 Maosh:</b> ${finduser.price}
    <b>‼️ Qo'shimcha:</b> ${finduser.description}
    #ishJoyi `

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


Hdesition.hears("Yo'q", async (ctx) => {
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