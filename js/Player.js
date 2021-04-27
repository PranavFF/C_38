class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  update(){
    var playerref = "players/player" + this.index
     database.ref(playerref).set({
       name : this.name,
       distance : this.distance
     });
  }

  static getplayerinfo(){
    var playerinforef = database.ref('players')
    playerinforef.on("value",(data)=>{
      allplayers = data.val();
    })
  }
  
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
}