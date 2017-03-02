var express = require('express');
var path = require('path');
var app = express();

var router = require('./routes');

app.set('view engine', 'ejs');

app.use('/', router);

app.use(express.static(path.join(__dirname, '/static')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
