var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var e =0; e <=130; e = e + 130){
    divisions.push(new Divisions(e, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var f =0; f <=180; f = f + 180){
    divisions.push(new Divisions(f, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var a =0; a <=230; a = a + 230){
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var s =0; s <=280; s = s + 280){
    divisions.push(new Divisions(s, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var d =0; d <=330; d = d + 330){
    divisions.push(new Divisions(d, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var l =0; l <=380; l = l + 380){
    divisions.push(new Divisions(l, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k =0; k <=430; k = k+ 430){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var b =0; b <=480; b = b + 480){
    divisions.push(new Divisions(b, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var z =0; z <=530; z = z + 530){
    divisions.push(new Divisions(z, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var x =0; x <=580; x = x + 580){
    divisions.push(new Divisions(x, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var c =0; c <=630; c = c + 630){
    divisions.push(new Divisions(c, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var q =0; q <=680; q = q + 680){
    divisions.push(new Divisions(q, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var w =0; w <=730; w = w + 730){
    divisions.push(new Divisions(w, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var r =0; r <=780; r = r + 780){
    divisions.push(new Divisions(r, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 40; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 15; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 80; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for (var j = 55; j <=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  }   
}
 
function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  if (frameCount%60===0){
    particles.push(new particle(random(width/2-10, width/2+10),10,10));
  }
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles
  for (var g = 0; g < particles.length; g++) {
    particles[g].display(); 
  }
  

}