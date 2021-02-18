// Variables to link from HTML
var startBtn = document.querySelector("#start");
var questionsContainer = document.querySelector("#questionBox");
var instructions = document.querySelector("#instructions-container");
var currentQuestion = 0;
var questions = document.querySelector("#questions");
var results = document.querySelector("#result");


// Variables for Quiz Questions

var quizQuestions = [
    { Question: "Who was the Panther's first starting quarterback?", answers: ["Tom Brady", "Joe Montana", "Frank Reich", "Warren Moon"], correct: "Frank Reich" },
    { Question: "Who caught the Panther's first touchdown?", answers: ["Pete Metzelaars", "Don Beebe", "Bob Christian", "Reggie Jones"], correct: "Pete Metzelaars" },
    { Question: "What was the huddle/playbook name of the game-winning play in the double overtime marathon in Missouri?", answers: ["Even Janitor", "X-Clown", "Wildcat", "Statue of Liberty"], correct: "X-Clown" },
    { Question: "Which celebrity was the first player ever cut by the Panthers?", answers: ["O.J. Simpson", "John Matuszak", "Bill Goldberg", "Terry Crews"], correct: "Bill Goldberg" },
    { Question: "Which RB/QB combo pioneered the now widely used 'wildcat' offense?", answers: ["Deangelo Williams/Brett Basanez", "Jonathan Stewart/Cam Newton", "Nick Goings/Jake Delhomme", "Derrick Moore/Kerry Collins"], correct: "Deangelo Williams/Brett Basanez" },
]

console.table(quizQuestions);




//  for each answer create a button

// for (var i = 0; i < quizQuestions[i].Question[i].answers[i].length; i++) {
//     var answerEl = document.createElement ('button');
//     answerEl.textContent = quizQuestions[i].answers[i];
//     questionsContainer.append(answerEl);
// }

// Timer
// var timeEl = document.querySelector("#timer");
// var secondsLeft = 60;

// function timerSet() {
// // Sets interval
// var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = "Time Left: " + secondsLeft;

//     if(secondsLeft === 0) {
//         // Stop game
//         // alert game over
//         // bring up end game
//     }, 1000;
// }

// )
// }


function checkAnswer(event) {
    console.log(event.target.textContent);
    if (event.target.textContent !== quizQuestions[currentQuestion].correct){
        alert("wrong");
    }
    currentQuestion++;
    if (currentQuestion !== quizQuestions.length) {
        showQuestion();
    } else {
        alert("Game Over");
    }
}

function showQuestion() {
    questions.textContent = quizQuestions[currentQuestion].Question;
    results.innerHTML = "";
    for (let i = 0; i < quizQuestions[currentQuestion].answers.length; i++) {
        const element = quizQuestions[currentQuestion].answers[i];
        var newBtn = document.createElement('button');
        newBtn.textContent = element;
        console.log(newBtn, results);
        newBtn.addEventListener("click", checkAnswer);
        results.appendChild(newBtn);
    }
}

// start quiz with event listener function
startBtn.addEventListener("click", function () {
    showQuestion();
    console.log("Start Quiz");
})

