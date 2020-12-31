// Dependencies
const express = require('express');
const home = express.Router()

// Import Act Collection
const Act = require('../models/activity_model.js');

// Routes
/////////

// Index Route
home.get('/', (req, res) => {
    Act.find({}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.render('home/index.ejs',
            {
                acts: data,
                currentUser: req.session.currentUser,
            })
        }
    })
})


// Export Router
module.exports = home
