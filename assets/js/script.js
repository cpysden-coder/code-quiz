var startButton = document.querySelector(".start-button");
var questionList = document.querySelector(".question-list");
var timerElement = document.querySelector(".timer-count");
var setLoss = document.querySelector(".lose");
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

var q1 = ["first question",
    "second question", "thrid question", "fourth question"]
var q2 = ["fifth question", "sixth question", "seventh question", "eighth question"]
var q3 = ["ninth question", "tenth question", "twelveth question", "thirteenth question"]
var q4 = ["14", "15", "16", "17"]
var allQuestions = [q1, q2, q3, q4]
console.log(allQuestions);
console.log(allQuestions[1])
console.log(allQuestions[1][2])
var answer = "response1"
var questionList = ["question1", "question2", "question3", "question4"]
var questionListIndex = 0
var quTitle = questionList[questionListIndex]
var currentQuestion = [quTitle]
var question1 = "response2"
var question2 = "response1"
var question3 = "response4"
var question4 = "response3"
var answerKey = ["response1", "response2", "response3", "response4"]


startButton.addEventListener("click", startGame)

function startGame() {
    startButton.disabled = true
    // questionList.textContent = "print this"
    timerCount = 10
    countdown()
    currentQuestion = questionList[0]
    getQuestion()
    // correctResponse()
    questionCount = 1
}

function countdown() {
    timer = setInterval(function () {
        timerCount--
        console.log(`timerCount`, timerCount)
        timerElement.textContent = timerCount
        if (timerCount === 0) {
            clearInterval(timer)
            console.log(`you lose`)
            setLose()
        }
        if (isWin && timerCount > 0) {
            clearInterval(timer)
            console.log(`you win`)
            setWin()
        }
    }, 500)
}

function setWin() { };
function setLose() {
    setLoss.textContent = "you lost"
}

var allQuestionsIndex = 0

function getQuestion() {
    
    quesTitle.textContent = currentQuestion
    q1cont.textContent = allQuestions[allQuestionsIndex][0]
    q2cont.textContent = allQuestions[allQuestionsIndex][1]
    q3cont.textContent = allQuestions[allQuestionsIndex][3]
    q4cont.textContent = allQuestions[allQuestionsIndex][4]
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
        console.log(answer + "answerkey")
    } else if (currentQuestion == "question2") {
        answer = answerKey[1]
        console.log(answer + "answerkey")
    } else if (currentQuestion == "question3") {
        answer = answerKey[2]
        console.log(answer + "answerkey")
    } else (answer = "response4")
    compareAnswers()
}

function compareAnswers() {
    console.log(answerUser + "user answer")
    if (answer == answerUser) {
        console.log("right answer")
    } else {
        console.log("wrong answer")
    }
    nextQuestion()
}

function nextQuestion() {
    console.log("next quesiton please")
    if (questionListIndex > 3) {
        console.log("game over or at least a bit of it is")
        stop()
    }
    allQuestionsIndex++
    questionListIndex++

    console.log("the next question list index is: " + questionListIndex)
    quTitle = questionList[questionListIndex]
    currentQuestion = [quTitle]
    getQuestion()
    
}
function stop() {
    console.log("you've reached the end of the game")
    clearInterval(countdown)
}

