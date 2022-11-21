let img;

function setup() {
  createCanvas(500, 700);
  img = loadImage('assets/human.png')
}

function draw() {
  background(125);
  image(img, 0,0);
  circle(mouseX, mouseY, 50);
}