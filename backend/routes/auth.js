// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Login = require('../models/Login');

const JWT_SECRET = process.env.JWT_SECRET;

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    // ✅ Always save every login attempt
    const newLogin = new Login({ name, password });
    await newLogin.save();

    // Create token (for frontend localStorage)
    const token = jwt.sign({ name }, JWT_SECRET, { expiresIn: '2h' });

    res.json({ token, message: 'Login successful!' });
  } catch (err) {
    console.error('❌ Error saving login:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
