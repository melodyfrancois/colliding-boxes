var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(400, 200, 50, 90); 
 fixedRect.shapeColor="black";
 movingRect=createSprite(600,400,80,20);
 movingRect.shapeColor="black";
}

function draw() {
  background("white");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="pink";
    movingRect.shapeColor="pink";
  }
  else{
    fixedRect.shapeColor="black";
    movingRect.shapeColor="black";
  }
  drawSprites();
}