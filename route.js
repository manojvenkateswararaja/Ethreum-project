var cors = require('cors');
var mongoose = require('mongoose');
<<<<<<< HEAD

=======
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
var Promises = require('promise');
var cloudinary = require('cloudinary').v2;
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');
<<<<<<< HEAD

const registerUser = require('./functions/registerUser');
const login = require('./functions/login');



module.exports = router => {

router.post('/registerUser', cors(), (req, res) => { 
    console.log("UI",req.body);

    const firstname = req.body.firstname;
    console.log(firstname);
    const lastname = req.body.lastname;
=======
const registerUser = require('./functions/registerUser');
const login = require('./functions/login');
module.exports = router => {
router.post('/registerUser', cors(), (req, res) => { 
    console.log("UI",req.body);
    const firstname = req.body.fname;
    console.log(firstname);
    const lastname = req.body.lname;
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
    console.log(lastname);
    const phonenumber = parseInt(req.body.phonenumber);
    console.log(phonenumber);
    const email = req.body.email;
<<<<<<< HEAD
    console.log(email);
    const password = req.body.password;
    console.log(password);
    const retypepassword = req.body.retypepassword;
=======
    console.log("manoj",email);
    const password = req.body.pass;
    console.log(password);
    const retypepassword = req.body.repass;
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
    console.log(retypepassword);
    const usertype = req.body.usertype;
    console.log(usertype);
    
    if (!firstname || !lastname || !phonenumber || !email || !password || !retypepassword || !usertype) {
<<<<<<< HEAD

=======
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
        res
            .status(400)
            .json({
                message: 'Invalid Request !'
            });
<<<<<<< HEAD

    } else {

        registerUser
            .registerUser(firstname, lastname, phonenumber,email,password, retypepassword,usertype)
            .then(result => {

                res.send({
                    "message": "user has been registered successfully",
                    "status": true,


                });


=======
    } else {
        registerUser
            .registerUser(firstname, lastname, phonenumber,email,password, retypepassword,usertype)
            .then(result => {
                res.send({
                    "message": "user has been registered successfully",
                    "status": true,
                });
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
            })
            .catch(err => res.status(err.status).json({
                message: err.message
            }).json({
                status: err.status
            }));
    }
});
<<<<<<< HEAD

=======
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
router.post('/login', cors(), (req, res) => {
    console.log("entering login function in functions ");
    const emailid = req.body.email;
    console.log(emailid);
    const passwordid = req.body.password;
    console.log(passwordid);
   
   
    login
        .loginUser(emailid, passwordid)
        .then(result => {   
            console.log("result ===>>>",result.users.usertype)
<<<<<<< HEAD


=======
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
            res.send({
                "message": "Login Successful",
                "status": true,
                "usertype":result.users.usertype,
            });
<<<<<<< HEAD

=======
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
        })
        .catch(err => res.status(err.status).json({
            message: err.message
        }).json({
            status: err.status
        }));
<<<<<<< HEAD

});

=======
});
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
}