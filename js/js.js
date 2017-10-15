var config = {
	apiKey: "AIzaSyCiLPQDBGg9Dia618vSoyMkLgod-P16TeM",
	authDomain: "pua-school.firebaseapp.com",
	databaseURL: "https://pua-school.firebaseio.com",
	projectId: "pua-school",
	storageBucket: "pua-school.appspot.com",
	messagingSenderId: "41063227899"
};
firebase.initializeApp(config);

<<<<<<< HEAD
var employeeapp = angular.module("employeeApp", ["firebase"]);

employeeapp.factory("EmployeeSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var employeeapp = angular.module("employeeApp", ["firebase"]);

employeeapp.factory("EmployeeSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var employeeapp = angular.module("employeeApp", ["firebase"]);

employeeapp.factory("EmployeeSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var employeeapp = angular.module("employeeApp", ["firebase"]);

employeeapp.factory("EmployeeSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var employeeapp = angular.module("employeeApp", ["firebase"]);

employeeapp.factory("EmployeeSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var employeeapp = angular.module("employeeApp", ["firebase"]);

employeeapp.factory("EmployeeSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var employeeapp = angular.module("employeeApp", ["firebase"]);

employeeapp.factory("EmployeeSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var employeeapp = angular.module("employeeApp", ["firebase"]);

employeeapp.factory("EmployeeSignUpForm", ["$firebaseArray",
=======
var app = angular.module("employeeApp", ["firebase"]);

app.factory("EmployeeSignUpForm", ["$firebaseArray",
>>>>>>> 41aeb0b350e9d8f5b4b6600715557446d5e76243
>>>>>>> 83fefb9c77975624991d7e961c0e77f3cd679120
>>>>>>> f44a950a8c4e41e4dcdd9abe8fe143f0962d8929
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e
  function($firebaseArray) {

    var ref = firebase.database().ref().child("employees");

    return $firebaseArray(ref);
  }
]);

<<<<<<< HEAD
var parentapp = angular.module("parentApp", ["firebase"]);

parentapp.factory("ParentSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var parentapp = angular.module("parentApp", ["firebase"]);

parentapp.factory("ParentSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var parentapp = angular.module("parentApp", ["firebase"]);

parentapp.factory("ParentSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var parentapp = angular.module("parentApp", ["firebase"]);

parentapp.factory("ParentSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var parentapp = angular.module("parentApp", ["firebase"]);

parentapp.factory("ParentSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var parentapp = angular.module("parentApp", ["firebase"]);

parentapp.factory("ParentSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var parentapp = angular.module("parentApp", ["firebase"]);

parentapp.factory("ParentSignUpForm", ["$firebaseArray",
=======
<<<<<<< HEAD
var parentapp = angular.module("parentApp", ["firebase"]);

parentapp.factory("ParentSignUpForm", ["$firebaseArray",
=======
var app2 = angular.module("parentApp", ["firebase"]);

app2.factory("ParentSignUpForm", ["$firebaseArray",
>>>>>>> 41aeb0b350e9d8f5b4b6600715557446d5e76243
>>>>>>> 83fefb9c77975624991d7e961c0e77f3cd679120
>>>>>>> f44a950a8c4e41e4dcdd9abe8fe143f0962d8929
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e
  function($firebaseArray) {

    var ref2 = firebase.database().ref().child("parents");

    return $firebaseArray(ref2);
  }
]);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 83fefb9c77975624991d7e961c0e77f3cd679120
>>>>>>> f44a950a8c4e41e4dcdd9abe8fe143f0962d8929
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e
var attendanceapp = angular.module("attendanceApp", ["firebase"]);

attendanceapp.factory("AttendanceSignUpForm", ["$firebaseArray",
  function($firebaseArray) {

<<<<<<< HEAD
    var ref3 = firebase.database().ref().child("student/2/attendance");
=======
<<<<<<< HEAD
    var ref3 = firebase.database().ref().child("student/2/attendance");
=======
<<<<<<< HEAD
    var ref3 = firebase.database().ref().child("student/2/attendance");
=======
<<<<<<< HEAD
    var ref3 = firebase.database().ref().child("student/2/attendance");
=======
<<<<<<< HEAD
    var ref3 = firebase.database().ref().child("student/2/attendance");
=======
<<<<<<< HEAD
    var ref3 = firebase.database().ref().child("student/2/attendance");
=======
<<<<<<< HEAD
    var ref3 = firebase.database().ref().child("student/2/attendance");
=======
    var ref3 = firebase.database().ref().child("attendance");
>>>>>>> 83fefb9c77975624991d7e961c0e77f3cd679120
>>>>>>> f44a950a8c4e41e4dcdd9abe8fe143f0962d8929
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e

    return $firebaseArray(ref3);
  }
]);

var gradesapp = angular.module("gradesApp", ["firebase"]);

gradesapp.factory("GradesSignUpForm", ["$firebaseArray",
  function($firebaseArray) {

<<<<<<< HEAD
	var ref4 = firebase.database().ref().child("student/2/grades");
=======
<<<<<<< HEAD
	var ref4 = firebase.database().ref().child("student/2/grades");
=======
<<<<<<< HEAD
	var ref4 = firebase.database().ref().child("student/2/grades");
=======
<<<<<<< HEAD
	var ref4 = firebase.database().ref().child("student/2/grades");
=======
<<<<<<< HEAD
	var ref4 = firebase.database().ref().child("student/2/grades");
=======
<<<<<<< HEAD
	var ref4 = firebase.database().ref().child("student/2/grades");
=======
<<<<<<< HEAD
	var ref4 = firebase.database().ref().child("student/2/grades");
=======
    var ref4 = firebase.database().ref().child("grades");
>>>>>>> 83fefb9c77975624991d7e961c0e77f3cd679120
>>>>>>> f44a950a8c4e41e4dcdd9abe8fe143f0962d8929
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e

    return $firebaseArray(ref4);
  }
]);



employeeapp.controller("EmployeeCtrl", ["$scope", "EmployeeSignUpForm",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======


app.controller("EmployeeCtrl", ["$scope", "EmployeeSignUpForm",
>>>>>>> 41aeb0b350e9d8f5b4b6600715557446d5e76243
>>>>>>> 83fefb9c77975624991d7e961c0e77f3cd679120
>>>>>>> f44a950a8c4e41e4dcdd9abe8fe143f0962d8929
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e

  function($scope, EmployeeSignUpForm) {

    $scope.E = EmployeeSignUpForm;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e
    
    $scope.employeeInformation = function() {
		
      $scope.E.$add({
		firstname: $scope.firstname,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

    $scope.employeeInformation = function() {
<<<<<<< HEAD
	
      $scope.E.$add({
		firstname: $scope.firstname,
=======
<<<<<<< HEAD
	
      $scope.E.$add({
		firstname: $scope.firstname,
=======
<<<<<<< HEAD
	
      $scope.E.$add({
		firstname: $scope.firstname,
=======

      $scope.E.$add({
        firstname: $scope.firstname,
>>>>>>> 352340096d5c90a7d9f3c194e3e7ac3116f5a608
>>>>>>> 41aeb0b350e9d8f5b4b6600715557446d5e76243
>>>>>>> 83fefb9c77975624991d7e961c0e77f3cd679120
>>>>>>> f44a950a8c4e41e4dcdd9abe8fe143f0962d8929
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e
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

<<<<<<< HEAD
parentapp.controller("ParentCtrl", ["$scope", "ParentSignUpForm",
=======
<<<<<<< HEAD
parentapp.controller("ParentCtrl", ["$scope", "ParentSignUpForm",
=======
<<<<<<< HEAD
parentapp.controller("ParentCtrl", ["$scope", "ParentSignUpForm",
=======
<<<<<<< HEAD
parentapp.controller("ParentCtrl", ["$scope", "ParentSignUpForm",
=======
<<<<<<< HEAD
parentapp.controller("ParentCtrl", ["$scope", "ParentSignUpForm",
=======
<<<<<<< HEAD
parentapp.controller("ParentCtrl", ["$scope", "ParentSignUpForm",
=======
<<<<<<< HEAD
parentapp.controller("ParentCtrl", ["$scope", "ParentSignUpForm",
=======
<<<<<<< HEAD
parentapp.controller("ParentCtrl", ["$scope", "ParentSignUpForm",
=======
app2.controller("ParentCtrl", ["$scope", "ParentSignUpForm",
>>>>>>> 41aeb0b350e9d8f5b4b6600715557446d5e76243
>>>>>>> 83fefb9c77975624991d7e961c0e77f3cd679120
>>>>>>> f44a950a8c4e41e4dcdd9abe8fe143f0962d8929
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 83fefb9c77975624991d7e961c0e77f3cd679120
>>>>>>> f44a950a8c4e41e4dcdd9abe8fe143f0962d8929
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 41aeb0b350e9d8f5b4b6600715557446d5e76243
>>>>>>> 83fefb9c77975624991d7e961c0e77f3cd679120
>>>>>>> f44a950a8c4e41e4dcdd9abe8fe143f0962d8929
>>>>>>> bd7f713f22724984dc8b106badc88ffed589a199
>>>>>>> 42e48106bc1bddabb45aaece3341d98c4f9924bf
>>>>>>> b6ae6829e1a149c08621f1518ebb26fffbdbefd7
>>>>>>> 2236f5e08c128b033043b6345099d51d2cd5bc2a
>>>>>>> 506772d3f82aef28de4a09a31e498071c800a18e



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
