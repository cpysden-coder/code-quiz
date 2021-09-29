var startButton = document.querySelector(".start-button");
var questionList = document.querySelector(".question-list");
var timerElement = document.querySelector(".timer-count");
var lose = document.querySelector(".lose");
var win = document.querySelector(".win");
var quesChoice = document.querySelector(".questions");
var quesTitle = document.querySelector(".question-title");
var q1cont = document.querySelector("#question1");
var q2cont = document.querySelector("#question2");
var q3cont = document.querySelector("#question3");
var q4cont = document.querySelector("#question4");

var isWin = false;
var timer;
var timerCount;

var questionCount = [];
var numQuestions = ["q1", "q2", "q3", "q4"]

var q1 = ["Something a developer would say if they didn’t like lean development practices", "An expression that either evaluates to true or false", "A way to iterate thru an array", "A favorite expression of Queen Victoria"]
var q2 = ["Justifies the contents of the box in the center horizontally", "Justifies the contents vertically in the box", "Is not a property of a Flexbox", "Is a political slogan of neither the left or right"]
var q3 = ["Gets an item that is stored in local storage in Ballard Storage", "Puts an item in your local storage facility for safe keeping", "Nothing", "Sets the value of key name to John in local storage in the browser"]
var q4 = ["Plan to torment kids in school", "Definitive study on calculus for plants", "Computer programming language not based on 0s and 1s", "A way to measure the speed of light in a vacuum"]
var allQuestions = [q1, q2, q3, q4];
console.log(allQuestions);
console.log(allQuestions[1])
console.log(allQuestions[1][2])
var answer = "response1";
var questionList = ["What is a Boolean Expression?", "In a Flexbox, the justify-content property does what?", "The 'localstorage.setItem()' localstorage.setitem> web API does what?", "Plankalkül, developed in 1942, and pronounced “Plan Calculus”, is regarded as the first?"]
var questionListIndex = 0;
var quTitle = questionList[questionListIndex];
var currentQuestion = [quTitle];
console.log("first declaration of quTitle: " + currentQuestion)
var question1 = "response2";
var question2 = "response1";
var question3 = "response4";
var question4 = "response3";
var answerKey = ["response1", "response2", "response3", "response4"]
var correctCounter = 0;
var incorrectCounter = 0;

function initGame() {
    win.textContent = localStorage.getItem('winner') || 0
    if (localStorage.getItem('winner')) {
        correctCounter = localStorage.getItem('winner')
    }
    lose.textContent = localStorage.getItem('incorrect') || 0
    if (localStorage.getItem('loser')) {
        incorrectCounter = localStorage.getItem('incorrect')
    }
}

initGame()

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.disabled = true
    // questionList.textContent = "print this"
    timerCount = 10
    countdown()
    currentQuestion = questionList[0]
    allQuestionsIndex = 0
    getQuestion()
    // correctResponse()
    questionCount = 1
}

var gameScore = [0]

function countdown() {
    timer = setInterval(function () {
        timerCount--
        console.log(`timerCount`, timerCount)
        timerElement.textContent = timerCount
        if ((timerCount == 0) || (questionListIndex > 3)) {
            clearInterval(timer)
        }
        console.log(`you lose`)
        localStorage.setItem('gameScore', correctCounter)
        gameScore = correctCounter
        startButton.disabled = true
        setFin()

        // if (timerCount == 0 && ) {
        //     clearInterval(timer)
        //     console.log(`Congrats you finished in time`)
        //     localStorage.setItem('gameScore', correctCounter)
        //     gameScore = correctCounter
        //     startButton.disabled = true
        //     setFin()
        // }
    }, 2000)
}

// function setWin() { };
// function setLose() {
//     setLoss.textContent = "you lost"
// }

var allQuestionsIndex = 0

function getQuestion() {
    // questionListIndex++
    quesTitle.textContent = currentQuestion
    q1cont.textContent = allQuestions[allQuestionsIndex][0]
    q2cont.textContent = allQuestions[allQuestionsIndex][1]
    q3cont.textContent = allQuestions[allQuestionsIndex][2]
    q4cont.textContent = allQuestions[allQuestionsIndex][3]

};

//Select question
q1cont.addEventListener("click", selectQuestion1)
q2cont.addEventListener("click", selectQuestion2)
q3cont.addEventListener("click", selectQuestion3)
q4cont.addEventListener("click", selectQuestion4)

