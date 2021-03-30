var bgImg;
var cat,mouse;
var catSit, mouseTease,mouseImg;
var mouseHappy,catHappy;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadImage("images/mouse4.png");
    mouseTease = loadAnimation("images/mouse2.png","images/mouse3.png");
    catRun = loadAnimation("images/cat2.png","images/cat3.png");
    cathappy = loadImage("images/cat4.png");
    mouseHappy = loadImage("images/mouse1.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(750,600,20,20);
    cat.addAnimation("catImg",catImg);
    cat.scale = 0.1;
    mouse = createSprite(500,600,20,20);
    mouse.addImage("mouseImg",mouseImg);
    mouse.scale = 0.1;

}

function draw() {
  
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX = 0;
    mouse.addImage("happy",mouseHappy);
    mouse.changeImage ("happy",mouseHappy);

    cat.addImage("happy",catHappy);
    cat.changeImage("happy",catHappy);

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === 37){
    cat.velocityX = -10;
    mouse.addAnimation ("tease",mouseTease);
    mouse.changeAnimation ("tease",mouseTease);

    cat.addAnimation("running",catRun);
    cat.changeAnimation("running",catRun);

}

}
