var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("start-button");
var heading = document.querySelector("h1");
var btnDiv = document.querySelector("div");

var questions = [
  {
    title: "Question 1",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 1,
  },
  {
    title: "Question 2",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 2,
  },
  {
    title: "Question 3",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 0,
  },
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
  timerInterval = setInterval(function () {
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

btnDiv.addEventListener("click", function (event) {
  if (
    currentQuestion >= 0 &&
    event.target.matches("button") &&
    event.target !== startBtn
  ) {
    var selectedOption = event.target.textContent;
    if (
      selectedOption ===
      questions[currentQuestion].options[questions[currentQuestion].answer]
    ) {
      userScore++;
      console.log("You have selected the correct answer");
      console.log("User score is " + userScore);
    } else {
      console.log("You clicked the wrong answer!");
      secondsLeft -= 10;
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

// function gameOver() {
//   clearInterval(timerInterval);
//   var btnDiv = document.querySelector("div");
//   btnDiv.innerHTML = "";
//   heading.textContent = "Game Over";
// }

console.log(userScore, " user score");



function gameOver() {
  clearInterval(timerInterval);
  timeEl.textContent = "";
  var btns = document.querySelectorAll("div button");
  btns.forEach(function (btn) {
    btn.remove();
  });
  heading.textContent = "Game Over";

  btnDiv.createElement;

  // text input to add initals to show

  // Create the form element
  const form = document.createElement("form");

  // Create the label element and set its attributes
  const label = document.createElement("label");
  label.setAttribute("for", "text-input");
  label.textContent = "Enter your initals ";

  // Create the text input element and set its attributes
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "text-input");
  input.setAttribute("name", "text-input");

  // Create the button element and set its attributes and event listener
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Submit";
  button.addEventListener("click", function () {
    const inputText = document.getElementById("text-input").value;

    // Create a new highScores object with the user's initials and score
    const highScores = {
      initials: inputText,
      score: userScore,
    };

    // Retrieve all the highscores from local storage
    let allHighScores = JSON.parse(localStorage.getItem("highScores"));
    

    // If there are no highscores in local storage, initialize the array with an empty array
    if (!allHighScores) {
      allHighScores = [];
    }

    // Push the new highScores object to the array

    allHighScores.push(highScores);

    // Store the updated highscores array in local storage
    localStorage.setItem("highScores", JSON.stringify(allHighScores));



    console.log("highscores ", highScores);
    console.log("all high scores ", allHighScores);
  

    // reload page once all done
    //  location.reload();
  });

  // Display user score at game over screen

  const displayScore = document.createElement("h2");
  displayScore.textContent = "Your score is " + userScore;
  // append to the h1

  document.body.appendChild(displayScore);

  // Append the label, input, and button elements to the form element
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);

  // Append the form element to the document body
  document.body.appendChild(form);

}

var highScoresLink = document.getElementById("high-scores");

// When i click on high Scores button i can see the highest 10 scores


highScoresLink.addEventListener("click", function () {

  var scores = JSON.parse(localStorage.getItem("highScores"));

  scores.sort((a, b) => b - a);

// Keep only the top 10 scores
scores = scores.slice(0, 10);

  // check if working

  const scoresArray = [];


  scores.forEach(function (highScores) {
    scoresArray.push(highScores);
  });


  console.log (typeof scoresArray);

  scoresArray.sort((a, b) => b.score - a.score);




  console.log( scoresArray);

  
  console.log("you have clicked the high scores button!");
  // remove existing elements on the page
  timeEl.remove();
  heading.textContent = "High Scores";
  startBtn.remove();

  // create highscore div and elements



  let highScoreDiv = document.createElement("div");
  document.body.appendChild(highScoreDiv);

  let highScoreUl = document.createElement("ol");
  highScoreDiv.appendChild(highScoreUl);

  let li = document.createElement("li");
  highScoreUl.appendChild(li);

  // Map the scoresArray to an array of <li> elements as strings
const highScoresHTML = scoresArray.map((score) => {
  return `<li>${score.initials} - ${score.score}</li>`;
});

// Join the array of <li> strings into a single string
const highScoresString = highScoresHTML.join("");

// Assign the resulting string to the innerHTML property of the unordered list element
highScoreUl.innerHTML = highScoresString;



});


