function Player(playerName,score,turnscore){
    this.playerName = playerName;
    this.score = score;
    this.turnscore = turnscore;
}

// rollScore refers to one roll of the dice
// turnScore refers to the total amount of points added from several rolls of the dice
// score refers to total score

Player.prototype.rollDice = function(){
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
        return "Sorry!you hit one."
    }
};

PlayerName.prototype.stop = function(){
    this.score += this.turnscore;
    this.turnScore = 0;
};

PlayerName.prototype.newTurn = function () {
    this.turnScore = 0;
};

playerName.prototype.scoreCheck= function() {
    if(this.score >=100){
        return "Win";
    }
};

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

    // PLAYER ONE ROLL AND STOP BUTTON BELOW


    var player1Rolls = function(){
        $(".roll-1").click(function() {

          var player1Dice = player1.rollDice();
          $(".player-1-roll").text(" " + player1Dice);
          $(".player-1-score").text(" " + player1.turnScore);
          $(".player-1-total-score").text(" " + player1.score)

          if (player1Dice === "Hit one"){
              $(".buttons-1").fadeIn("slow")
              $(".buttons-2").fadeOut("slow")
          };

        var winner = player1.scoreCheck;

        });
    };

    var player1Stop = function(){
        $(".stop-1").click(function(){
         $(".player-1-total-score").text(" " + player1.Score);
         $(".player-1-score").text(" " + player1.turnScore)
        
         var winner = player1.scoreCheck();

         if(winner === "Win"){
            alert("Congratulations " + player1.playerName +" you win the GAME")
            player1.newGame();
            player2.newGame();
            $(".player-1-total-score").text(" " + player1.score);
            $(".player-1-score").text(" " + player1.turnScore);
            $(".player-2-total-score").text(" " + player2.score);
            $(".player-2-score").text(" " + player2.turnScore);
            $(".player-1-roll").text(" ");
            $(".player-2-roll").text(" ");

          }else{
            $(".buttons-1").fadeOut("slow");
            $(".buttons-2").fadeIn("slow");
          }
        })

    };
    // PLAYER TWO ROLL AND STOP BUTTON BELOW

var player2Rolls = function(){
    $(".roll-2").click(function(){
      var player2Dice = player2Dice();

      $(".player2-roll").text(" " + player2Dice);
      $(".player-2-score").text(" " + player2.turnScore);
      $(".player-2-total-score").text(" " + player2.score);

      if(player2Dice === "Hit one"){
      $(".button-2").fadeOut("slow");
      $(".button-1").fadeIn("slow");
       }
       var winner = player2.scoreCheck();
    });
};

var player2Stops = function () {
  $(".stop-2").click(function(){
      player2Stop();
      $(".player-2-total-score").text(" " + player2.score);
      $(".player-2-score").text(" " + player2.turnScore);
  
      var winner = player2.scoreCheck();

      if(winner === "Win"){
        alert("Congratulations " + player2.playerName +" you win! GAME OVER!")
        player1.newGame();
        player2.newGame();
        $(".player-1-total-score").text(" " + player1.score);
            $(".player-1-score").text(" " + player1.turnScore);
            $(".player-2-total-score").text(" " + player2.score);
            $(".player-2-score").text(" " + player2.turnScore);
            $(".player-1-roll").text(" ");
            $(".player-2-roll").text(" ");
            $(".buttons-2").fadeOut("slow");
            $(".buttons-1").fadeIn("slow");
          }else{
            $(".buttons-2").fadeOut("slow");
            $(".buttons-1").fadeIn("slow");
          }
    })
}

})
});

