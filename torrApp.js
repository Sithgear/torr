var express = require('express');
var fs = require('fs');
var torrApp = express();
// var torrDb = require('./torrDb'); *add in mongodb to torrApp
var jsFiles = express.static(__dirname + '/js');
var torrViews = express.static(__dirname + '/views');
var torrPublic = express.static(__dirname + '/public');
var torrController = require('./controllers/torrMovieController');

torrApp.use('/js',jsFiles);
torrApp.use('/views', torrViews);
torrApp.use('/public', torrPublic);
//torrApp.use('/controller', torrController);


torrApp.get('/',function(req,res){
  res.sendFile(__dirname + '/views/layout.html');
});

torrApp.get('/movies', torrController);

module.exports = torrApp;
