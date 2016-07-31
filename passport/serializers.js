var Users = require('../data/Users');

exports.serializeUser = function(id, done){


  console.log(1111111111111111111111111111111)

  done(null, id);
};

exports.deserializeUser = function(id, done) {
  console.log(11111111111111111111111111111111111111111)


  Users.getUserById(id).then(function (company) {
    console.log(company, 11111111111111111111111111111111111111111)
    done(null, company);
  });
};
