
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var timeLeft = document.querySelector(".timer")
var secondsLeft = 60

var answrOne = document.getElementById('answr-1')
var answrTwo = document.getElementById('answr-2')
var answrThree = document.getElementById('answr-3')
var answrFour = document.getElementById('answr-4')


var questionOne = {
    input1: "Red",
    input2: "Blue",
    input3: "Green",
    input4: "Purple"
}



function  firstQuestion() {

    var questionOne = {
        input1: "Red",
        input2: "Blue",
        input3: "Green",
        input4: "Purple"
    }

    answrOne.textContent = questionOne.input1
    answrTwo.textContent = questionOne.input2
    answrThree.textContent = questionOne.input3
    answrFour.textContent = questionOne.input4
}


function startQuiz () {
    document.getElementById('start-quiz').style.display = "none";
    return questions () , timer ()
    
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

function questions () {
    document.getElementById('questions').style.display = "block";

    firstQuestion()

    

    // for (var i = 0; i < ; i++) {
        
    
    // }
}

document.getElementById("start-btn").addEventListener('click', startQuiz)



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

// window local storage!!!