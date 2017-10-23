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
var uploadeventapp = angular.module("uploadeventApp", ["firebase"]);

employeeapp.controller("EmployeeCtrl", ["$scope",

  function($scope) 
  {
	  var ref = firebase.database().ref();
      $scope.employeeInformation = function() 
	  {
		  var usersRef = ref.child("employees/"+$scope.phonenumber);		
          usersRef.set({
			  name: $scope.fullname,
		      position: $scope.position,
		      email: $scope.email,
		      password: $scope.password
			  });
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
			  name: $scope.fullname,
		      email: $scope.email,
		      password: $scope.password
			  });
	  };
    }
]);

studentapp.controller("StudentCtrl", ["$scope",

  function($scope) 
  {
	  var ref = firebase.database().ref();
      $scope.studentInformation = function() 
	  {
		  var usersRef = ref.child("students/"+$scope.firstname+$scope.parentphonenumber);		  
          usersRef.set({
              name: $scope.fullname,
			  class: $scope.class
			  });
	      var users = ref.child("parents/"+$scope.parentphonenumber+"/children/"+$scope.firstname+$scope.parentphonenumber);
		  users.set({
              name: $scope.fullname,
			  class: $scope.class
			  });
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
	  };
    }
]);