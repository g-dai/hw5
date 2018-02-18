var x = 230;
var y = 220;
var X = [];
var Y = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  for (var i = 0; i < 100; i++) {
    X[i] = 230;
    Y[i] = 220;
    xSpeed[i] = random(-1,1);
    ySpeed[i] = random(1,3);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  // draw drip
  for (var i = 0; i < 5; i++) {
  	ellipse(X[i], Y[i], 10);
    X[i] += xSpeed[i];
    Y[i] += ySpeed[i];
    if (Y[i] > height) {
      Y[i] = 220;
      X[i] = 230;
	  }
	}
}
