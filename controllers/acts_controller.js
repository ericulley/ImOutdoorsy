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
        res.redirect('/acts')
    })
})

// Index Route
acts.get('/', (req, res) => {
    Act.find({}, (err, data) => {
        res.render('acts/index.ejs',
        {
            acts: data,
        })
    })
})

// New Activity Route
acts.get('/new', (req, res) => {
    res.render('acts/new.ejs')
})

// Create Activity Route
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

// Edit Activity Route
acts.get('/:id/edit', (req, res) => {
    Act.findById(req.params.id, (err, data) => {
        res.render('acts/edit.ejs',
        {
            act: data,
        })
    })
})

// Update Activity Route
acts.put('/:id', (req, res) => {
    Act.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAct) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/acts')
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
        res.render('acts/show.ejs',
        {
            act: data,
        })
    })
})

// Export Router
module.exports = acts
