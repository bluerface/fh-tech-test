const router = require('express').Router();

router.get('/', function (req, res) {
  res.send('Home');
});

router.get('/about', function (req, res) {
  res.send('About');
});

router.get('/work', function (req, res) {
  res.send('Work');
});

router.get('/contact', function (req, res) {
  res.send('Contact');
});

module.exports = router;
