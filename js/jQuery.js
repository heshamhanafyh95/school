var config = {
	apiKey: "AIzaSyCiLPQDBGg9Dia618vSoyMkLgod-P16TeM",
	authDomain: "pua-school.firebaseapp.com",
	databaseURL: "https://pua-school.firebaseio.com",
	projectId: "pua-school",
	storageBucket: "pua-school.appspot.com",
	messagingSenderId: "41063227899"
};
firebase.initializeApp(config);

var firestore = firebase.firestore();

var employeePhoto;
$("#employeephoto").on("change", function(event)
{
	employeePhoto = event.target.files[0];
});
$("#Empform").submit(function() 
{
	   var EmpName = $("#Empname").val();
	   var EmpPos = $("#Emppos").val();
	   var EmpPn = $("#Emppn").val();
	   var EmpEmail = $("#Empemail").val();
	   var EmpPass = $("#Emppass").val();
	   var storageRef = firebase.storage().ref("employees/" + EmpPn);
	   var uploadTask = storageRef.put(employeePhoto);
       firestore.collection("employees").doc(EmpPn).set({
       name: EmpName,
	   position: EmpPos,
	   email: EmpEmail,
	   password: EmpPass
       });
	   });
	   
var studentPhoto;
$("#studentphoto").on("change", function(event)
{
	studentPhoto = event.target.files[0];
});
$("#Stuform").submit(function() 
{
	   var StufName = $("#Stufname").val();
	   var StuName = $("#Stuname").val();
	   var StuParPn = $("#Stuparpn").val();
	   var StuClass = $("#Stuclass").val();
	   var StuBusSup = $("#Stubussup").val();
	   var storageRef = firebase.storage().ref("students/" + StufName + StuParPn);
	   var uploadTask = storageRef.put(studentPhoto);
       firestore.collection("students").doc(StufName+StuParPn).set({
	   name: StuName,
	   class: StuClass,
	   bussupervisor: StuBusSup
       });
	   firestore.collection("parents").doc(StuParPn).collection("children").doc(StufName+StuParPn).set({
	   name: StuName,
	   class: StuClass
       });
	   });
	   
$("#Parform").submit(function() 
{
	   var ParName = $("#Parname").val();
	   var ParPn = $("#Parpn").val();
	   var ParEmail = $("#Paremail").val();
	   var ParPass = $("#Parpass").val();
       firestore.collection("parents").doc(ParPn).set({
       name: ParName,
	   email: ParEmail,
	   password: ParPass
       });
	   });

var selectedTimetable;
$("#timetable").on("change", function(event)
{
	selectedTimetable = event.target.files[0];
});
$("#Uploadtimetableform").submit(function()
{
	var ClassRoom = $("#Classroom").val();
	var storageRef = firebase.storage().ref("timetables/" + ClassRoom);
	var uploadTask = storageRef.put(selectedTimetable);
});

var selectedEvent;
$("#event").on("change", function(event)
{
	selectedEvent = event.target.files[0];
});
$("#Uploadeventform").submit(function()
{
	var EventTitle = $("#Eventtitle").val();
	var storageRef = firebase.storage().ref("events/" + EventTitle);
	var uploadTask = storageRef.put(selectedEvent);
});