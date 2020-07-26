const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1,rope2,rope3,rope4,rope5;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var bobDiameter;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	Engine.run(engine);
  	
	bobObject1 = new Bob(250,300,25);	
	bobObject2 = new Bob(300,300,25);
	bobObject3 = new Bob(350,300,25);
	bobObject4 = new Bob(400,300,25);
	bobObject5 = new Bob(450,300,25);
	
	bobDiameter = 50;

	
    roofObject = new Roof(350, 120, 400, 25);

    rope1 = new Rope(bobObject1.body,roofObject.body,bobDiameter*-2,0);
    rope2 = new Rope(bobObject2.body,roofObject.body,bobDiameter*-1,0);
    rope3 = new Rope(bobObject3.body,roofObject.body,bobDiameter*0,0);
    rope4 = new Rope(bobObject4.body,roofObject.body,bobDiameter*1,0); 
    rope5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0); 
     

}


function draw() {
  rectMode(CENTER);
  background("LightPink");
  
  bobObject1.display(); 	
  bobObject2.display(); 
  bobObject3.display(); 
  bobObject4.display(); 
  bobObject5.display();  
   
  roofObject.display();

   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display(); 
   
}

function keyPressed(){

if(keyCode === UP_ARROW)
{
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:25 , y:-5 })
  

}


}