const playerDefScore = document.querySelector(".playerScore");
const computerDefScore = document.querySelector(".computerScore");
const movesLeft = document.querySelector(".moves-left");
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorBtn = document.querySelector(".scissorBtn");
const replayBtn = document.querySelector(".replayBtn");
const finalresult = document.querySelector(".move");
const result = document.querySelector(".result");
let playerOptions = [rockBtn, paperBtn, scissorBtn];
let computerOptions = ["rock", "paper", "scissor", "rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;
let moves = 0;

const playGame = () => {
  playerOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      moves++;
      movesLeft.innerHTML = `Moves left: <span>${10 - moves}</span>`;

      const innerText = e.target.innerText;

      const randomChoices = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[randomChoices];

      console.log(computerChoice);

      winner(innerText, computerChoice);

      if (moves == 10) {
        gameOver(playerOptions, movesLeft);
      }
    });
  });

  const winner = (player, computer) => {
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
      result.innerText = "Tied";
    } else if (player == "rock") {
      if (computer == "paper") {
        result.innerText = "Computer Won";
        computerScore++;
        computerDefScore.innerText = computerScore;
      } else {
        result.innerText = "You Won";
        playerScore++;
        playerDefScore.innerText = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.innerText = "Computer Won";
        computerScore++;
        computerDefScore.innerText = computerScore;
      } else {
        result.innerText = "You Won";
        playerScore++;
        playerDefScore.innerText = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.innerText = "Computer Won";
        computerScore++;
        computerDefScore.innerText = computerScore;
      } else {
        result.innerText = "You Won";
        playerScore++;
        playerDefScore.innerText = playerScore;
      }
    }
  };

  const gameOver = (playerOptions, movesLeft) => {
    playerOptions.forEach((option) => {
      option.style.display = "none";
    });
    movesLeft.style.display = "none";
    finalresult.innerText = "GAME OVER!!!";

    if (playerScore > computerScore) {
      result.innerText = "You Won!!!";
    } else if (computerScore > playerScore) {
      result.innerText = "Computer Won!!!";
    } else {
      result.innerText = "Tie";
    }

    replayBtn.classList.add("show");
    replayBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };
};

playGame();
