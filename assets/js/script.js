// Variables to link from HTML
var startBtn = document.querySelector("#start");
var questionsContainer = document.querySelector("#questionBox");
var instructions = document.querySelector("#instructions-container");
var currentQuestion = 0;
var questions = document.querySelector("#questions");
var answersBox = document.querySelector("#answers");
var results = document.querySelector("#result");
var gameOver = document.querySelector('#gameEnd');
var timeEl = document.querySelector("#timer");
var initialsEl = document.querySelector("#initials");
var finalScoreEl = document.querySelector("#finalScore");
var secondsLeft = 60;
var timerInterval;
var score = 0

// Variables for Quiz Questions

var quizQuestions = [
    { Question: "Who was the Panther's first starting quarterback?", answers: ["Tom Brady", "Joe Montana", "Frank Reich", "Warren Moon"], correct: "Frank Reich" },
    { Question: "Who caught the Panther's first touchdown?", answers: ["Pete Metzelaars", "Don Beebe", "Bob Christian", "Reggie Jones"], correct: "Pete Metzelaars" },
    { Question: "What was the huddle/playbook name of the game-winning play in the double overtime marathon in Missouri?", answers: ["Even Janitor", "X-Clown", "Wildcat", "Statue of Liberty"], correct: "X-Clown" },
    { Question: "Which celebrity was the first player ever cut by the Panthers?", answers: ["O.J. Simpson", "John Matuszak", "Bill Goldberg", "Terry Crews"], correct: "Bill Goldberg" },
    { Question: "Which RB/QB combo pioneered the now widely used 'wildcat' offense?", answers: ["Deangelo Williams/Brett Basanez", "Jonathan Stewart/Cam Newton", "Nick Goings/Jake Delhomme", "Derrick Moore/Kerry Collins"], correct: "Deangelo Williams/Brett Basanez" },
]

// console.table(quizQuestions);
    
    // Checks answer submitted against the correct answer in array
    function checkAnswer(event) {
        console.log(event.target.textContent);
        if (event.target.textContent !== quizQuestions[currentQuestion].correct){
            wrong();
            secondsLeft = secondsLeft - 10;
        }
        if (event.target.textContent === quizQuestions[currentQuestion].correct) {
            correct();
        }
        currentQuestion++;
        if (currentQuestion !== quizQuestions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }
    
    // Show wrong function
    function wrong() {
        results.textContent = "INCORRECT";
        setTimeout(function () {
        results.textContent = "";
    }, 1000);
}
    // Show correct function
    function correct() {
        results.textContent = "CORRECT";
        setTimeout(function () {
        results.textContent = "";
    }, 1000);
}
    
    // shows the Question from array in the div #questions & creates buttons for each answer
    function showQuestion() {
        questions.textContent = quizQuestions[currentQuestion].Question;
        answersBox.innerHTML = "";
        for (let i = 0; i < quizQuestions[currentQuestion].answers.length; i++) {
            const element = quizQuestions[currentQuestion].answers[i];
            var newBtn = document.createElement('button');
            newBtn.textContent = element;
            console.log(newBtn, answersBox);
            newBtn.addEventListener("click", checkAnswer);
            answersBox.appendChild(newBtn);
            newBtn.style.margin = "20px";
        }
    }
        
//  Changes the time Left to Final Score
    function endQuiz() {
        results.textContent = "";
        clearInterval(timerInterval);
        timer.textContent = "Time Left: " + 0;
        questions.style.display= "none";
        answersBox.style.display= "none";
        
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        gameOver.textContent = "All done!"
        finalScoreEl.textContent = "Final Score: " + secondsLeft;
        var initialsInput = document.createElement("INPUT");
        var submitInitials = document.createElement('button');
        var nameText = document.createElement("p");
        nameText.textContent = "Enter Your Name";
        submitInitials.href = "highscores.html";
        submitInitials.textContent = "SUBMIT";
        submitInitials.setAttribute("onclick", "window.location.href='highscores.html'");
        initialsInput.setAttribute("type", "text");
        initialsEl.appendChild(nameText);
        initialsEl.appendChild(initialsInput);
        initialsEl.appendChild(submitInitials);
        submitInitials.onclick(submitIntitials.hef);
    }
    
    // Go to high score page
    function highScore() {

    }
// Timer Function
    function startTimer() {
        timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time Left: " + secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          endQuiz();
        }
      }, 1000);
    }

    function startQuiz () {
        
        startBtn.style.display= "none";
        instructions.style.display= "none";
    
        showQuestion();
        startTimer();
    }


    // start quiz with event listener function
    startBtn.addEventListener("click", startQuiz) 


