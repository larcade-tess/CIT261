function searchFood(){
	var cuisine = document.getElementById('cuisine').value; 
	var course = document.getElementById('course').value; 
	var parent = document.getElementById('displayO');
	parent.classList.add('hide');

	findRecipes(cuisine, course);
}
function findRecipes(cuisine, course){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				var jobj = JSON.parse(this.responseText);
				console.log(this.responseText);
				var parent = document.getElementById('displayO');
				
				console.log('here', jobj);

				parent.innerHTML = ""; // Clear out previous recipes

				for(var i=0; i < jobj.matches.length; i++){
					var element = document.createElement('div');
					var image = document.createElement('img');
					var link = document.createElement('a');
					var recipe = jobj.matches[i].recipeName;
					var text = document.createTextNode(recipe);
					yummly = "https://www.yummly.com/#recipe/" + jobj.matches[i].id;
					link.setAttribute("href", yummly);
					link.append(recipe);
					image.setAttribute("src", jobj.matches[i].smallImageUrls);
					element.append(image);
					element.append(link);
					parent.append(element);
				}
				setTimeout(function() {
				console.log('here', 5555);
					parent.classList.remove('hide');
				}, 50);
				
			}
			else {
				console.log('not cool');
			}
		}
	}
	var requestURL = "http://api.yummly.com/v1/api/recipes?_app_id=862e835f&_app_key=63e2f451c32b28e2c6857b89f850ed63&q=" + course + "&allowedCuisine[]=cuisine^cuisine-" + cuisine;
	xhttp.open("GET", requestURL, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}
function hamburgermenu() {
    "use strict";
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}


