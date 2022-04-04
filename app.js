const http=require('http');
var express = require('express');
const path = require('path');

var app = express();
app.set('view engine', 'pug');
app.set('views','./views');
const port=process.env.PORT || 3585
app.get('/', function (req, res) {
  //res.send('Hello World! Testing');
  //res.sendFile(path.join(__dirname+'/home.html'));
  res.render('home');
});
app.get('/contact', function (req, res) {
  //res.send('Hello World! Testing');
  //res.sendFile(path.join(__dirname+'/contact.html'));
  res.render('contact');
});
app.listen(port, function () {
  console.log('Example app listening on port'+port);
});