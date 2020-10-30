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

router.get('/oauth', async (req, res, next) => {
  let code = req.query.code; // oauth gives us a code to make a request for the token

  let tokenURL = 'https://github.com/login/oauth/access_token';
  let remoteUserURL = 'https://api.github.com/user';

  try {

    // STEP#3 first exchange an access code for an access token
    const access_token = await exchangeCodeForToken(code);

    // STEP#4 Now that we have the toke, we can use this to get data about the user
    const userData = await getRemoteUserData(access_token);

    // STEP#5 Using our userData from the AUth Provider, we can create our own User to relate any resources this user creates
    //  the goal here is to send back a token from this user we created.
    const token = await createAPIUser(userData);

    res.send(token);
  } catch (e) {
    console.log(e);

    res.status(400).send("Something went wrong");
  }





module.exports = router;