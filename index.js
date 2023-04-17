const express = require('express');
const app = express();
require('dotenv').config({path: './.env'});
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

//MONGOOSE CONNECTION
const dbUrl = process.env.MONGODB || 'mongodb://localhost/your_database_name';

mongoose.connect(dbUrl).then(() => {
    console.log('MongoDB connected successfully!');
  }).catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

//ROUTES IMPORT
const eventApi = require('./src/event');
app.use('/event', eventApi());

//LISTENING PORT CONNECTION
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
