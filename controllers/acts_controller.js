// Dependencies
const express = require('express');
const acts = express.Router()

// Import Act Collection
const Act = require('../models/activity_model.js');

// Import Seed
const seed = require('../models/activity_seed')

// Routes
/////////

// Seed Route
acts.get('/seed', (req, res) => {
    Act.create(seed, (err, data) => {
        res.redirect('/')
    })
})

// Index Route
acts.get('/', (req, res) => {
    Act.find({}, (err, data) => {
        res.render('index.ejs',
        {
            acts: data,
        })
    })
})

// New Route
acts.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Create Route
acts.post('/', (req, res) => {
    Act.create(req.body, (err, newAct) => {
        // CHANGE: redirect to show page
        if (err) {
            console.log(err)
        } else {
            res.redirect('/acts')
        }
    })
})


// Export Router
module.exports = acts
