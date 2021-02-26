const { Router } = require('express');
const express = require('express');
const ROUTER = express.Router();
const Entry = require('../models/entries.js');

// seed
ROUTER.get('/seed', (req, res) => {
    Entry.create([
        {
            title: "today was an amazing day",
            entry: "Lorem ipsum dolor sit amet, id unum similique ius. Pro ex inermis fastidii patrioque, mei ex wisi interpretaris. Vel ad tritani dissentias. Brute modus aperiri ei mea, te ius tation argumentum. Nec velit assum aperiri an",
            emoji: "🤪"
        },
        {
            title: "first day at school",
            entry: "Lorem ipsum dolor sit amet, id unum similique ius. Pro ex inermis fastidii patrioque, mei ex wisi interpretaris. Vel ad tritani dissentias. Brute modus aperiri ei mea, te ius tation argumentum. Nec velit assum aperiri an Et eam animal neglegentur concludaturque, qui at nemore nostro. Usu ei nullam vocent admodum. Nec nibh ignota voluptatibus ad, dico virtute singulis no pri. Vix cu ridens salutatus, postea contentiones ne nec. Cum purto neglegentur te, an mei mutat paulo, mei in malis legere doctus.",
            emoji: "😀"
        }
    ], (err, data) => {
        res.redirect('/entries')
    });
});

// index
ROUTER.get('/', (req, res) => {
    Entry.find({}, (error, allEntries) => {
        res.render('entries/index.ejs', {
            entries: allEntries
        });
    });
});
// new
ROUTER.get('/new/', (req, res) => {
    res.render('entries/new.ejs')
});
// post
ROUTER.post('/', (req, res) => {
    Entry.create(req.body, (error, createdEntry) => {
        res.redirect('/entries')
    });
});
// edit
ROUTER.get('/:id/edit', (req, res) => {
    Entry.findById(req.params.id, (error, foundEntry) => {
        res.render('entries/edit.ejs', {
            entry: foundEntry
        });
    });
});
// update
ROUTER.put('/:id', (req, res) => {
    Entry.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (error, updatedEntry) => {
            res.redirect('/entries')
        });
});
// show
ROUTER.get('/:id/', (req, res) => {
    Entry.findById(req.params.id, (error, foundEntry) => {
        res.render('entries/show.ejs', {
            entry: foundEntry
        });
    });
});
// delete
ROUTER.delete('/:id/', (req, res) => {
    Entry.findByIdAndRemove(req.params.id, { useFindAndModify: false },
        (error, data) => {
            res.redirect('/entries/')
        });
});

module.exports = ROUTER