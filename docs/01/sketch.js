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
  if (w> 800) w = 800;
  let sketchCanvas = createCanvas(w, w);
  sketchCanvas.parent('sketchContainer');

  var p1 = 
  {
    name:           "1",
                    // blue,           pink,           red,            orange,         yellow
    colors:         [[5,175,242,100], [242,128,170,100], [242,48,5,100], [242,149,68,100], [242,203,5,100]],
    lifetime:       500,
    size:           [900,720],
    speed:          0.002,
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
    lifetime:       500,
    size:           [720,500],
    speed:          0.002,
    shape:          "ellipse2",
    acceleration:   [-0.01, 0.0015],
    x:              1,
    y:              0.4
  }

  var p3 = 
  {
    name:           "3",
                    // blue,           pink,           red,            orange,         yellow
    colors:         [[5,175,242,100], [242,128,170,100], [242,48,5,100], [242,149,68,100], [242,203,5,100]],
    lifetime:       500,
    size:           [500,320],
    speed:          0.02,
    shape:          "ellipse2",
    acceleration:   [0.01, 0.001],
    x:              0,
    y:              0.6
  }

  var p4 = 
  {
    name:           "4",
                    // blue,           pink,           red,            orange,         yellow
    colors:         [[5,175,242,100], [242,128,170,100], [242,48,5,100], [242,149,68,100], [242,203,5,100]],
    lifetime:       500,
    size:           [320,280],
    speed:          0.02,
    shape:          "ellipse2",
    acceleration:   [-0.01, 0.001],
    x:              1,
    y:              0.85
  }

  f1 = new Fountain(null, p1);
  f2 = new Fountain(null, p2);
  f3 = new Fountain(null, p3);
  f4 = new Fountain(null, p4);
}

function draw() {
  background(22);
  translate(0,0);
  beginLayer('1',w/2.2, w);
    drawParts();
  endLayer();
  push();
    translate(w/2.2+4,0);
    beginLayer('2', w/3,w);
      drawParts();
    endLayer();
  pop();
  push();
    translate(w/1.26 + 3,0);
    beginLayer('3', w/3.5,w);
      drawParts();
    endLayer();
  pop();
}

function drawParts() {
  rotate(millis() / 2000000);
  f1.Draw();
  f2.Draw();
  f3.Draw();
  // f4.Draw();
  f1.Create();
  f2.Create();
  f3.Create();
  // f4.Create();
  f1.Step();
  f2.Step();
  f3.Step();
  // f4.Step();
}