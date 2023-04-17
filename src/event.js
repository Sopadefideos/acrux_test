const express = require('express');
const router = express.Router();
const eventSchema = require('../models/event');

const eventApi = () => {

    router.get('/', (req,res) => {

    });

    router.post('/', (req,res) => {
        const { name, date, place } = req.body;
        if (!name || !date || !place) {
            return res.status(400).send('Missing required parameters');
        }else{
            if(!isValidDate(date)){
                return res.status(400).send('Format date not valid: yyyy-mm-dd');
            }
            eventSchema.findOne({ name: name, date: date, place: place })
            .then(doc => {
                if (!doc) {
                    const newEvent = new eventSchema({
                        name: name,
                        date: date,
                        place: place
                    });
                    
                    // Save the new document to the database
                    newEvent.save()
                    .then(doc => {
                        // Document saved successfully
                        console.log(doc);
                        return res.status(200).send('Event created.');
                    })
                    .catch(err => {
                        console.error(err);
                        return res.status(400).send('Error: '+err);
                    });
                }
                return res.status(409).send('Event already created.');
            })
            .catch(err => {
                console.error(err);
                return res.status(400).send('Error: '+err);
            });
        }
    });

    return router;
}

function isValidDate(dateString) {
    // Create a new Date object from the input string
    const date = new Date(dateString);

    // Check if the input string is in the correct format, and if the resulting Date object is valid
    return !isNaN(date) && /^\d{4}-\d{2}-\d{2}$/.test(dateString);
}

module.exports = eventApi;