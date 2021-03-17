const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;
var player;
var ground;
var coin;
var CoinArray = [];
var score = 0;


function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-180);
    engine = Engine.create();
    myworld = engine.world;
   
    player = new Player(100,displayHeight-300);
    ground = new Ground(displayWidth/2,displayHeight-200,displayWidth*2,20)

    coin = new Coin(Math.round(random(300,700)),displayHeight/4 - 10);
    coin1 = new Coin(Math.round(random(100,500)),displayHeight/4 - 10);
    coin2 = new Coin(Math.round(random(200,300)),displayHeight/4 - 10);
    coin3 = new Coin(Math.round(random(300,600)),displayHeight/4 - 10);
    coin4 = new Coin(Math.round(random(500,600)),displayHeight/4 - 10);
    coin5 = new Coin(Math.round(random(400,700)),displayHeight/4 - 10);
    coin6 = new Coin(Math.round(random(0,500)),displayHeight/4 - 10);
    coin7 = new Coin(Math.round(random(200,700)),displayHeight/4 - 10);
    coin8 = new Coin(Math.round(random(200,600)),displayHeight/4 - 10);
    coin9 = new Coin(Math.round(random(600,800)),displayHeight/4 - 10);

    // bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    // bg.addImage(backgroundImg)
}


function draw(){
    background(230, 255, 230);
    Engine.update(engine);
    player.display();
    ground.display(); 

    coin.display();
    coin1.display();
    coin2.display();
    coin3.display();
    coin4.display();
    coin5.display();
    coin6.display();
    coin7.display();
    coin8.display();
    coin9.display();

    if(detectollision(player, coin) || detectollision(player, coin1) || detectollision(player, coin2) || detectollision(player, coin3) || 
    detectollision(player, coin4) || detectollision(player, coin5) || detectollision(player, coin6) || detectollision(player, coin7) || 
    detectollision(player, coin8) || detectollision(player, coin9)){
        console.log("It is working.")
    }
} 

function keyPressed(){
    if(keyCode === 32){
       player.jump();
     }
     if(keyCode === LEFT_ARROW){
        player.move(-5,0);
      }
      if(keyCode === RIGHT_ARROW){
        player.move(5,0);
      }
}


function detectollision(lstone,lmango){

 var mangoBodyPosition = lmango.body.position;
 var stoneBodyPosition = lstone.body.position;
  
  var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


    
