var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var car1;
var car2;
var car3; 
var car4;
var cars;

var carone, cartwo, carthree, carfour;
var track, tracks, floor;

var form, player, game;



function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function preload(){

  carone = loadImage('images/car1.png');
  cartwo = loadImage('images/car2.png');
  carthree = loadImage('images/car3.png');
  carfour = loadImage('images/car4.png');
  track = loadImage('images/track.jpg');
  tracks = loadImage('images/track.png');
  floor = loadImage('images/ground.png');
  

}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

    
  }

  if(gameState === 2){
    game.end();
  }

}
