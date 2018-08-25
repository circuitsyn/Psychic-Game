//Making sure HTMl loads first and then JS executes
window.onload = function(){

//Variable declerations 
var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
var userGuess;
var winCountInput = 0;
var lossCountInput = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerRandom);

//function to detect key press entry
document.onkeyup = function(event){
    
// stores keypress in userGuess
    
var userGuess = event.key.toLowerCase();

console.log("userGuess = " + userGuess);
    


//Nested loop created to create gateway to program logic  
//ensures entry pressed is a letter of the alphabet
if(computerChoices.includes(userGuess)) {

  guessesSoFar.push(userGuess); 
    //check to see if lost based on guesses
  if (guessesLeft === 0) {
  guessesLeft = 9;
  guessesSoFar.length = 0; 
  winCountInput = 0;
  lossCountInput++; 
  }
  //checks for win
  else if (userGuess == computerRandom) {
    winCountInput++;
    guessesLeft = 9;
    document.getElementById("tries").innerHTML = (guessesSoFar + ", ");
    guessesSoFar.length = 0; //resets array to zero
    computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerRandom);
    
  }
  //checks to see if userGuess is not equal to computers choice in order to decrement wrong guesses
  else if (userGuess !== computerRandom) {
    guessesLeft--;
    document.getElementById("tries").innerHTML = (guessesSoFar + ", ");
  }
}
//fall back should an input provided is not proper and reminds user to use a letter from the alphabet.
else {
  alert("You must choose a lowercase letter of the alphabet! Try Again :)");
  
}


//pushes data to hrml elements to maintain counts
document.getElementById("winCount").innerHTML = winCountInput;
document.getElementById("lossCount").innerHTML = lossCountInput;
document.getElementById("guessCount").innerHTML = guessesLeft;


}

};