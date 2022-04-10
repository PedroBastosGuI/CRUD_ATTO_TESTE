const express = require('express');
const db =  require('./config/database');
const clientRoutes =  require("./routes/index");
const cors = require("cors");
const model = require('./models/clientModel')
const app = express();

async function ConectDB(){
    try{
        await db.authenticate();
        console.log('Aguenta ai vai da bom...')
    }catch(error){
        console.log('Vixi mano deu ruim',error)
    };
};ConectDB();

async function createTable(){
    await db.sync();
}createTable();




app.use(cors());
app.use(express.json());
app.use('/client', clientRoutes);

app.listen(3333, () => console.log('To rodando mano'))