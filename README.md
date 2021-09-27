# code-quiz

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

Psedo Code:
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







