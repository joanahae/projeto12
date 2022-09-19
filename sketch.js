var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png");
  boyImg = loadAnimation ("Jake1.png", "Jake2.png", "jake3.png", "jake4.png","jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
  var path=createSprite(200,200,400,400);
  path.addImage("path",pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.y=path.width/2;
path.velocityY = 4;
path.scale=1.2;

boy=createSprite(200,200,20,20);
boy.addAnimation("boy",boyImg);
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mousexX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
