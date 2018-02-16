// createElement, appendChild, insertBefore
function buttoncreate (){
	var parent = document.getElementById('parent'); 
	//var display = document.getElementById('display'); 
	var newdiv = document.createElement('div');
	var txt = document.createTextNode('Cookie');
	newdiv.appendChild(txt);
	parent.insertBefore(newdiv, null); 
}

//remove child

function buttonremove() {
	console.log("removed something");
	var removeclick = document.getElementById("removeclick");
	var buttonclick = document.getElementById("buttonclick");
	var parent = document.getElementById("parent");  
	if (parent.childNodes.length > 0){
		parent.removeChild(parent.childNodes[0]); 
	}
	else if (buttonclick) {
		buttonclick.parentNode.removeChild(buttonclick);
	}
	else {
		removeclick.parentNode.removeChild(removeclick);
	}
}