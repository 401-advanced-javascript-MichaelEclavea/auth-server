'use strict';

const mongoose = require('mongoose');
const app = require('./src/server.js');
require('dotenv').config();
const PORT = process.env.PORT;

const DB_URI = process.env.MONGODB_URI;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() =>{
        console.log('db connected');
        app.listen(PORT, () =>{
            console.log('Server is running on port', PORT);
        })
    })
    .catch(err => console.log('caught and error', err));


