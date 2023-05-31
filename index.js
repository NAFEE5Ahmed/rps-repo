const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const intro = document.querySelector("#intro");
const playerSelection = document.querySelectorAll(".player-selection");
const computerWinUpdate = document.querySelector("#computer-win-update");
const playerWinUpdate = document.querySelector("#player-win-update");
const gameUpdate = document.querySelector("#game-update");
const playAgainBtn = document.querySelector("#play-again-btn");

function getComputerChoice() {
  const gameElement = ["rock", "paper", "scissor"];
  return gameElement[Math.floor(Math.random() * gameElement.length)];
}

let playerWins = 0;
let computerWins = 0;
function gameEngine() {
  playerSelection.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (playerWins ===4) {
        gameUpdate.textContent =
          "Congratulations! You are the WINNER! because you won 5 times.";
        playAgainBtn.style.display = "block";
    playAgainBtn.classList.add("btn-animate");
    playerWinUpdate.textContent=playerWins+1;
        return;
      }
      if (computerWins ===4) {
        gameUpdate.textContent =
        "System is the WINNER! because it won 5 times.";
        playAgainBtn.style.display = "block";
    playAgainBtn.classList.add("btn-animate");
    computerWinUpdate.textContent=computerWins+1;
        return;
      }
      const computerSelection = getComputerChoice();
      intro.style.display = "none";
      if (
        (computerSelection === "rock" && e.target === rock) ||
        (computerSelection === "paper" && e.target === paper) ||
        (computerSelection === "scissor" && e.target === scissor)
      ) {
        gameUpdate.textContent = "It is a tie, NO one wins!";
        gameUpdate.classList.toggle("update-animate");
      } else if (e.target === rock && computerSelection === "paper") {
        gameUpdate.textContent = `You LOSE! ${computerSelection} beats rock`;
        gameUpdate.classList.toggle("update-animate");
        computerWins++;
        computerWinUpdate.textContent = computerWins;
      } else if (e.target === rock && computerSelection === "scissor") {
        gameUpdate.textContent = `You WIN! rock beats ${computerSelection}`;
        gameUpdate.classList.toggle("update-animate");
        playerWins++;
        playerWinUpdate.textContent = playerWins;
      } else if (e.target === paper && computerSelection === "scissor") {
        gameUpdate.textContent = `You LOSE! ${computerSelection} beats paper`;
        gameUpdate.classList.toggle("update-animate");
        computerWins++;
        computerWinUpdate.textContent = computerWins;
      } else if (e.target === paper && computerSelection === "rock") {
        gameUpdate.textContent = `You WIN! paper beats ${computerSelection}`;
        gameUpdate.classList.toggle("update-animate");
        playerWins++;
        playerWinUpdate.textContent = playerWins;
      } else if (e.target === scissor && computerSelection === "rock") {
        gameUpdate.textContent = `You LOSE! ${computerSelection} beats scissor`;
        gameUpdate.classList.toggle("update-animate");
        computerWins++;
        computerWinUpdate.textContent = computerWins;
      } else if (e.target === scissor && computerSelection === "paper") {
        gameUpdate.textContent = `You WIN! "scissor" beats ${computerSelection}`;
        gameUpdate.classList.toggle("update-animate");
        playerWins++;
        playerWinUpdate.textContent = playerWins;
      }
    });
  });
}
gameEngine();

function playAgain() {
  playAgainBtn.addEventListener("click", () => {
    playerWins = 0;
    computerWins = 0;
    gameUpdate.textContent ="";
    playAgainBtn.style.display = "none";
    playAgainBtn.classList.remove("btn-animate");
    intro.style.display = "block";
    computerWinUpdate.textContent = "0";
    playerWinUpdate.textContent = "0";
  });
}
playAgain();
