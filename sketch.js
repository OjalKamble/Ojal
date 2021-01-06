var fixedRect, movingRect;
var go1,go2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1=createSprite(100,100,50,50);
  go2=createSprite(100,800,50,50);

  go1.velocityY=+3;
  go2.velocityY=-3;

  
}

function draw() {
  background(0,0,0);  
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else
{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

 bounceOff(go1,go2);
  drawSprites();
}

