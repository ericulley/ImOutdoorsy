// Dependencies
const express = require('express')
const sessions = express.Router()
const bcrypt = require('bcrypt')

// Import Collection
const User = require('../models/user_model.js')

// Routes
/////////

// New Session Route
sessions.get('/', (req, res) => {
    res.render('sessions/new_session.ejs')
})

// Create Session Route
sessions.post('/', (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if (err) {
            console.log(err)
        } else if (!foundUser) {
            res.send('<a href="/acts">Sorry, user not found.</a>')
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser
                res.redirect('/acts')
            } else {
                res.send('<a href="/acts">Password does not match.</a>')
            }
        }
    })
})

// Delete Session Route
sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/acts')
    })
})



// Export Router
module.exports = sessions
