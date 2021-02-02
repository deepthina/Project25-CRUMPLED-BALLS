const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;


var ground1;
var paper1;

var dustbinleft, dustbinright, dustbinbottom;
var dustbinImage;

function preload()
{
	dustbinImage= loadImage("dustbingreen.png");
}

function setup() {
createCanvas(1000, 700);

engine = Engine.create();
world = engine.world;

//Create the Bodies Here.

ground1 = new Ground(500,600,1000,20);
paper1 = new Paper(150,598,70);

//dustbinbottom = new Dustbin(780,585,150,10);
dustbinleft = new Dustbin(610,550,10,60);
dustbinright = new Dustbin(785 ,530,20,90);

Engine.run(engine);
 
}


function draw() {
 // rectMode(CENTER);
  background("blue");
 
  //drawSprites();
 
  ground1.display();
  paper1.display();

  //dustbinbottom.display();
  image(dustbinImage,700,540,160,100);
  dustbinleft.display();
  dustbinright.display();
}



function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body, paper1.body.position, {x:70,y:-70})
}
}