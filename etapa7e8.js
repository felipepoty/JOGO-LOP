var c1=c
var xi=479
var yi=250
var x =20
var qy = 250
var y = 260
var u= 2
var dt=5
var dx=dx2
var disparo = false
var dy= dy2
var dx2=20
var dy2=280
var qy2=0
var u2=3
var ui=0
var colisao = false
var raio= 10
var raio2 = 5
var largi = 20
var comprimentoi = 20
var vidas = 3; 

var tamArea = 500
var vx = []
var vy = []
var vtam = []
var vdx = [];
var vdy = []
var qt = 25
var    vCorR = (255)
var vCorG =255
var    vCorB = (255)
var xi2=xi
var yi2=yi
var imgjogador
var xvida = 2000
var yvida  = 20
var uvida =10
var nivel = 1
var mostranivel = nivel

var c = 0


function preload(){
  imgjogador = loadImage("img/player.png");
}

function setup() {
  createCanvas(tamArea, tamArea);
  frameRate(60);
  x=10
  for (i=0;i<qt;i++){
    vx[i] = random(0,tamArea); 
    vy[i] = random(0,tamArea);
    vtam[i] = random(2,4);
    vdx[i] = random(3,4);
    vdy[i] = random(3,4);
 

  }
}

function keyPressed(){
  if((keyCode  === CONTROL)&&(!disparo)){
  disparo=true
  dx= x
  dy= y
  }
}

function draw() {

 // IMAGEM JOGADOR

  background(0);
  //QUADRADOS BACKGROUND// 
  for ( i = 0; i < qt; i++) {

    vy[i] = vy[i] + vdy[i];  
   
    if ( vy[i] > height) {
       vy[i] = 0; 
    }
    fill(vCorR,vCorG,vCorB);
    rect(vx[i], vy[i], vtam[i], vtam[i])
  }
  //VIDAS!!//
 fill(0,238,0)
 ellipse(xvida,yvida,14,14)

 xvida=xvida-uvida
if(xvida<0){
	xvida = random(1000,2500)
	xvida = xvida-uvida
	yvida= random(0,500)
}

   
	  
  //QUADRADOS BACKGROUND FIM!//
  fill(255);
  rect(280,qy2,10,40);
  qy2= qy2+u2
   if(qy2>460)
  {u2= -u2
  }
  if(qy2<0)
  {u2= -u2
  }
  rect(150,qy,10,40);
  qy= qy+u
  if(disparo){
    dx= dx+20
  }
  if(dx>width){
    disparo = false
  }
  
  if(qy>height)
  {qy = random(-500,0)
  }
 
    
  

    image(imgjogador,x,y,30,40)
  fill(200,20,90);
  if(keyIsDown(DOWN_ARROW))
  { y += 5
  }
  if(keyIsDown(UP_ARROW))
  {y -= 5
  }
  if(keyIsDown(RIGHT_ARROW))
  {x+= 5
  }
  if(keyIsDown(LEFT_ARROW))
  {x-= 5
  }
  if(x<=0){
	  x=0
  }
  if(x>=280){
	  x=280
  }
  
  if(y<=0){
    y=0
  }
  if(y>=460){
    y=460
  }
 
  ellipse(dx,dy,10,5)
  //COLISAO//
 
  if(dy>yi && dy<(20+yi)){
  if(dist(dx+5,0,xi,0)>0 && dist(dx+5,0,xi,0)<20){
    colisao = true
    c=c+1
    
    
  }
    
  }
  else {
    colisao = false
  }
  if(c==0){
    fill(255)
  }
  else if(c==2){
    fill(255,0,0)
  }
  else if(c==4)
  { fill(0,104,139)
	  
  }
  else if(c==6){
	fill(255)
	mostranivel = nivel + 1
  }
  else if(c==8){
	  fill(255,0,0)
  }
  else if(c==10){
	  fill(0,104,139)
  }
  else if (c==12){
	  fill(255)
	  mostranivel = nivel + 2
  }
  else if (c==14){
	  fill(255,0,0)
  }
  else if (c==16){
	  fill(0,104,139)
  }
  else if (c==18){
	  fill(255)
	  mostranivel = nivel + 3
  }
  else if (c==20){
	  fill(255,0,0)
  }
  else if (c==22){
	  fill(0,104,139)
  }
  else if (c==24){
	  fill(255)
	  mostranivel = nivel +4
  }
  else if (c==26){
	  fill(255,0,0)
  }
  else if (c==28){
	  fill(0,104,139)
  }

 /*if(colisao){
	 dx= 1000;
	 }
	 */
	
    yi=yi+ui
  
 
  
  
if(largi!=0){
	if(c<6){
  rect(xi, yi,largi,comprimentoi)
}
if(c>=6 && c<12){
    ellipse(xi,yi,20,20)
}
if(c>=12 && c<18){
	ellipse(xi,yi,20,14)
}
if(c>=18 && c<24){
	rect(xi,yi,10,10)
}
if(c>=24 && c<=28){
	ellipse(xi,yi,10,10)
}
}
  yi=yi+ui
  if(yi>20){
    ui= -ui
  }
  if(yi<480){
    ui= -ui
  }
  fill(20,200,80);
  
  fill(255);
  
 
  textSize(20);
  fill(255,255,0);
  text("Nível: "+mostranivel, 10,30);
  fill(255);
  text("Vidas: "+vidas, 100, 30);
  }

