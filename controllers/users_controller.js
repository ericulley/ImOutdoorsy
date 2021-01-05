// Dependencies
const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()

// Import Users Collection
const User = require('../models/user_model.js')

// Routes
/////////

// New User
users.get('/new', (req, res) => {
    res.render('users/new_user.ejs')
})

// Create New User
users.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, newUser) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/sessions')
        }
    })
})

// Show User (User Profile)
users.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        if (err) {
            console.log(err)
        } else {
            res.render('users/show_user.ejs',
            {
                user: foundUser,
                currentUser: req.session.currentUser,
            })
        }
    })
})

// Export Router
module.exports = users
