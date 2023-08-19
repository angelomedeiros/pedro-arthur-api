const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

app = express();

const guest = require('./Routes/guestRouter');

require('./DataBase/index');

app.use(cors());

app.use(bodyParser.json());
app.use('/api/guest', guest);

const port = 3030;
app.listen(port, function () {
    console.log("Servidor iniciado na porta ", port);
});