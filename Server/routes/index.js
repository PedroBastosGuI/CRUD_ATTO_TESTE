const express = require('express');

const{
    getAllClient,
    createClient,
    getClientById,
    deleteClient,
    updateProduct
} = require('../controllers/Clients');



const router = express.Router();

router.get('/', getAllClient);
router.get('/:id', getClientById);
router.post('/', createClient);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteClient);


module.exports = router;

