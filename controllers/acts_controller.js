// Dependencies
const express = require('express');
const acts = express.Router()

// Import Act Collection
const Act = require('../models/activity_model.js');

// Routes
// Test Route
// acts.get('/', (req, res) => {
//     res.send("Hello World...")
// })

// Index Route
acts.get('/', (req, res) => {
    Act.find({}, (err, data) => {
        res.render('index.ejs',
        {
            acts: data,
        })
    })
})


// Export Router
module.exports = acts
