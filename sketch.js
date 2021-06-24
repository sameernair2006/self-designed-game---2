var bg,bg1;
var flag = 1;
var gameStates = "select_level";
var level1button,level2button,level3button;
var jack,jackImg;

function preload() {
 
  bg = loadImage("castle.jpg");
  bg1 = loadImage("level1bg.jpg");
  jackImg = loadImage("Jack.png");
  
  
}

function setup() {
  var canvas = createCanvas(800,400)
  
  level1button = createButton("Level1");
  level2button = createButton("Level2");
  level3button = createButton("Level3");

  level1button.position(200,150);
  level2button.position(400,150);
  level3button.position(600,150);

  jack = createSprite(50,300);
  jack.addImage(jackImg);
  jack.scale = 0.4;
  jack.visible = false;
  
  
}

function draw() {
  if(gameStates === "select_level"){
    background(bg);

    level1button.mousePressed(()=>{
    hide();
    gameStates = "level1_Play"
      
    });
  }
  if(gameStates === "level1_Play"){
    background(bg1);
    jack.visible = true;
    
    moveJack();
  }
  fill("black")
  text(mouseX + "  " + mouseY,400,20);
  
  //level();
  drawSprites();
}

function hide(){
  level1button.hide();
  level2button.hide();
  level3button.hide();
}

function show(){
  level1button.show();
  level2button.show();
  level3button.show();
}

function moveJack(){
  if(keyDown(RIGHT_ARROW)){
    jack.x = jack.x + 5;
  }

  if(keyDown(LEFT_ARROW)){
    jack.x = jack.x - 5;
  }

  if(keyDown(UP_ARROW)){
    jack.velocityY = -5;
  }
  jack.velocityY = jack.velocityY + 0.5;
}