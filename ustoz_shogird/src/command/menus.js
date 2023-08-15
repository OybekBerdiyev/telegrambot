const sherik = async(ctx)=>{
    await ctx.reply(`<b>Sherik topish uchun ariza berish.</b> \n\nHozir sizga birnecha savollar beriladi. Har biriga javob bering. Oxirida agar ShfullName to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{
        parse_mode: 'HTML'
    })    
    await ctx.reply(`<b>Ism Familyangizni yuboring.</b>`,{
        parse_mode: 'HTML'
    })    
    ctx.session.step = "ShfullName" 
}

const ish =  async(ctx)=>{
    await ctx.reply(`<b>Ish joyi topish uchun ariza berish</b> \n\nHozir sizga birnecha savollar beriladi. Har biriga javob bering. Oxirida agar to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{
        parse_mode: 'HTML'
    })    
    await ctx.reply(`<b>Ism Familyangizni yuboring.</b>`,{
        parse_mode: 'HTML'
    })    
    ctx.session.step = "IshfullName"
}


const hodim = async(ctx)=>{
    await ctx.reply(`<b>Xodim topish uchun ariza berish</b> \n\nHozir sizga birnecha savollar beriladi. Har biriga javob bering. Oxirida agar ShfullName to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{
        parse_mode: 'HTML'
    })    
    await ctx.reply(`<b>🎓 Idora nomi?</b>`,{
        parse_mode: 'HTML'
    })    
    ctx.session.step = "HodimfullName"
}

const ustoz =  async(ctx)=>{
    await ctx.reply(`<b>Ustoz topish uchun ariza berish</b> \n\nHozir sizga birnecha savollar beriladi. Har biriga javob bering. Oxirida agar ShfullName to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{
        parse_mode: 'HTML'
    })    
    await ctx.reply(`<b>Ism Familyangizni yuboring.</b>`,{
        parse_mode: 'HTML'
    })    
    ctx.session.step = "UsstozfullName"
}

const shogird = async(ctx)=>{
    await ctx.reply(`<b>Shogird topish uchun ariza berish</b> \n\nHozir sizga birnecha savollar beriladi. Har biriga javob bering. Oxirida agar to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{
        parse_mode: 'HTML'
    })    
    await ctx.reply(`<b>Ism Familyangizni yuboring.</b>`,{
        parse_mode: 'HTML'
    })    
    ctx.session.step = "ShogirdfullName"
}

module.exports = {
    sherik,
    ish,
    hodim,
    ustoz,
    shogird

}