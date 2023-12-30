/* 
  Genuary 2024
  https://genuary.art/
  Date:     Jan 02 - No palettes
  Title:    Behind closed eyes
  Author:   Sarah Kuehnle (@ursooperduper)
*/

function setup(){
  w = 800;
  let sketchCanvas = createCanvas(w, w);
  sketchCanvas.parent('sketchContainer');
  pad = w/80;
}

function draw() {
  background(255);
  createCell(pad, pad, w-pad * 2, w-pad * 2, 6);
  noLoop();
}

function createCell(posX, posY, wid, hei, depth) {
  if (depth > 1) {
    createCell(posX, posY, wid/2, hei/2, depth - int(random([1,2])));
    createCell(posX + wid/2, posY, wid/2, hei/2, depth - int(random([1,2])));
    createCell(posX, posY + hei/2, wid/2, hei/2, depth - int(random([1,2])));
    createCell(posX + wid/2, posY + hei/2, wid/2, hei/2, depth - int(random([1,2])));
  } else {
    push();
    stroke(random(255), random(255), random(255), 100);
    strokeWeight(50);
      beginClip();
        fill(0);
        rect(posX, posY, wid, hei);
      endClip();
      fill(random(255), random(255), random(255), 20);
      circle(posX + wid/2, posY + hei/2, wid);
      fill(random(255), random(255), random(255), 40);
      circle(posX + wid/2 + random(-10, 10), posY + hei/2 + random(-50, 50), wid - random(-50, 50));
      fill(random(255), random(255), random(255), 60);
      circle(posX + wid/2 + random(-10, 10), posY + hei/2 + random(-30, 30), wid - random(-30, 30));

      fill(random(255), random(255), random(255), 80);
      circle(posX + wid/2 + random(-60, 60), posY + hei/2 - random(-60, 60), wid - random(-60, 60));
      fill(random(255), random(255), random(255), 100);
      circle(posX + wid/2 + random(-20, 20), posY + hei/2 + random(-20, 20), wid - random(-20, 20));
      fill(random(255), random(255), random(255), 120);
      circle(posX + wid/2 + random(-80, 80), posY + hei/2 - random(-80, 80), wid - random(-80, 80));
      fill(random(255), random(255), random(255), 180);
      circle(posX + wid/2 + random(-40, 40), posY + hei/2 + random(-40, 40), wid - random(-40, 40));      
    pop();
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas();
  if (key == 'r' || key == 'R') {
    background(255);
    createCell(pad, pad, w-pad * 2, w-pad * 2, 6);
  }
}