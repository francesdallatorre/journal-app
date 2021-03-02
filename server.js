const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const { logRequest } = require('./services/middleware.js');

// Configuration
require('dotenv').config()
const APP = express();
const PORT = process.env.PORT || 3000;
const mongodb_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + 'journal';

// Controllers
const entriesController = require('./controllers/entries.js');
const userController = require('./controllers/users.js')
const sessionsController = require('./controllers/sessions.js')

// Public
APP.use(express.static('public'))

// Middleware to help with form submission
APP.use(express.urlencoded({ extended: true }));
APP.use(methodOverride('_method'));
APP.use(
    session(
        {
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: false
        }
    )
)
APP.use(logRequest);

// Register controllers on their routes
APP.use('/entries', entriesController);
APP.use('/users', userController);
APP.use('/sessions', sessionsController);

// Mongoose connection
mongoose.connect(`${mongodb_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});

APP.get('/', (req, res) => {
    res.redirect('/entries')
})

// APP running the server
APP.listen(PORT, () => {
    console.log('listening on Port: ', PORT)
})