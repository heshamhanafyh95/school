var config = {
	apiKey: "AIzaSyCiLPQDBGg9Dia618vSoyMkLgod-P16TeM",
	authDomain: "pua-school.firebaseapp.com",
	databaseURL: "https://pua-school.firebaseio.com",
	projectId: "pua-school",
	storageBucket: "pua-school.appspot.com",
	messagingSenderId: "41063227899"
};
firebase.initializeApp(config);

var employeeapp = angular.module("employeeApp", ["firebase"]);

employeeapp.factory("EmployeeSignUpForm", ["$firebaseArray",
  function($firebaseArray) {

    var ref = firebase.database().ref().child("employees");

    return $firebaseArray(ref);
  }
]);

var parentapp = angular.module("parentApp", ["firebase"]);

parentapp.factory("ParentSignUpForm", ["$firebaseArray",
  function($firebaseArray) {

    var ref2 = firebase.database().ref().child("parents");

    return $firebaseArray(ref2);
  }
]);

var attendanceapp = angular.module("attendanceApp", ["firebase"]);

attendanceapp.factory("AttendanceSignUpForm", ["$firebaseArray",
  function($firebaseArray) {

    var ref3 = firebase.database().ref().child("attendance");

    return $firebaseArray(ref3);
  }
]);

var gradesapp = angular.module("gradesApp", ["firebase"]);

gradesapp.factory("GradesSignUpForm", ["$firebaseArray",
  function($firebaseArray) {

    var ref4 = firebase.database().ref().child("grades");

    return $firebaseArray(ref4);
  }
]);



employeeapp.controller("EmployeeCtrl", ["$scope", "EmployeeSignUpForm",

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

parentapp.controller("ParentCtrl", ["$scope", "ParentSignUpForm",

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

attendanceapp.controller("AttendanceCtrl", ["$scope", "AttendanceSignUpForm",

  function($scope, AttendanceSignUpForm) {

    $scope.A = AttendanceSignUpForm;

    $scope.attendance = function() {

      $scope.A.$add({
        level: $scope.level,
        classroom: $scope.classroom
      });
	  
      $scope.level = "";
	  $scope.classroom = "";
    };

  }
]);

gradesapp.controller("GradesCtrl", ["$scope", "GradesSignUpForm",

  function($scope, GradesSignUpForm) {

    $scope.G = GradesSignUpForm;

    $scope.grades = function() {

      $scope.G.$add({
        level: $scope.level,
        classroom: $scope.classroom,
		grade: $scope.grade
      });
	  
      $scope.level = "";
	  $scope.classroom = "";
	  $scope.grade = "";
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
