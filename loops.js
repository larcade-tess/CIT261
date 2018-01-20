

for (i=0; i < 4; i++) {
	console.log("Hello World")
}

var x = 1;
while (x < 4) {
	console.log("Hello Planet")
	x++;
}

var y =1;
do {
	console.log("Hello Solar System")
	y++;
}
while (y <3);

var z = 4;
if (z > 5) {
	console.log("Hello Star")
} 
else {
	console.log("Hello Sun")
};


if (y > 3) {
	console.log("Blue")
} 
else if (y = 3) {
	console.log('Black')
}
else {
	console.log('Green')
};

var color1 = 'Yellow'
var color2 = 'Red'

function color(){
	switch(color2){
		case 'Yellow':
		console.log('The color is '+ color1);
		break;
		case 'Red':
		console.log('The color is '+ color2);
		break;
		default:
		console.log('There is no color.');
					}
				}

var new_array = ['Leaf', 'Tree', 'Flower', 'Seed', 'Dirt', 'Water'];

console.log(new_array[3]);

var second_array = [];
second_array[0] = 'fish';
second_array[1] = 'shell';
second_array[2] = 'sand';


var t = second_array.length; 

console.log(t);