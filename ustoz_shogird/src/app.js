const { Bot, session } = require("grammy");
const config = require("../config");

const {isChecked}= require("./middleware/is-auth")
const Commands = require("./command/commands");
const Home = require("./modules/home");
const Ish = require("./modules/ish");
const Sherik = require("./modules/sherik");
const Shogird = require("./modules/shogird");
const Ustoz = require("./modules/ustoz");
const Hodim = require("./modules/hodim");

const bot = new Bot(config.token);


bot.api.setMyCommands([
    {command: "start", description: "Boshlash"},
    {command: "help", description: "HELP"},
])
 
bot.use(session({initial: () => ({step: "home"})}))

bot.use(isChecked)

bot.use(Commands);
bot.use(Home);
bot.use(Sherik);
bot.use(Ish);
bot.use(Hodim);
bot.use(Shogird);
bot.use(Ustoz);


bot.catch((e)=>{
    console.log(e);
})

bot.start();