/* 
  Genuary 2024
  https://genuary.art/
  Date:     Jan 03 - Droste effect
  Title:    TBD
  Author:   Sarah Kuehnle (@ursooperduper)
*/

var eye;

function preload() {
  eye = loadImage("eye.svg");
}

function setup() {
  createCanvas(800, 800, SVG);
}

function draw() {
  background(0);
  imageMode(CENTER);
  // image(eye, width/2, height/2, 1+frameCount*4, 1+frameCount*4);
  // image(eye, width/2, height/2, 500, 500);
}
