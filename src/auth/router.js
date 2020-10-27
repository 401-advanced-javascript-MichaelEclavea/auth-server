'use strict';

const express = require('express');
const base64 = require('base-64');
const Users = require('./models/users-model.js');
const basicMiddleware = require('./middleware/basic.js');
const bearerMiddleware = require('./middleware/bearer.js');
const router = express.Router();


router.post('/signin', basicMiddleware.basic, (req, res, next) => {
  if (req.token) {
    res.send(req.token);
  } else {
    res.status(401).send('hey, give me my auth headers');
  }
});
router.post('/signup', (req, res, next) => {
    console.log(req.body);
  const userData = req.body;
  const newUser = new Users(userData);
  newUser.save()
    .then(async user => {
      const token = await user.generateToken();
      res.send(token);
    })
    .catch(err =>{console.log(err)});
});

module.exports = router;