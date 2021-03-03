const mongoose = require('mongoose');


const entrySchema = new mongoose.Schema({
    title: { type: String, required: true },
    entry: { type: String, required: true },
    date: { type: Date, default: Date.now },
    emoji: String,
    image: String,
    userid: String,
})
const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry