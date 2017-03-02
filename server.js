var express = require('express');
var app = express();

var router = require('./routes');

app.set('view engine', 'ejs');

app.use('/', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
