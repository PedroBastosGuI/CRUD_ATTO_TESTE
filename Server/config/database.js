const {Sequelize} = require('sequelize');


const db = new Sequelize('db', 'user','password',{
    host: "localhost",
    dialect:"mysql",
});

module.exports = db;