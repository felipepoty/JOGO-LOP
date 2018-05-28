
var xi=479
var yi=250
var x =10
var qy = 250
var y = 260
var u= 5
var dt=5
var dx=x
var disparo = false
var dy= y

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  x=10
}

function keyPressed(){
  if((keyCode  === CONTROL)&&(!disparo)){
  disparo=true
  dx= x
  dy= y
  }
}

function draw() {
  background(50);
  rect(150,qy,10,40);
  qy= qy+u
  if(disparo){
    dx= dx+10
  }
  if(dx>width){
    disparo = false
  }
  
  if(qy>height)
  {qy = random(-500,0)
  }

  ellipse(x, y, 20, 40)
  fill(200,20,90);
  if(keyIsDown(DOWN_ARROW))
  { y += 5
  }
  if(keyIsDown(UP_ARROW))
  {y -= 5
  }
  if(y<=20){
    y=20
  }
  if(y>=480){
    y=480
  }
  ellipse(dx,dy,10,5)

  
  
  rect(xi, yi,20,20)
  fill(20,200,80);
  
  fill(255);
  

 
 
}


