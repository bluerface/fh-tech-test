const router = require('express').Router();

var data = {};

router.get('/', function (req, res) {
  data.title = 'Home';
  res.render('pages/home.ejs', data);
});

router.get('/about', function (req, res) {
  data.title = 'About';
  res.render('pages/home.ejs', data);
});

router.get('/work', function (req, res) {
  data.title = 'Work';
  res.render('pages/home.ejs', data);
});

router.get('/contact', function (req, res) {
  data.title = 'Contact';
  res.render('pages/home.ejs', data);
});

module.exports = router;
