const express = require('express');
const { register, login, getAllClients, updateClient, deleteClient } = require('../controllers/clientController.js');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/all-employees',getAllClients);
router.put('/update-employee/:id',updateClient);
router.delete('/delete-employee/:id',deleteClient)

module.exports = router;