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
            // Sort by Rating Function
            const sortedActs = []
            for (let i = 0; i < data.length; i++) {
                sortedActs.push(data[i])
            }
            sortedActs.sort(function (a, b) {
                return b.rating - a.rating
            })
            // Sort by Popularity/Comments Function
            const popActs = []
            for (let i = 0; i < data.length; i++) {
                popActs.push(data[i])
            }
            popActs.sort((a, b) => {
                return b.commentCount - a.commentCount
            })
            // Render Home Page
            res.render('home/index.ejs',
            {
                acts: data,
                sortedActs: sortedActs,
                popActs: popActs,
                currentUser: req.session.currentUser,
                music: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'
            })
        }
    })
})


// Export Router
module.exports = home
