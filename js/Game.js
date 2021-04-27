class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    Player.getplayerinfo();
    console.log(allplayers);
    textSize(30);
    text("Game Start", 120, 100)

    if(allplayers !== undefined) 
    { 
      var yPos = 100 
      for(var plr in allplayers) 
    { 
      text(allplayers[plr].name + "=" + allplayers[plr].distance,300,yPos)
      yPos = yPos + 30
    } 
    }

   console.log(allplayers)
}
}