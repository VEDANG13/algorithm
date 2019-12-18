var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}
/*var f_rect,m_rect;

function setup() {
  createCanvas(1200,800);
 f_rect= createSprite(200, 200, 50, 80);
 m_rect=createSprite(400,200,80,30);
 f_rect.debug=true;
 m_rect.debug=true;
 f_rect.shapeColor="blue";
 m_rect.shapeColor="red";
 m_rect.velocityY=-5;
 f_rect.velocityY=5;
}

function draw() {
  background(0);  
 /* m_rect.x=World.mouseX;
  m_rect.y=World.mouseY;

  if(m_rect.x-f_rect.x<f_rect.width/2+m_rect.width/2
    && f_rect.x-m_rect.x<f_rect.width/2+m_rect.width/2
    && m_rect.y-f_rect.y/f_rect.height/2+m_rect.height/2
    && f_rect.y-m_rect.y<f_rect.height/2+m_rect.height/2){
    m_rect.shapeColor="purple";
    f_rect.shapeColor="purple";
  }
  else{
    m_rect.shapeColor="green";
    f_rect.shapeColor="green";
  }

if(m_rect.x-f_rect.x<f_rect.width/2+m_rect.width/2
  && f_rect.x-m_rect.x<f_rect.width/2+m_rect.width/2){
    m_rect.velocityX=m_rect.velocityX*(-1);
    f_rect.velocityX=f_rect.velocityX*(-1);
  }
if(m_rect.y-f_rect.y<f_rect.height/2+m_rect.height/2
  && f_rect.y-m_rect.y<f_rect.height/2+m_rect.height/2)  {
    m_rect.velocityY=m_rect.velocityY*(-1);
    f_rect.velocityY=f_rect.velocityY*(-1);
  }

  drawSprites();
}*/