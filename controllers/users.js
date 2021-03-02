
const express = require('express');
const ROUTER = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/users.js');

// GET New
ROUTER.get('/new', (req, res) => {
    res.render('users/new.ejs')
})
// POST Create
ROUTER.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    User.create(req.body, (err, newUser) => {
        console.log('User created: ', newUser);
        res.redirect('/entries');
    });
});


module.exports = ROUTER