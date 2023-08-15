class Partner {
    constructor(id,fullName, tecnology,phoneNumber,location,price,profission,appealTime,goal,username) {
        this.id = id
        this.fullName = fullName || null
        this.tecnology = tecnology || null
        this.phoneNumber = phoneNumber || null
        this.location = location || null
        this.price = price || null 
        this.profission = profission || null
        this.appealTime = appealTime || null
        this.goal = goal || null
        this.status = null
        this.username = username || null
    }
}

module.exports = Partner