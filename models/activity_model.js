// Dependencies
const mongoose = require('mongoose')
const User = require('./user_model.js');

// Create Model
const activitySchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    date: String,
    time: Number,
    location: String,
    description: {type: String, required: true},
    img: String,
    rating: {type: Number, min: 1, max: 5},
    public: Boolean,
    // user: [User.schema],
})

// Declare Collection
const Act = mongoose.model('acts', activitySchema)

// Export Collection
module.exports = Act
