const POSSIBLE_WORDS = ["obudrate", "verismilitude", "defenstrate", "obsequious","dissonant",
    "toady","idempotent"];
    let newGame = function(){
            let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
            let word = POSSIBLE_WORDS[randomIndex];
            console.log("word chosen: ", word);



            let clueString="";
            for(let i =0;1<word.length;i++)
            {
                clueString+="_";

            }


            let clue = document.getElementById("clue");
            clue.textContent=clueString;

        
    }