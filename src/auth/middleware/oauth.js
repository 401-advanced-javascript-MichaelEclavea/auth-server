'use strict';

async function exchangeCodeForToken(code) {
    let tokenRequest = await superagent.post(tokenURL)
      .send({
        code: code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code'
      });

    let access_token = tokenRequest.body.access_token;

    return access_token;
  }

  async function createAPIUser(userdata) {
    const newUser = new Users({ username: userdata.login });
    const savedUser = await newUser.save();

    const token = savedUser.generateToken();

    return token;
  }
