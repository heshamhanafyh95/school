  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCiLPQDBGg9Dia618vSoyMkLgod-P16TeM",
    authDomain: "pua-school.firebaseapp.com",
    databaseURL: "https://pua-school.firebaseio.com",
    projectId: "pua-school",
    storageBucket: "pua-school.appspot.com",
    messagingSenderId: "41063227899"
  };
  firebase.initializeApp(config);


// Initialize Cloud Firestore through Firebase
var firestore = firebase.firestore();

const docRef = firestore.doc("Bus/Bus1");
const inputTextField = document.querySelector("#bus");
const submit = document.querySelector("#submitButton");

submitButton.addEventListener("click", function(){
	const textToSave = inputTextField.value;
	docRef.set({
	bus1: textToSave	
	});
});


