var express = require('express');
var torrApp = express();
// var torrDb = require('./torrDb'); *add in mongodb to torrApp
var jsFiles = express.static(__dirname + '/js');
var torrViews = express.static(__dirname + '/views');
var torrPublic = express.static(__dirname + '/public');

// var torrController = require('./controllers/TorrController');

torrApp.use('/js',jsFiles);
torrApp.use('/views', torrViews);
torrApp.use('/public', torrPublic);
// torrApp.use('/torrController', torrContoller);

torrApp.get('/',function(req,res){
  res.sendFile(__dirname + '/views/layout.html');
});

module.exports = torrApp;
