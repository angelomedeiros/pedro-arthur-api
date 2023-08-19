const Sequelize = require('sequelize');
const config = require('../Config/bd');
const GuestModel = require('../Model/guestModel');

const connection = new Sequelize(config);

async function conect() {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
conect();

GuestModel.init(connection);

module.exports = connection;