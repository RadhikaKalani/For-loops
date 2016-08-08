//polka dot background
function setup() {
  createCanvas(640, 480);
  background(34,34,12);
}

function draw() {
  drawPolkaDots();
  manyLinedPen();
}

function circle(x, y, d) {
  ellipse(x, y, d, d);
}

function drawPolkaDots() {
  for (var x = 0; x < 640; x += 50) {
    for (var y = 0; y < 480; y += 50) {
      noStroke();
      fill(201,31,5);
      ellipse(x, y, 20, 20);
    }
  }
}

function manyLinedPen() {
  noStroke();
  fill(354,223,33);
  circle(mouseX, mouseY, 5);
  fill(23,152,163);
  circle(mouseX + 5, mouseY + 5, 5);
  
}