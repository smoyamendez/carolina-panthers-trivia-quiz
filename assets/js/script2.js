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


// function highScores() {
//   // clear current scores on page
//     scoresList.innerHTML = "";

//     // sort scores in order from highest to lowest
//     scores.sort(compareScores);

//     // render scores on page in LIs
//     for (let i = 0; i < storedScores.length; i++) {
//         const li = document.createElement("li");
//         li.textContent = `${scores[i].initials} - ${scores[i].score}`;
//         scoresList.appendChild(li);
//     }

// }

// // updates localStorage with content of scores array
// function storeScore() {
//     localStorage.setItem("storedScore", JSON.stringify(scores));
// }

// // checks for scores in localStorage and loads them into scores array
// function loadScores() {
//     const displayScores = JSON.parse(localStorage.getItem("storedScore"));
//     if (displayScores) {
//         storedScore = displayScores;
//     }
// }
