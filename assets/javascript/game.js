window.onload = function(){

var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
var userGuess;
var winCountInput = 0;
var lossCountInput = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerRandom);
document.onkeyup = function(event){
    
// stores keypress in userGuess
    
var userGuess = event.key.toLowerCase();

console.log("userGuess = " + userGuess);
    


//Nested loop created to create gateway to program logic  
if(computerChoices.includes(userGuess)) {

  guessesSoFar.push(userGuess); 
  console.log(computerChoices.includes(userGuess));
  if (guessesLeft === 0) {
  guessesLeft = 9;
  guessesSoFar.length = 0; 
  winCountInput = 0;
  lossCountInput++; 
  }
  else if (userGuess == computerRandom) {
    winCountInput++;
    guessesLeft = 9;
    document.getElementById("tries").innerHTML = (guessesSoFar + ", ");
    guessesSoFar.length = 0; //resets array to zero
    computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerRandom);
    
  }
  else if (userGuess !== computerRandom) {
    guessesLeft--;
    document.getElementById("tries").innerHTML = (guessesSoFar + ", ");
  }
}
else {
  alert("You must choose a lowercase letter of the alphabet! Try Again :)");
  
}



document.getElementById("winCount").innerHTML = winCountInput;
document.getElementById("lossCount").innerHTML = lossCountInput;
document.getElementById("guessCount").innerHTML = guessesLeft;


}

};