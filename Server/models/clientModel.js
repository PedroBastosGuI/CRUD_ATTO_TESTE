const Sequelize = require("sequelize");


const db = require("../config/database.js");

const client_info = db.define('client_info',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    razao_social:{
        type:Sequelize.STRING(255),
        allowNull:false,
    },
    nome_fantasia:{
        type:Sequelize.STRING(255),
        allowNull:false,
    },
    cpf_cnpj:{
        type:Sequelize.STRING(255),
        allowNull:false,
    },
    client_fone:{
        type:Sequelize.STRING(255),
        allowNull:false,    },
    client_cidade:{
        type:Sequelize.STRING(255),
        allowNull:false,    },
    client_estado:{
        type:Sequelize.STRING(255),
        allowNull:false,    }, 
},{
    freezeTableName:true
});

module.exports = client_info;

