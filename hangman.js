const POSSIBLE_WORDS = 
["obdurate", "verisimilitude","defenstrate", "obsequious", "dissonant",
     "toady","idempotent"];



let newGame = function()

{

// pick a word 

let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
let word = POSSIBLE_WORDS[randomIndex];

console.log("Word chosen:",word);

// dashes 
let clueString = "";
for(let i = 0; i< word.length; i++)

{
    clueString +="_ ";

}

let clue = document.getElementById("clue");
clue.textContent = clueString;

}