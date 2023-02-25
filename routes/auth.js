// routes/auth.js

const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { authMiddleware } = require('../middleware/auth');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already taken' });
        }

        const user = new User({ email, password });
        await user.save();

        const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1d' });

        res.cookie('token', token, { httpOnly: true });

        res.json({ message: 'Signup successful', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1d' });

        res.cookie('token', token, { httpOnly: true });

        res.json({ message: 'Login successful', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/logout', authMiddleware, (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logout successful' });
});



module.exports = router;
