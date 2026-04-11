const POSSIBLE_WORDS = 
["obdurate", "verisimilitude","defenstrate", "obsequious", "dissonant",
     "toady","idempotent"];


var word="";
var guesses= "";
var guessCount;
const MAX_GUESSES=6;

let newGame = function()

{

// pick a word 
guessCount= MAX_GUESSES;
let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
 word = POSSIBLE_WORDS[randomIndex];
 guesses="";


// dashes 
updatePage();

}
 let updatePage = function(){
let clueString = "";
for(let i = 0; i< word.length; i++)




 
{
    var currentLetter = word.charAt(i);
    if(guesses.indexOf(currentLetter)>=0){
        clueString+=currentLetter+" ";
    }
    else{
          clueString +="_ ";
    }
    

} 

let clue = document.getElementById("clue");
clue.textContent = clueString;
let guessArea= document.getElementById("guesses");
guessArea.textContent="Guesses: "+guesses;

let image = document.getElementById("hangmanpic");
image.src = `images/hangman${guessCount}.gif`;

 }
 let guessLetter = function(){
    //  dont allow guesses before a word is chosen
    if(word ===""){
     alert("press new game to start");
     return;
    }
 // do not allow guesses when the game is finished 
if(guessCount <= 0){
    alert("The game is over! Press New Game to play again.");
    return;
}
if(guessArea.textContent.startsWith("You")){
    alert("The game is over! Press New Game to play again.");
    return;
}


 let input = document.getElementById("guess");
 let letter = input.value;
 letter = letter.toLowerCase();
 //Don't allow the same letter to be guessed twice
 if(guesses.indexOf(letter) >= 0){
    alert("You already guessed '" + letter + "'! Try a different letter.");
    input.value = "";
    return;
}
 if(word.indexOf(letter)<0){
    guessCount--;
 }
 guesses+=letter;
 input.value="";
 updatePage();
 }