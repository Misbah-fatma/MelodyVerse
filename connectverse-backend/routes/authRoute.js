const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', [
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long.').escape(),
    body('email').isEmail().withMessage('Invalid email format.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.').escape(),
], authController.signup);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email format.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.').escape(),
], authController.login);

router.post('/renew_access_token', authController.renewAccessToken);
router.post('/logout', authController.logout);

module.exports = router;