var answerUser = ""

//Select question function
function selectQuestion1() {
    console.log("I selected question1")
    console.log(questionCount + " question count")
    answerUser = "response1"
    correctAnswer()
}

function selectQuestion2() {
    console.log("I selected question2")
    answerUser = "response2"
    correctAnswer()
}

function selectQuestion3() {
    console.log("I selected question3")
    answerUser = "response3"
    correctAnswer()
}

function selectQuestion4() {
    console.log("I selected question4")
    answerUser = "response4"
    correctAnswer()
}

function correctAnswer() {
    // console.log(currentQuestion + "current question from response")
    if (currentQuestion == "question1") {
        answer = answerKey[0]
        console.log(answer + ": ==answerkey")
    } else if (currentQuestion == "question2") {
        answer = answerKey[1]
        console.log(answer + ": ==answerkey")
    } else if (currentQuestion == "question3") {
        answer = answerKey[2]
        console.log(answer + ": ==answerkey")
    } else if (currentQuestion == "question4") {
        answer = answerKey[3]
        console.log(answer + ": ==answerkey")

    }
    compareAnswers()
}

function compareAnswers() {
    console.log(answerUser + "user answer")
    if (answer == answerUser) {
        console.log("right answer")
        answerCorrect = true
        trackCorrectAnswer()
    } else {
        console.log("wrong answer")
        trackIncorrectAnswer()
    }
    // nextQuestion()
}

function nextQuestion() {
    console.log("next question please")
    // if (questionListIndex > 3) {
    //     clearInterval(countdown)
    // }
    allQuestionsIndex++
    questionListIndex++
    if (questionListIndex ==4) {
        clearInterval(countdown)
        console.log("the questionlist index is 4 so should stop")
    }

    console.log("the next question list index is: " + questionListIndex)
    quTitle = questionList[questionListIndex]
    currentQuestion = [quTitle]
    console.log("the next declaration of quTitle in nextQuestion: " + quTitle)
    getQuestion()

}
//Check if guess was correct
// function checkAnswer() {
//     if (chosenWord === blanksLetters.join('')) {
//         isWin = true
//     }
// }

function trackCorrectAnswer() {
    correctCounter++
    localStorage.setItem('correct', correctCounter)
    win.textContent = correctCounter
    nextQuestion()
}

function trackIncorrectAnswer() {
    incorrectCounter++
    localStorage.setItem('incorrect', incorrectCounter)
    lose.textContent = incorrectCounter
    nextQuestion()
}
var highScore = [0]



//update Form with high scores
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var gameScoreInput = document.querySelector("#game-score");
var submissionResponseEl = document.querySelector("#response");
var submissionResponseEl2 = document.querySelector("#response2")

// Action to be performed on click store in named function
function showResponse(event) {
    // Prevent default action
    event.preventDefault();
    console.log(event);
    var response = "Hi " + nameInput.value + "! your current high score is: " + highScore + ".";
    submissionResponseEl.textContent = response;
    var anotherResponse = "Your Game Score is: " + gameScore;
    submissionResponseEl2.textContent = anotherResponse;
}

function setFin() {
    console.log("set fin countdown triggered ===")
    console.log(gameScore + "gameScore var is highscore")
    localStorage.setItem('highScore', gameScore)
    console.log(gameScore)
    gameScoreInput.textContent = gameScore
    //add initials and log high score

}

// Add listener to submit element
submitEl.addEventListener("click", showResponse);

var resetBtn = document.querySelector(".reset-button")

function playAgain() {
    localStorage.setItem('gameScore', 0)
    localStorage.setItem('incorrect', 0)
    correctCounter = 0;
    incorrectCounter = 0;
    win.textContent = 0;
    lose.textContent = 0;
    startButton.disabled = true
    // questionList.textContent = "print this"
    timerCount = 10
    countdown()
    currentQuestion = questionList[0]
    allQuestionsIndex = 0
    questionListIndex = 0
    getQuestion()
    // correctResponse()
    questionCount = 1
}

resetBtn.addEventListener("click", playAgain)


submitEl.addEventListener("click", showResponse);

function stop() {
    console.log("you've reached the end of the game")
    clearInterval(countdown);
}