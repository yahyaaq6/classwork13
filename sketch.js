var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,clouds1;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground1=loadImage("ground2.png")
  clouds1=loadImage("cloud.png")
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  

  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("paper",ground1)

  invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible=false
}

function draw() {
  background(0);
  console.log(frameCount)
 
  //jumping the trex on space key press
  if(keyDown("space")&& trex.y>=90) {
    trex.velocityY = -10;
  }
  ground.velocityX=-3
  trex.velocityY = trex.velocityY + 0.8
  
 if (ground.x<0){
   ground.x=ground.width/2
 }
 //stop trex from falling down 
  trex.collide(invisibleGround);
  clouds();
  drawSprites();
}
function clouds (){

  if (frameCount%60==0){
    cloud=createSprite(600,100,40,10);
    cloud.velocityX=-4
    cloud.addImage("paper1",clouds1)
    cloud.y=Math.round(random(10,60))
    cloud.scale=0.5
  }

  






}