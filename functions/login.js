'use strict';
<<<<<<< HEAD

const user = require('../models/registerether');
// const user = require('../models/fetchdata');

exports.loginUser = (email, password,usertype) =>

    new Promise((resolve, reject) => {

        console.log("Entering into login fun");
        console.log(email);

=======
const user = require('../models/registerether');
// const user = require('../models/fetchdata');
exports.loginUser = (email, password,usertype) =>
    new Promise((resolve, reject) => {
        console.log("Entering into login fun");
        console.log(email);
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
        user.find({
                "email": email ,
            
            })
            .then(users => {
<<<<<<< HEAD

=======
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
                const dbpin = users[0].password;
                console.log(users[0].password)
                console.log(users[0]._id)
                console.log(dbpin + "   " + users[0].password)
<<<<<<< HEAD

                if (String(password) === String(dbpin)) {

=======
                if (String(password) === String(dbpin)) {
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
                    resolve({
                        status: 200,
                        users: users[0]
                    });
<<<<<<< HEAD

                } else {

=======
                } else {
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
                    reject({
                        status: 401,
                        message: 'Invalid Credentials !'
                    });
                }
            })
<<<<<<< HEAD


=======
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
    });