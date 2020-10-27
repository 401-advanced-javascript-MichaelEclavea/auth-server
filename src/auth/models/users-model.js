 'use strict';

 const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({
     username: { type: String, required: true },
     password: { type: String, required: true }
 });

 let newSchema = mongoose.model('users', userSchema);

userSchema.methods.authenticateUser = async function (req, res){
    let username = req.body.username;
    let password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    return { un: username, pw: hashedPassword };
}

 class Model {
     constructor(schema){
         this.schema = schema;
     }

     read(id){
         if(id) {
             return this.schema.find({_id: id});
         }
         else{
             return this.schema.find({});
         }
     }

     create(object){
         let newUser = new this.schema(object)
         console.log(newUser);
         newUser.authenticateUser()
         .then((result) => {
             console.log('saving hashed info', result);
             hashedInfo.save()
             console.log('attempting to generating token')
             this.generateTokens
         })
     }


 }



