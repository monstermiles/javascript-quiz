//variables 
var startButton = document.querySelector("#start-button")
var timerEl = document.querySelector("#timer")
var quizIntro = document.querySelector("#intro")
var quizEl = document.querySelector("#quiz")
var questionEl = document.querySelector("#question")
var quizEnd = document.querySelector("#end")
var choiceButtons = document.querySelector(".choice-buttons")
var choice0 = document.querySelector("#choice0")
var choice1 = document.querySelector("#choice1")
var choice2 = document.querySelector("#choice2")
var choice3 = document.querySelector("#choice3")
var score = document.querySelector("#score")
var initialsEl = document.getElementById("initials")
var submitButton = document.querySelector("#submit")
var secondsLeft = 30
var questionIndex = 0
var userScore = 0;
var scoreEl = document.querySelector("#score")
var highScoreList = document.querySelector("#high-score-list")
//array of questions 
var quiz = [
    {
        question: "What is 10 % 3?",
        choices: ["7", "12", "173", "1"],
        answerIndex: 3
    },
    {
        question: "Which of the following is a primitive data type? ",
        choices: ["string", "array", "object", "function"],
        answerIndex: 0
    },
    {
        question: "Which of the following symbols indicates an array?",
        choices: [ "[ ]", "!", "{ }", "< >"],
        answerIndex: 0
    },
    {
        question: "Which describes the following line of code?   for (var i = 0; i < 5; i++) ",
        choices: ["Ancient Greek", "hieroglyphics", "a language from an extraterrestrial civiliaztion", "a for-loop"],
        answerIndex: 3
    },
    {
        question: "What is the answer to this question?",
        choices: ["not this one", "nope", "still not this one", "this one"],
        answerIndex: 3

    }

];


//hide end div  and quiz div
quizEnd.setAttribute("style", "display:none")
quizEl.setAttribute("style", "display:none")


//start quiz
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    quizIntro.setAttribute("style", "display:none")
    quizEl.setAttribute("style", "display:normal")
    setTime()
    displayQuestion()
    displayChoices()

}

//start timer
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft
     if (secondsLeft === 0) {
        clearInterval(timerInterval);
        quizEl.setAttribute("style", "display:none")
        quizEnd.setAttribute("style", "display:normal")
        giveScore()
     } 
     //timer stops and is hidden when all questions are answered
     if (questionIndex > 4) {
         clearInterval(timerInterval)
         timerEl.setAttribute("style", "display:none")
     }
    }, 
    1000, )
}


//display questions and choices

function displayQuestion() {
    questionEl.textContent=(quiz[questionIndex].question)
}

function displayChoices(){
    choice0.textContent=(quiz[questionIndex].choices[0])
    choice0.setAttribute("value", 0)
    choice1.textContent=(quiz[questionIndex].choices[1])
    choice1.setAttribute("value", 1)
    choice2.textContent=(quiz[questionIndex].choices[2])
    choice2.setAttribute("value", 2)
    choice3.textContent=(quiz[questionIndex].choices[3])
    choice3.setAttribute("value", 3)
}

//on answer click
choice0.addEventListener("click", nextQuestion)
choice1.addEventListener("click", nextQuestion)
choice2.addEventListener("click", nextQuestion)
choice3.addEventListener("click", nextQuestion)

//move to next question
function nextQuestion(event) {
    event.preventDefault()
    console.log("grabbing the value of the button", event.target.value)
    if (event.target.value == quiz[questionIndex].answerIndex) {
        console.log("correct")
        userScore++
        questionIndex++
        if (questionIndex > 4) {
            endGame()
            
        } else {
            displayQuestion()
            displayChoices()
        }
       
    } else {
        console.log('incorrect')
        questionIndex++
        if (questionIndex > 4) {
           endGame()
        } else {
            displayQuestion()
            displayChoices()
        }
    }
    console.log('user score:', userScore)
    
}

//end of game 
function endGame() {
    quizEnd.setAttribute("style", "display:normal")   
    quizEl.setAttribute("style", "display:none")
    scoreEl.textContent = userScore

}


submitButton.addEventListener("click", addInitials)
submitButton.addEventListener("click", addScore)
///try making the high score list in the html and just creating and appending the lis


//add initials to the high scores list by appending an li 

var highScoreEl = document.createElement("li")

function addInitials(event) {
    event.preventDefault()
    console.log(initialsEl.value)
    highScoreList.appendChild(highScoreEl)
    highScoreEl.textContent = (initialsEl.value) + ": " + (userScore)
}

function addScore() {

}