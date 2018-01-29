function setup() { 
  createCanvas(400, 400);
	
	for(var i = 0; i < 10; i++) {
		line(random(width), random(height), random(width), random(height));
	}
} 
