var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors")
var userChoice = [];
var rpsChoice = ["rock", "paper", "scissors"];
var compResult


rock.addEventListener("click", function () {
  userChoice = this.id;
  console.log(`you chose ${userChoice}.`)
  compChoice()
});

paper.addEventListener("click", function () {
  userChoice = this.id;
  console.log(`you chose ${userChoice}.`)
  compChoice()
});

scissors.addEventListener("click", function () {
  userChoice = this.id;
  console.log(`you chose ${userChoice}.`)
  compChoice()
});

function compChoice() {
  compResult = rpsChoice[Math.floor(Math.random() * rpsChoice.length)]
  console.log(`computer chose ${compResult}.`)
  result()
}

var finalResult = document.getElementById("result")

function result() {
  if (userChoice === compResult) {
    finalResult.innerHTML = `It's a tie! You chose ${userChoice}, Computer chose ${compResult}`;

  } else if (userChoice === 'paper' && compResult === 'rock') {
    finalResult.innerHTML = `You win! You chose ${userChoice}, Computer chose ${compResult}`;

  } else if (userChoice === 'paper' && compResult === 'scissors') {
    finalResult.innerHTML = `You lose! You chose ${userChoice}, Computer chose ${compResult}`;

  } else if (userChoice === 'scissors' && compResult === 'paper') {
    finalResult.innerHTML = `You win! You chose ${userChoice}, Computer chose ${compResult}`;

  } else if (userChoice === 'scissors' && compResult === 'rock') {
    finalResult.innerHTML = `You lose! You chose ${userChoice}, Computer chose ${compResult}`;

  } else if (userChoice === 'rock' && compResult === 'scissors') {
    finalResult.innerHTML = `You win! You chose ${userChoice}, Computer chose ${compResult}`;

  } else if (userChoice === 'rock' && compResult === 'paper') {
    finalResult.innerHTML = `You lose! You chose ${userChoice}, Computer chose ${compResult}`;
  } else {
  console.log("Error, please try again.");
  }
}