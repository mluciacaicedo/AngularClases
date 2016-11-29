var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola Martha' });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Register' });
});


router.get('/song', function(req, res, next) {
  res.render('playlist', { title: 'Register' });
});


router.get('/promesas', function(req, res, next) {
  res.render('promesas', { title: 'promesas' });
});


module.exports = router;
