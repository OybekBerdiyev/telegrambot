const Io = require("../utils/io")
const Sherik = new Io("./database/Sherik.json")
const Ish = new Io("./database/Ish.json")
const Hodim = new Io("./database/hodim.json")
const Ustoz = new Io("./database/ustoz.json")
const Shogird = new Io("./database/shogird.json")

const Ishmodel = require("../models/ishModel")
const Sherikmodel = require("../models/partnerModel")
const Hodimmodel = require("../models/hodimModel")
const Ustozmodel = require("../models/ustozModel")
const Shogirdmodel = require("../models/shogirdModel")

const writeSherik = async(ctx,next)=>{
    const users = await Sherik.read()
    const id = ctx.from.id
    const findUser = users.find((user)=> user.id == id)
    if(!findUser){
        const newUser = new Sherikmodel(id)
        const data = users.length ? [...users, newUser]: [newUser]
        await Sherik.write(data)
    }
    next()
}


const writeIsh = async(ctx,next)=>{
    const users = await Ish.read()
    const id = ctx.from.id
    const findUser = users.find((user)=> user.id==id)
    if(!findUser){
        const newUser = new Ishmodel(id)
        const data = users.length ? [...users, newUser]: [newUser]
        await Ish.write(data)
    }
    next()
}


const writeHodim = async(ctx,next)=>{
    const users = await Hodim.read()
    const id = ctx.from.id
    const findUser = users.find((user)=> user.id==id)
    if(!findUser){
        const newUser = new Hodimmodel(id)
        const data = users.length ? [...users, newUser]: [newUser]
        await Hodim.write(data)
    }
    next()
}


const writeUstoz = async(ctx,next)=>{
    const users = await Ustoz.read()
    const id = ctx.from.id
    const findUser = users.find((user)=> user.id==id)
    if(!findUser){
        const newUser = new Ustozmodel(id)
        const data = users.length ? [...users, newUser]: [newUser]
        await Ustoz.write(data)
    }
    next()
}


const writeShogirt = async(ctx,next)=>{
    const users = await Shogird.read()
    const id = ctx.from.id
    const findUser = users.find((user)=> user.id==id)
    if(!findUser){
        const newUser = new Shogirdmodel(id)
        const data = users.length ? [...users, newUser]: [newUser]
        await Shogird.write(data)
    }
    next()
}

module.exports = {
    writeSherik,
    writeIsh,
    writeHodim,
    writeUstoz,
    writeShogirt
}