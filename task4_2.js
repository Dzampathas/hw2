


function setup() {

  createCanvas(500, 500);
	noStroke();
	fill(30,30,30);
	rect(0,0, width, height);


	makeGrid();
}

function draw() {
}

function makeGrid() {
  var yellow = color(255,255, 0);
  var red = color(255,0,0);
  var blue = color(0,0,255);
  var grey = color(180,180,180);
  var black = color(0,0,0);
  /*
  var newBox;

  newBox = new Square(20,20, 9, 1, yellow);
  newBox.display();
  */
for(var i = 0; i < 4; i++){
    var padding = (width/9)/8;
    var widthCount = 0;
    var lastSize = padding;
    while(widthCount < 8){
      var thisColor;
      var size;

      if(widthCount < 6){
        size = round(random(1,2));
      } else {
        size = 1;
      }
      //pick Color

      if(size == 2){
        var colorCase = round(random(0,2));
        if(colorCase == 0) {
          thisColor = yellow;
        }
        if(colorCase == 1) {
          thisColor = red;
        }
        if(colorCase == 2) {
          thisColor = blue;
        }
      }else {
        var colorCase = round(random(1,100));
        if(colorCase < 85){
          thisColor = grey;
        }
        else{
          thisColor = black;
        }
      }

      var newGrid = new Square(padding + i*width/4, lastSize, 2, size, thisColor);
      newGrid.display();
      widthCount += size;
      lastSize += size*width/9 + padding;
    }
    widthCount = 0;
  }
}


//square class

function Square(x , y, w, h, color) {
  this.y = y;
  this.x = x;

  this.width = w*width/9;
  this.height = h*height/9;

  this.color = color;

  this.display = function(){
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }


}
