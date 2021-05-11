var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("black")
    if (keyDown("space")){
       ball.velocityY=-10

    }
    ball.velocityY=ball.velocityY+0.05
    
    drawSprites();
}


