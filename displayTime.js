2. setInterval (timeD, 1000);

/*
* Display the current time
*/
function timeD() {
    var date = new Date();
	var currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

	document.getElementById("timeDisplay").innerHTML = currentTime;
}

/* Define objects
//1
function User(name)
{
	//Register propertries and methods
	this.name = name;
	this.displayName = displayName;

	function displayName()
	{
		alert(this.name);
	}
}

var user = new User("Test");
user.displayName();

//2
var User = function() {
	var name;
	return {
		setName: setName,
		displayName: displayName
	};

	function setName(newName) {
		name = newName;
	}

	function displayName()
	{
		alert(name);
	}
}

var user = new User();
user.setName('Test');
user.displayName();*/
