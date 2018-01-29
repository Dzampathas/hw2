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
  var nextColor = 0;
	var grid = new Array(81);
	var padding = 5;
	var arrayCount = 0;
	for(var x = 0; x < 9; x++) {
		for(var y = 0; y < 9; y++) {
      print(arrayCount);
      //all conditions for grey
      if((arrayCount - 9) < 0 || arrayCount > 71 || (arrayCount+1)%9 == 0 || (arrayCount)%9 == 0){
        nextColor = 0;
        print("border");
      } else {
        //nextColor = 1;
        if(grid[arrayCount-1] == "grey"){
          nextColor = round(random(0,2));
        } else {
          //checking if the last one was red
          if(grid[arrayCount-1] == "red"){
            if(grid[arrayCount-2] == "red"){
              nextColor = 0;
            } else {
              nextColor = 1;
          }
        }
          //checking if the last one was yellow
          if(grid[arrayCount-1] == "yellow"){
              if(grid[arrayCount-2] == "yellow"){
                nextColor = 0;
              } else {
                nextColor = 2;
              }
            }
        }
      }
				if(nextColor == 1){
          if(grid[arrayCount-9] == "red" && grid[arrayCount-18] == "red"){
            fill(200,200,200);
            grid[arrayCount] = "grey";


          } else {
            grid[arrayCount] = "red";
            fill(255,0,0);
          }
					}
				if(nextColor == 2){
          if(grid[arrayCount-9] == "yellow" && grid[arrayCount-18] == "yellow"){
            fill(200,200,200);
            grid[arrayCount] = "grey";


          } else {
            grid[arrayCount] = "yellow";
            fill(255,255,0);
          }
					}
				if(nextColor == 0){
					fill(200,200,200);
					grid[arrayCount] = "grey";
				}

      print("Color is " + grid[arrayCount]);
			noStroke();
			rect(padding + x*(width/10 + padding), padding + y*(width/10 + padding), width/10, height/10);
			arrayCount ++;
		}
	}
}
