# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).


Code Attributions:
Thanks to Yahya Elharony  for his walkthrough tutorial
  https://www.youtube.com/watch?v=G8J13lmApkQ
  for helping me to draw ideas and logic to use in this project.
Formatting time code logic from
https://stackoverflow.com/questions/32141035/countdown-timer-using-moment-js-mmss-format
.


GAME INSTRUCTIONS:
How to Play this game:
1.Click the cards.

2.If two consecutives clicks match, those cards turn green meaning they are matched and
disabled so that it won't be clicked again.

3.Every time the user clicks to find unmatched cards,those clicks are considered as wrong moves and the wrong move score is displayed to the user.The game displays a star rating from 5 to 1 that reflects the player's performance. At the beginning of a game, it displays 5 stars. After some number of moves, it change to a lower star rating. After a few more moves, it change to a even lower star rating down to 1.

4)The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

5)When a user wins the game, a prompt box appears to congratulate the player and ask if they want to play again. It also tells the user how much time it took to win the game.

6)Restart Button allows the player to reset the game board, the timer, and the star rating.
When the player starts a game, a displayed timer also starts. Once the player wins the game, the timer stops.

6)Move Counter displays the current number of moves a user has made on the screen.


DEPENDENCIES:
This game uses Font Awesome version 5.0.13 for icons. The browser must have the latest 
version to support template literals.



  