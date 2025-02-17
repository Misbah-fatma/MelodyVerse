const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.post('/renew_access_token', authController.renewAccessToken);
router.post('/logout', authController.logout);

module.exports = router;
