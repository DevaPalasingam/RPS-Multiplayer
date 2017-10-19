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

var myFirebaseId;
var myUsername;
  
  //Document ready: waits for the html to load before running other code
  $ (document).ready(function(){

  	
  	//Everyone online: this code will create a tree that keeps track of everyone online
  	var everyoneTreeRef = dataRef.ref("/everyoneTree");
  	var connectionRef = dataRef.ref(".info/connected");

  	connectionRef.on("value", function(snap){
  		if (snap.val()) {
  			var userObj = {
  				username: ""
  			}
  			var con = everyoneTreeRef.push(userObj);
  			console.log(everyoneTreeRef);
  			con.onDisconnect().remove();
  			myFirebaseId = con.path.n[1];
  			console.log(myFirebaseId);
  		}
  	});

  	//this code is to print how many people are in the everyoneTree
  	everyoneTreeRef.on("value", function(snap){
  		$("#watchers").text(snap.numChildren());
  	});
  	//Everyone online:=========================================


    	
  		

  	//Enter key: this code runs when the enter key is pressed
  	$(document).keypress(function(e) {
  		if(e.which == 13) {
  			console.log("you pushed enter")

  			//if a username was typed in, call insertUsername
  			if ($ ("#userNameInput").length && $ ("#userNameInput").val().trim() !== "") {
  				insertUsername();
  				$ ("#userNameDiv").empty();
  			}

  			//if a username has been made and something was typed in the chat, then add the text to the chat screen
  			if (myUsername) {
  				if ($("#chatTextInput").val().trim() !== "") {
  					$ ("#showChatText").append(myUsername + ": " + ($("#chatTextInput").val().trim()) + "<br>");
  					$("#chatTextInput").val("");
  				}
  			}


  		}
  	});
  	//Enter key:=============================================

  });
  //Document ready:==========================================


  
  //inertUsername: this function puts the inputed username into firebase, also it makes the var myUsername, have the new username
  function insertUsername() {
  	var newUserName = $ ("#userNameInput").val().trim();

  	myUsername = newUserName;
  	console.log("username is now: " + myUsername);
  	dataRef.ref("/everyoneTree/" + myFirebaseId).set({username: newUserName});
  }
  //insertUsername:=============================================