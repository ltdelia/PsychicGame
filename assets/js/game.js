const psychic = {
    options: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    letters: [],
    wins: 0,
    losses: 0,
    guesses: 15
}

//---------------------------
// Methods
//---------------------------

function resetGame() {
    psychic.letters = [];
    psychic.guesses = 15;
}

//---------------------------
// Helpers
//---------------------------

function validateCode(guess) {
    if (/[^a-zA-Z]/.test(guess)) {
        return false;
    }
    return true;
}

//----------------------------
// Event Listeners
//----------------------------

document.onkeyup = function (event) {

    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (validateCode(userGuess)) {
        
        // console.log(userGuess);
        
        var letterToGuess = psychic.options[Math.floor(Math.random() * psychic.options.length)];

        if (userGuess === letterToGuess) {
            alert("You got it! " + "The answer was: " + userGuess);
            psychic.wins += 1;
            // console.log("Wins:" + psychic.wins);
            resetGame();
        }
        else if (userGuess !== letterToGuess) {
            psychic.guesses -= 1;
            psychic.letters.push(userGuess);
        }

        if (psychic.guesses === 0) {
            psychic.losses += 1;
            resetGame();
        }

        var html = "<p>Guess what letter I'm thinking of:</p>" +
                   "<p>Wins: " + psychic.wins +"</p>" +
                   "<p>Losses: " + psychic.losses + "</p>" +
                   "<p>Number of Guesses Remaining: " + psychic.guesses + "</p>" +
                   "<p>Your Guesses So Far: " + psychic.letters.join(',  ') +"</p>";

        document.querySelector('#game').innerHTML = html;
    };



}

