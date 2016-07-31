var firebase = require('../conf/firebase');

exports.createUser = function(userData){
  return firebase.database().ref('Users/' + userData.id).set(userData);
}

exports.getUserById = function(id){
  return new Promise(function (resolve, reject) {
    firebase.database().ref('Users/' + id).on('value', function(snapshot) {
      console.log(snapshot.val(), '***** ********************          ******')
      resolve(snapshot.val());
    });
  });
}
