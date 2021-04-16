class Game {
    constructor(){
        
    }
    getGameState(){
        var gameStateRef = firebaseDB.ref("gameState");
        gameStateRef.on("value", function(data){
        gameState = data.val();
        });

    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
            background(bg)
        }
        car1 = createSprite(200,200)
        car2 = createSprite(400,200)
        car3 = createSprite(600,200)
        car4 = createSprite(800,200)
        car1.addImage(car1Img)
        car2.addImage(car2Img)
        car3.addImage(car3Img)
        car4.addImage(car4Img)
        cars= [car1, car2, car3, car4];
        passedFinish = false;

    }
    update(state){
        var ref = firebaseDB.ref("/");
        ref.update({
            gameState: state
        })
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        console.log(allPlayers);
        if (allPlayers != undefined){
            background("black")
            image(trackImg, 0, -windowHeight*4, windowWidth, windowHeight*5);
            var index = 0;
            var carX = 300;
            var carY
            for (var i in allPlayers) {
                // carX = carX+250;
                // carY  = windowHeight - allPlayers[i].distance;
                carX = 200 + allPlayers[i].xPos + ((index + 1) * 200);
                carY = windowHeight - allPlayers[i].distance;
                cars[index].x = carX;
                cars[index].y = carY;
                if(player.index === index+1) {
                    console.log('If has been started')
                    fill("red")
                    ellipse(carX, carY, 60,60);
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index].y;
                }
                index = index+1
            }
        }
        if(player.distance < 1000){
            if(keyIsDown(38) && player.index != null){
                yVel += 2;
                if(keyIsDown(37)){
                    xVel -= 1;
                }
                if(keyIsDown(39)){
                    xVel += 1;
                }
            }
            else if(keyIsDown(38) && player.index != null && yVel > 0){
                yVel -= 0.5;
            }
            else{
                xVel = xVel*0.8;
                yVel = yVel*0.8;
            }
        }
        else if(passedFinish === false){
            xVel = xVel*0.7;
            yVel = yVel*0.7
            Player.updateFinishedPlayers();
            player.rank = finishedPlayers;
            player.update();
            passedFinish = true;
        }
        else{
            xVel = xVel*0.8;
            yVel = yVel*0.8;
        }
        player.distance += yVel;
        player.xPos += xVel;
        xVel = xVel*0.8;
        yVel = yVel*0.8;
        player.update();
        // if(keyDown(UP_ARROW) && player.index != null && passedFinish === false){
        //     player.distance = player.distance + 20;
        //     player.update();
        // }
        // if(player.distance > 400 && passedFinish === false){
        //     Player.updateFinishedPlayers();
        //     player.rank = finishedPlayers;
        //     player.update();
        //     passedFinish = true;
            
        // }


        drawSprites();
        
    }
    displayRanks(){
        console.log("end")
    }
}