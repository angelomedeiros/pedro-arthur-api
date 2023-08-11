const express = require('express')
const bodyParser = require('body-parser');

app = express()

const guest = require('./Routes/guestRouter')

require('./DataBase/index')
app.use(bodyParser.json());
app.use('/guest', guest)


const port = 3030
app.listen(port, function () {
    console.log("Servidor iniciado na porta ", port)
})