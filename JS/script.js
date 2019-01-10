function Player(playerName,score,turnscore){
    this.playerName = playerName;
    this.score = score;
    this.turnscore = turnscore;
};

// rollScore refers to one roll of the dice
// turnScore refers to the total amount of points added from several rolls of the dice
// score refers to total score

Player.prototype.roolDie = function(){
    var rollScore = 0;
    var diceArray =[];

    var dice1 = Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;

    if (dice1 !== 1 && dice2 !== 1){
        var totalDice = dice1 + dice2;
        rollScore = totalDice;
        this.turnScore += rollScore
    }else{
        rollScore = 0;
        this.turnScore = 0;
        return "Hit One"
    }
};
PlayerName.prototype.stop = function(){
    this.score += this.turnscore;
    this.turnScore = 0;
}
PlayerName.prototype.newTurn = function () {
    this.turnScore = 0;
}
playerName.prototype.scoreCheck= function() {
    if(this.score >=100){
        return "Winner";
    }
}
PlayerName.prototype.newGame = function() {
    this.turnScore = 0;
    this.score = 0;
};

$(document).ready(function() {

    $(".first-row").hide();
    $(".buttons-1").hide();
    $(".buttons-2").hide();

    $("#player-name-form").submit(function(event){
       event.preventDefault();

       var player1input = $("#player-1").val();
       var player2input = $("#player-2").val();

       $(".player-1-name").text(player1input);
   
       $(".player-2-name").text(player2input);
    
       var player1 = new Player(player1input, 0, 0);
       var player2 = new Player(player2input, 0, 0);
       
       $(".first-row").fadeIn("fast");
       $(".buttons-1").fadeIn("slow");

    
    });
})
