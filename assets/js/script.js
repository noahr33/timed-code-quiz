
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var timeLeft = document.querySelector(".timer")
var secondsLeft = 60

var title = document.getElementById('title')
var answer = document.getElementById('answers')

const button = document.createElement('button')
button.textContent = answer


var currentQuestionIndex = 0
var score = 0

var answrBtn = document.createElement('button')

var questions = [
    {
        title: "Whats is 1 + 1?",
        answers: ["3","4","2","1"],
        correct: "2"
    },
    {
        title: "Whats is red?",
        answers: ["red","blue","green","yellow"],
        correct: "red"
    },
]
  


function startQuiz () {
    document.getElementById('start-quiz').style.display = "none";
    return quizQuestions () , timer ()
    
}

function timer () {
    var timerInterval = setInterval(function() {
        secondsLeft--
        timeLeft.textContent = "Time: " + secondsLeft
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval)
            endQuiz()
        }
    } ,1000)

}

function quizQuestions () {
    document.getElementById('questions').style.display = "block";
    
    
    var currentQuestion = questions[currentQuestionIndex]
    title.textContent = currentQuestion.title
    currentQuestion.answers.forEach(function(choice, i) {
        var answrBtn = document.createElement('button')
        answrBtn.setAttribute("value", choice)
        answrBtn.setAttribute("id", "answer-btn")
        answrBtn.textContent = i + 1 + ". " + choice
        answer.appendChild(answrBtn)
        answrBtn.addEventListener('click', questionChoice)
        
    })
    
}

function questionChoice() {
   
    console.log("click");
}





document.getElementById("start-btn").addEventListener('click', startQuiz)

// var answerClick = document.querySelector('.answer-input').addEventListener('click', )



// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
function endQuiz () {

}
// THEN I can save my initials and my score

// window local storage!!