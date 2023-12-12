

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ['normal', 'administrador', 'premium'], default: 'normal' },
  lastConnection: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
