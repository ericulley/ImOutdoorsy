// Dependencies
const mongoose = require('mongoose');

// Create New Schema
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

// Assign Collection
const User = mongoose.model('users', userSchema)
// Export Collection
module.exports = User
