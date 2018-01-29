function setup() {
  createCanvas(340, 340);
}

function draw() {
	var x = random(width/2, width);
	var y = random(height/2);
  line(width/2, height/2, x, y);
	stroke(map(x, width/2, width, 0, 255), map(y, 0, height/2, 0, 255), 255);
	fill(map(x, width/2, width, 0, 255), map(y, 0, height/2, 0, 255), 255);
	
	
}
