var bg, bgImg;
var player, shooterImg, shooter_shooting;
var walls, wall, wall1, wall2
var edges
var playerimg
function preload() {

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
playerimg=loadImage("assets/operator.png")
  bgImg = loadImage("assets/map.png")

}

function setup() {


  createCanvas(windowWidth, windowHeight);
  edges = createEdgeSprites()
  //adding the background image
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 1.2

  


  //creating the player sprite
  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player.addImage(playerimg)

  player.scale = 0.15
  player.debug = true
  player.setCollider("circle",0,0,60);
  player.shapeColor = "green"
  wall = new Group()
}
function gamewalls() {
  wall1 = createSprite(450, 40, 150, 7)
  wall2 = createSprite(370, 120, 7, 170)
  wall3=createSprite(618,40,150,7)

  wall.add(wall1)
  wall.add(wall2)
}
function draw() {
  background(0);
  angleMode(DEGREES)
player.rotation = (mouseX,mouseY)
  gamewalls()
  player.collide(wall1)
  player.collide(wall2)
  player.collide(edges[0])
  player.collide(edges[1])
  player.collide(edges[2])
  player.collide(edges[3])
  //moving the player up and down and making the game mobile compatible using touches
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 10
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 10
  }
  if (keyDown("LEFT_ARROW") || touches.length > 0) {
    player.x = player.x - 10
  }
  if (keyDown("RIGHT_ARROW") || touches.length > 0) {
    player.x = player.x + 10
  }

  //release bullets and change the image of shooter to shooting position when space is pressed
  if (keyWentDown("space")) {

    player.addImage(shooter_shooting)

  }

  //player goes back to original standing image once we stop pressing the space bar
  else if (keyWentUp("space")) {
    player.addImage(shooterImg)
  }

  drawSprites();

  textSize(17)
  fill("white")
  text("X: "+mouseX+" y: "+mouseY, mouseX , mouseY)

}
