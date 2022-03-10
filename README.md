# CardMatchingGame

## Overview

This project is a card matching game using javascript as the main development language. The game will be fun and easy to play and responsive so it can be played on all devices by anyone.

The aim of this project is to showcase understanding of many aspects of javascript and at the same time make a fun and interactive game. 

I also wish to make the development process clean and easy to follow to allow anyone to take a look at the project and understand the process and the different stages that the project took.

## User Stories

The purpose of this game is to be fun and easy to play, mainly targeting younger audiences however still playable by all ages. It is simple and easy to use requiring only clicks to begin and play the game. The instructions are clear and make the process of playing the game as fluid as possible.

## Features

## Overlays

### Starting Overlay

(screenshot of starting overlay when complete)

The starting overlay is what the user will land on after entering the game. This will give a brief introduction to the game and explain how it is played, with the option of also selecting a difficulty level.

### Winner Overlay

(screenshot of winner overlay when complete)

The winner overlay will display when the user wins the game (matching 6 pairs of cards). This will pop up and allow the user to easily restart the game. This will return them to the landing overlay so they can choose a new difficulty, or allow them to restart on the same difficulty as they just played, skipping the need for the starting overlay to reappear.

### Loser Overlay

(screenshot of winner overlay when complete)

This overlay will appear when the player runs out of time. This will pop up and, similarly to the winner overlay, allow the user to 'try again' on the same difficulty or restart and choose a new difficulty (prompting the starting overlay to appear again). 

### The Cards

There are 12 cards and they are each positioned inside the game container. Each card is a percentage width and height of the game container (minus the margin), which allows the cards to resize themselves inside the game container based on which device the game is being played on. The cards will flip when clicked as the Javascript will give them a class called '.flip'. Once this class is handed to the card the CSS will flip the card and the card and its image will also be stored for use in the javascript logic later on.

### Matches and Timer

### Matching logic

### Difficulty levels


