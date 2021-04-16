var game, form, player;
var gameState = 0, playerCount = 0;
var firebaseDB;
var dbReference;
var allPlayers;
var cars = [];
var car1, car2, car3, car4;
var velocityY;
var passedFinish;
var finishedPlayers = 0;
var xVel, yVel;
function preload() {
    bg = loadImage("images/background.png")
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")
    trackImg = loadImage("images/track.jpg")
}
function setup(){
    firebaseDB = firebase.database();
    console.log(firebaseDB);
    createCanvas(windowWidth,windowHeight);
    game = new Game();
    game.getGameState();
    game.start();
    xVel = 0;
    yVel = 0;
}

function draw(){

    if(playerCount === 4 && finishedPlayers === 0){
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(finishedPlayers === 4){
        game.update(2);
    }
    if(gameState === 2 && finishedPlayers === 4) {
        game.displayRanks();
    }
}




