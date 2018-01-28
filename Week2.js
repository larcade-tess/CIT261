// Object Creation Functions
function showRenter(){
	var renter = {};
	renter.fName = 'Nathan';
	renter.lName = 'Ford';
	renter.occupation = 'Mastermind';
	renter.phoneNumber;
	var person = 'First Name: ' + renter.fName + ' Last Name: ' + renter.lName + ' Occupation: ' + renter.occupation + ' Phone Number: ' + renter.phoneNumber; 
	document.write(person);
}



//Inheritance


function cats(name, sound, color){
	this.type = {
		color,
		sound
	};
	this.name = name;
};
cats.prototype.attributes = function() {
	alert('Hi, I\'m ' + this.name + '.');
};

function tabby(name, sound, color, habitat) {
	cats.call(this, name, sound, color);
	this.habitat = 'home';
}
console.log(tabby.habitat);





var animal = function(name, sound) {
	this.name = name;
	this.sound = sound;
}

animal.prototype.anamalName = function() {

}
var cat = new animal();
cat.name = 'Boots';

animal.test = 'bar';

var dog = new animal();
dog.name = 'loki';

console.log(cat.name, dog.test, cat.sound, dog.name, cat.test, animal.test);

