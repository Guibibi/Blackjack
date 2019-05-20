let playerScore = 0;
let dealerScore = 0;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Function pour dealer les carts
function updateScore() {
  //Dealer une carte au joueur
  var element = document.getElementById("playerScore");
  element.innerHTML = playerScore += randomIntFromInterval(1, 10);

  //Donner UNE carte au dealer pour commencer.
  if (dealerScore === 0) {
    var dealerID = document.getElementById("dealerScore");
    dealerID.innerHTML = dealerScore += randomIntFromInterval(1, 10);
  }
  //Si le joueur a plus que 21, lui faire perdre la partie.
  if (playerScore > 21) {
    const gameStatus = document.getElementById("gameStatus");
    gameStatus.innerHTML = "You lose!";
    document.getElementById("drawButton").disabled = true;
  }
}

function playerStay() {
  if (dealerScore <= 21) {
    while (dealerScore <= 17) {
      var dealerID = document.getElementById("dealerScore");
      dealerID.innerHTML = dealerScore += randomIntFromInterval(1, 10);
    }
  }
  if (dealerScore > 21 || dealerScore < playerScore) {
    const gameStatus = document.getElementById("gameStatus");
    gameStatus.innerHTML = "You win!";
    document.getElementById("drawButton").disabled = true;
  }

  if (dealerScore < 22 && dealerScore > playerScore) {
    const gameStatus = document.getElementById("gameStatus");
    gameStatus.innerHTML = "You lose!";
    document.getElementById("drawButton").disabled = true;
  }

  if (dealerScore == playerScore) {
    const gameStatus = document.getElementById("gameStatus");
    gameStatus.innerHTML = "Draw";
    document.getElementById("drawButton").disabled = true;
  }
}

function gameRestart() {
  dealerScore = 0;
  playerScore = 0;
  const gameStatus = document.getElementById("gameStatus");
  gameStatus.innerHTML = "Click draw to start";

  var element = document.getElementById("playerScore");
  element.innerHTML = 0;

  var dealerID = document.getElementById("dealerScore");
  dealerID.innerHTML = 0;

  document.getElementById("drawButton").disabled = false;
}
