function stored(){
	var div = document.getElementById('stored');
	localStorage.setItem("username", "Tess");
	var display = "Username = " + localStorage.getItem("username");
	div.innerHTML = display;
}

function array(){
	var div = document.getElementById('array');
	var list =["Milk", "Eggs", "Salad", "Vinegar", "Chocolate", "Bread"]; 
	var stringlist = JSON.stringify(list);
	localStorage.setItem("List", stringlist);
	var display = "Shopping List = " + JSON.parse(localStorage.getItem("List"));
	div.innerHTML = display;

}

function associativearr(){
	var div = document.getElementById('associativearr');
	var listassoc =	[];
	listassoc[0] = 'Water';
	listassoc[3] = ' Turtle';
	listassoc[2] = ' Sand';
	listassoc[4] = ' Shell';
	listassoc[5] = ' Waves';
	var stringlist = JSON.stringify(listassoc);
	localStorage.setItem("List", stringlist);
	var display = "Tropical things = " + JSON.parse(localStorage.getItem("List"));
	div.innerHTML = display;
}

function obj(){
	var object1 = {"Gender":"Male", "Name":"Eliot", "Occupation":"Hitter"};
	var object2 = {"Gender":"Female", "Name":"Parker", "Occupation":"Theif"};
	var div = document.getElementById('obj');
	localStorage.setItem("muscle", JSON.stringify(object1));
	localStorage.setItem("sneeky", JSON.stringify(object2));
	var display1 = "Muscle: " + localStorage.getItem("muscle");
	var display2 = "Sneek: " + localStorage.getItem("sneeky");
	div.innerHTML = display1 + display2;
}