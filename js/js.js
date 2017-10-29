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

studentapp.controller("StudentCtrl", ["$scope","$firebaseArray",

  function($scope,$firebaseArray) 
  {
	  var ref = firebase.database().ref();
	  var ref2 = ref.child("bus/");
	  $scope.supervisors = $firebaseArray(ref2);
      $scope.studentInformation = function() 
	  {
		  var usersRef = ref.child("students/"+$scope.firstname+$scope.parentphonenumber);		  
          usersRef.set({
              name: $scope.fullname,
			  class: $scope.class,
			  bussupervisor: $scope.bussuper
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
		  var usersRef = ref.child("students/"+$scope.studentid+"/attendance/");		
          usersRef.set({
              class: $scope.class
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
              class: $scope.class,
			  subject: $scope.subject,
		      grade: $scope.grade
			  });
	  };
    }
]);