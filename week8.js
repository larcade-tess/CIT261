var vol = document.getElementById('audio');
vol.volume = .5;



//canvas
var c = document.getElementById("canvas");
var line = c.getContext("2d"); //webgl = 3d
line.moveTo(0,0); //beginning position
line.lineTo(1000,500); //length and angle of line

var grad = line.createLinearGradient(0,250,250,0); // top, right, bottom, left can also be radial
grad.addColorStop(0,"#40E0D0");
grad.addColorStop(1,"#ff7f50");

//Fill with gradient
line.fillStyle = grad;
line.fillRect(0,0,500,500);
line.stroke();