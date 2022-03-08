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
        card1 = this.querySelector("img").src;
    } else {
        alert("This will be checked for a match");
        incrementGuesses();
        secondCard = false;
        card2 = this.querySelector("img").src;
        console.log(card1);
        console.log(card2);
        checkCards();
    }
}

/**
 * This function will check the cards match. If they do it will trigger the cards match function. If not it will trigger the non-match function.
 */
function checkCards() {
    if (card1 === card2) {
        cardsMatch();
    } else {
        nonMatch()
    }
}

/**
 * This function will trigger a match. Keeping the cards flipped over and incrementing a match in the score and also incrementing the guesses.
 */
function cardsMatch() {
    incrementMatches();
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