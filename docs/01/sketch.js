/* 
  Genuary 2024
  https://genuary.art/
  Date:     Jan 01 - Particles, lots of particles
  Title:    Gobstoppers
  Author:   Sarah Kuehnle (@ursooperduper)
*/

var f1, f2, f3, f4;

function setup() {
  w = min(windowWidth, windowHeight);
  if (w < 800) w = 800;
  let sketchCanvas = createCanvas(w, w);
  sketchCanvas.parent('sketchContainer');

  var p1 = 
  {
    name:           "1",
                    // blue,           pink,           red,            orange,         yellow
    colors:         [[5,175,242,100], [242,128,170,100], [242,48,5,100], [242,149,68,100], [242,203,5,100]],
    lifetime:       1000,
    size:           [900,720],
    speed:          0.02,
    shape:          "ellipse2",
    acceleration:   [0.01, 0.001],
    x:              0,
    y:              0.02
  }

  var p2 = 
  {
    name:           "2",
                    // blue,           pink,           red,            orange,         yellow
    colors:         [[5,175,242,100], [242,128,170,100], [242,48,5,100], [242,149,68,100], [242,203,5,100]],
    lifetime:       1000,
    size:           [720,500],
    speed:          0.002,
    shape:          "ellipse2",
    acceleration:   [-0.01, 0.0015],
    x:              1,
    y:              0.55
  }

  var p3 = 
  {
    name:           "3",
                    // blue,           pink,           red,            orange,         yellow
    colors:         [[5,175,242,100], [242,128,170,100], [242,48,5,100], [242,149,68,100], [242,203,5,100]],
    lifetime:       1000,
    size:           [500,320],
    speed:          0.02,
    shape:          "ellipse2",
    acceleration:   [0.01, 0.001],
    x:              0,
    y:              0.8
  }

  f1 = new Fountain(null, p1);
  f2 = new Fountain(null, p2);
  f3 = new Fountain(null, p3);
}

function draw() {
  background(22);
  translate(0,0);
  stroke(243);
  strokeWeight(4);
  push();
    beginClip();
      fill(0);
      rect(0,0,w/2,w);
    endClip();
    drawParts();
  pop();

  push();
    translate(w/1.98,0);
    beginClip();
      fill(0);
      rect(0,0,w/3.5,w);
    endClip();
    drawParts();
  pop();

  push();
    translate(w/1.2558,0);
    beginClip();
      fill(0);
      rect(0,0,w/4,w);
    endClip();
    drawParts();
  pop();
}

function drawParts() {
  rotate(millis() / 200000);
  f1.Draw();
  f2.Draw();
  f3.Draw();
  f1.Create();
  f2.Create();
  f3.Create();
  f1.Step();
  f2.Step();
  f3.Step();
}