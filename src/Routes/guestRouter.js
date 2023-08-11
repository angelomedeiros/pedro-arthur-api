const GuestController = require('../Controller/guestController')
const route = require('express').Router()


route.get('/', GuestController.getAll)
route.get('/confirmedByPeople/:id', GuestController.getById)
route.get('/sumPeoples', GuestController.getSumPeoples)

module.exports = route