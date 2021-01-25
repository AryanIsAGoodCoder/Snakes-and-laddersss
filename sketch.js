const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var red,redImage,snakeImage,snake,dice;
var roll,backgroundImage;
var one,two,three,four,five,six;
var oneImg,twoImg,threeImg,fourImg,fiveImg,sixImg;
var engine, world;
var ran,ranLeft;
var row,row2,row3,row4,row5,row6,row7,row8,row9,row10;
var blue,blueImage;
var moves;
var ironMan,thanos;
var ironManImage,thanosImage;
var blueButton;
var blueSuperHero,blueSuperHeroImage;
var introImage;
var lostImage,winImage;
var textBox,avengersImage,thanosImage2,goingUpImage1,goingUpImage2;
var cross,cross2,cross3,cross4,cross5,crossImage;
var finalImage;
var ladder2,snake2;
var sound,snakeSound,ladderSound;
var cancel,cancel2;
var final, final2,finalImage2;



function preload() 
{
  backgroundImage = loadImage("images/backImageForGood.png");
  oneImg = loadImage("images/sprite_5.png");
  twoImg = loadImage("images/sprite_4.png");
  threeImg = loadImage("images/sprite_3.png");
  fourImg = loadImage("images/sprite_2.png");
  fiveImg =loadImage("images/sprite_1.png");
  sixImg= loadImage("images/sprite_6.png");
  redImage = loadImage("images/red.png");
  ladderImage = loadImage("images/ladder.png");
  ladderImage2 = loadImage("images/ladderSmall.png");
  snakeImage = loadImage("images/snake.png");
  blueImage = loadImage("images/blue.png");
  ironManImage = loadImage("images/ironMan.png");
  thanosImage = loadImage("images/thanos.png");
  introImage = loadImage("gameState/intro.png");
  lostImage = loadImage("gamestate/lose.png");
  winImage = loadImage("gameState/win.png");
  avengersImage = loadImage("images/avengers.png");
  thanosImage2 = loadImage("images/thanosImage.png");
  goingUpImage1 = loadImage("images/avengerGoingUp.png");
  goingUpImage2 = loadImage("images/thanosGoingup.png");
  crossImage = loadImage("images/cross.png");
  finalImage = loadImage("gameState/final stage.png");
  finalImage2 = loadImage("gameState/final stage.png");

  sound = loadSound("sounds/Whoosh sound effect.mp3");
  snakeSound = loadSound("sounds/snakeSound.mp3");
  ladderSound = loadSound("sounds/ladderSound.mp3");

}

