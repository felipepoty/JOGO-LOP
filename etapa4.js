
var x =20
var y = 0
var dy= 5
var dt=5
var t=40
function setup() {
  createCanvas(300, 300);
  frameRate(30);
}

function keyPressed(){
  if(keyCode  === RIGHT_ARROW){
  t=t+dt
  }
}

function draw() {
  background(50);
  rect(150,y,10,40);
  y= y+dy
  if(y>height)
  {y = random(-500,50)
  }

  ellipse(x, 160, 40, 20);
  if(keyIsDown(RIGHT_ARROW))
  { x += 3
  }
  if(keyIsDown(LEFT_ARROW))
  {x -= 3
  }
  rect(t,150,10,10)

  
  
  rect(280, 150,20,20);
  
  fill(255);
  

  fill(200, 200, 200);
 
}

