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
  
  //Document ready: waits for the html to load before running other code
  $ (document).ready(function(){

  	//Everyone online: this code will create a tree that keeps track of everyone online
  	var everyoneTreeRef = dataRef.ref("/everyoneTree");
  	var connectionRef = dataRef.ref(".info/connected");

  	connectionRef.on("value", function(snap){
  		if (snap.val()) {
  			var userObj = {
  				username: "derp"
  			}
  			var con = everyoneTreeRef.push(userObj);
  			console.log(everyoneTreeRef);
  			con.onDisconnect().remove();
  			myFirebaseId = con.path.n[1];
  			console.log(myFirebaseId);
  		}
  	});
  	//Everyone online:=========================================
  	everyoneTreeRef.on("value",function(dataFromInternet){
  		var baseObject = dataFromInternet.val();
  		console.log("username = " + baseObject[myFirebaseId].username);
  	});


  	function ok(){
  		dataRef.ref("/everyoneTree/" + myFirebaseId).set({username:"something else"})
  	};

  	setTimeout(ok,5000);
  		

  	//Enter key: this code runs when the enter key is pressed
  	$(document).keypress(function(e) {
  		if(e.which == 13) {
  			console.log("you pushed enter")
  		}
  	});
  	//Enter key:=============================================

  });
  //Document ready:==========================================