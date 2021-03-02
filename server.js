const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const db = mongoose.connection;

// Configuration
require('dotenv').config()
const APP = express();
const PORT = process.env.PORT || 3000;
const mongodb_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + 'journal';

// Controllers
const entriesController = require('./controllers/entries.js');

// Public
APP.use(express.static('public'))

// Middleware to help with form submission
APP.use(express.urlencoded({ extended: true }));
APP.use(methodOverride('_method'));

// Register controllers on their routes
APP.use('/entries', entriesController);
APP.get('/', function (req, res) {
    res.redirect('/entries')
})
// Mongoose connection
mongoose.connect(`${mongodb_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});

// Get


// APP running the server
APP.listen(PORT, () => {
    console.log('listening on Port: ', PORT)
})