'use strict';

const { JsonWebTokenError } = require("jsonwebtoken");
const base64 = require('base-64');
const Users = require('../models/users-model.js');
const jwt = require('jsonwebtoken');

module.exports = {
    bearer: async (req, res, next) =>{
        if(req.headers.authorization){
            const encodeToken = req.headers.authorization.split(' ')[1];
            
            try{
                let isValidToken = await jwt.verify(encodedToken, 'SECRET_STRING');
                console.log(isValidToken);
                next();
            } catch (e){
                next(e);
            }
        }
        else{
            next('unauthorized');
        }
    }
}