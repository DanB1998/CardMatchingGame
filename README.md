# CardMatchingGame

## Overview
<hr>

This project is a card matching game using javascript as the main development language. The game will be fun and easy to play and responsive so it can be played on all devices by anyone.

The aim of this project is to showcase understanding of many aspects of javascript and at the same time make a fun and interactive game. 

I also wish to make the development process clean and easy to follow to allow anyone to take a look at the project and understand the process and the different stages that the project took.

## User Stories
<hr>

The purpose of this game is to be fun and easy to play, mainly targeting younger audiences however still playable by all ages. It is simple and easy to use requiring only clicks to begin and play the game. The instructions are clear and make the process of playing the game as fluid as possible.

# Features

## Overlays:

### Starting Overlay
<hr>

![Start Overlay](/assets/images/startoverlay.png)

The starting overlay is what the user will land on after entering the game. This will give a brief introduction to the game and explain how it is played, with the option of also selecting a difficulty level.

### Winner Overlay
<hr>

![Win Overlay](/assets/images/winoverlay.png)

The winner overlay will display when the user wins the game (matching 6 pairs of cards). This will pop up and allow the user to easily restart the game. This will return them to the landing overlay so they can choose a new difficulty, or allow them to restart on the same difficulty as they just played, skipping the need for the starting overlay to reappear.

### Loser Overlay
<hr>

![Lose Overlay](/assets/images/loseoverlay.png)

This overlay will appear when the player runs out of time. This will pop up and, similarly to the winner overlay, allow the user to 'try again' on the same difficulty or restart and choose a new difficulty (prompting the starting overlay to appear again). 

### The Cards
<hr>

There are 12 cards and they are each positioned inside the game container. Each card is a percentage width and height of the game container (minus the margin), which allows the cards to resize themselves inside the game container based on which device the game is being played on. The cards will flip when clicked as the Javascript will give them a class called '.flip'. Once this class is handed to the card the CSS will flip the card and the card and its image will also be stored for use in the javascript logic later on.

### Matches and Timer (including difficulty)
<hr>

The matches and the timer are displayed just above the game container. They track the amount of matches the user has currently made and also the amount of time left in the game before the player loses.

The difficulty is chosen on the start overlay. The buttons 'Easy', 'Medium' and 'Hard' will set the 'timeleft' variable to a value, and the countdown of the time will begin.

### Matching logic
<hr>

The matching logic works by comparing the image src of both cards that are flipped with the even listener. This piece of code captures the clicked cards image using 'this' and stores the images src to be compared to the second clicked card.

"card1img = this.querySelector("img").src;"

Once both the first and second clicked cards' images have been captured the 'checkCards()' function will compare the cards using an if statement shown below.

![checkCards() function]()

If it is a match the 'cardsMatch()' function will be triggered, and if not the 'nonMatch()' function will be triggered.


# Testing 

### Responsivity testing

I tested this project thoroughly on all devices using chrome developer tools' 'responsivity' feature. I found no issues and used this to tweak aspects of my media queries to make the game better perform on smaller devices.

I also tried the game myself on my phone, laptop and PC and the game ran very well, I have included some screenshots of this testing below.

### Lighthouse

I also used lighthouse to test my game and get performance score in SEO, best practices, performance and accessibility. The result of the report showed that my game was optimised well and adhered to all of the right courses taken when developing a scalable project.

![LighthouseBefore]()

I attempted to make my performance score (or any of the other scores) in the lighthouse report better by doing things such as compressing my images using TinyPNG, however this did not increase it. So I accepted that it was very difficult to improve this score and continued to other methods of testing.

## Validator Testing
<hr>

HTML

* I used W3 as my html validator and there were no errors when it was passed through by direct input. https://validator.w3.org/

CSS

* There were also no errors when running the code through the CSS validator at https://jigsaw.w3.org/

Javascript

*  Lastly there were no errors when running the code through the Javascript validator at https://beautifytools.com/javascript-validator.php

## Technologies used
<hr>

#### HTML5 
<hr>

As the main language for structure.

#### CSS
<hr>

For styling my html and animating the flipping of the cards.

#### Javascript
<hr>

Used for creating the game logic and making the game interactive. Javascript is the main program behind what makes the game interactive and playable.

#### Google Fonts
<hr>

To select my main font that is fun, matching the theme of the game.

#### Fontawesome
<hr>

Fontawesome was used for the tractor icons in the header.

#### Git
<hr>

Used for version control to allow me to keep me work safe and up to date.

#### Gitpod
<hr>

Used as a workspace and hosting platform.

#### Github
<hr>

To host and store my project remotely, and also to deploy the website.

## Deployment
<hr>

This project was deployed on github pages. I used gitpod as my developer environment and committed often at most implementations to ensure good version control. Git push allowed me to save changes to github. This allowed me to revert to any olds changes I had in case something didn't work out as I planned whilst making the game.

How I deployed my project on github pages:

1. Navigate to settings on desired repository.
2. Scroll down to the github pages section.
3. Select the main branch.
4. Save and github pages will deploy the site. 

You can also run the repository locally.

## Images 
<hr>

All images were downloaded on [Shutterstock](https://www.shutterstock.com/) with a licence.


