var express = require('express');
var torrMovieController = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
//var Movie = require(); this will be the movie model

torrMovieController.use(bodyParser.urlencoded({extended: true}));

torrMovieController.get('/movies',function(req,res){
  var movieFolder = '//THE-SHIRE/Outer Heaven/Movies';
  var movieList = fs.readdir(movieFolder,function(err,files){
    if(err){
      console.log(err);
    }
    var newList = files;
    res.send(newList);
  });
});




module.exports = torrMovieController;
