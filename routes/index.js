var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/mapa', function(req, res, next) {
  res.render('mapa', { title: 'Mapa' });
});


router.get('/', function(req, res, next) {
  res.render('test', {})
});

module.exports = router;
