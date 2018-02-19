//struggling with how to incorporate xSpeed...

var x = 210;
var y = 290;
var r = 0;

var X = [];
var Y = [];
var xSpeed = [];

function setup() {
  createCanvas(400, 400);
  
  for (var i = 0; i < 100; i++) {
    Y[i] = -10;
    xSpeed = random(1,3);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  for (var i = 0; i < 100; i++) {
    push();
    fill(y);
    translate(x, y);
    rotate(r);
    rect(-10, Y[i], 20, 20);
    pop();
    
    // up 3 pixels
    y -= 3;
  }

    // rotate 0.05 radians ~= 2.8 degrees per frame
    r += 0.05

    // if reach past the top a bunch
    if (y < -150) {
      y = 290;
  }
}
