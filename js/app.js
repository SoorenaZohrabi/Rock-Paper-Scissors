const choices = document.querySelectorAll(".choice");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");

const restartBtn = document.getElementById("restart-btn");

const emojis = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

let playerScore = 0;
let computerScore = 0;

choices.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    playerChoiceEl.textContent = emojis[playerChoice];
    computerChoiceEl.textContent = emojis[computerChoice];

    const winner = getWinner(playerChoice, computerChoice);

    if (winner === "player") {
      resultEl.textContent = "🎉 You Win!";
      playerScore++;
    } else if (winner === "computer") {
      resultEl.textContent = "😢 Computer Wins!";
      computerScore++;
    } else {
      resultEl.textContent = "🤝 It's a Draw!";
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function getWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }

  return "computer";
}

restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;

  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;

  playerChoiceEl.textContent = "❔";
  computerChoiceEl.textContent = "❔";
  resultEl.textContent = "Waiting...";
});