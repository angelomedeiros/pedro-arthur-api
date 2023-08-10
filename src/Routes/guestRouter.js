const GuestController = require('../Controller/registerGuestController')
const route = require('express').Router()


route.get('/register', GuestController.register)

module.exports = route