// Object Creation Function
function showRenter()
{
	var renter = {};
	renter.fName = 'Nathan';
	renter.lName = 'Ford';
	renter.occupation = 'Mastermind';
	renter.phoneNumber;

	var person = 'First Name: ' + renter.fName + ' Last Name: ' + renter.lName + ' Occupation: ' + renter.occupation + ' Phone Number: ' + renter.phoneNumber; 
	document.getElementById('person').innerHTML +=person;
};



//Inheritance, methods, properties


function cats(){
	function cat(type, sound, pounce, name){
		this.type = type;
		this.sound = sound;
		this.pounce = pounce;
		this.name = name;
	};
	cat();
	//Instantiation of cat
	var tabby = new cat ('house', 'meow', 'jump', 'Boots');
	var lion = new cat ('wild', 'rawr', 'stalk', 'Nala');
	var tiger = new cat ('wild', 'rawr', 'pounce', 'Shere Kahn')
	var firstline = 'I have three cats, '+ tabby.name + ', ' + lion.name + ', and ' + tiger.name + '. ';

	tabby.play = function() 
		{
			return this.sound + ' and ' + this.pounce;
		}
	tiger.play = function() 
		{
			return this.sound + ' and ' + this.pounce;
		}

	var secondline = tabby.name + ' likes to ' + tabby.play() + ' but ' + tiger.name + ' likes to ' + tiger.play() + '.';
	document.getElementById('cat').innerHTML +=  firstline + secondline;
};


