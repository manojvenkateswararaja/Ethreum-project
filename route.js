var cors = require('cors');
var mongoose = require('mongoose');
var Promises = require('promise');
var cloudinary = require('cloudinary').v2;
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');


const registerUser = require('./functions/registerUser');
var filereader = require('./functions/filereader')
var getStatus = require('./functions/getStatus')
const login = require('./functions/login');
// var fs = require('fs');
// var stats = fs.statSync("app/image/*.jpg");
const fs = require('fs');
const Crypto = require("crypto");
var sha256 = require('js-sha256');

var cron = require('node-cron');
 



// Start off with 0 fish


// Initiate while loop to run until fish reaches population limit

    // add one fish for each iteration
    

       
    
   



// console.log('is file ? ' + stats.isFile());




module.exports = router => {
   router.post('/filereader', cors(), (req,res) => {
    console.log("UI",req.body);
    const URL = req.body.URL;
    console.log(URL);
    const pubKey = req.body.pubKey;
    console.log(pubKey);
    const Key = req.body.Key;
    console.log(Key);

        // perform operation e.g. GET request http.get() etc.
       
      
        // cron.schedule('*/2 * * * *', function(){
         
          
        fs.readdir(req.body.URL, (err, files) => {
            // sha256(req.body.URL);

            fs.stat(req.body.URL, (err, stats)=> { 
                if(err){
                  //doing what I call "early return" pattern or basically "blacklisting"
                  //we stop errors at this block and prevent further execution of code
              
                  //in here, do something like check what error was returned
                  switch(err.code){
                    case 'ENOENT':
                      console.log(req.body.URL + ' does not exist');
                      break;

                  }
                  //of course you should not proceed so you should return
                  return;
                }
              
                //back there, we handled the error and blocked execution
                //beyond this line, we assume there's no error and proceed
              
                if (stats.isDirectory()) {
                  console.log(req.body.URL + ": is a directory");
                } else {
                  console.log(stats);
                }
              });
          files.forEach(file => {
              if(file)
            console.log("data",file);
            var file = file;
      
                     
// var file = sha256.create();
// file.update(req.body.URL);
// file.hex();
// console.log("encrypted",file)
            
        console.log(file)
        if (!URL || !pubKey||!Key || !file  ) {
        res
            .status(400)
            .json({
                message: 'Invalid Request !'
            });
        }
            else {

                filereader
                    .filereader(URL,Key, pubKey,file)
                    .then(result => {
        
                        res.send({
                            "message": "Transaction complete",
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
        
     }); 
    //  console.log('running a task every two minutes');
    // });
     
    
    router.post('/getStatus', cors(), (req,res) => {
        var self = this;
        var key = req.body.Key;
        console.log(key)
        if (!key) {
            res
                .status(400)
                .json({
                    message: 'Invalid Request !'
                });
            }
                else {
    
                    getStatus
                        .getStatus(key)
                        .then(function(result) {
            console.log("result.value",result.value)
                            res.send({
                                "message": result.value,
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