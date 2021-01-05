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
                music: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'
            })
        }
    })
})


// Export Router
module.exports = home
