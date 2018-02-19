var light = 100;
var angle = 0;

var pX = [];
var pY = [];
var xSpeed = [];
var ySpeed = [];

function setup() { 
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  for (var i = 0; i < 100; i += 1) {
    pX[i] = random(150, width);
    pY[i] = random(0, height);
    xSpeed[i] = random(-1,1);
    ySpeed[i] = random(-1,1);
  }
} 

function draw() { 
  background(0);
  angleMode(DEGREES);
  
  colorMode(HSB);
  noStroke();
  
  //movie reel body
  fill(255);
  ellipse(100,230,100,100);
  fill(0);
  ellipse(100,230,10,10);
  //big circles
  push();
  translate(100, 230);
	rotate(angle);
	ellipse(0, 30, 30);
	rotate(72);
	ellipse(0, 30, 30);
	rotate(72);
	ellipse(0, 30, 30);
	rotate(72);
	ellipse(0, 30, 30);
	rotate(72);
	ellipse(0, 30, 30);
  angle = angle +1;
  pop();
  
  if (random(0, 100) > 90) {
    light = 50;
	  fill(50, 50, light);
  } else {
    light = 100
    fill(50, 50, light);
  }
  triangle(100, height-75, width, height-175, width, height);
  
  //movie reel body
  fill(255);
  rect(0,280,150,80);
  rect(50,360,15,80);
  rect(50,360,15,80);
  
  //particles
  fill(0);
  for (var i = 0; i < 100; i += 1) {
    ellipse(pX[i], pY[i], 1.5);
    pX[i] = pX[i] + xSpeed[i];
    pY[i] = pY[i] + ySpeed[i];
    
    if ((pX[i] > width) || (pX[i] < 150)) {
      xSpeed[i] = -xSpeed[i];
    }
    
    if ((pY[i] > height) || (pY[i] < 0)) {
      ySpeed[i] = -ySpeed[i];
    }
  }
}
