var cors = require('cors');
var mongoose = require('mongoose');

var Promises = require('promise');
var cloudinary = require('cloudinary').v2;
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');

const registerUser = require('./functions/registerUser');
const login = require('./functions/login');



module.exports = router => {

router.post('/registerUser', cors(), (req, res) => { 
    console.log("UI",req.body);

    const firstname = req.body.firstname;
    console.log(firstname);
    const lastname = req.body.lastname;
    console.log(lastname);
    const phonenumber = parseInt(req.body.phonenumber);
    console.log(phonenumber);
    const email = req.body.email;
    console.log(email);
    const password = req.body.password;
    console.log(password);
    const retypepassword = req.body.retypepassword;
    console.log(retypepassword);
    const usertype = req.body.usertype;
    console.log(usertype);
    
    if (!firstname || !lastname || !phonenumber || !email || !password || !retypepassword || !usertype) {

        res
            .status(400)
            .json({
                message: 'Invalid Request !'
            });

    } else {

        registerUser
            .registerUser(firstname, lastname, phonenumber,email,password, retypepassword,usertype)
            .then(result => {

                res.send({
                    "message": "user has been registered successfully",
                    "status": true,


                });


            })
            .catch(err => res.status(err.status).json({
                message: err.message
            }).json({
                status: err.status
            }));
    }
});

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


            res.send({
                "message": "Login Successful",
                "status": true,
                "usertype":result.users.usertype,
            });

        })
        .catch(err => res.status(err.status).json({
            message: err.message
        }).json({
            status: err.status
        }));

});

}