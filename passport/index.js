var serializers = require('./serializers');
var strategies = require('./strategies');
var passport = require('passport');

module.exports  = function(app){

  passport.serializeUser(serializers.serializeUser);
  passport.deserializeUser(serializers.deserializeUser);

  passport
    .use('facebook', strategies.facebookAuth)

    app.use(passport.initialize());
    app.use(passport.session());

  return app;
};
