const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
app = express();
const path = require('path');

const guest = require('./Routes/guestRouter');

require('./DataBase/index');
app.use(cors());
app.use(bodyParser.json());
app.use('/guest', guest);

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build' + '/index.html');
});

const port = 3034;
app.listen(port, function () {
    console.log("Servidor iniciado na porta ", port);
});