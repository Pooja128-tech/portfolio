// backend/models/Login.js
const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  loggedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Login', loginSchema);
