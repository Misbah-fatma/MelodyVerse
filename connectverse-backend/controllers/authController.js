const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

let refreshTokens = [];
const accessTokenExpiryIn = 3600;

exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        const accessToken = jwt.sign({ userId: user._id }, 'my-unique-secret-key', { expiresIn: '1h' });
        const refreshToken = jwt.sign({ userId: user._id }, 'my-refresh-secret-key');

        refreshTokens.push(refreshToken);
        res.status(200).json({ message: 'User created', accessToken, refreshToken, accessTokenExpiryIn });
    } catch (err) {
        let errMessage = "";
        if (err.toString().includes("E11000 duplicate key error")) {
            errMessage = err.toString().includes("email_1 dup key") 
                ? "Email already exists. Please use another email." 
                : "Username already exists. Please use another username.";
        }
        res.status(400).json({ error: 'Failed to create user. ' + errMessage });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            console.log("User not found in DB");
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        console.log("Stored hashed password:", user.password);
        console.log("Entered password:", password);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password Match:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const accessToken = jwt.sign({ userId: user._id }, 'my-unique-secret-key', { expiresIn: '1h' });
        const refreshToken = jwt.sign({ userId: user._id }, 'my-refresh-secret-key');

        refreshTokens.push(refreshToken);
        res.status(200).json({ message: 'Login Success', accessToken, refreshToken });

    } catch (err) {
        console.error("Login Error: ", err);
        res.status(400).json({ error: 'Failed to log in' });
    }
};

exports.renewAccessToken = (req, res) => {
    const { refresh_token } = req.body;
    if (!refresh_token) return res.sendStatus(401);
    if (!refreshTokens.includes(refresh_token)) return res.sendStatus(403);

    jwt.verify(refresh_token, 'my-refresh-secret-key', (err, user) => {
        if (err) return res.sendStatus(403);

        const accessToken = jwt.sign({ userId: user.userId }, 'my-unique-secret-key', { expiresIn: '1h' });
        res.json({ accessToken });
    });
};

exports.logout = (req, res) => {
    const { refresh_token } = req.body;
    refreshTokens = refreshTokens.filter(rt => rt !== refresh_token);
    res.sendStatus(204);
};
