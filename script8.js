function randomNumGuess() {
   let randomNum = Math.round(Math.random()*100);
   let notKnown = true;
   let guesses = []
    while(notKnown){
        let guess = parseInt(prompt("please enter a guess between 1 and 100"))
        if(!guesses.includes(guess)) {
            guesses.push(guess)
        }
        console.log(guesses)
        if(guess > randomNum) {
            alert("Number is large")
        } else if(guess < randomNum) {
            alert("Number is small")
        } else {
            alert(`Correct with ${guesses.length} tries!`) 
            notKnown = false;
        }
    }

}

randomNumGuess()