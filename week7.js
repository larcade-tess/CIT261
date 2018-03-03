function buttonchange (){
	document.getElementById('buttonclick').text = "Do you always do as you're told?";
}
var aColor = document.getElementById('box');
aColor.addEventListener("mouseover", mouseOn);
aColor.addEventListener("mouseout", mouseOff);

function mouseOn(){
	aColor.style.backgroundColor = 'silver';
}
function mouseOff(){
	aColor.style.backgroundColor = 'lightgreen';
}

var key = document.getElementById('input');
key.addEventListener("keydown", keypress);
var box = document.getElementById('boxC');

function keypress (){
	box.style.backgroundColor = 'lightgreen';
}


var touchD = document.getElementById('boxD');
touchD.addEventListener("touchstart", touchOn);

function touchOn(){
	touchD.animate([
		{ transform: 'translate(500px)' }, 
		{ transform: 'translate(50px)' }
		], {
			duration: 10000,
		});
}

var touchM = document.getElementById('boxG');
touchM.addEventListener("touchmove", touchMove);

function touchMove(){
	touchM.animate([
		{ transform: 'translate(50px)' }, 
		{ transform: 'translate(500px)' }
		], {
			duration: 10000,
		});
}


function loaded(){
	var boxe = document.getElementById('boxE');
	boxe.animate([
		{ transform: 'rotate(0deg)' }, 
		{ transform: 'rotate(360deg)' }
		], {
			duration: 10000,
			iterations: Infinity
		});
}


function changed(){
	var boxf = document.getElementById('boxF');
	var value = document.getElementById('drop').value;
	if (value == "Hufflepuff"){
		boxf.style.backgroundColor = '#ecb939';
	}
	else if (value == "Slytherin"){
		boxf.style.backgroundColor = '#1a472a';

	}
	else if (value == "Ravenclaw"){
		boxf.style.backgroundColor = '#0e1a40';
	}
	else {
		boxf.style.backgroundColor = '#740001';
	}
}
function reset (){
	location.reload();
}
