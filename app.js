<<<<<<< HEAD

'use strict';

=======
'use strict';
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const loggerpac = require('morgan');
const router = express.Router();
var cors = require('cors');
var logger;
var Promise = require('bluebird');
var log4js = require('log4js');
var config = require('config');
<<<<<<< HEAD


const port = process.env.PORT || 8082;

=======
const port = process.env.PORT || 8082;
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(loggerpac('dev'));
app.use(cors());
require('./route')(router);
app.use('/', router);
app.listen(port);
<<<<<<< HEAD


console.log(`App Runs on ${port}`);
=======
console.log(`App Runs on ${port}`);
>>>>>>> 50476397cf3a0421c3e22edf400b4a53dfa2f30b
