const Clients = require("../models/clientModel.js");

const getAllClient = async (req,res) => {
    try{
        const clients = await Clients.findAll();
        res.json(clients);
    }catch(error){
        res.json({message:error.message});
    }
};


const getClientById = async (req, res) => {
    try{
        const client = await Clients.findAll({
            where:{
                id:req.params.id,
            }
        });
        res.json(client[0]);
    }catch(error){
        res.json({message:error.message});
    }
};
const createClient = async (req, res) => {
    try{
        await Clients.create(req.body);
        res.json({
            "message":"create client new"
        });
    }catch(error){
        res.json({message:error.message});
    }
};


const updateProduct = async (req, res) => {
    try {
        await Clients.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

const deleteClient = async (req, res) => {
    try{
        await Clients.destroy({
            where:{
                id:req.params.id,
            }
        });
        res.json({
            "message":"Delete Client"
        });
    }catch(error){
        res.json({message:error.message});
    }
};

module.exports={
    getAllClient,
    getClientById,
    createClient,
    deleteClient,
    updateProduct
};