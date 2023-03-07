var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("start-button");
var heading = document.querySelector("h1");
var btnDiv = document.querySelector("div");





// creates a button

var btnCreate = document.createElement("button");

// 1  When start button is pressed a timer starts

let secondsLeft = 20;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft;

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // also run future function to display game over
    }
  }, 1000);
}

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  setTime();
  questionSet();
}

//  2 Same time the timer starts the page changes with a question and set of answers

var firstQuestion = {
  questionTitle: "this is a sample question 1",

  questions: ["what is a", "what is b", "what is c", "what is d"],

  correctAnswer: ["what is b"],
};

function questionSet() {
  heading.innerText = firstQuestion.questionTitle;

  startBtn.remove();

  for (let i = 0; i < firstQuestion.questions.length; i++) {
    let newButton = document.createElement("button");
    newButton.textContent = firstQuestion.questions[i];
    btnDiv.appendChild(newButton);
    CheckAnswer(firstQuestion, newButton);
  }
}

// Button Listner function to see if answer is correct or wrong

let userScore = 0;

function CheckAnswer(firstQuestion, newButton, secondsLeft) {
  newButton.addEventListener("click", function () {
    const buttonText = newButton.textContent;

    if (buttonText == firstQuestion.correctAnswer) {
      userScore++;
      console.log("You have selected the correct answer ");

      console.log("user score is " + userScore);
     
    } else

    {
      console.log("you clicked the wrong answer!");
      secondsLeft = secondsLeft - 5;
      console.log("seconds left after wrong answer " + secondsLeft);
     
    }

    clearButtons();
  });

 
 

}


function clearButtons () {

  var allButtons = document.querySelectorAll("button");

  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].remove();
  };

};

//  3 when an answer is seleted presented with another answer

function nextQuestionSet() {
 

}

// 4 if i click the wrong answer time is removed from the timer

/*function with if statments that will change timerInterval funciton

*/

//  5 when all questions are answered or the timer reaches zero the game is over

/*
function for when all questions are answered or secondsLeft = 0 presented with gameover screen and..
*/

// 6 Once quiz over i can save my initals and score

/*

form to enter initals 

save score to local storage

then retrieve and make visible on highscore screen 

*/
