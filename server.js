 // Dependencies
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const db = mongoose.connection
require('dotenv').config()
const session = require('express-session')
const PORT = process.env.PORT || 3003

// Cloudinary Image Uploader & File Uploader
const fileupload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

// DB connection
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
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
app.use(fileupload({
    useTempFiles : true,
}))
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    })
)


// Controllers
const homeController = require('./controllers/home_controller.js')
app.use('/', homeController)
const actsController = require('./controllers/acts_controller.js')
app.use('/acts', actsController)
const usersController = require('./controllers/users_controller.js')
app.use('/users', usersController)
const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)

// Listener
app.listen(PORT, () => {
    console.log("listening on port: ", PORT)
})
