
var gameState = "levelA"

var pc,stair,stairGroup;
var sound1,background;
var zBack6

function preload(){
   zImage = loadImage("26.png");
   zImage2 = loadImage("32.png");
   zImage3 = loadImage("33.png");
   pcImg  = loadImage("34.png");
   zBack1 = loadImage("21.jpg");
   zBack2 = loadImage("4.png");
   zBack3 = loadImage("7.png");
   zBack4 = loadImage("23.jpg");
   zBack5 = loadImage("27.jpg");
   zBack6 = loadImage("30.jpg");
   zBack7 = loadImage("31.jpg");
   log  = loadImage("35.png");
   gImg  = loadImage("36.png");
   g2  = loadImage("37.png");
   sImg = loadImage("38.png");
   dImg = loadImage("39.png");
   bloodIMG = loadImage("40.png")
   sound1 = loadSound("level1.mp3")
   back = loadImage("image.jpeg")
   pcImg = loadImage("34.png")
   pcImg2 = loadImage("pc2.png")
   gaintImg = loadImage("24.png")
   mImg = loadImage("25.png")
   mImg2 = loadImage("501.png")
   sword = loadImage("sw.png")
   fly = loadImage("butter.png")
   aback = loadImage("11.png")
   aback2 = loadImage("12.png")
   aback3 = loadImage("13.png")
   aback4 = loadImage("14.png")
   back = loadImage("new.png")
  

 }
function setup() {
  createCanvas(1320,650);
  background1 = createSprite(100,200,10,100);
  background1.addImage(zBack1);
//
  sound1.play()

  pc = createSprite(100, 200, 50, 50);
  pc.addImage(pcImg);
  pc.scale = 0.4;
  pc.setCollider("rectangle",0,0,200,340);

  ground = createSprite(99,368,800,20);
  ground.addImage(gImg);
  ground.scale = 0.6;
  ground.setCollider("rectangle",0,0,400,100);

  ground2 = createSprite(20,508,63050,80);
  ground2.shapeColor = "black";

  

 
  skull2 = createSprite(1,400,20,80);
  skull2.addImage(sImg)
  skull2.scale = 1;
  

  for(s = 700;s<13050;s=s+1500){
    body = createSprite(s,480,20,80);
    body.addImage(dImg)
    body.scale = 0.3;
    }
  
  stairGroup = new Group();
  zombGroup = new Group();
  skullGroup = new Group();
  scoreGroup = new Group();

  //level2
  monsterGroup = createGroup();
  monsterGroup2 = createGroup()
  //gaintGroup = createGroup();
  weaponGroup = createGroup()
  

  for(var i =300;i<16000;i=i+250){ 
    stair = createSprite(i,random(30,350),80,10);
    stair.debug = true;
    stair.addImage(log);
    stair.scale = 0.3
    stair.setCollider("rectangle",0,0,300,100)
  
    stairGroup.add(stair);
    
  }

 
  button = createButton('Play');
 
  
  

}

function draw() {
  background("black")
  if(gameState==="levelA"){
   
  background1.changeImage(zBack6);
  
  background1.scale = 1.16;
 // background1.velocityX = -2
    
   // if (background1.x < 0){
    //  background1.x = background1.x
   // }
    pc.visible = true
  
    if(keyDown("up")&&pc.y>10 ) {
      pc.velocityY = -18;
      pc.velocityX = 5; 
     
    }
  
    pc.velocityY = pc.velocityY + 0.8;
   
    
    
    //pc.debug = true;
    //ground.debug = true;

  
   pc.collide(stairGroup);
   pc.collide(ground);
  // this.button.position(560,500);
   button.style('width', '200px');
   button.style('height', '40px');
   button.style('background', 'lightpink');
   
  


  zombies();
  skullFun();
  scoreFun();

  camera.position.x  = pc.x;
  camera.position.y = 200;

 // console.log(pc.x);
  //text (mouseX+","+mouseY,mouseX,mouseY)
  //console.log(mouseX,mouseY);

 
 // change background
  // if(pc.x>=6000&&pc.x<120000){
   //  background.addImage(back);
  // }
  //  else if(pc.x>=120000&&pc.x<180000){
  //  background.addImage(back);
  //  }
    if(pc.isTouching(zombGroup)||pc.isTouching(skullGroup)){
      gameState = "end";
    }  
    drawSprites();

   
     
  }
  else if(gameState==="end"){
    background("red")
  
  }
  
  
   
  
}

function zombies(){
  
 if(frameCount%20===0){
   zomb = createSprite(1,460,20,20);
   zomb.velocityX =random(4,8);
   
   var rand = Math.round(random(1,3));
   switch(rand){
   case 1: zomb.addImage(zImage);
      break;
   case 2: zomb.addImage(zImage2); 
      break;
   case 3: zomb.addImage(zImage3);
      break;  
      default:break;  
   }
   zomb.scale = 0.4;
   //zomb.debug = true
   zomb.setCollider("rectangle",40,0,200,340);
   zombGroup.add(zomb)
   
 }
 
}

function skullFun(){
  if(frameCount%20===0){
    sk = createSprite(random(8000,13050),10,10,10);
    sk.velocityY = 6;
    sk.addImage(sImg)
    sk.scale = 0.2
    //sk.debug = true
    sk.setCollider("circle",0,-40,80)
    skullGroup.add(sk)
  }
}

function scoreFun(){
  if(frameCount%200===0){
    score = createSprite(320,400,10,10)
    scoreGroup.add(score);
  }
}


