const GuestModel = require("../Model/guestModel")

class GuestController {
    static async getAll(req, res) {
        try {
            const guest = await GuestModel.findAll()
            return res.status(200).json(guest)
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    }
}

module.exports = GuestController