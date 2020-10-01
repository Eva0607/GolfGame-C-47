const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var club;
var flag1;
var golfer;
var ball;
var background1;



function preload(){

 

  background1 = loadImage("background.jpg");
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  club = new Club(190, 250);
  
  flag1 = new Flag(600,200);

  ball = new Ball(235,280);

  
  golfer = new Golfer(150,200,200,200,PI/2);

  
}

function draw() {
  background(background1);

  
  
  club.display();

  flag1.display();

  ball.display();

  golfer.display();

 

  


 
}

function keyPressed(){
  if(keyCode === 37){
    Matter.Body.setAngle(club.body, 50)
    Matter.Body.setPosition(golfer.body, {x : 180, y : 200})

   
    
   }

   if(keyCode === 39){
    Matter.Body.setAngle(club.body, -20)
    Matter.Body.setPosition(golfer.body, {x : 135, y : 200})

   
    
   }

   if(keyCode === 32){
    Matter.Body.setAngle(club.body, 0)
    Matter.Body.setPosition(golfer.body, {x : 150, y : 200})

   }


}








