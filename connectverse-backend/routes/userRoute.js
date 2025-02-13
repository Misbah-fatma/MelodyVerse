const express = require('express');
const { getUsers,   
    forgotPassword,
    resetPassword} = require('../controllers/userController');
const authenticateToken = require('../middleware/auth');


const router = express.Router();

router.get('/users', authenticateToken, getUsers);

router.post('/forgotpassword', forgotPassword);

router.post('/resetpassword/:token', resetPassword);

module.exports = router;
