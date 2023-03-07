var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("start-button");
var heading = document.querySelector("h1");
var btnDiv = document.querySelector("div");
var questions = [
  {
    title: "Question 1",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 1
  },
  {
    title: "Question 2",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 2
  },
  {
    title: "Question 3",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 0
  }
];
var userScore = 0;
var currentQuestion = 0;
var secondsLeft = 60;
var timerInterval;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  setTime();
  showQuestion();
}

function setTime() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

function showQuestion() {
  heading.textContent = questions[currentQuestion].title;
  btnDiv.innerHTML = "";
  for (var i = 0; i < questions[currentQuestion].options.length; i++) {
    var newButton = document.createElement("button");
    newButton.textContent = questions[currentQuestion].options[i];
    btnDiv.appendChild(newButton);
  }
}

btnDiv.addEventListener("click", function(event) {
  if (currentQuestion >= 0 && event.target.matches("button") && event.target !== startBtn) {
    var selectedOption = event.target.textContent;
    if (selectedOption === questions[currentQuestion].options[questions[currentQuestion].answer]) {
      userScore++;
      console.log("You have selected the correct answer");
      console.log("User score is " + userScore);
    } else {
      console.log("You clicked the wrong answer!");
      secondsLeft -= 5;
      console.log("Seconds left after wrong answer " + secondsLeft);
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
      clearInterval(timerInterval);
      gameOver();
    } else {
      showQuestion();
    }
  }
});

function gameOver() {
  clearInterval(timerInterval);
  var btnDiv = document.querySelector("div");
  btnDiv.innerHTML = "";
  heading.textContent = "Game Over";
}




function gameOver() {
  clearInterval(timerInterval);
  var btns = document.querySelectorAll("div button");
  btns.forEach(function(btn) {
    btn.remove();
  });
  heading.textContent = "Game Over";
}


// //  5 when all questions are answered or the timer reaches zero the game is over

// /*
// function for when all questions are answered or secondsLeft = 0 presented with gameover screen and..
// */

// // 6 Once quiz over i can save my initals and score

// /*

// form to enter initals 

// save score to local storage

// then retrieve and make visible on highscore screen 

// */
