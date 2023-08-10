const GuestModel = require("../Model/guestModel")

class GuestController {
    static async register(req, res) {
        try {
            const guest = await GuestModel.findAll()
            if (guest == null || guest == undefined) {
                console.log("nulo")
                return res.status(400).send("error")
            } else {
                return res.status(200).json(guest)
            }
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    }
}

module.exports = GuestController