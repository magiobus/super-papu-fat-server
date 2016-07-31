var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(req.user, req.isAuthenticated())

  res.render('index', { title: 'Express' });
});

router.get('/logout', function(req, res){
  req.session.destroy(null);
  req.logout();
  res.redirect('/');
});

module.exports = router;
