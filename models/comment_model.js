// Dependencies
const mongoose = require('mongoose')
const User = require('./user_model.js');

// Create Model
const commentSchema = new mongoose.Schema({
    comment: String,
    commentUser: [User.schema],
})

// Declare Collection
const Comment = mongoose.model('comments', commentSchema)

// Export Collection
module.exports = Comment
