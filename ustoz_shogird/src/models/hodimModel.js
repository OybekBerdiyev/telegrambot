class Ish {
    constructor(id,officeName,tecnology,phoneNumber,location,hr,price,WorkTime,appealTime,description,username) {
        this.id = id
        this.officeName = officeName || null
        this.tecnology = tecnology || null
        this.phoneNumber = phoneNumber || null
        this.location = location || null
        this.hr = hr || null;
        this.appealTime = appealTime || null
        this.WorkTime = WorkTime || null
        this.price = price || null 
        this.description = description || null
        this.status = null
        this.username = username || null
    }
}

module.exports = Ish