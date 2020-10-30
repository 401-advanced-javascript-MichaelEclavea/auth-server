'use strict';

const base64 = require('base-64');
const Users = require("../models/users-model.js");
const jwt = require('jsonwebtoken');





module.exports = {
    basic: async (req, res, next) =>{
        if (req.headers.authorization){
            const encodedPassword = req.headers.authorization.split(' ')[1];
            const decodedPassword = base64.decode(encodedPassword);
            const [username, password] = decodedPassword.split(':');
            console.log(username, password);
            let token = await Users.authenticateBasic(username, password);
            
            req.token = token;
        
            next();

        } else{
            next('Unauthorized');
        }
    }
}