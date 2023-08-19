const GuestController = require('../Controller/guestController')
const route = require('express').Router()


route.get('/', GuestController.getAll)
route.get('/people/:id', GuestController.getById)
route.get('/sumPeoples', GuestController.getSumPeoples)
route.post('/register', GuestController.register)
route.put('/confirmed/:id', GuestController.comfirmed)
route.delete('/deletePeople/:id', GuestController.deletePeople)

module.exports = route