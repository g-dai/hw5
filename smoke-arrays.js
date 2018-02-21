//struggling with how to incorporate xSpeed...

var x = 210;
var y = 290;
var r = 0;

var X = [];
var Y = [];
var R = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
  
  for (var i = 0; i < 200; i++) {
    X[i] = 210;
    Y[i] = 290;
    R[i] = random(0.05,0.1);
    xSpeed[i] = random(-0.5,0.5);
    ySpeed[i] = random(-1,0.1);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  for (var i = 0; i < 200; i++) {
    push();
    fill(Y[i]);
    translate(X[i], Y[i]);
    rotate(R[i]);
    rect(-10, -10, 20, 20);
    pop();
    
    // up 3 pixels
    Y[i] -= 3;
    X[i] += xSpeed[i];
    Y[i] += ySpeed[i];

    // rotate 0.05 radians ~= 2.8 degrees per frame
    R[i] += 0.05;

    // if reach past the top a bunch
    if (Y[i] < -150) {
      Y[i] = 290;
      X[i] = 210;
    }
  }
}
