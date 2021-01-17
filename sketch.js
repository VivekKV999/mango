
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, slingshotObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,90,30);
	mango2=new mango(1050,200,40);
	mango3=new mango(950,300,30);
	mango4=new mango(1100,300,20);
	mango5=new mango(950,250,20);
	mango6=new mango(950,200,30);
	mango7=new mango(990,150,30);
	mango8=new mango(1050,100,30);
	mango9=new mango(1200,200,30);	
    mango11=new mango(1150,200,30);
	treeObj=new tree(1050,610);
	
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(200,100,50,50)
	chain = new slingshot(stoneObj.body,{x:230,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango11.display();
  groundObject.display();
 
  chain.display();
  stoneObj.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango11);
  fill("red")
  stroke("black")
  strokeWeight(1)
  textSize(15)
  text("PRESS SPACE TO GET THE STONE",50,50)
  
  fill("blue")
  stroke("yellow")
  strokeWeight(4)
  textSize(40)
  text("Plucking Mangoes",500,50)
}
function keyPressed() {
	if (keyCode ===32)
		Matter . Body . setPosition (stoneObj . body, {x: 230, y: 420})
		chain. attach (stoneObj . body) ;
		//chain.attach();
		}	
function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY} )
}
function mouseReleased()
{
  //chain=(0,{x:300,y:100});
  //0 = null
  chain.fly();

}
function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  } 

