
var rock = document.getElementById("rock");
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var userChoice = ""
var result = "";
var compChoice = Math.random();

if (compChoice < 0.34) {
  compChoice = "rock"
}
else if (compChoice <= 0.64) {
  compChoice = "paper"
}
else {
  compChoice = "scissors"
}

  var compare = function(choice1, choice2) {
  if(choice1 === choice2) {
    return "It's a tie!"
  }

  if(choice1 === "rock") {
    if(choice2 === "scissors") {
     return "rock wins";
    }   else {
        return "paper wins";
    }
  }

  if (choice1 === "paper") {
  if (choice2 === "rock") {
      return "paper wins";
  } else {
      if (choice2 === "scissors") {
          return "scissors wins";
      }
  }
  if (choice1 === "scissors") {
      if (choice2 === "rock") {
          return "rock wins";
      } else {
          if (choice2 === "paper") {
              return "scissors wins";
          }
      }
  }
}
  rock.addEventListener("click", function(){
  userChoice = this.id;
  compare(userChoice, compChoice);
});

paper.addEventListener("click", function(){
  userChoice = this.id; 
  compare(userChoice, compChoice);

});

scissors.addEventListener("click", function(){
  userChoice = this.id;
  result = compare(userChoice, compChoice);
  alert(result);

});

// console.log("userChoice: " + userChoice);
// console.log("compchoice: " + compChoice);
// get comp choice
// display those choices to the browser
// decide who wins