var express = require('express');
var router = express.Router();

var upload = require('../upload');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/mapa', function(req, res, next) {
  res.render('mapa', { title: 'Mapa' });
});

router.get('/foto', function(req, res, next) {
  res.render('foto', {})
});

router.post('/upload-image/', function(req, res, next) {
  upload(req,res, function(err) {
      if(err) {
        return res.end("Error uploading file.");
      }
      res.send({imageUrl: req.file.path});
    });
});

module.exports = router;
