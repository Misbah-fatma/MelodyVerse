const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

let refreshTokens = [];
const accessTokenExpiryIn = 3600;

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });  // Password will be hashed by the pre-save hook
    await user.save();
    res.status(200).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Error creating user', details: err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare the plain-text password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Create JWT token on successful login
    const accessToken = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', accessToken });
  } catch (err) {
    res.status(400).json({ error: 'Failed to log in', details: err });
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
