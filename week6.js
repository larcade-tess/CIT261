function changeColor(){
	document.getElementById('color').style.color = '#f08080';

}
function makeBold(){
	var bold = document.getElementById('bold');
	bold.setAttribute('style', 'font-weight:700;');

}
function background(){
	var background = document.getElementById('background');
	background.setAttribute('style', 'background-color:blue;');

}
function reset(){
	var background = document.getElementById('background');
	var bold = document.getElementById('bold');
	document.getElementById('color').style.color = 'black';
	background.setAttribute('style', 'background-color:white;');
	bold.setAttribute('style', 'font-weight:500;')
}