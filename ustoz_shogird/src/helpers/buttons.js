const {Keyboard} = require("grammy")


const menu = new Keyboard()
.text("Sherik kerak").resized()
.text("Ish joyi kerak").resized().row()
.text("Hodim kerak").resized()
.text("Ustoz kerak").row().resized()
.text("Shogird kerak").resized()

const decision = new Keyboard().text("Ha").resized().text("Yo'q").resized()


module.exports = {
    menu,
    decision
}