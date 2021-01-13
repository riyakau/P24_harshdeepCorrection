
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Paper=new paper(50,85,20)
	bottomground=new Ground(500,670,width,25);
	rightbin=new Dustbin(580+20,600,20,80)
	leftbin=new Dustbin(420-20,600,20,80)
	bottombin=new Dustbin(500,650,220,20)


	
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  

  Paper.display()
  bottomground.display()
  bottombin.display()
  rightbin.display()
  leftbin.display()
  
 
}

function keyPressed(){

	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(Paper.body,Paper.body.position,{x:15,y:-13})


	}
}






