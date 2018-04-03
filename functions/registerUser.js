
'use strict';

const user = require('../models/registerether');  
// const user = require('../models/fetchdata');

exports.registerUser = (firstname, lastname, userObject,email,password, retypepassword,usertype, encodedMail) => {
    return new Promise((resolve, reject) => {

    const newUser = new user({

        firstname : firstname, 
        lastname : lastname, 
        userObject: userObject,
        email : email,
        password : password, 
        retypepassword : retypepassword,
        usertype : usertype,
        encodedMail: encodedMail,
        count:0
    });
    newUser
    .save()

    .then(() => resolve({
        status: 201,
        message: 'User Registered Sucessfully !'
    }))

    .then(() => bcSdk.createUser({
        user: users,
        UserDetails: newUser
    }))

    .catch(err => {

        if (err.code == 11000) {

            reject({
                status: 409,
                message: 'User Already Registered !'
            });

        } else {

            reject({
                status: 500,
                message: 'Internal Server Error !'
            });
        }
    });

});
}