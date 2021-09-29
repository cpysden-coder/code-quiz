# code-quiz
check it out: https://cpysden-coder.github.io/code-quiz/

what to expect: 
<img width="1084" alt="Screen Shot 2021-09-28 at 6 40 57 PM" src="https://user-images.githubusercontent.com/65201372/135188661-2faa3fa3-7078-4625-8ac0-7beaae9f475e.png">


This is code quiz game built in html, css and javascript. Subsequent versions will improve upon:
- code simplification
- better separation of concerns between functions
- styling
- getting the clearInterval to work better 
- and several other topics

Acceptance:
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score

Psedo Code: How I approached the challenge
User Inputs:
User input - startButton
User input - clickChoice for answer
User input - enter initials after game
Functions:
- start
- timer with countdown linked to win and lose game
- track individual user (tied to initials) wins and losses (set to 0 initially)
    - create user initially based on user input, or update score if not first time
    - persist storage on page refresh
- create question list
- render next question to screen with possible answer selections (increment an index variable)
- user selection for answer
    - link answer selection to user input click
    - post message if correct or incorrect
    - track correct or incorrect answers during game
- win game
- lose game
- high score

variables:
- questions array ["question 1 with answers", "question 2 with answers] is this better as an object?
    - array for question numbers ["question1", "question2",....]
    - array for possible answers ["possible answer 1", thru 4......]

- wins
- losses
- initials
- highscore

order to build:
- html with basic divs
- start button
- timer
- render first question to the screen
- capture user selection
- save answer during game
- win and lose functions
- save to local storage







