var ground, stone, launcher
var boy, mango, tree
var boyimage

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyimage=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,600,width,20)
	stone=new Stone(235,420,30)
	launcher=new Launcher(stone.body,{x:235,y:420})
	tree=new Tree (1050,580)
	mango1=new Mango(900,300)
	mango2=new Mango(950,320)
	mango3=new Mango(1000,340)
	mango4=new Mango(900,260)
	mango5=new Mango(1000,300)
	mango6=new Mango(900,300)
	mango7=new Mango(00,300)
	mango8=new Mango(900,300)
	mango9=new Mango(900,300)
	mango10=new Mango(900,300)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  ground.display()
  image (boyimage,200,400,200,300)
  stone.display()
  launcher.display()
 tree.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 mango8.display()
 mango9.display()
 mango10.display()
dectectcollision(stone,mango1)
dectectcollision(stone,mango2)
dectectcollision(stone,mango3)
dectectcollision(stone,mango4)
dectectcollision(stone,mango5)
dectectcollision(stone,mango6)
dectectcollision(stone,mango7)
dectectcollision(stone,mango8)
dectectcollision(stone,mango9)
dectectcollision(stone,mango10)


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
} 
function dectectcollision(lstone,lmango){
	mangopos=lmango.body.position
	stonepos=lstone.body.position
console.log("dectectcollision")
	var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y)
	if(distance<=lstone.body.circleRadius+lmango.body.circleRadius)
	{
		Matter.Body.setStatic(lmango.body,false)
	console.log(distance)
	}


}

