var config = {
	apiKey: "AIzaSyCiLPQDBGg9Dia618vSoyMkLgod-P16TeM",
	authDomain: "pua-school.firebaseapp.com",
	databaseURL: "https://pua-school.firebaseio.com",
	projectId: "pua-school",
	storageBucket: "pua-school.appspot.com",
	messagingSenderId: "41063227899"
};
firebase.initializeApp(config);
firebase.auth().signInWithEmailAndPassword("schoolmobpua@gmail.com","pua123456").catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
function login(){
	//var app = angular.module('db', ["firebase"]);
	//app.controller('database', function($firebaseObject) {
		
		var ref= firebase.database().ref.child("users/"+"3");
		ref.set({
			asdf{
				username:"hesham",
				phone:"015"
			}
		});
	//});
}
