'use strict';
<<<<<<< HEAD

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerpageSchema = mongoose.Schema({

=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registerpageSchema = mongoose.Schema({
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
    firstname: String,
    lastname: String, 
    phonenumber : Number,
    email : {
        type: String,
        unique: true
    },
    password: String,
    retypepassword: String,
    usertype:  String,
    
     
});
<<<<<<< HEAD


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://harini:Harini!96@ds119406.mlab.com:19406/mortgage', {
    useMongoClient: true
});



=======
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });
mongoose.connect('mongodb://harini:Harini!96@ds119406.mlab.com:19406/mortgage', {
    useMongoClient: true
});
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
module.exports = mongoose.model('registerether', registerpageSchema);