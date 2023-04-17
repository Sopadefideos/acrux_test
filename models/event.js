const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },

    date : {
        type: Date,
        required: true
    },

    place : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Event', eventSchema);