var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyDI-e-dZTQdB3mX5dHJ2Nw9Qs0qbogn4JI",
  authDomain: "aldeadigitalsun.firebaseapp.com",
  databaseURL: "https://aldeadigitalsun.firebaseio.com",
  storageBucket: "aldeadigitalsun.appspot.com",
};

firebase.initializeApp(config);

module.exports = firebase;
