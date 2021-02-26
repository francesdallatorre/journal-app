const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Configuration
require('dotenv').config()
const APP = express();
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI

// Controllers

// Middleware to help with form submission
APP.use(express.urlencoded({ extended: true }));
APP.use(methodOverride('_method'));

// Mongoose connection
mongoose.connect(`${mongodbURI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});

// APP running the server
APP.listen(PORT, () => {
    console.log('listening on Port: ', PORT)
})