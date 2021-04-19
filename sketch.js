
var bg;
var bgSprite;
var coins,coinsGroup,coinImg;
var goblin,goblinImg;
var redBird,birdImg;
var invisibleGround;
var blackBird,blackBirdImg;
var whiteBird,whiteBirdImg;
var birdGroup;
var gameState= "play";
var goblinLife = 3;
var score = 0

function preload(){
bg= loadImage ("images/snowyskyedited.jpg");
birdImg = loadImage("images/redbird.png");
goblinImg =loadImage("images/goblin.png");
blackBirdImg =loadImage("images/blackbird.png");
whiteBirdImg =loadImage("images/whiteBird.png");
coinImg =loadImage("images/coin.png");
}
function setup() {
  createCanvas(1000,400);
  
  bgSprite = createSprite(500, 200, 50, 50);
  bgSprite.addImage(bg);
  //bgSprite.scale = 2
  bgSprite.velocityX = -3;
  console.log(bgSprite.width);
 goblin = createSprite(50, 360, 50, 50);
 goblin.addImage(goblinImg);
 goblin.scale = .7;

 
 invisibleGround = createSprite(500,370,1000,10);
  invisibleGround.visible = false;

coinsGroup= new Group();
birdsGroup= new Group();

}

function draw() {
  background(255,255,255); 

if (gameState=== "play"){
  if(keyDown (UP_ARROW)){
    goblin.velocityY = -12;
   } 
 
   goblin.velocityY =  goblin.velocityY + .8;

   if(keyDown (RIGHT_ARROW)){
    goblin.x= goblin.x +3;
   } 

   if(keyDown (LEFT_ARROW)){
    goblin.x= goblin.x -3;
   } 

   if(bgSprite.x<100){
    // bgSprite.x = bgSprite.width/2
     bgSprite.x = 500
   }

   flyBirds();
   spawnCoins();

}
else if(gameState === "end"){
  

}
  
 
 
  

   
  
text("score: " +score, 100,30)
  goblin.collide(invisibleGround);
  drawSprites();
}
function flyBirds(){
  if(frameCount % 60 === 0) {
    var bird = createSprite(600,165,10,40);
    //obstacle.debug = true;
    bird.velocityX = -(6);
    
    bird.y =  Math.round(random(120,320)); 
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: bird.addImage(blackBirdImg);
      bird.scale = 0.6;
              break;
      case 2: bird.addImage(birdImg);
      bird.scale = 0.9;
              break;
      case 3: bird.addImage(whiteBirdImg);
      bird.scale = 0.9;
              break;

      default: break;
    }
     
    goblin.depth = bird.depth + 1;
    bird.lifetime = 200;
        birdsGroup.add(bird)
  }
 
}

function spawnCoins(){
  if(frameCount % 60 ===0) {
  coins = createSprite(Math.round(random(20,900)),0,10,10)
  coins.velocityY= 3;
  coins.addImage (coinImg);
  coins.scale = .3;
  coins.lifetime = 150;
  coinsGroup.add(coins);
  
    
  }
}