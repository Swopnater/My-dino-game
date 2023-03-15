var dragon, dragonFlyingImg;
var fireball, fireballImg;
var PLAY = 1;
var END = 0;
var gamestates = PLAY;
var gameover, restart;
var Dino1, Dino2, Dino3, Dino4, Dino5, Dino6, Dino7, Dino8, Dino9, Dino10;
var DinoGroup;
var bg, bgImg;

function preLoad(){
  dragonFlyingImg = loadAnimation ("dino1.png", "dino2.png", "dino3.png", "dino4.png", "dino5.png", "dino6.png", "dino7.png", "dino8.png", "dino9.png", "dino10.png")
  fireballImg = loadImage("fireBall.png")
  bgImg = loadImage("bg3.png")
}



function setup() {
  createCanvas(1200, 700);
  bg = createSprite (600, 350,1200, 700);
  bg.addImage(bgImg);

}

function draw() {
  background(220)


  drawSprites();
}