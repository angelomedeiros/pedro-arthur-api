const db = require("../DataBase")
const GuestModel = require("../Model/guestModel")
const { SumPeoples } = require("../Query/guestQuery")

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

    static async getById(req, res) {
        try {
            let id = req.params.id;
            const guest = await GuestModel.findOne({ id })
            return res.status(200).json(guest)
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    }

    static async getSumPeoples(req, res) {
        try {
            const guest = await db.query(SumPeoples);
            return res.status(200).json(guest[0][0])
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    }
}

module.exports = GuestController