// Dependencies
const mongoose = require('mongoose')

// Create Model
const activitySchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    date: Number,
    time: Number,
    length: Number,
    location: String,
    description: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5},
    likes: {type: Number},
})

// Declare Collection
const Act = mongoose.model('acts', activitySchema)

// Export Collection
module.exports = Act
