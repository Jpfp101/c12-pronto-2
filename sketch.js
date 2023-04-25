var pathImg, path;
var jake1, jake2, jake3, jake4, jake5, jake,jakeRunning

var gameState = "play"


function preload(){
  pathImg= loadImage("path.png");
  jake = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup() {
  createCanvas(600,600);
 
  path = createSprite(300,300);
  path.addImage("path",pathImg);
  path.velocityY = 1;
  path.scale=1.2;

  leftBoundary=createSprite(140,0,40,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(443,0,40,800);
   rightBoundary.visible = false;

  jakeRunning = createSprite(200,200,50,50);
  jakeRunning.scale = 0.3;
  jakeRunning.addAnimation("correndo",jake);
}


function draw() {
  background(255);
  path.velocityY = 4;
  jakeRunning.x = World.mouseX;
 if(path.y > 500 ){
      path.y = 300

    } 
  
    edges= createEdgeSprites();
       jakeRunning.collide(edges[3]);
      jakeRunning.collide(leftBoundary);
      jakeRunning.collide(rightBoundary);

  drawSprites();

  }