function setup() 
{
  createCanvas(1500,850);
  angleMode(DEGREES);
  frameRate(10);

  ironMan = createSprite(1100,200);
  ironMan.addImage("iron man image",ironManImage);
  ironMan.scale = 0.3;

  thanos= createSprite(1100,500);
  thanos.addImage("iron man image",thanosImage);
  
  engine = Engine.create();
  world = engine.world;

  moves = 1;

  ladder = createSprite(200,400,50,50);
  ladder.addImage("ffff",ladderImage);
  ladder.scale = 0.45;
  ladder.rotation = 35;

  ladder2 = createSprite(600,410,50,50);
  ladder2.addImage("ffff",ladderImage2);
  ladder2.scale = 0.45;
  ladder2.rotation = -30;


  snake = createSprite(600,600,20,20);
  snake.addImage("dddd",snakeImage);
  snake.scale = 0.17;
  snake.rotation = 30;

  snake2 = createSprite(300,200,20,20);
  snake2.addImage("dddd",snakeImage);
  snake2.scale = 0.17;
  snake2.rotation = 40;

  row = createSprite(1145,765,600,20);
  row2 = createSprite(-290,685,600,20);
  row3 = createSprite(1145,605,600,20);
  row4 = createSprite(-295,525,600,20);
  row5 = createSprite(1145,445,600,20);
  row6 = createSprite(-295,360,600,20);
  row7 = createSprite(1145,285,600,20);
  row8 = createSprite(-295,208,600,20);
  row9 = createSprite(1145,125,600,20);
  row10 = createSprite(-295,45,600,20);

  //row.visible = false;
  //row2.visible = false;
  //row3.visible = false;
  //row4.visible = false;
  //row5.visible = false;
  //row6.visible = false;
  //row7.visible = false;
  //row8.visible = false;
  //row9.visible = false;
  //row10.visible = false;

  red = createSprite(30,765,20,20);
  red.addImage("red peice",redImage);
  red.scale = 0.15;

  blue = createSprite(65,765,20,20);
  blue.addImage("blue peice",blueImage);
  blue.scale = 0.15;

  button = createButton( " Avengers    Roll " );
  button.position(1600,50);

  blueButton = createButton( " Thanos    Roll " );
  blueButton.position(1600,350);
  
  cancel = createButton(" X ");
  cancel.position(1410,45);

  cancel2 = createButton(" X ");
  cancel2.position(1110,45);

  intro = createSprite(750,425);
  intro.addImage(" avengers intro image",introImage);
  intro.scale = 1.4; 
  
  final = createSprite(750,425);
  final.addImage(" win image ",finalImage2);
  final.scale = 1.4;
  final.visible = false;
  

}
function draw() 
{
  background(backgroundImage);  
  showNum();
  
 
  snakesMakingThePlayerGoDown();
  ladderMakingThePlayerGoUP();
 
  Engine.update(engine);
  strokeWeight(5);
    
  button.mousePressed
  ( function() {
    ran = random(1,6);
    ranLeft = random(1,6);

    ran = Math.round(ran);
    ranLeft = Math.round(ranLeft);

    moves++;
    //sound.play();
    redMoves();
  })

  blueButton.mousePressed
  ( function() {
    ranBlue = random(1,6);
    ranRight = random(1,6);

    ranBlue = Math.round(ranBlue);
    ranRight = Math.round(ranRight);

    moves++;
    sound.play();

    blueMoves();
  })

  cancel.mousePressed
  ( function() {

    intro.visible = false;
    

    button.position(850,45);
    blueButton.position(850,350);
    
  })

  cancel2.mousePressed
  ( function() {

    final.destroy();
    
  })

 if(intro.visible === false) 
  {

    cancel.hide();
    
  }
  

  if(blue.isTouching(row10)) 
  {

    var lost = createSprite(750,425);
    lost.addImage(" lost image ",lostImage);
    lost.scale = 1.4;

    button.hide();
    blueButton.hide();

  }

  if(ran === 1 &&  ranLeft === 1) 
  {

    ran = random(1,6);
    ranLeft = random(1,6);

  }

  if(ran === 2 &&  ranLeft === 2) 
  {

    ran = random(1,6);
    ranLeft = random(1,6);

  }

  if(ran === 3 &&  ranLeft === 3) 
  {

    ran = random(1,6);
    ranLeft = random(1,6);

  }

  if(ran === 4 &&  ranLeft === 4) 
  {

    ran = random(1,6);
    ranLeft = random(1,6);

  }

  if(ran === 5 &&  ranLeft === 5) 
  {

    ran = random(1,6);
    ranLeft = random(1,6);

  }

  if(ran === 6 &&  ranLeft === 6) 
  {

    ran = random(1,6);
    ranLeft = random(1,6);

  }

  if(red.isTouching(row10)) 
  {

    var win = createSprite(750,425);
    win.addImage(" win image ",winImage);
    win.scale = 1.4;

    button.hide();
    blueButton.hide();

  }

  if(red.y === 125 || blue.y === 125) 
  { 

    snake.visible = false;

    ladder.visible = false;

    for(var q = 130 ; q < 880 ; q = q + 160) 
    {
      cross = createSprite(q,45,20,20);
      cross.addImage("cross image",crossImage);
      cross.scale = 0.4;
  
    }

    final.visible = true;

    button.position(1610,45);
    blueButton.position(1610,350);

  }

  if(red.x === 110  && red.y === 45) 
  {

    red.x = 30;
    red.y = 760;

  }
  
  if(red.x === 270 && red.y === 45) 
  {

    red.x = 30;
    red.y = 760;

  }

  if(red.x === 430 && red.y === 45) 
  {

    red.x = 30;
    red.y = 760;

  }

  if(red.x === 590 && red.y === 45) 
  {

    red.x = 30;
    red.y = 760;

  }

  if(red.x === 750 && red.y === 45) 
  {

    red.x = 30;
    red.y = 760;

  }
    
  if(blue.x === 145 && blue.y === 45) 
  {
  
    blue.x = 65;
    blue.y = 760;
  
  }
  if(blue.x === 305 && blue.y === 45) 
  {
  
    blue.x = 65;
    blue.y = 760;
  
  }

  if(blue.x === 465 && blue.y === 45) 
  {
  
    blue.x = 65;
    blue.y = 760;
  
  }

  if(blue.x === 625 && blue.y === 45) 
  {
  
    blue.x = 65;
    blue.y = 760;
  
  }

  if(blue.x === 785 && blue.y === 45) 
  {
  
    blue.x = 65;
    blue.y = 760;
  
  }
  
  console.log(" red.y    "    + red.y    );
  console.log(" ran      "    + ran      );
  console.log(" red.x    "    + red.x    );
  console.log(" row.x    "    + row.x    ); 
  console.log(" blue.x   "    + blue.x   );
  console.log(" blue.y   "    + blue.y   );
  console.log(" ran left "    + ranLeft  );
  console.log(" ladder.x "    + ladder.x );
  console.log(" ladder.y "    + ladder.y );
  console.log(" moves    "    + moves    );
  
  line(10,810,10,10); 
  line(90,810,90,10); 
  line(170,810,170,10); 
  line(250,810,250,10);
  line(330,810,330,10);
  line(410,810,410,10);
  line(490,810,490,10);
  line(570,810,570,10);
  line(650,810,650,10);
  line(730,810,730,10);
  line(810,810,810,10);

  line(810,10,10,10); 
  line(810,90,10,90); 
  line(810,170,10,170);
  line(810,250,10,250);
  line(810,330,10,330);
  line(810,410,10,410);
  line(810,490,10,490);
  line(810,570,10,570);
  line(810,650,10,650);
  line(810,730,10,730);
  line(810,810,10,810);
 
  
  drawSprites();
} 

