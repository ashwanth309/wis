var bg;
var bg2;
var nanna1, nanna1Image;
var nanna2, nanna2Image;
var nanna3, nanna3Image;
var backgroundMusic;
var cover,coverImage;
var snow = [];
var drop = [];


function preload() {
  bg = loadImage("house.jpg");
  bg2=loadImage("bg2.jpeg")
  nanna1Image = loadImage("nanna1.png");
  nanna2Image = loadImage("nanna2.png");
  nanna3Image = loadImage("nanna3.png");
  backgroundMusic=loadSound("happy-birthday.mp3");
  coverImage=loadImage("background.jpg")

}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  //createSprite(400, 200, 50, 50);
 
 
  bgsprite=createSprite(displayWidth/2,displayHeight/3);
  bgsprite.addImage("bg1",bg);

  nanna1 = createSprite(1000,580);
  nanna1.addImage(nanna1Image);
  nanna1.scale = 0.7;

  nanna2 = createSprite(650,580);
  nanna2.addImage(nanna2Image);
  nanna2.scale = 0.5;

  nanna3 = createSprite(200,540);
  nanna3.addImage(nanna3Image);
  nanna3.scale = 0.8;

  cover = createSprite(700,300);
  cover.addImage(bg2);
  cover.scale=0.90;
  
  if(cover.visible===true){
    
    textSize(30);
    fill("orange");
    text("CLICK THE PRESS",500,500)
    
  }


  for (var i = 0; i < 15; i++) {
    snow.push(new Snow());
  }

  for (var i = 0; i < 15; i++) {
    drop.push(new Drop());
  }

}


function draw() {
  background("white")
  
  drawSprites();
  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
    snow[i].update();
  }
  for (var i = 0; i < drop.length; i++) {
    drop[i].display();
    drop[i].update();
  }
  stroke (4);
  textSize(30);
  fill ("red")
  text("🎂🎂🎂HAPPY BIRTHDAY  TO YOU NANNA🎂🎂🎂",300,150);
 
 
}



