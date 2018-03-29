<<<<<<< HEAD

'use strict';

const user = require('../models/registerether');  
// const user = require('../models/fetchdata');

exports.registerUser = (firstname, lastname, phonenumber,email,password, retypepassword,usertype) => new Promise((resolve, reject) => {

    const newUser = new user({

=======
'use strict';
const user = require('../models/registerether');  
// const user = require('../models/fetchdata');
exports.registerUser = (firstname, lastname, phonenumber,email,password, retypepassword,usertype) => new Promise((resolve, reject) => {
    const newUser = new user({
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
        firstname : firstname, 
        lastname : lastname, 
        phonenumber : phonenumber,
        email : email,
        password : password, 
        retypepassword : retypepassword,
        usertype : usertype,
    });
    newUser
        .save()
        .then(() => resolve({
            status: 201,
            message: 'Please verify your emailid and phone no'
        }))
        .catch(err => {
<<<<<<< HEAD

            if (err.code == 11000) {

=======
            if (err.code == 11000) {
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
                reject({
                    status: 409,
                    message: 'User Already Registered !'
                });
<<<<<<< HEAD

            } else {

=======
            } else {
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
                reject({
                    status: 500,
                    message: 'Internal Server Error !'
                });
            }
        });
});