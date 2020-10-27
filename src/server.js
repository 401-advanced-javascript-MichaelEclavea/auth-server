'use strict';


const express = require('express');
const mongoose = require('mongoose');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.post('/signup', function(req, res){
    userModel.create(req.body);
    then(() => res.status(200).send('created new user'));
}) .catch((err) => console.log(err));


module.exports = app;