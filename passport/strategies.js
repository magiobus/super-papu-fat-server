"use strict";

var FacebookStrategy = require('passport-facebook').Strategy;
var confs = require('./conf');

var User = require('../data/Users');

function processAuth(done, network, type, company, profile, token, tokenSecret) {

  User.createUser(profile._json).then(function(data){
      console.log('************************', profile._json.id);

    });

  done(null, profile._json);
}

exports.facebookAuth =  new FacebookStrategy(
  confs.facebookStrategyConf,
  (req, token, refreshToken, profile, done) =>{
    processAuth(done, 'facebook', 'user', req.user, profile, token, '');
  });
