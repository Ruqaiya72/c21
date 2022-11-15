var fixedRect, movingRect;
var square1,square2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  square1=createSprite(200,200,30,30)
  square1.shapeColor="red"
  square2=createSprite(250,250,40,40)
  square2.shapeColor= "yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(keyIsDown(RIGHT_ARROW)){
    square1.x=square1.x+3
}
if(keyIsDown(LEFT_ARROW)){
    square1.x=square1.x-3
}
if(keyIsDown(UP_ARROW)){
    square1.y=square1.y-3
}
if(keyIsDown(DOWN_ARROW)){
    square1.y=square1.y+3
}

  if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="white"
  }
  else {
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
if(isTouching(square1,square2)){
    square1.shapeColor="blue"
    square2.shapeColor="white"
}
else{
    square1.shapeColor="red"
    square2.shapeColor="yellow"
}


  drawSprites();
}
