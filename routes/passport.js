var express = require('express');
var router = express.Router();

//var passport = require('../passport/socialAuthorization');
var passportConf = require('../passport/conf');


//module.exports = router;

module.exports = function(passport){

  function getAuthorize(socialNetworkName){
    return passport.authorize(socialNetworkName, {
      failureRedirect: '/',
      failureFlash : true
    });
  };



  var fbAuth = passport.authorize('facebook', passportConf.facebookScope);


  function redirectToProfile(req, res){
    res.redirect('/');
  }

  router.get('/facebook', fbAuth);
  router.get('/facebook/callback', getAuthorize('facebook'),
    redirectToProfile);

  return router
}
