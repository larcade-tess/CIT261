function changeColor(){
	var cColor = document.getElementsByClassName('color');
	for (var i = 0; i < cColor.length; i++) {
		cColor[i].style.color = '#f08080';
	}

}
function makeBold(){
	var bold = document.getElementsByClassName('bold');
	for (var i = 0; i < bold.length; i++) {
		bold[i].setAttribute('style', 'font-weight:700;');
	}

}
function background(){
	var background = document.getElementsByClassName('background');
	for (var i = 0; i < background.length; i++) {
		background[i].setAttribute('style', 'background-color:blue;');
	}

}

function reset(){
	var background = document.getElementsByClassName('background');
	for (var i = 0; i < background.length; i++) {
		background[i].setAttribute('style', 'background-color:white;');
	}
	var bold = document.getElementsByClassName('bold');
	for (var i = 0; i < bold.length; i++) {
		bold[i].setAttribute('style', 'font-weight:500;');
	}
	var cColor = document.getElementsByClassName('color');
	for (var i = 0; i < cColor.length; i++) {
		cColor[i].style.color =  'black';
	}
}


var aColor = document.getElementById('box');
aColor.addEventListener("mouseover", hoverOn);
aColor.addEventListener("mouseout", hoverOff);

function hoverOn(){
	aColor.style.backgroundColor = 'silver';
}
function hoverOff(){
	aColor.style.backgroundColor = 'lightgreen';
}



var box = document.getElementById('boxA');
var anni = box.animate([
	{ transform: 'translateY(50px)' }, 
	{ transform: 'translateY(-500px)' }
	], {
		duration: 10000,
		iterations: 4
	});
