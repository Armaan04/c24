
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  ball1
var ground1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1= new ball(200,450,40,40)
	ground1= new ground(400,670,800,20)
	rect1=createSprite(650,650,200,20)
	rect2=createSprite(550,590,20,100)
	rect3=createSprite(750,590,20,100)

	rect1.shapeColor="red"
	rect2.shapeColor="red"
	rect3.shapeColor="red"



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball1.display();
 ground1.display();
 rect1.display();
 rect2.display();
 rect3.display();

}

function keyPressed(){
	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:85, y:-85})
}

