/* 
  Genuary 2024
  https://genuary.art/
  Date:     Jan 01 - Particles, lots of particles
  Title:    Gobstoppers
  Author:   Sarah Kuehnle (@ursooperduper)
*/

var f1, f2, f3, f4;

function setup() {
  createCanvas(800, 800);

  var p1 = 
  {
    name:           "1",
                    // blue,           pink,           red,            orange,         yellow
    colors:         [[5,175,242,100], [242,128,170,100], [242,48,5,100], [242,149,68,100], [242,203,5,100]],
    lifetime:       1000,
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
    lifetime:       1000,
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
    lifetime:       1000,
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
    lifetime:       1000,
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
  beginLayer('1',396, 800)
    drawParts();
  endLayer();

  push();
    translate(400,0);
    beginLayer('2', 198,800);
      drawParts();
    endLayer();
  pop();
  // push();
  //   translate(400,0);
  //   b1.drawParts();
  // pop();
  push();
    translate(602,0);
    beginLayer('3', 99,800);
      drawParts();
    endLayer();
  pop();
  push();
    translate(705,0);
    beginLayer('4', 49,800);
      drawParts();
    endLayer();
  pop();
  push();
    translate(758,0);
    beginLayer('5', 26,800);
      drawParts();
    endLayer();
  pop();
  push();
    translate(788,0);
    beginLayer('6', 12,800);
      drawParts();
    endLayer();
  pop();
}

function drawParts() {
  rotate(millis() / 2000000);
  f1.Draw();
  f2.Draw();
  f3.Draw();
  f4.Draw();
  f1.Create();
  f2.Create();
  f3.Create();
  f4.Create();
  f1.Step();
  f2.Step();
  f3.Step();
  f4.Step();
}