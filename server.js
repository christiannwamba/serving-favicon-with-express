var express = require('express');
var favicon = require('serve-favicon');

var app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(5000, function(){
  console.log('Favicon app listening at port 5000');
});
