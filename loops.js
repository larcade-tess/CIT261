//Loops Conditional Statements, Functions, Variables, Parameters

function forLoop(){
	for (i = 1; i < 4; i++) {
		document.getElementById('forLoop').innerHTML += "Hello World, ";
	}
};

function whileLoop(i){
	i = 3;
	while (i < 4) {
		document.getElementById('whileLoop').innerHTML +="Hello Planet, ";
		i++;
	}
};

function doWhileLoop(i) {
	i = 1;
	do {
		document.getElementById('doWhileLoop').innerHTML +="Hello Solar System, ";
		i++;
	}
	while (i <3);
};

function ifElseLoop(i){
	i = 2;
	if (i > 5) {
		document.getElementById('ifElseLoop').innerHTML +="Hello Star, ";
	} 
	else {
		document.getElementById('ifElseLoop').innerHTML +="Hello Sun, ";
	};
};

function ifElseIfLoop(i){
	i = 5;
	if (i < 3) {
		document.getElementById('ifElseIfLoop').innerHTML +='Blue, ';
	} 
	else if (i = 3) {
		document.getElementById('ifElseIfLoop').innerHTML +='Black, ';
	}
	else {
		document.getElementById('ifElseIfLoop').innerHTML +='Green, ';
	};
};

var color1;
var color2;

function switchStatement(color1, color2){

	color1 = 'Red';
	color2 = 'Yellow';
	switch(color2){
		case 'Yellow':
		document.getElementById('switchStatement').innerHTML +=('The color is ' + color1); 
		break;
		case 'Red':
		document.getElementById('switchStatement').innerHTML +=('The color is ' + color2); 
		break;
		default:
		document.getElementById('switchStatement').innerHTML +='There is no color.';
	}
};

//Arrays, Associative Arrays

function firstArray(i){
	var new_array = ['Leaf', 'Tree', 'Flower', 'Seed', 'Dirt', 'Water'];
	for (i = 0; i < new_array.length; i++)

		document.getElementById('firstArray').innerHTML +=('Array item ' + i + ' = ' + new_array[i] + ', ');
};

function assocArray(i){

	var second_array = [];
	second_array[0] = 'Fish';
	second_array[1] = 'Shell';
	second_array[2] = 'Sand';
	second_array[4] = 'Water';
	for (i = 0; i < second_array.length; i++)

		document.getElementById('assocArray').innerHTML +=('Array item ' + i + ' = ' + second_array[i] + ', ');
};
