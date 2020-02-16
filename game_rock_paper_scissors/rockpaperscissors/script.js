window.addEventListener("DOMContentLoaded", start);
var playerHasChosen;
var computerHasChosen;
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

function start() {
  console.log("start");
  setupButtons();
}

function setupButtons() {
  //TODO Add EventListeners on button
  document
    .querySelector("#buttons > button.rock")
    .addEventListener("click", playerChoice);
  document
    .querySelector("#buttons > button.paper")
    .addEventListener("click", playerChoice);
  document
    .querySelector("#buttons > button.scissors")
    .addEventListener("click", playerChoice);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function playerChoice() {
  //TODO Store player choice
  playerHasChosen = this.className;
  computerHasChosen = computerChoice();
  shakeHands();
  await sleep(2000);
  console.log("p: " + playerHasChosen);
  console.log("c: " + computerHasChosen);
  resetClasses();
  player1.classList.add(playerHasChosen);
  player2.classList.add(computerHasChosen);
  resultOfRound();
}

function resetClasses() {
  player1.setAttribute("class", "");
  player1.classList.add("player");
  player2.setAttribute("class", "");
  player2.classList.add("player");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
}
function shakeHands() {
  player1.classList.add("shake");
  player2.classList.add("shake");
}

function computerChoice() {
  //TODO Make some choice
  var options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function resultOfRound() {
  //TODO Make decisions
  if (playerHasChosen == "rock") {
    if (computerHasChosen == "rock") {
      tie();
    } else if (computerHasChosen == "paper") {
      lose();
    } else {
      win();
    }
  }

  if (playerHasChosen == "scissors") {
    if (computerHasChosen == "rock") {
      lose();
    } else if (computerHasChosen == "paper") {
      win();
    } else {
      tie();
    }
  }

  if (playerHasChosen == "paper") {
    if (computerHasChosen == "rock") {
      win();
    } else if (computerHasChosen == "paper") {
      tie();
    } else {
      lose();
    }
  }
}

function tie() {
  document.querySelector("#draw").classList.remove("hidden");
  console.log("TIE");
}

function win() {
  document.querySelector("#win").classList.remove("hidden");
  console.log("WIN");
}

function lose() {
  document.querySelector("#lose").classList.remove("hidden");
  console.log("LOSE");
}
