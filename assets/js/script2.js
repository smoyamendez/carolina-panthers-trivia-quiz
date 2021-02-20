// Variables for highscore.html

var highscoreTable = document.querySelector ("#highscoreTable");
var restartBtn = document.querySelector("#restartBtn");
var highscoreList = document.querySelector("#highscoreList");


// start quiz with event listener function
restartBtn.setAttribute("onclick", "window.location.href='index.html'");


// Start highscore page
var storedScore = [];

function getScore() {
   var highscores = JSON.parse(localStorage.getItem("highscore"));

    for (var i = 0; i < highscores.length; i++){
        highscoresBox = document.createElement("li");
        highscoresBox.textContent = highscores[i].name + " : " + highscores[i].score;
        highscoreList.appendChild(highscoresBox);

    }

}

getScore();


