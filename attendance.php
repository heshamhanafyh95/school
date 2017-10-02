<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />
		<link href="style.css" rel="stylesheet" />
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
	</head>
	<body ng-app="app" ng-controller="ctrl" background="assets/img/backgrounds/1.jpg">
	
	<nav class="navbar navbar-inverse">
		  <div class="container-fluid">
		    <div class="navbar-header">
		     <a class="navbar-brand" href="#"> <p style="color:#80ffff;"> School System</p></a>
		    </div>
		    <ul class="nav navbar-nav">
		      <li class="active"><a href="profile.html">Profile</a></li>
		      <li><a href="attendance.html">Take Attendance</a></li>
		      <li><a href="grades.html">Grades</a></li>
		      <li><a href="studentaccess.html">Student Access</a></li>
		     <li><a href="">Logout</a></li>
		    		    
		</ul>
		  </div>
		</nav>	
	
	<div class="container">
	  <div class="panel panel-default">
	    <div class="panel-heading">Take Attendace</div>
	    <div class="panel-body"><h3>Select Level :</h3>

		<select><option ng-repeat="x in names">{{x}}</option>
		</select>
	
	
		<script>
		var app = angular.module('app', []);
		app.controller('ctrl', function($scope) {
		    $scope.names = ["Option 1", "Option 2", "Option 3"];
		});
		</script>
	
		<div class="panel-body"><h3>Select Class :</h3>

		<select><option ng-repeat="x in names">{{x}}</option>
		</select>
	
	
		<script>
		var app = angular.module('app', []);
		app.controller('ctrl', function($scope) {
		    $scope.names = ["Option 1", "Option 2", "Option 3"];
		});
		</script>

		<br><br>
		<div class="panel-body">
		<button type="button" class="btn btn-primary">OK</button>


	


	</div>	

	
		
	</body>
</html>
