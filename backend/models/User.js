// models/Login.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const loginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  loggedAt: { type: Date, default: Date.now }
});

// Hash password before saving
loginSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('Login', loginSchema);
