var x;
var y;
var radius;

function setup() {
  createCanvas(600, 800);
  x = random(width);
  y = random(height);
  radius = 100;
}

function draw() {
  background(100);

  if (dist(mouseX, mouseY, x, y) > radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(30, 100, 150, 150);
  }
  else {
    fill(30, 100, 150, 150);
  }

  ellipse(x, y, radius * 2);
  x += random(1, 3);
  y += random(-1, 3);
}
