// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4AVnj91UhmFvRCS41hcSKWDuzbETa1JY",
    authDomain: "rps-multiplayer-59265.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-59265.firebaseio.com",
    projectId: "rps-multiplayer-59265",
    storageBucket: "",
    messagingSenderId: "584404982981"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();

  function playerObject(username, choice, loss, win) {
  	this.username = username;
  	this.choice = choice;
  	this.loss = loss;
  	this.win = win;
  }

  var playerNumber = 0;