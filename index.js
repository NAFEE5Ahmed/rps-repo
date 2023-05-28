// const gameElement = ["rock", "paper", "scissor"];
// function getComputerChoice() {
//   return gameElement[Math.floor(Math.random() * gameElement.length)];
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return `Game tie`;
//   } else if (playerSelection === "rock" && computerSelection === "paper") {
//     return `You Lose! ${computerSelection} beats ${playerSelection}`;
//   } else if (playerSelection === "rock" && computerSelection === "scissor") {
//     return `You Win! ${playerSelection} beats ${computerSelection}`;
//   } else if (playerSelection === "paper" && computerSelection === "scissor") {
//     return `You Lose! ${computerSelection} beats ${playerSelection}`;
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     return `You Win! ${playerSelection} beats ${computerSelection}`;
//   } else if (playerSelection === "scissor" && computerSelection === "rock") {
//     return `You Lose! ${computerSelection} beats ${playerSelection}`;
//   } else if (playerSelection === "scissor" && computerSelection === "paper") {
//     return `You Win! ${playerSelection} beats ${computerSelection}`;
//   }
// }

// function game() {
//   let playerWin = 0;
//   let playerLose = 0;
//   let computerWin = 0;
//   let computerLose = 0;
//   let tie = 0;
//   let rounds =0;
//   for (let i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//     const playerSelection = prompt("Choose on of them\nRock, Paper or Scissor").toLowerCase();
//     console.log(playRound(playerSelection, computerSelection));
//     rounds++;
//     if (playerSelection === computerSelection) {
//       tie++;
//     } else if (playerSelection === "rock" && computerSelection === "paper") {
//       playerLose++;
//       computerWin++;
//     } else if (playerSelection === "rock" && computerSelection === "scissor") {
//       playerWin++;
//       computerLose++;
//     } else if (playerSelection === "paper" && computerSelection === "scissor") {
//       playerLose++;
//       computerWin++;
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//       playerWin++;
//       computerLose++;
//     } else if (playerSelection === "scissor" && computerSelection === "rock") {
//       playerLose++;
//       computerWin++;
//     } else if (playerSelection === "scissor" && computerSelection === "paper") {
//       playerWin++;
//       computerLose++;
//     }else{
//       alert("Please choose on of  them \n Rock, Paper or Scissor")
//     }
//   }
//   console.log(`You wins ${playerWin} round and lose ${playerLose} round in a ${rounds} round game against computer`)
//   console.log(`There is ${tie} tie in a ${rounds} round game`)
//   console.log(`Computer wins ${computerWin} round and lose ${computerLose} in a ${rounds} round game against you`)
// }
// game();
