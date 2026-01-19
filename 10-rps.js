let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScore();

function play(playerMove) {
  const computerMove = pickMove();
  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      console.log((result = "Tie"));
    } else if (computerMove === "paper") {
      console.log((result = "You won"));
    } else if (computerMove === "Rock") {
      console.log((result = "You Lost"));
    }
  } else if (playerMove === "paper") {
    if (computerMove === "scissors") {
      console.log((result = "You lost"));
    } else if (computerMove === "paper") {
      console.log((result = "Tie"));
    } else if (computerMove === "Rock") {
      console.log((result = "You won"));
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "scissors") {
      console.log((result = "You Won"));
    } else if (computerMove === "paper") {
      console.log((result = "You lost"));
    } else if (computerMove === "Rock") {
      console.log((result = "Tie"));
    }
  }
  if (result === "You won") {
    score.wins += 1;
  } else if (result === "You lost") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScore();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `  You
      <img class="Move-Icon" src="${playerMove}-emoji.png">
      <img class="Move-Icon" src="${computerMove}-emoji.png">`;
}

function updateScore() {
  document.querySelector(".js-score").innerHTML =
    `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}
function pickMove() {
  let randomNum = Math.random();
  let computerMove = "";
  let result = "";
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "scissors";
  } else if (randomNum >= 1 / 3 && randomNum < 1 / 2) {
    computerMove = "paper";
  } else if (randomNum >= 1 / 2 && randomNum < 1) {
    computerMove = "Rock";
  }
  return computerMove;
}
