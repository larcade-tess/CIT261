function string() {
	var snacks = ["Chips", "Goldfish", "Crackers", "Pretzels", "Apples"];
	var jsonStringArray = JSON.stringify(snacks);
	document.getElementById("stringArr").innerHTML = jsonStringArray;

	var info = {"Phone":"8014323442", "Email":"something@gmail.com", "Date":new Date()};
	var jsonStringObj = JSON.stringify(info);
	document.getElementById("stringObj").innerHTML = jsonStringObj;
}

function parse() {
	var snacks = ["Chips", "Goldfish", "Crackers", "Pretzels", "Apples"];
	var jsonStringArray = JSON.stringify(snacks);
	var jsonParseArray = JSON.parse(jsonStringArray);
	document.getElementById("parseArr").innerHTML = jsonParseArray;

	var info = {"Phone":"8014323442", "Email":"something@gmail.com", "Date":new Date()};
	var jsonStringObj = JSON.stringify(info);
	var jsonParseObj = JSON.parse(jsonStringObj);
	document.getElementById("parseObj").innerHTML = jsonParseObj.Phone + ", " + jsonParseObj.Email + ", " + jsonParseObj.Date;
}

function pokemon() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				var jobj = JSON.parse(this.responseText);
				document.getElementById("pokemon").innerHTML = "Pokemon ID: " + jobj.id + ", Pokemon Name: " + jobj.name + ", Base Experience: " + jobj.base_experience;
			} else {
				console.log('not cool');
			}
		}
	};
	xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/1/", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();

}

function math() {
	var mathChoice = document.querySelector('select');
	var problemDisplay = document.querySelector('pre');

	function onchange() {
		var math = mathChoice.value;
		updateDisplay(math);
	};
	onchange();

	function updateDisplay(math) {
		math = math.replace(" ", "");
		math = math.toLowerCase();
		var url = math + '.txt';
		fetch(url).then(function(response) {
			response.text().then(function(text) {
				problemDisplay.textContent = text;
			});
		});
	};
}
