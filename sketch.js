let img;

function setup() {
  createCanvas(500, 700);
  img = loadImage('Human.png')
}

function draw() {
  background(125);
  image(img, 0,0);
}