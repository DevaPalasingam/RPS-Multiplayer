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

  var peopleOnline;
  var peoplePlaying;

  //Document ready: waits for the html to load before running other code
  $ (document).ready(function(){

  	//People online: this code will count how many people are online and then display it
  	var connectionsRef = dataRef.ref("/connections");
  	var connectedRef = dataRef.ref(".info/connected");
  	connectedRef.on("value", function(snap) {
  		 if (snap.val()) {
  		 	var con = connectionsRef.push(true);
  		 	con.onDisconnect().remove();
  		 }
  	});

  	connectionsRef.on("value", function(snap) {
  		$("#watchers").text(snap.numChildren());
  		peopleOnline = snap.numChildren();
  		console.log("people online: " + peopleOnline);
  	});
  	//People online:=========================================


  	//Enter key: this code runs when the enter key is pressed
  	$(document).keypress(function(e) {
  		if(e.which == 13) {
  			console.log("you pushed enter")

  		}
  	});
  	//Enter key:=============================================

  });
  //Document ready:==========================================