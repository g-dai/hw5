var X = [];
var Y = [];
var D = [];
var colors = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  for (var i = 0; i < 100; i ++) {
    X[i] = random(width);
    Y[i] = random(height);
    D[i] = random(10, 50);
    colors = [color(120, 60, 100), color(240, 60, 100)];
  }
}
  
function draw() {
  background(255);
  noStroke();
  
  for (var i = 0; i < 50; i++) {
    fill(random(colors));
    //fill(colors[1]);
    ellipse(X[i], Y[i], D[i]);
    
    if (random() < 0.01) {
      D[i] = random(D);
    }
  }

}
