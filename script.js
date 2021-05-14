
let xspacing = 0.5; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 10000.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
var canvas;

console.log('Hi')
function setup() {
  canvas=createCanvas(windowWidth, windowHeight)
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('opacity', '0.5')
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(	251, 183, 209);
  calcWave(1,250);
  renderWave(	183, 251, 225);

  calcWave(0.8,300);
  renderWave(	159, 250, 215);

  calcWave(1.2,400);
  renderWave(86, 246, 185);
}

function calcWave(c,k) {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = c*sin(x) * amplitude + k;
    x += dx;
  }
  console.log(theta)
}

function renderWave(r,g,b) {
   fill(255);
   stroke(r,g,b);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    line(x * xspacing,windowHeight, x * xspacing, height / 2 + yvalues[x]);
  }
}
