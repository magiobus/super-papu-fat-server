var passport = require('../app').passport;
var passportConf = require('./conf');

console.log('dadasdasd', passport)

exports.getAuthorize = function(socialNetworkName){
  return passport.authorize(socialNetworkName, {
    failureRedirect: '/',
    failureFlash : true
  });
};

exports.twAuth = passport.authorize('twitter', passportConf.twitterScope);
exports.fbAuth = passport.authorize('facebook', passportConf.facebookScope);
exports.gpAuth = passport.authorize('google', passportConf.googleScope);
exports.igAuth = passport.authorize('instagram', passportConf.instagramScope);