function showNum() 
{

  textFont('Georgia');
  //1 - 10
  var j = 2;
  for(var i = 145 ; i < 865 ; i = i + 80) 
  {

    fill(0);
    textSize(20);
    text(j++,i,755); 

  }

  //11 - 20
  var g = 20;
  for(var f = 65 ; f < 865 ; f = f + 80) 
  {

    fill(0);
    textSize(20);
    text(g--,f,675); 

  }

  //21 - 30
  var a = 30;
  for(var s = 65 ; s < 865 ; s = s + 80) 
  {

    fill(0);
    textSize(20);
    text(a--,s,595); 

  }

  //31 - 40
  var q = 40;
  for(var m = 65 ; m < 865 ; m = m + 80) 
  {

    fill(0);
    textSize(20);
    text(q--,m,515); 

  }

  //41 - 50
  var t = 50;
  for(var n = 65 ; n < 865 ; n = n + 80) 
  {

    fill(0);
    textSize(20);
    text(t--,n,435);

  }

  //51 - 60
  var r = 60;
  for(var v = 65 ; v < 865 ; v = v + 80) 
  {

    fill(0);
    textSize(20);
    text(r--,v,355);

  }

  //61 - 70
  var p = 70
  for(var x = 65 ; x < 865 ; x = x + 80) 
  {

    fill(0);
    textSize(20);
    text(p--,x,275);

  }

  //71 - 80
  var e = 80;
  for(var w = 65 ; w < 865 ; w = w + 80) 
  {

    fill(0);
    textSize(20);
    text(e--,w,195);

  }

  //81 - 90
  var q = 90;
  for(var b = 65 ; b < 865 ; b = b + 80) 
  {
    fill(0);
    textSize(20);
    text(q--,b,115);
  }

  //91 - 100
  var y = 100;
  for(var z = 45 ; z < 785 ;  z = z + 80) 
  {

    fill(0);
    textSize(20);
    text(y--,z,35);

  }

} 

