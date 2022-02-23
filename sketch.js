var box;
function setup() {
  createCanvas(400, 400);
  
  //1. Set width, height, x and y position in "createSprite()"
  box = createSprite(200,200 ,40 ,40 );
  
  //2. Set sprite color to "white"
  box.shapeColor ="white" ; 
  
  //3. Set velocity of sprite for vertical movement
  box.velocityY=0.5 ;
}
function draw() {
  background("orange");
  drawSprites();
} 