const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var part;
var a_plinki = [];
var a_divs = [];

var ground, shooter;
var move = 0, lim;

var divisionHeight=300;
var score =0, count = 0;
var gameState = "";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20,1);

  shooter = new Ground(width/2,15,120,28,0);


  for (var k = 0; k <=width; k = k + 80) {
    a_divs.push(new Divs(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var j = 40; j <=width; j=j+50) 
  {
    a_plinki.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50) 
  {
    a_plinki.push(new Plinko(j,175));
  }

  for (var j = 40; j <=width; j=j+50) 
  {
    a_plinki.push(new Plinko(j,275));
  }

  for (var j = 15; j <=width-10; j=j+50) 
  {
    a_plinki.push(new Plinko(j,375));
  }

  lim = 10;
}
 


function draw() {
  background("black");
  textSize(20);
  fill("white");
  text("Score : "+score,20,30);
  text("Shots : "+count+"/"+lim,670,30);
  text("20",30,520);
  text("10",110,520);
  text("10",190,520);
  text("20",270,520);
  text("30",350,520);
  text("30",430,520);
  text("20",510,520);
  text("10",590,520);
  text("10",670,520);
  text("20",750,520);
  Engine.update(engine);



  if(gameState != "end" && move < 171)
  {
    move++;
    shooter.body.position.x = shooter.body.position.x + 2;
  }
  if(gameState != "end" && move >= 171 && move < 513)
  {
    move++;
    shooter.body.position.x = shooter.body.position.x - 2;
  }
  if(gameState != "end" && move >= 513 && move < 684)
  {
    move++;
    shooter.body.position.x = shooter.body.position.x + 2;
    if(move == 684)
    {
      move = 0;
    }
  }
 
  
  for (var i = 0; i < a_plinki.length; i++) {
  
    a_plinki[i].display();
  
  } 

  for (var k = 0; k < a_divs.length; k++) {
     
     a_divs[k].display();
   }
   shooter.display();
   ground.display();

  if(gameState == "end")
  {
    shooter.body.position.x = 400;
    textSize(100);
    fill("red");
    text("GAME OVER",100,300);
  }


  if(part != null)
  {
    part.display();
    if(part.body.position.y > 760)
    {
      var pos = part.body.position.x;
      if(pos < 80)
      {
        score = score + 20;
        part = null;
        if(count >= lim)
        {
          gameState = "end";
        }
      }
      if(pos > 80 && pos < 240)
      {
        score = score + 10;
        part = null;
        if(count >= lim)
        {
          gameState = "end";
        }
      }
      if(pos > 240 && pos < 320)
      {
        score = score + 20;
        part = null;
        if(count >= lim)
        {
          gameState = "end";
        }
      }
      if(pos > 320 && pos < 480)
      {
        score = score + 30;
        part = null;
        if(count >= lim)
        {
          gameState = "end";
        }
      }
      if(pos > 480 && pos < 560)
      {
        score = score + 20;
        part = null;
        if(count >= lim)
        {
          gameState = "end";
        }
      }
      if(pos > 560 && pos < 720)
      {
        score = score + 10;
        part = null;
        if(count >= lim)
        {
          gameState = "end";
        }
      }
      if(pos > 720)
      {
        score = score + 20;
        part = null;
        if(count >= lim)
        {
          gameState = "end";
        }
      }
    }
  }
}

function mousePressed()
{
  if(gameState != "end" && part == null)
  {
    count++;
    part = new Particle(shooter.body.position.x, 30, 10, 10);
    console.log("h");
  }
}