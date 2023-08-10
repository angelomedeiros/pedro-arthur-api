const express = require('express')

app = express()

const guest = require('./Routes/guestRouter')

require('./DataBase/index')
app.use('/guest', guest)


const port = 3030
app.listen(port, function () {
    console.log("Servidor iniciado na porta ", port)
})