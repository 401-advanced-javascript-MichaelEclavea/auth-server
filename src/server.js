"use strict";

const express = require("express");
const mongoose = require("mongoose");
const base64 = require("base-64");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require('./auth/router.js');
const User = require("./auth/models/users-model.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

module.exports = app;
