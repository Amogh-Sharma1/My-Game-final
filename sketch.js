var jet, jetimg
var star, starsimg
var run, runimg
var sky, skyimg
var bird, birdimg
var bullet, bulletimg



function preload() {
  jetimg = loadImage("Jet.png")
  starsimg = loadImage("Star.png")
  runimg = loadImage("Runaway.jpg") 
  skyimg = loadImage("Sky.jpg")
  bulletimg = loadImage("bullet-removebg-preview.png")
  birdimg = loadImage("depositphotos_240669998-stock-illustration-front-view-flying-sparrow-bird-removebg-preview.png")
}
  function setup() {
  createCanvas(windowWidth ,windowHeight);
  sky = createSprite(400, 200,width,height ) 
  sky.addImage(skyimg)
  sky.scale = 10
  sky.velocityY = 10
  
  jet = createSprite(width/2,height/2)
  jet.addImage(jetimg)



}

function draw() {
  background(255,255,255);  
  Star()
  bird()
  gun()
  if(sky.y >height){
    sky.y = height/2
  }

  if(keyDown("D")){
    jet.position.x = jet.position.x + 10
  }
  if(keyDown("A")){
    jet.position.x = jet.position.x - 10
  }
  if(keyDown("S")){
    jet.position.y = jet.position.y + 10
  }
  if(keyDown("W")){
    jet.position.y = jet.position.y - 10
  }
  drawSprites();
}

function Star() {
if (frameCount % 100 === 0) {
  var star = createSprite(random(0,width),random(0,height/2))
  star.addImage(starsimg)
  star.scale = 0.5
  star.velocityY = + 2
}
}
function bird() {
  if (frameCount % 1 === 0){
    var bird = createSprite(random(0,width),0)
    bird.addImage(birdimg)
    bird.scale = 0.3
    bird.velocityY = + 1
  }
}
function gun(){
  if(keyDown("space")){
    var bullet = createSprite(jet.x,jet.y)
    bullet.addImage(bulletimg)
    bullet.scale = 0.1
    bullet.velocityY = - 1000
  }

}