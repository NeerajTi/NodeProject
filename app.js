var express = require('express');
var app = express();
const port=process.env.PORT || 3585
app.get('/', function (req, res) {
  res.send('Hello World! Testing');
});
app.listen(port, function () {
  console.log('Example app listening on port'+port);
});