
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var timeLeft = document.querySelector(".timer")
var secondsLeft = 60

var title = document.getElementById('title')
var answer = document.getElementById('answers')
var highscores = document.querySelector(".highscores")
highscores.addEventListener('click', highscoresPage)

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
        
        if(secondsLeft <= 0) {
            clearInterval(timerInterval)
            endQuiz()
            timeLeft.textContent = "Time: 0"
        }
    } ,1000)

}

var currentQuestion = questions[currentQuestionIndex]


function quizQuestions () {
    document.getElementById('questions').style.display = "block";
    
    title.textContent = currentQuestion.title
    currentQuestion.answers.forEach(function(choice, i) {
        var answrBtn = document.createElement('button')
        answrBtn.setAttribute("value", choice)
        answrBtn.setAttribute("id", "answer-btn")
        answrBtn.textContent = i + 1 + ". " + choice
        answrBtn.onclick = questionChoice
        answer.appendChild(answrBtn)
    })    
    
    
}


function questionChoice() {
    if (this.value !== questions[currentQuestionIndex].correct) {
        secondsLeft -= 10
        currentQuestionIndex++
        console.log(currentQuestionIndex);
        console.log(score);
        
    } else {
        score += 10
        currentQuestionIndex++
        console.log(currentQuestionIndex);
    }  
    if (currentQuestionIndex === questions.length) {
        endQuiz()
    }   else {
        quizQuestions()
    }
    
}


function highscoresPage () {
    document.getElementById('questions').style.display = "none";
    document.getElementById('start-quiz').style.display = "none";

    let highscoreList = document.createElement("ul", highWindow())
    
    

    
}

function highWindow () {

}

document.getElementById("start-btn").addEventListener('click', startQuiz)

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
function endQuiz () {
    console.log("end");
}
// THEN I can save my initials and my score

// window local storage!!