const Io = require("../utils/io")
const Users = new Io("./database/usersForAd.json")
const User = require("../models/modelforAd")


const isChecked = async(ctx,next)=>{
    const users = await Users.read()
    const telegramId = ctx.from.id
    const firstname = ctx.from.first_name
    const findUser = users.find((user)=> user.userId==telegramId)
    if(!findUser){
        const newUser = new User(telegramId,firstname)
        const data = users.length ? [...users, newUser]: [newUser]
        await Users.write(data)
    }else if(!findUser.status){
        findUser.status = true
        await Users.write(users)
    }
    next()
}


module.exports = {
    isChecked,
}