function moveRight() 
{
  if(ran ===1)
  {

    one = createSprite(870,200,20,20);
    one.addImage("dice one",oneImg);
    
    red.x = red.x + 80;

  } 
  else if(ran===2)
  {

    two = createSprite(870,200,20,20);
    two.addImage("dice two",twoImg);

    red.x = red.x + 80*2;

  }
  else if(ran===3)
  {

    three = createSprite(870,200,20,20);
    three.addImage("dice three",threeImg);

    red.x = red.x + 80*3;
  
  }
  else if(ran===4) 
  {

    four = createSprite(870,200,20,20);
    four.addImage("dice four",fourImg);

    red.x = red.x + 80*4;

  }
  else if(ran==5)
  {

    five = createSprite(870,200,20,20);
    five.addImage("dice five",fiveImg);

    red.x = red.x + 80*5;

  }
  else if(ran===6) 
  {

    six = createSprite(870,200,20,20);
    six.addImage("dise six",sixImg);

    red.x = red.x + 80*6;

  } 
}
function moveLeft() 
{
  if ( ranLeft===1) 
  { 

    one = createSprite(870,200,20,20);
    one.addImage("dice one",oneImg);

    red.x = red.x -80;

  } else if (  ranLeft===2) 
  { 

    two = createSprite(870,200,20,20);
    two.addImage("dice two",twoImg);

    red.x = red.x -80*2;

  } 
  else if (  ranLeft===3) 
  { 

    three = createSprite(870,200,20,20);
    three.addImage("dice three",threeImg);

    red.x = red.x -80*3;

  }
  else if (  ranLeft===4) 
  { 

    four = createSprite(870,200,20,20);
    four.addImage("dice four",fourImg);

    red.x = red.x -80*4;

  }
  else if ( ranLeft===5) 
  { 
    
    five = createSprite(870,200,20,20);
    five.addImage("dice five",fiveImg);

    red.x = red.x -80*5;

  }
  else if (  ranLeft===6) 
  { 
    
    six = createSprite(870,200,20,20);
    six.addImage("dise six",sixImg);

    red.x = red.x -80*6;

  }
}
function redMoves() {

  if(red.y === 765) 
  {

    moveRight();

  }
  //going up row 2
  if(red.isTouching(row)) 
  {

    red.y = red.y -80;
    red.x = 765;

  }

  if(red.y === 685) 
  {

    moveLeft();

  }

  if(red.isTouching(row2)) 
  {

    red.y = red.y - 80;
    red.x = 45;

  }

  if(red.y === 605) 
  {

    moveRight();

  }

  if(red.isTouching(row3)) 
  {

    red.y = red.y - 80;
    red.x = 765;

  }

  if(red.y === 525) 
  {

    moveLeft();

  }

  if(red.isTouching(row4)) 
  {

    red.y = red.y - 80;
    red.x = 45;

  }

  if(red.y === 445)
  {

    moveRight();

  }

  if(red.isTouching(row5)) 
  {

    red.y = red.y - 80;
    red.x = 765;

  }

  if(red.y === 365) 
  {

    moveLeft();

  }

  if(red.isTouching(row6)) 
  {

    red.y = red.y - 80;
    red.x = 45;

  }

  if(red.y === 285) 
  {

    moveRight();

  }

  if(red.isTouching(row7)) 
  {

    red.y =red.y - 80;
    red.x = 765;

  }

  if(red.y === 205) 
  {

    moveLeft(); 

  }

  if(red.isTouching(row8)) 
  {

    red.y = red.y - 80;
    red.x = 45;

  }

  if(red.y === 125) 
  {

    moveRight();

  }

  if(red.isTouching(row9)) 
  {

    red.y = red.y - 80;
    red.x = 765;

  }

  if(red.y === 45) 
  {

    moveLeft();

  }
}
function moveRightBlue() 
{

  if(ranRight ===1)
  {

    one = createSprite(870,200,20,20);
    one.addImage("dice one",oneImg);

    blue.x = blue.x + 80;

  } 
  else if(ranRight===2)
  {

    two = createSprite(870,200,20,20);
    two.addImage("dice two",twoImg);

    blue.x = blue.x + 80*2;

  }
  else if(ranRight===3)
  {

    three = createSprite(870,200,20,20);
    three.addImage("dice three",threeImg);

    blue.x = blue.x + 80*3;

  }
  else if(ranRight===4) 
  {

    four = createSprite(870,200,20,20);
    four.addImage("dice four",fourImg);

    blue.x = blue.x + 80*4;

  }
  else if(ranRight==5)
  {

    five = createSprite(870,200,20,20);
    five.addImage("dice five",fiveImg);

    blue.x = blue.x + 80*5;

  }
  else if(ranRight===6) 
  {

    six = createSprite(870,200,20,20);
    six.addImage("dise six",sixImg);

    blue.x = blue.x + 80*6;

  }
}
function moveLeftBlue() 
{

  if ( ranBlue===1) 
  {

    one = createSprite(870,200,20,20);
    one.addImage("dice one",oneImg);

    blue.x = blue.x -80;

  } 
  else if (  ranBlue===2) 
  {

    two = createSprite(870,200,20,20);
    two.addImage("dice two",twoImg);


    blue.x = blue.x -80*2;

  } 
  else if (  ranBlue===3) 
  { 

    three = createSprite(870,200,20,20);
    three.addImage("dice three",threeImg);

    blue.x = blue.x -80*3;

  }
  else if (  ranBlue===4) 
  { 

    four = createSprite(870,200,20,20);
    four.addImage("dice four",fourImg);

    blue.x = blue.x -80*4;

  }
  else if ( ran===5) 
  { 

    five = createSprite(870,200,20,20);
    five.addImage("dice five",fiveImg);

    blue.x = blue.x -80*5;

  }
  else if (  ranBlue===6) 
  { 

    six = createSprite(870,200,20,20);
    six.addImage("dise six",sixImg);

    blue.x = blue.x -80*6;

  }
}

