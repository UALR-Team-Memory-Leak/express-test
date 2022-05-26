const express = require('express');

const router = express.Router();

const Route = use('Route')

const userController = require('../controllers/userController');


Route.post('/login', userController.login);

module.exports = router;