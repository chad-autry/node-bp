 router.use(bodyParser.urlencoded({ extended: true }));
 
+//Use the authorization middleware on every method of this controller
+router.use(authMiddleware);
var path = require('path');
var qs = require('querystring');

var async = require('async');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var colors = require('colors');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var jwt = require('jwt-simple');
var moment = require('moment');
var mongoose = require('mongoose');
var request = require('request');
var AuthorizationController = require('./controllers/Authorization');
var config = require('../config');


var app = express();

app.use(logger('dev'));

app.use('/backend/auth', AuthorizationController);

/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
app.listen(config.PORT, function() {
  console.log('Express server listening on port ' + config.PORT);
});
