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
users.post('/', (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, newUser) => {
        if (err) {
            console.log(err);
        } else {
            if (newUser && newUser.username) {
                let un = encodeURIComponent(newUser.username)
                res.redirect(`/sessions?un=${un}`)
                return next()
            }
            res.redirect('/sessions')
        }
    })
})

// Edit User
users.get('/:id/edit', (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        res.render('users/edit_user.ejs',
        {
            user: foundUser,
            currentUser: req.session.currentUser,
        })
    })
})

//Update User
users.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAct) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect(`/users/${req.params.id}`)
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
