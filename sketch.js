const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png" ;
var timer;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(20);
    text("Time:"+timer,30,70);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var timeJson = await time.json();
    timer = timeJson.datetime.slice(11,16);
    // write code slice the datetime
    var currentTime = timeJson.datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(currentTime >= 04 && currentTime <= 06){
        bg = "sunrise1.png";
    }else if(currentTime >=06 && currentTime >=08){
        bg = "sunrise2.png";
    }else if(currentTime >=23 && currentTime ==0){
        bg = "sunset10.png";
    }else if(currentTime ==0 && currentTime <=03){
        bg = "sunset11.png";
    }else{
        bg = "sunset12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
