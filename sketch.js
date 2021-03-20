var car
var wall
var speed
var gamestate="play"
function setup() {
  createCanvas(400,400);
 car=createSprite(20,200,20,20);
  car.veloictyX=speed
  wall=createSprite(380,200,20,100)
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: car.velocityX=ra=random(2,4);
              break;
      case 2: car.velocityX=r=random(5,7);
              break;
      case 3: car.velocityX=a=random(8,10);
              break;
     
      default: break;
    }
  if(gamestate==="play"){
  if(isTouching(car,wall)&&rand===1){
    text("condition : good",200,200)
    car.shapeColor="green"
        gamestate="end"
}
  else{
    car.shapecolor="white"
  }
  if(isTouching(car,wall)&&rand===2){
    text("condition : average",200,200)
        car.shapeColor="yellow"
        gamestate="end"

  }
    else{
    car.shapecolor="white"
  }
  if(isTouching(car,wall&&rand===3)){
    text("condition : lethal",200,200)
            car.shapeColor="red"
    gamestate="end"
}
      else{
    car.shapecolor="white"
  }
}
  if(gamestate==="end"){
    car.velocityX=0
  }
}
function isTouching(arg1,arg2)
{
  if (arg1.x - arg2.x < arg1.width/2 + arg2.width/2 && arg2.x - arg1.x < arg2.width/2 + arg1.width/2 && arg1.y - arg2.y < arg2.width/2 + arg1.width/2 && arg2.y - arg1.y < arg2.width/2 + arg1.width/2)
    
        {
     return true;
    }
    else {
      return false;
    }
    
}