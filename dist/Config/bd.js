require('dotenv').config();

module.exports = {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    password: process.env.DB_PASS,
    logging: false
};