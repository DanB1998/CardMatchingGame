# CardMatchingGame

## Overview
<hr>

This project is a card matching game using javascript as the main development language. The game will be fun, easy to play and responsive so it can be played on all devices by anyone.

The aim of this project is to showcase understanding of many aspects of javascript and challenge myself to make a fun, interactive and responsive game. 

Another big aim of mine is to make the development process clean and easy to follow to allow anyone to take a look at the project and understand the process and the different stages that the project took. 

All code should be a building block for the next developer to add onto!

![Project Mockup](/assets/images/projectmockup.png)

## User Stories
<hr>

The purpose of this game is to be fun and easy to play, mainly targeting younger audiences however still playable by all ages. It is simple and easy to use requiring only clicks to begin, play and restart the game. The instructions are clear and make the process of playing the game as fluid as possible.

The game is also designed to be **easy to use**, which means parents can allow their children to play and not have to worry about repeatedly managing them on the game if they are busy. However this ease of use does not take away the fun of it being played together, as the pictures and animations are smooth and fun to watch!

As the developer I wanted to make it as captivating and as re-playable as possible whilst leaving it scalable and easy to navigate. This means I, or anyone else, can pick it up and make it more complex or improve it at any point without having to dive into a heap of spaghetti code.

# Features

## Overlays:
<hr>

All of the overlays pop up and disappear depending on whether they have the 'show' class or not. To give or take this class from the overlays the javascript uses the **remove()** or **add()** methods. This is similar to how the cards are flipped which will be detailed further later on.

## Starting Overlay
<hr>

![Start Overlay](/assets/images/startoverlay.png)

The starting overlay is what the user will land on after entering the game. This will give a brief introduction to the game and explain how it is played, with the option of also selecting a difficulty level.

## Winner Overlay
<hr>

![Win Overlay](/assets/images/winoverlay.png)

The winner overlay will display when the user wins the game (matching 6 pairs of cards). This will pop up and allow the user to easily restart the game. This will return them to the start overlay so they can choose a new difficulty.

## Loser Overlay
<hr>

![Lose Overlay](/assets/images/loseoverlay.png)

This overlay will appear when the player runs out of time. This will pop up and allow the user to 'Play Again'. This will trigger a restart and the user can choose a new difficulty. 

## The Cards
<hr>

There are 12 cards and they are each positioned inside the game container. Each card is a percentage width and height of the game container (minus the margin), which allows the cards to resize themselves inside the game container based on which device the game is being played on. The cards will flip when clicked as the Javascript will give them a class called 'flip'. Once this class is handed to the card the CSS will flip the card and the card and its image will also be stored for use in the javascript logic later on.

When adding and removing event listeners from all the cards at once I used an iteration. As an example:

```
for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", flipCard)
    }
```
This was the way I found best to unflip all the cards at the restart of the game.

## Matches and Timer (including difficulty)
<hr>

![Time and match](/assets/images/timeandmatch.png)

The matches and the timer are displayed just above the game container. They track the amount of matches the user has currently made and also the amount of time left in the game before the player loses.

The difficulty is chosen on the start overlay. The buttons 'Easy', 'Medium' and 'Hard' have onclick events that will set the 'timeleft' variable to a value, and the countdown of the time will begin.

```
if (timeleft < 0) {
            youLose();
        }
```
This piece of javascript recognises when the timer has reached 0, and is what will call the **youLose()** function when the time has run out.

## Matching logic
<hr>

The matching logic works by comparing the image src of both cards that are flipped with the even listener. This piece of code captures the clicked cards image using 'this' and stores the images src to be compared to the second clicked card.

```
card1img = this.querySelector("img").src;
```

Once both the first and second clicked cards' images have been captured the **checkCards()** function will compare the cards using an if statement shown below.

![checkCards() function](/assets/images/checkcardsfunction.png)

If it is a match the **cardsMatch()** function will be triggered, and if not the **nonMatch()** function will be triggered.

## Styling and Colours

The main colours used in this game were orange and black. These colours stand out against one another making the game clear and easy to follow, which caters for its audience of younger children as they won't be confused/struggling to follow anything. Also large, neat font is used to be readable and clear, and buttons and interactive parts of the project are large and simple meaning they are not confusing. This reinforces the design to be best accessible to its target audience.

## Responsivity
<hr>

It is important that a game like this is playable across all devices, as many people, especially kids, have access to phones, laptops, ipads etc. The main adjustments for the responsivity come in the form of media queries for example:

```
@media only screen and (max-width: 775px){
    
    .heading {
        font-size: 13px;
    }

    .fa-tractor {
        font-size: 28px;
    }

    .game-container {
        padding: 10px
    }

    .time-container {
        font-size: 20px;
    }
    
    .match-container {
        font-size: 20px;
    }

}
```
I used these media queries to change font sizes and downscale the size when smaller 'max-width' devices are used.

A larger reason these media queries are helpful is that they allowed me to change the amount of rows and columns of the cards so that on smaller devices there will be less columns. Less columns allowed the cards to be positioned in a narrow viewport so the game is even playable on really thin screens!

![DesktopGame](/assets/images/desktopgame.png) 

![MobileGame](/assets/images/mobilegame.png) 

## Using Comments
<hr>

