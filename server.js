var torrApp = require('./torrApp');
var port = process.env.PORT || 8080;

var torrServer = torrApp.listen(port,function(){
  console.log('ToRR server now online!');
});
