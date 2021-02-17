// Variables to link from HTML
var startBtn = document.querySelector("#start");
var questionsContainer = document.querySelector("#questionBox");
var timeClock = document.querySelector("#timer");
var instructions = document.querySelector("#instructions-container");


var answer1 = document.querySelector("#1");
var answer2 = document.querySelector("#2");
var answer3 = document.querySelector("#3");
var answer4 = document.querySelector("#4");

// Variables for Quiz Questions

var quizQuestions = [
{Question: "Who was the Panther's first starting quarterback?", answers:["Tom Brady", "Joe Montana", "Frank Reich", "Warren Moon"], correct:"Frank Reich"},
{Question: "Who caught the Panther's first touchdown?", answers:["Pete Metzelaars", "Don Beebe", "Bob Christian", "Reggie Jones"], correct:"Pete Metzelaars"},
{Question: "What was the huddle/playbook name of the game-winning play in the double overtime marathon in Missouri?", answers:["Even Janitor", "X-Clown", "Wildcat", "Statue of Liberty"], correct:"X-Clown"},
{Question: "Which celebrity was the first player ever cut by the Panthers?", answers:["O.J. Simpson", "John Matuszak", "Bill Goldberg", "Terry Crews"], correct:"Bill Goldberg"},
{Question: "Which RB/QB combo pioneered the now widely used 'wildcat' offense?", answers:["Deangelo Williams/Brett Basanez", "Jonathan Stewart/Cam Newton", "Nick Goings/Jake Delhomme", "Derrick Moore/Kerry Collins"], correct:"Deangelo Williams/Brett Basanez"},
]

// when start(call in event listener) Loop through answers and generate buttons in loop (use HTML DOM appendchild()) Method

function generateQuestions() {
    var question = document.createElement("ul")
}

displayAnswers();
// Use a counter variable to keep track of what question I am on
// for (var i = 0; i < question[count].answers.length; i++) {
    //create button using js
    // add data attribute to button that corresponds to answer position in array so I can check vs correct answer
    //add button text
    //append to the div I want to put the buttons in }
    
    
    // start quiz with event listener function
    startBtn.addEventListener("click", function() { 
        
        console.log("Start Quiz");
        
        // Timer function => needs to start timer when start clicked & end quiz and show score page when finished
        
        // function totalTime()
        
        
        // function when timer is at nothing, then create X element and set it to this source in this area
        // function sendMessage() {
        //     timeClock.textContent = " ";
        //     var imgEl = document.createElement("img");
        //     imgEl.setAttribute("src", "images/image_1.jpg");
        //     mainEl.appendChild(imgEl);
            
        // }
        
  })

  