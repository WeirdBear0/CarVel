class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = 0;
        this.xPos = 0;

    }
    getPlayerCount(){
        var playerCountRef = firebaseDB.ref("playerCount");
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        });

    }
    updatePlayerCount(count){
        var ref = firebaseDB.ref("/");
        ref.update({
            playerCount : count
        })
    }
    update(){
        var playerIndex = "players/player" + player.index;
        firebaseDB.ref(playerIndex).update({
            index : player.index,
            name: player.name,
            distance : player.distance,
            rank: this.rank,
            xPos: this.xPos
        });
    }
    static getPlayerInfo(){
        var ref = firebaseDB.ref("players");
        ref.on("value", (data) => {
            allPlayers = data.val()
        })
    }
    getFinishedPlayers(){
        var finishedPlayersRef = firebaseDB.ref("finishedPlayers");
        finishedPlayersRef.on("value", function(data){
            finishedPlayers = data.val();
        });
    }
    static updateFinishedPlayers(){
        var ref = firebaseDB.ref("/");
        ref.update({
            finishedPlayers : finishedPlayers + 1
        })
        this.rank = this.rank + 1;
    }
    
}