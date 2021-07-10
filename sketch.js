var astronaut,astronautImg;
var sleep,bath,gym,brush,move,drink,eat;
var issImg;


function preload(){
    astronautImg=loadAniamtion("bath1.png,bath2.png");
    astronautImg=loadAniamtion("brush.png");
    astronautImg=loadAniamtion("drink1.png,drink2.png");
    astronautImg=loadAniamtion("eat1.png,eat2.png");
    astronautImg=loadAniamtion("gym1.png,gym2.png,gym11.png,gym12.png");
    astronautImg=loadAniamtion("movepng,move1.png");
    astronautImg=loadAniamtion("sleep.png");
    issImg=loadImage("iss.png");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var astronaut = createSprite(300,230);
  astronaut.scale= 0.1;
  
}

function draw() {
  background(255,255,255); 
  textSize(15)
  fill("blue")
  text("upArrow=brushing",20,25)
  text("DownArrow=gymming",20,25)
  text("RightArrow=bathing",20,25)
  text("LeftArrow=eating",20,25)
  text("key M=move",20,25)

  
  if(keyDown("UP_ARROW")) {
    astronaut.addAniamtion("brushing",brush);
    astronaut.changeAniamtion("brushing");
    astronaut.y=350;
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("DOWN_ARROW")) {
     astronaut.addAniamtion("gymming",gym);
     astronaut.changeAniamtion("gymming");
     astronaut.y=350;
     astronaut.velocityX=5;
     astronaut.velocityY=-5;
   }

   if(keyDown("RIGHT_ARROW")) {
     astronaut.addAniamtion("bathing",bath);
     astronaut.changeAniamtion("bathing");
     astronaut.y=350;
     astronaut.velocityX=5;
     astronaut.velocityY=-5;
   }

   if(keyDown("LEFT_ARROW")) {
     astronaut.addAniamtion("eating",eat);
     astronaut.changeAniamtion("eating");
     astronaut.y=350;
     astronaut.velocityX=5;
     astronaut.velocityY=-5;
   }

   if(keyDown("m") ){
     astronaut.addAniamtion("moving",move);
     astronaut.changeAniamtion("moving");
     astronaut.y=350;
     astronaut.velocityX=5;
     astronaut.velocityY=-5;
   }


  drawSprites();
}