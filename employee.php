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
	

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
	<script src="https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js"></script>
	<script src="https://www.gstatic.com/firebasejs/4.4.0/firebase.js"></script>
	<script src="js/js.js"></script>
	
</head>
<body background="assets/img/backgrounds/1.jpg">

	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#"> <p style="color:#80ffff;"> School System</p></a>
			</div>
			<ul class="nav navbar-nav">
				<li><a href="employee.html">Employee</a></li>
				<li><a href="parent.html">Parent</a></li>
				<li><a href="student.html">Student</a></li>
				<li><a href="sendnotification.html">Send Notification</a></li>
				<li><a href="uploadtimetable.html">Upload Timetable</a></li>			
				<li><a href="uploadevent.html">Upload Event</a></li>

			</ul>
		</div>
	</nav>

	<div class="container">
		<div class="panel panel-default">
			<div class="panel-heading"><h3>Employee</h3></div>

			<div class="panel-body">


				<div class="py-5">
					<div class="container">
						<div class="row">
							<div class="col-md-11">
								<form name="" action="" method="post">
									<div class="form-group">
										<B><label>First name:</label></B> <input type="text" class="form-control" placeholder="Abdallah">
									</div>
									<div class="form-group" ng-app="db" ng-controller="database">
										<B><label>Last name:</label></B> <input type="text" class="form-control" placeholder="{{name.users}}">
									</div>
									<div class="form-group">
										<B><label>Position:</label></B><br>
										<select ng-model="Position">
											<option value="admin">Admin</option>
											<option value="teacher">Teacher</option>
											<option value="bussupervisor">Bus Supervisor</option>
											<option value="driver">Driver</option>
										</select>
									</div>
									<div class="form-group">
										<B><label>Phone number:</label></B> <input type="text" class="form-control" placeholder="+20xxxxxxxxxx">
									</div>
									<div class="form-group">
										<B><label>Email ID:</label></B> <input type="text" class="form-control" placeholder="Employee@example.com">
									</div>
									<div class="form-group">
										<B><label>Password:</label></B> <input type="password" class="form-control" placeholder="********">
									</div>
									<button type="submit" class="btn btn-primary"><B>Submit</B></button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>


<!--<script>
var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.firstname = "Abdallah";
	$scope.lastname = "Elgamal";
	$scope.Phonenumber = "+20xxxxxxxxxx";
	$scope.EmailID = "Employee@example.com";
	$scope.Password = "********";
});
</script>-->