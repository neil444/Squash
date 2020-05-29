var paddle, playerScore, gameState, ball;


function setup() {
  
createCanvas(400,400);

//create a user paddle sprite
paddle = createSprite(390,200,10,70);


//create the pong ball
ball = createSprite(370,200,12,12);


gameState = "serve";
}

function draw() {  
  
  background("yellow");
  edges = createEdgeSprites();
  //display Scores
  
  //draw dotted lines
  for (var i = 0; i < 400; i+=20) {
     line(200,i,200,i+10);
  }

  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }

  if (gameState === "over") {
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }

  if (keyDown("r")) {
    gameState = "serve";
    
  }
text("Play vitual squash",175,150);

 
  if (keyDown("space") && gameState == "serve") {
    ball.velocityX = 5;
    ball.velocityY = 5;
    gameState = "play";
  }

  
  paddle.y = World.mouseY;




  if(ball.isTouching(paddle)){
    hitSound.play();
    ball.x = ball.x - 5;
    ball.velocityX = -ball.velocityX;
  }


  if(ball.isTouching(edges[0])){
    hitSound.play();
    ball.x = ball.x + 5;
    ball.velocityX = -ball.velocityX;
  }

  

  if (ball.x > 400){
     ball.x = 370;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    gameState = "serve";
  }
    
  

  
  if (ball.isTouching(edges[2]) || ball.isTouching(edges[3])) {
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    wall_hitSound.play();
  }

  
  drawSprites();
}
