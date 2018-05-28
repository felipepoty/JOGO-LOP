var x =20
var y = 0
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(50);
  ellipse(x, 160, 40, 20);
  if(keyIsDown(RIGHT_ARROW))
  { x += 3
  }
  if(keyIsDown(LEFT_ARROW))
  {x -= 3
  }
  if(x<0)
  {x=20
  }
  
  
  rect(280, 150,20,20);
  
  fill(255);
  

  fill(200, 200, 200);
 
}
