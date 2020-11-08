
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	//this.image = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
    tree1 =  new tree(810,180,300, PI/2);
	stone1 = new stone(100,100);
	mango1= new mango(200,200);
	mango2= new mango(200,200);
	mango3= new mango(200,200);
	mango4= new mango(200,200);
	mango5= new mango(200,200);
	mango6= new mango(200,200);
	mango7= new mango(200,200);
	mango8= new mango(200,200);
	mango9= new mango(200,200);
	mango10= new mango(200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  drawSprites();
 
}



