// Dependencies
const express = require('express');
const acts = express.Router()
const cloudinary = require('cloudinary').v2;

// Import Act Collection
const Act = require('../models/activity_model.js');

// Import Seed
const seed = require('../models/activity_seed')

// Auth Middleware
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/')
    }
}
acts.use(isAuthenticated)

// Routes
/////////

// Seed Route
acts.get('/seed', (req, res) => {
    Act.create(seed, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/')
        }
    })
})

// Index Route
acts.get('/', (req, res) => {
    Act.find({user: req.session.currentUser}, (err, data) => {
        res.render('acts/index.ejs',
        {
            acts: data,
            currentUser: req.session.currentUser,
        })
    })
})

// New Activity Route
acts.get('/new', (req, res) => {
    res.render('acts/new.ejs',
    {
        currentUser: req.session.currentUser,
    })
})

// Create Activity Route
acts.post('/', (req, res) => {
    // Assign currentUser to the activity
    req.body.user = req.session.currentUser
    // Check for image upload
    if (!req.files) {
        // If no image is uploaded, assign a defualt
        req.body.img = 'https://cnet4.cbsistatic.com/img/S4gqhdykLM_WCY4vyAyQV35igZs=/1092x0/2019/03/20/4286bf60-8816-4be8-808c-2f301a407014/istock-514318052.jpg'
        Act.create(req.body, (err, newAct) => {
            // CHANGE: redirect to show page
            if (err) {
                console.log(err)
            } else {
                res.redirect('/acts')
            }
        })
    } else {
        // Find image path and upload to Cloudinary
        const img = req.files.img
        cloudinary.uploader.upload(img.tempFilePath, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                req.body.img = data.url
                Act.create(req.body, (err, newAct) => {
                    // CHANGE: redirect to show page
                    if (err) {
                        console.log(err)
                    } else {
                        res.redirect('/acts')
                    }
                })
            }
        })
    } 
})

// Edit Activity Route
acts.get('/:id/edit', (req, res) => {
    Act.findById(req.params.id, (err, data) => {
        res.render('acts/edit.ejs',
        {
            act: data,
            currentUser: req.session.currentUser,
        })
    })
})

// Update Activity Route
acts.put('/:id', (req, res) => {
    Act.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAct) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect(`/acts/${req.params.id}`)
        }
    })
})


// Delete Activity Route
acts.delete('/:id', (req, res) => {
    Act.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/acts')
    })
})

// Show Activity Route
acts.get('/:id', (req, res) => {
    Act.findById(req.params.id, (err, data) => {
        console.log(req.session.currentUser)
        console.log(data.user)
        res.render('acts/show.ejs',
        {
            act: data,
            currentUser: req.session.currentUser,
        })
    })
})

// Export Router
module.exports = acts