The code is littered with comments and docstrings that prompt what the code is or what it is doing. Any developer or person taking a look at the code will be able to know what they are looking at instantly, whether it is a function or an element. I used comments to help keep my developer goal of making the game scalable and simple to pick up realistic.

# Testing 

## Basic testing
<hr>

* I tested the game in chrome, firefox and safari and it ran well in all of them.

* I confirmed the styling and themes used are consistent with the games goals of being simple and easy to play.

* I confirmed that the game runs as expected every test and the game result is always the time running out or 6 matches being made.

* I confirmed that all text is clear and all elements are non intrusive of each other or not too close in styling as to be undistinguishable.

I also tested my user stories against the design and implementation of the game and found all aspects of the game to be appropriate to all of the purposes of the game being built.

## Trying to be game-breaking and bug solving
<hr>

The first thing when testing a game, for me anyway, is to see if you can find a way to break it. I came across a couple of scenarios/bugs which were more tricky to make robust whilst making this project and they were:

1. When the user spam clicks multiple cards in a short period of time.
* This was an issue as the game would flip over multiple cards at once and the flipCard() function which controlled the first and second card logic, would completely collapse.

2. When a user spam clicks the same card multiple times.
* This was an issue as the card would recognise itself as the same card as was clicked first, so it would match itself and trigger the game to think the user had matched 2 cards.

## Solving the bugs
<hr>

I found that the best way to solve the 'spam clicking multiple cards in a short period of time' was to introduce a new variable 'gameBusy'. If 'gameBusy' was true it would break out the flipCard function, meaning the spam clicks would just be ignored by the flipCard() function. gameBusy would then be set back to false after the game had finished checking if the second card was a match or a non-match with the help also from the setInterval() function, which gave the cards 500ms of time to flip back over before setting gameBusy to false again. After attempting to spam click many times (and even giving this program to family members and asking them to try and break it!), I was unable to get this issue to arise again.

The second issue of clicking the same card multiple times was much easier to solve. Whilst this issue was in my game the flipCard() function was toggling the classlist 'flip', meaning every card that was clicked would have flip added or removed depending on if it had it or not. I changed this from 'toggle' to 'add' and told the flipCard() function to break out if card 1 was the same as card 2, meaning that it was not possible to click the same card twice and the game to break.

After these 2 issues were solved, the game-breaking attempts were still continuing. And after many tries me,  nor any of my helpers could not make the game fail so I would say it is fairly robust. Although I don't doubt there are clever ways to break it, my extensive testing showed me the game is playable nearly 100% of the time with next to no issues. 

## Responsivity testing
<hr>

I tested this project thoroughly on all devices using chrome developer tools' 'responsivity' feature. I found no issues and used this to tweak aspects of my media queries to make the game better perform on smaller devices.

I also tried the game myself on my personal phone, laptop and PC and the game ran very well, I have included some screenshot of this testing from my mobile below.

![Mobile Testing](/assets/images/mymobile.png) ![Mobile Testing](/assets/images/mobilegameover.png)

## Lighthouse
<hr>

I also used lighthouse to test my game and get performance score in SEO, best practices, performance and accessibility. The result of the report showed that my game was optimised well and adhered to all of the right courses taken when developing a scalable project.

![LighthouseBefore](/assets/images/lighthousebefore.png)

I attempted to make my performance score (or any of the other scores) in the lighthouse report better by doing things such as compressing my images using TinyPNG, however this did not increase it. So I accepted that it was very difficult to improve this score and continued to other methods of testing.

## Looking for errors
<hr>

During my testing I was very thorough in searching for errors, whether it being a console error or a game error. No errors are thrown whilst the game is being played and no errors are thrown in response to user actions.

## Validator Testing
<hr>

HTML

* I used W3 as my html validator and there were no errors when it was passed through by direct input. https://validator.w3.org/

CSS

* There were also no errors when running the code through the CSS validator at https://jigsaw.w3.org/

Javascript

*  Lastly there were no errors when running the code through the Javascript validator at https://jshint.com/

The output of JSHint was:

1. There are 16 functions in this file.

2. Function with the largest signature take 0 arguments, while the median is 0.

3. Largest function has 11 statements in it, while the median is 4.

4. The most complex function has a cyclomatic complexity value of 4 while the median is 1.

## Unfixed bugs
<hr>

During my long testing process I could not find any bugs. I appreciate that there could be some found and that there are probably some clever ways to cheat/confuse a basic game like this, however I could not find any. 

## Technologies used
<hr>

### HTML5 
<hr>

As the main language for structure.

### CSS
<hr>

For styling my html and animating the flipping of the cards.

### Javascript
<hr>

Used for creating the game logic and making the game interactive. Javascript is the main program behind what makes the game interactive and playable.

### Google Fonts
<hr>

To select my main font that is fun, matching the theme of the game.

### Fontawesome
<hr>

Fontawesome was used for the tractor icons in the header.

### Git
<hr>

Used for version control to allow me to keep me work safe and up to date.

### Gitpod
<hr>

Used as a workspace and hosting platform.

### Github
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

## Credits
<hr>

* [Shutterstock](https://www.shutterstock.com/) for images.

* [TinyPNG](https://tinypng.com/) for image compression.


