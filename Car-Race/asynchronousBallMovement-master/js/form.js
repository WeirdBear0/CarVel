class Form {
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("Enter Game");
        this.greeting = createElement("h3");
        this.resetButton = createButton("reset")
    }
    display(){

        this.title.addClass("titleStyle");
        this.title.position(130,20);
        this.title.html("Car Race Mania!");
        
        this.input.addClass("inputStyle");
        this.input.position(130,100);

        this.button.addClass("buttonStyle");
        this.button.position(130,150);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            playerCount = playerCount+1;
            player.index = playerCount
            player.updatePlayerCount(playerCount)
            player.name = this.input.value();
            player.update()
            this.greeting.position(130,60);
            this.greeting.html("Welcome to Car Race Mania, " + player.name + "!");
        })

        
        this.resetButton.addClass("buttonStyle");
        this.resetButton.position(600,150);
        this.resetButton.mousePressed(() =>{
            firebaseDB.ref("/").update({
                finishedPlayers: 0,
                gameState : 0,
                playerCount: 0,
                players: null

            })
        })
         
        




    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}