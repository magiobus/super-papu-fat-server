"use strict";

var credentials = require('../conf/authKeys');

exports.facebookStrategyConf = {
  clientID: credentials.facebookPublic,
  clientSecret: credentials.facebookSecret,
  callbackURL: credentials.facebookCallbackUrl,
  passReqToCallback: true,
  profileFields: ['id', 'displayName', 'emails', 'photos', 'birthday',
    'friends',
    'accounts{name, picture, access_token}'
  ]
};

exports.facebookScope = {
  scope: [
    'email', 'user_posts', 'user_birthday', 'user_friends',
    'manage_pages', 'publish_pages', 'read_insights'
  ]
};
