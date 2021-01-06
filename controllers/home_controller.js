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
            // Sort Function
            const sortedActs = []
            for (let i = 0; i < data.length; i++) {
                sortedActs.push(data[i])
            }
            sortedActs.sort(function (a, b) {
                return b.rating - a.rating
            })
            res.render('home/index.ejs',
            {
                acts: data,
                sortedActs: sortedActs,
                currentUser: req.session.currentUser,
                music: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'
            })
        }
    })
})


// Export Router
module.exports = home
