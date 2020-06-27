

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,0,1200,50);

	paper = new Paper(400,350,70);
    

	Engine.run(engine);
  
}





function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  
  strokeWeight(3)
    line(paper.body.position.x,paper.body.position.y,ground.body.position.x,ground.body.position.y)
  drawSprites();
 keyPressed();
}


function keyPressed (){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:-85,y:85});
	}
  }


