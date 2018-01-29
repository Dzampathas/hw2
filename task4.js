function setup() { 
  createCanvas(500, 500);
	noStroke();
	fill(80,80,80);
	rect(0,0, width, height);
	print("hello");
	
	
	makeGrid();
} 

function draw() { 
}

function makeGrid() {
	
	var grid = new Array(81);	
	var padding = 5;
	var arrayCount = 0;
	print("ArrayCount " + arrayCount);
	print("StartingGrid");
	for(var x = 0; x < 10; x++) {
		for(var y = 0; y < 10; y++) {
				var nextColor = 0;
				print("ArrayCount " + arrayCount);
				if(grid[arrayCount - 1] == "grey") {
					nextColor = round(random(0,2));
					print(nextColor);
				}
				if(grid[arrayCount - 1] == "red") {
					if(grid[arrayCount - 2] != "red") {
						nextColor = 1;
					}
					else {
						nextColor = 1;
					}
					print(nextColor);
				}
				if(grid[arrayCount - 1] == "yellow") {
					nextColor = 1;
					print(nextColor);
				}
			
				if(nextColor == 1){
					fill(255,0,0);	
					grid[arrayCount] = "red";
						
					}
				if(nextColor == 2){
					fill(255,255,0);
					grid[arrayCount] = "yellow";
					}
				if(nextColor == 0){
					fill(200,200,200);
					grid[arrayCount] = "grey";
				}
			
			print("MakingBox");
			noStroke();
			rect(padding + x*(width/10 + padding), padding + y*(width/10 + padding), width/10, height/10);
			arrayCount ++;
		}
	}
}
