const GuestController = require('../Controller/guestController')
const route = require('express').Router()


route.get('/', GuestController.getAll)

module.exports = route