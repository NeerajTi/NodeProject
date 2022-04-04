const http=require('http');
var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
var app = express();
var conn=require('./database');
app.set('view engine', 'pug');
app.set('views','./views');
const port=process.env.PORT || 3585
app.use(bodyParser.urlencoded({ extended: true }));

//save contact
app.post('/save-contact',(req, res) => {
  const userDetails=req.body;
  console.log(userDetails);
  let sqlQuery = "INSERT INTO contacts SET ?";
  let query = conn.query(sqlQuery, userDetails,(err, results) => {
    if(err) throw err;
  res.redirect("contact-success");
  });
});

app.get('/', function (req, res) {
  //res.send('Hello World! Testing');
  //res.sendFile(path.join(__dirname+'/home.html'));
 
  res.render('home');
});
app.get('/contact-success', function (req, res) {
  //res.send('Hello World! Testing');
  //res.sendFile(path.join(__dirname+'/home.html'));
 
  res.render('contact-success');
});
app.get('/contact', function (req, res) {
  //res.send('Hello World! Testing');
  //res.sendFile(path.join(__dirname+'/contact.html'));
  res.render('contact');
});
app.get('/cardano-testnet', function (req, res) {
  //res.send('Hello World! Testing');
  //res.sendFile(path.join(__dirname+'/contact.html'));
  let colors = ["Red", "Green", "Blue"];
let langs  = ["HTML", "CSS", "JS"];
let title  = "My Cool Website";

let locals = {
    siteColors: colors,
    siteLangs:  langs,
    title:      title
};
  res.render('cardano',locals);
});
 
function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}
app.listen(port, function () {
  console.log('Example app listening on port'+port);
});