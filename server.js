// Dependencies
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const db = mongoose.connection
require('dotenv').config()

const PORT = process.env.PORT || 3003

// DB connection
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    }
)

// Console Notifications
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

// Controllers
const actsController = require('./controllers/acts_controller.js')
app.use('/', actsController)

// Listener
app.listen(PORT, () => {
    console.log("listening on port: ", PORT)
})
