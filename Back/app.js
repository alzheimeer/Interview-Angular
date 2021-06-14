const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { dbConnection } = require('./db/config');
const path = require('path');


// Create the express server 
const app = express();

// We start the Database
dbConnection();

// Read every request and response and display it on the console
app.use(morgan('dev'));

// Public Directory
app.use(express.static('public'));

// Use CORS
app.use(cors());

// Reading and parsing the body, Indicates that the incoming data is Json
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users.router'));

// Handle other angular routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

module.exports = app;