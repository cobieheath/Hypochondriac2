let img;
var theta = 0;
var maxDiameter = 50;
let myArray = [];
let mySound;

function preload() {
  soundFormats('mp3');
  mySound = loadSound('assets/Monitor+Beep')
  mySound.loop();
}

function setup() {
  createCanvas(500, 700);
  img = loadImage('assets/human.png')
}

function draw() {
  background(127.5);
  image(img, 0,0);
  fill('red');
  push();
  blendMode(DIFFERENCE);
  theta += .5;
  var diam = 100 + sin(theta) * maxDiameter;
  ellipse(mouseX, mouseY, diam, diam);
  
  for (let i = 0; i < myArray.length; i++){
    let xy = myArray[i];
    circle(xy.x, xy.y, diam)
  }
  pop();
}

function mouseClicked () {
  append(myArray, createVector(mouseX, mouseY));
  mySound.play();
}