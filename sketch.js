var PLAY
var END
var gameState = PLAY
var road, roadImage
var car,carImage
var pinkcar, purplecar, bluecar, yellowcar,whitecar,greencar
var pinkcarImage, purplecarImage, yellowcarImage, bluecarImage, whitecarImage, greencarImage

function preload(){
  roadImage = loadImage("road.jpg");
  carImage = loadImage("car.png");
  pinkcarImage = loadImage("pinkcar.png");
  bluecarImage = loadImage("bluecar.png");
  purplecarImage = loadImage("purplecar.png");
  yellowcarImage = loadImage("yellowcar.png");
  greencarImage = loadImage("greencar.png");
  whitecarImage = loadImage("whitecar.png");
}

function setup() {
 createCanvas(600,400)
  road = createSprite(300,300)
  road.addImage("road",roadImage)
  road.velocityY = 8
  
  car = createSprite(300,400,20,20)
  car.addImage("car",carImage)
  car.scale = 0.3;
  
   pinkG = new Group();
    whiteG = new Group();
   blueG = new Group();
    yellowG = new Group();
   purpleG = new Group()
    greenG = new Group();;
  car.setCollider("rectangle",0,0,300,500)
  //car.debug = true
}

function draw() {
  background(0)
  if(gameState === PLAY){
  if(road.y > 220){
    road.y = 170;
  }
  if(keyDown(RIGHT_ARROW)){
    car.x = car.x+6
  }
  if(keyDown(LEFT_ARROW)){
    car.x = car.x-6
  }
    var select_car = Math.round(random(1,6));

    if (World.frameCount % 50 == 0) {
      if (select_car == 1) {
        pinkC();
      } else if (select_car == 2) {
        greenC();
      } else if (select_car == 3) {
        blueC();
      } else if (select_car == 4) {
        purpleC();
      } else if (select_car == 5) {
        yellowC();
      } else {
        whiteC();
      }
    }   
    if(pinkG.isTouching(car)){
   pinkG.destroyEach();
   greenG.destroyEach();
   yellowG.destroyEach();
   purpleG.destroyEach();
   blueG.destroyEach();
   whiteG.destroyEach();
   car.destroy();
   road.velocityY = 0;
       road.visible = false;
      gameState = END
  }
    if(whiteG.isTouching(car)){
   whiteG.destroyEach();
   greenG.destroyEach();
   purpleG.destroyEach();
   pinkG.destroyEach();
   yellowG.destroyEach();
   blueG.destroyEach(); 
   car.destroy();
   road.velocityY = 0;
       road.visible = false;
      gameState = END
  }
    if(greenG.isTouching(car)){
   greenG.destroyEach();
   pinkG.destroyEach();
   purpleG.destroyEach();
   whiteG.destroyEach();
   yellowG.destroyEach();
   blueG.destroyEach(); 
   car.destroy();
   road.velocityY = 0;
       road.visible = false;
      gameState = END
  }
    if(purpleG.isTouching(car)){
   purpleG.destroyEach();
   greenG.destroyEach();
   pinkG.destroyEach();
   whiteG.destroyEach();
   yellowG.destroyEach();
   blueG.destroyEach(); 
   car.destroy();
   road.velocityY = 0;
       road.visible = false;
      gameState = END
  }
    if(yellowG.isTouching(car)){
   yellowG.destroyEach(); 
   purpleG.destroyEach();
   pinkG.destroyEach();
   greenG.destroyEach();
   whiteG.destroyEach();
   blueG.destroyEach(); 
   car.destroy();
   road.velocityY = 0;
   road.visible = false;    
      gameState = END
  }
    if(blueG.isTouching(car)){
   blueG.destroyEach(); 
   purpleG.destroyEach();
   pinkG.destroyEach();
   greenG.destroyEach();
   whiteG.destroyEach();
   yellowG.destroyEach();
   car.destroy();
   road.velocityY = 0;
   road.visible = false;
      gameState = END
  }
  } 
  if(gameState === END){
    stroke("yellow")
    fill("yellow")
    textSize(90)
    text("GAME OVER!!!",10,200)
    stroke("red")
    fill("white")
    textSize(45)
    text("OH NO...",200,100)
     stroke("red")
    fill("white")
    textSize(45)
    text("WELL TRIED.",200,280)
  }
 drawSprites();
}

function pinkC(){
  pinkcar = createSprite(Math.round(random(70, 530)), 0, 10, 10);
  pinkcar.addImage("pink",pinkcarImage)
  pinkcar.scale = 0.2;
  pinkcar.velocityY = 8;
  pinkcar.lifetime = 150;
  pinkcar.scale = 0.2;
  pinkG.add(pinkcar);
}
  function yellowC(){
  yellowcar = createSprite(Math.round(random(70, 530)), 0, 10, 10);
  yellowcar.addImage("yellow",yellowcarImage)
  yellowcar.scale = 0.2;
  yellowcar.velocityY = 8;
  yellowcar.lifetime = 150;
  yellowcar.scale = 0.5;
  yellowG.add(yellowcar);
}
function blueC(){
  bluecar = createSprite(Math.round(random(70, 530)), 0, 10, 10);
  bluecar.addImage("blue",bluecarImage)
  bluecar.scale = 0.2;
  bluecar.velocityY = 8;
  bluecar.lifetime = 150;
  bluecar.scale = 0.13;
  blueG.add(bluecar);
}
  function greenC(){
  greencar = createSprite(Math.round(random(70, 530)), 0, 10, 10);
  greencar.addImage("green",greencarImage)
  greencar.scale = 0.2;
  greencar.velocityY = 8;
  greencar.lifetime = 150;
  greencar.scale = 0.15;
  greenG.add(greencar);
}
function purpleC(){
  purplecar = createSprite(Math.round(random(70, 530)), 0, 10, 10);
  purplecar.addImage("purple",purplecarImage)
  purplecar.scale = 0.2;
  purplecar.velocityY = 8;
  purplecar.lifetime = 150;
  purplecar.scale = 0.3;
  purpleG.add(purplecar);
}
  function whiteC(){
  whitecar = createSprite(Math.round(random(70, 530)), 0, 10, 10);
  whitecar.addImage("white",whitecarImage)
  whitecar.scale = 0.2;
  whitecar.velocityY = 8;
  whitecar.lifetime = 150;
  whitecar.scale = 0.3;
  whiteG.add(whitecar);
}