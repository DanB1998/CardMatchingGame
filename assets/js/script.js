const cards = document.getElementsByClassName("card");

var startOverlay = document.getElementById('start');
var winOverlay = document.getElementById('win');
var loseOverlay = document.getElementById('lose');

let secondCard = false;
let gameBusy = false;

let timeleft;

function easy() {
    runGame();
    startOverlay.classList.remove('show');
    timeleft = 70;
    gameClock();
}

function medium() {
    runGame();
    startOverlay.classList.remove('show');
    timeleft = 50;
    gameClock();
}

function hard() {
    runGame();
    startOverlay.classList.remove('show');
    timeleft = 5;
    gameClock();
}

/**
 * This function will begin the game.
 */

function runGame() {

    let timer = document.getElementById('timer');
    let timeleft;

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", flipCard)
    }

    shuffleCards();

}

function gameClock() {

    myTimer = setInterval(countdown, 1000);

    function countdown() {
        timeleft--;
        timer.innerHTML = timeleft;

        if (timeleft < 0) {
            youLose();
        }
    }

}

/**
 * This function will shuffle the cards. Using shuffle array and then iterating the array through the cards.
 */
function shuffleCards() {
    for (let i = 0; i < cards.length; i++) {
        shuffle = Math.floor(Math.random() * 12);
        cards[i].style.order = shuffle;
    }
}

/**
 * This function will flip the cards when the click event listener is triggered on the card.
 */
function flipCard() {

    if (gameBusy) return;

    this.classList.add('flip');

    if (secondCard == false) {
        secondCard = true;
        card1 = this;
        card1img = this.querySelector("img").src;
    } else {
        if (this === card1) return;
        secondCard = false;
        card2 = this;
        card2img = this.querySelector("img").src;
        checkCards();
    }
}

/**
 * This function will check the cards match. If they do it will trigger the cards match function. If not it will trigger the non-match function.
 */
function checkCards() {

    gameBusy = true;

    if (card1img === card2img) {
        cardsMatch();
    } else {
        setTimeout(nonMatch, 1500);
    }
}

/**
 * This function will trigger a match. Keeping the cards flipped over and incrementing a match in the score and also incrementing the guesses.
 */
function cardsMatch() {

    incrementMatches();

    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);

    gameBusy = false;

    if (matches.innerText == 6) {
        setTimeout(youWin, 1250);
    }

}

/**
 * This function will trigger a non-match. Flipping the cards back over and incrementing the guesses score.
 */
function nonMatch() {

    card1.classList.remove('flip');
    card2.classList.remove('flip');

    setTimeout(gameBusy = false, 500);

}

/**
 * This function will increment the amount of correct matches the user has made.
 */
function incrementMatches() {

    let matches = parseInt(document.getElementById("matches").innerText);
    document.getElementById("matches").innerText = ++matches;


}

function youWin() {
    clearInterval(myTimer);
    winOverlay.classList.add('show');
}

function youLose() {
    clearInterval(myTimer);
    loseOverlay.classList.add('show');
}

function playAgain () {
    loseOverlay.classList.remove('show');
    winOverlay.classList.remove('show');
    startOverlay.classList.add('show');
    
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('flip');
    }

    matches.innerText = 0;
}