const express = require('express');

const router = express.Router();
router.use(express.json());

const userController = require('../controllers/UserController');


router.post('/login', function (req, res) {
    const { email, password } = req.body;
    res.json({email, password})
});

module.exports = router;