function blueMoves() 
{

  if(blue.y === 765) 
  {

    moveRightBlue();

  }

  if(blue.isTouching(row)) 
  {

    blue.y = blue.y - 80;
    blue.x = 866;

  }

  if(blue.y === 685) 
  {

    moveLeftBlue();

  }

  if(blue.isTouching(row2)) 
  {

    blue.y = blue.y - 80;
    blue.x = 65;

  }

  if(blue.y === 605) 
  {

    moveRightBlue();

  }

  if(blue.isTouching(row3)) 
  {

    blue.y = blue.y - 80;
    blue.x = 785;

  }

  if(blue.y === 525) 
  {

    moveLeftBlue();

  }

  if(blue.isTouching(row4)) 
  {

    blue.y = blue.y - 80;
    blue.x = 65;

  }

  if(blue.y === 445) 
  {

    moveRightBlue();

  }

  if(blue.isTouching(row5)) 
  {

    blue.y = blue.y - 80;
    blue.x = 785;

  }

  if(blue.y === 365) 
  {

    moveLeftBlue();

  }

  if(blue.isTouching(row6)) 
  {

    blue.y = blue.y - 80;
    blue.x = 65;

  }

  if(blue.y === 285) 
  {

    moveRightBlue();

  }

  if(blue.isTouching(row7)) 
  {

    blue.y = blue.y - 80;
    blue.x = 785;

  }

  if(blue.y === 205) 
  {

    moveLeftBlue();

  }

  if(blue.isTouching(row8)) 
  {

    blue.y = blue.y - 80;
    blue.x = 65;

  }

  if(blue.y === 125) 
  {

    moveRightBlue();

  }

  if(blue.isTouching(row9)) 
  {

    blue.y = blue.y - 80;
    blue.x = 785;

  }

  if(blue.y === 45) 
  {

    moveLeftBlue();

  }
}

function snakesMakingThePlayerGoDown () 
{
   if(red.x === 525 && red.y === 525) 
  {

    red.x = 685;
    red.y = 685;

    textBox = createSprite(1230,350);
    textBox.addImage("avengers and thanos",thanosImage2);
    textBox.scale = 0.5;
    textBox.lifetime = 50;

    snakeSound.play();
  
  }

  if(blue.x === 545 && blue.y === 525) 
  {

    blue.x = 705;
    blue.y = 685;

    textBox = createSprite(1230,70);
    textBox.addImage("avengers and thanos",avengersImage);
    textBox.scale = 0.5;
    textBox.lifetime = 50;

    snakeSound.play();
  
  }

  if(red.x === 205 && red.y === 125) 
  {

    red.x = 365;
    red.y = 285;

    textBox = createSprite(1230,350);
    textBox.addImage("avengers and thanos",thanosImage2);
    textBox.scale = 0.5;
    textBox.lifetime = 50;

    snakeSound.play();
  
  }

  if(blue.x === 225 && blue.y == 125) 
  {

    blue.x = 385;
    blue.y = 285;

    textBox = createSprite(1230,70);
    textBox.addImage("avengers and thanos",avengersImage);
    textBox.scale = 0.5;
    textBox.lifetime = 50;

    snakeSound.play();
  
  }

}

function ladderMakingThePlayerGoUP ()
{
  
  if (red.x === 125 && red.y === 525) 
  {

    red.x = 285;
    red.y = 285;

    textBox = createSprite(1230,70);
    textBox.addImage("avengers and thanos",goingUpImage1);
    textBox.scale = 0.5;
    textBox.lifetime = 50;

    ladderSound.play();
  
  }

  if(blue.x === 145 && red.y === 525)
  {

    blue.x = 305;
    blue.y = 285;

    textBox = createSprite(1230,350);
    textBox.addImage("avengers and thanos",goingUpImage2);
    textBox.scale = 0.5;
    textBox.lifetime = 50;

    ladderSound.play();

  }

  if(blue.x === 705 && blue.y === 525) 
  {

    blue.x = 625;
    blue.y = 365;

    textBox = createSprite(1230,350);
    textBox.addImage("avengers and thanos",goingUpImage2);
    textBox.scale = 0.5;
    textBox.lifetime = 50;

    ladderSound.play();

  }

  if(red.x === 685 && red.y === 365) 
  {

    red.x = 605;
    red.y = 365;

    textBox = createSprite(1230,70);
    textBox.addImage("avengers and thanos",goingUpImage1);
    textBox.scale = 0.5;
    textBox.lifetime = 50;

    ladderSound.play();

  }

}

