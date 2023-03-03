var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("start-button");


//  When start button is pressed a timeer starts



console.log(timeEl, "time element")

var secondsLeft = 60;


function setTime() {


   
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time Left: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // also run future function to display game over
    
      }
  
    }, 1000);
  };


  startBtn.addEventListener("click", function() {
    console.log( "You clicked the start button");

    setTime();

  });


// Same time the timer starts the page changes with a question and set of answers

// when an answer is seleted presented with another answer

// if i click the wrong answer time is removed from the timer

// when all questions are answered or the timer reaches zero the game is over


//Once quiz over i can save my initals and score 



