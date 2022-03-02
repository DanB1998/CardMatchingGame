var cards = document.getElementsByClassName("card");
let secondCard = false;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard)
}

/**
 * This function will run the game.
 */
function runGame() {
}

/**
 * This function will shuffle the cards. Using shuffle array and then iterating the array through the cards.
 */
function shuffleCards() {
}

/**
 * This function will flip the cards when the click event listener is triggered on the card.
 */
function flipCard() {
    this.classList.toggle('flip');
    if (secondCard == false) {
        alert("This is the first card!");
        secondCard = true;
    } else {
        alert("This will be checked for a match");
        secondCard = false;
    }
}

/**
 * This function will check the cards match. If they do it will trigger the cards match function. If not it will trigger the non-match function.
 */
function checkCards() {
    if (secondCard = false) {
        alert("This is the first card!");
    } else {
        secondCard 
    }
}

/**
 * This function will trigger a match. Keeping the cards flipped over and incrementing a match in the score and also incrementing the guesses.
 */
function cardsMatch() {
}

/**
 * This function will trigger a non-match. Flipping the cards back over and incrementing the guesses score.
 */
 function nonMatch() {
}

/**
 * This function will increment the amount of guesses a user has made in an attempt to match the cards.
 */
 function incrementGuesses() {

    let guesses = parseInt(document.getElementById("guesses").innerText);
    document.getElementById("guesses").innerText = ++guesses;

}

/**
 * This function will increment the amount of correct matches the user has made.
 */
 function incrementMatches() {

    let matches = parseInt(document.getElementById("matches").innerText);
    document.getElementById("matches").innerText = ++matches;


}