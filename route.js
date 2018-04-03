var cors = require('cors');
var mongoose = require('mongoose');
var Promises = require('promise');
var cloudinary = require('cloudinary').v2;
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');


const registerUser = require('./functions/registerUser');
var filereader = require('./functions/filereader')
const login = require('./functions/login');
// var fs = require('fs');
// var stats = fs.statSync("app/image/*.jpg");
const fs = require('fs');

var cron = require('cron');



// Start off with 0 fish


// Initiate while loop to run until fish reaches population limit

    // add one fish for each iteration
    

       
    
   



// console.log('is file ? ' + stats.isFile());




module.exports = router => {
   router.post('/filereader', cors(), (req,res) => {
    console.log("UI",req.body);
    const URL = req.body.URL;
    console.log(URL);
    const Key = req.body.Key;
    console.log(Key);
     var cronJob = cron.job('*/5 * * * *', function (){
        // perform operation e.g. GET request http.get() etc.
       
      
     
        fs.readdir("/home/rpqb-desk-003/Ethreum-project/app/image/", (err, files) => {
            fs.stat("/home/rpqb-desk-003/Ethreum-project/app/image/", (err, stats) => {
                stats.foeEach(detail => {
                    console.log(stats);
                    var results = detail;
                    console.log(results)
                })
          files.forEach(file => {
            console.log("manoj",file);
            var result = file;
        console.log(result)
        if (!URL || !Key || !result ) {
        res
            .status(400)
            .json({
                message: 'Invalid Request !'
            });
        }
            else {

                filereader
                    .filereader(URL, Key,result)
                    .then(result => {
        
                        res.send({
                            "message": "Transaction Complete",
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
       })
        console.info('cron job completed');
        
     }); 
     cronJob.start();
    })
})
     
    

   
   

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