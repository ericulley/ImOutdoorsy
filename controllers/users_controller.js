// Dependencies
const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/user_model.js')

// Routes
/////////

// Get New User
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
            res.redirect('/acts')
        }
    })
})



// Export Router
module.exports = users
