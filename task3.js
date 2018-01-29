function setup() { 
  createCanvas(400, 400);
	background(255);
	colorMode(HSB);
	noStroke();
} 

function draw() { 
	background(0, 0, 255, 0.1);
  fill(random(270,360), 255, 255);
  ellipse(random(width), random(height), random(20, 40));
}
