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
var parentapp = angular.module("parentApp", ["firebase"]);
var studentapp = angular.module("studentApp", ["firebase"]);
var attendanceapp = angular.module("attendanceApp", ["firebase"]);
var gradesapp = angular.module("gradesApp", ["firebase"]);

employeeapp.controller("EmployeeCtrl", ["$scope",

  function($scope) 
  {
	  var ref = firebase.database().ref();
      $scope.employeeInformation = function() 
	  {
		  var usersRef = ref.child("employees/"+$scope.phonenumber);		
          usersRef.set({
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

parentapp.controller("ParentCtrl", ["$scope",

  function($scope) 
  {
	  var ref = firebase.database().ref();
      $scope.parentInformation = function() 
	  {
		  var usersRef = ref.child("parents/"+$scope.phonenumber);		
          usersRef.set({
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

studentapp.controller("StudentCtrl", ["$scope",

  function($scope) 
  {
	  var ref = firebase.database().ref();
      $scope.studentInformation = function() 
	  {
		  var usersRef = ref.child("students/"+$scope.phonenumber);		
          usersRef.set({
			  firstname: $scope.firstname,
              lastname: $scope.lastname,
			  level: $scope.level,
			  classroom: $scope.classroom,
		      phonenumber: $scope.phonenumber,
		      email: $scope.email,
		      password: $scope.password
			  });
			  $scope.firstname = "";
	          $scope.lastname = "";
			  $scope.level = "";
			  $scope.classroom = "";
	          $scope.phonenumber = "";
	          $scope.email = "";
	          $scope.password = "";
	  };
    }
]);

attendanceapp.controller("AttendanceCtrl", ["$scope",

  function($scope) 
  {
	  var ref = firebase.database().ref();
      $scope.attendance = function() 
	  {
		  var usersRef = ref.child("attendance/"+$scope.level);		
          usersRef.set({
			  level: $scope.level,
              classroom: $scope.classroom
			  });
			  $scope.level = "";
	          $scope.classroom = "";
	  };
    }
]);

gradesapp.controller("GradesCtrl", ["$scope",

  function($scope) 
  {
	  var ref = firebase.database().ref();
      $scope.grades = function() 
	  {
		  var usersRef = ref.child("grades/"+$scope.level);		
          usersRef.set({
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