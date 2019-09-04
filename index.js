var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors")
var userChoice = [];
var rpsChoice = [ "rock", "paper", "scissors"];


rock.addEventListener( "click", function() {
  userChoice = this.id;
  console.log(`you clicked ${userChoice}.`)
  compChoice()
});

paper.addEventListener( "click", function() {
  userChoice = this.id;
  console.log(`you clicked ${userChoice}.`)
  
});

scissors.addEventListener( "click", function() {
  userChoice = this.id;
  console.log(`you clicked ${userChoice}.`)
  compChoice()
});

function compChoice() {
  compResult = rpsChoice[Math.floor(Math.random()*rpsChoice.length)]
  console.log(`computer chose ${compResult}.`)
  result()
}

function result(){
  if (userChoice === compChoice)
}

// console.log("Your choice is ${userChoice}, the computers choice is ${compChoice}." );
  // get comp choice
  // display those choices to the browser
  // decide who wins
