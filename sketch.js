var bg,bgImg;
var player, shooterImg, shooter_shooting;
var enemyGroup


function preload(){
  
  shooterImg = loadImage("character.png")

  bgImg = loadImage("mainbackground.png")

  birdImg = loadImage("enemybird.png")

  heart1Img = loadImage("heartone.png")
  heart2Img = loadImage("hearttwo.png")
  heart3Img = loadImage("heartthree.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 3
  

//creating the player sprite
   player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
   
   //creating sprites to depict lives remaining
   heart1 = createSprite(displayWidth-350,80,20,20)
   heart1.visible = false
   heart1.addImage("heart1",heart1Img)
   heart1.scale = 0.4

    heart2 = createSprite(displayWidth-200,80,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-350,80,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4
   
   enemyGroup = new Group()

}

function draw() {
  background(0); 

  

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}



//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage()
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(enemyGroup.isTouching(player)){

for(var i=0;i<enemyGroup.length;i++){     
      
  if(enemyGroup[i].isTouching(player)){
       enemyGroup[i].destroy()
       } 
 }
 }

 enemy();

drawSprites();

}

function enemy(){
  if(frameCount % 150 === 0){
    enemyBird = createSprite(random(1500,1100),random(100,1500),40,40)
    enemyBird.addImage(birdImg)
    enemyBird.scale = 0.2
    enemyBird.velocityX = -3
    enemyBird.lifetime = 400
    enemyGroup.add(enemyBird)
  }
}