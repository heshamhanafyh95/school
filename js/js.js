var config = {
	apiKey: "AIzaSyCiLPQDBGg9Dia618vSoyMkLgod-P16TeM",
	authDomain: "pua-school.firebaseapp.com",
	databaseURL: "https://pua-school.firebaseio.com",
	projectId: "pua-school",
	storageBucket: "pua-school.appspot.com",
	messagingSenderId: "41063227899"
};
firebase.initializeApp(config);

var app = angular.module("employeeApp", ["firebase"]);

app.factory("EmployeeSignUpForm", ["$firebaseArray",
  function($firebaseArray) {

    var ref = firebase.database().ref().child("employees");

    return $firebaseArray(ref);
  }
]);

var app2 = angular.module("parentApp", ["firebase"]);

app2.factory("ParentSignUpForm", ["$firebaseArray",
  function($firebaseArray) {

    var ref2 = firebase.database().ref().child("parents");

    return $firebaseArray(ref2);
  }
]);



app.controller("EmployeeCtrl", ["$scope", "EmployeeSignUpForm",

  function($scope, EmployeeSignUpForm) {

    $scope.E = EmployeeSignUpForm;

    $scope.employeeInformation = function() {

      $scope.E.$add({
        firstname: $scope.firstname,
        lastname: $scope.lastname,
		position: $scope.position,
		phonenumber: $scope.phonenumber,
		email: $scope.email,
		password: $scope.password
      });
	  
      $scope.firstname = "";
	  $scope.lastname = "";
	  $scope.position = "";
	  $scope.phonenumber = "";
	  $scope.email = "";
	  $scope.password = "";
    };

  }
]);

app2.controller("ParentCtrl", ["$scope", "ParentSignUpForm",

  function($scope, ParentSignUpForm) {

    $scope.P = ParentSignUpForm;

    $scope.parentInformation = function() {

      $scope.P.$add({
        firstname: $scope.firstname,
        lastname: $scope.lastname,
		phonenumber: $scope.phonenumber,
		email: $scope.email,
		password: $scope.password
      });
	  
      $scope.firstname = "";
	  $scope.lastname = "";
	  $scope.phonenumber = "";
	  $scope.email = "";
	  $scope.password = "";
    };

  }
]);




//firebase.auth().signInWithEmailAndPassword("schoolmobpua@gmail.com","pua123456").catch(function(error) {
		  // Handle Errors here.
		  //var errorCode = error.code;
		  //var errorMessage = error.message;
		  // ...
		//});
//function login(){
	//var app = angular.module('db', ["firebase"]);
	//app.controller('database', function($firebaseObject) {
		
		//var ref= firebase.database().ref.child("users/"+"3");
		//ref.set({
			//asdf{
				//username:"hesham",
				//phone:"015"
			//}
		//});
	//});
//}
