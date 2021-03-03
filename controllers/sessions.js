
const express = require('express');
const bcrypt = require('bcryptjs')
const ROUTER = express.Router();

const User = require('../models/users.js')


ROUTER.get('/new', (req, res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    });
});

ROUTER.post('/', (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if (err) {
            // The database blew up
            console.log(err);
            res.send('Sorry something went wrong in our database :(');
        } else if (!foundUser) {
            // We do not have a valid user. Let them make one
            res.send('<a href="/users/new">Sorry no user found</a>');
        } else {
            // we have a valid user. Time to compare passwords
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                // We have a matching password
                req.session.currentUser = foundUser;

                res.redirect('/entries');
            } else {
                // no matching passwords. Send them back to the login screen
                res.send('<a href="/sessions/new">Sorry passwords did not match</a>');
            }
        }
    });
});


ROUTER.delete('/', (req, res) => {
    // when we remove the session. redirect them to the login screen
    req.session.destroy(() => {
        res.redirect('/sessions/new');
    })
})



module.exports = ROUTER;
