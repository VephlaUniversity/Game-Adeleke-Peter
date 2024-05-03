// Declare variables
let randomNum = Math.ceil(Math.random() * 100);
let attempts = 0;

// Get HTML elements
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");
const playAgain = document.querySelector("#reload");

// Event Listener for button click
submit.addEventListener("click", checkGuess);
playAgain.addEventListener("click", function () {
  location.reload();
});

// Function to check the guess
function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;

  // Using Conditionals
  if (userValue === randomNum) {
    hint.innerHTML = `Congratulations! The number was ${randomNum}`;
    hint.style.color = "#17b117";
  }
  if (userValue == " ") {
    alert("Enter a number between 1 and 100");
  }
  if (userValue > 100) {
    hint.innerHTML = "Your number has to be between 1 and 100";
  } else if (userValue < randomNum) {
    hint.innerHTML = "Too low! Try again.";
    hint.style.color = "#e51818";
  } else if (userValue > randomNum) {
    hint.innerHTML = "Too high! Try again.";
    hint.style.color = "#e51818";
  } else if (isNaN(userValue)) {
    hint.innerHTML = "Input a valid number!";
  }

  // Display the number of attempts
  attemptsText.innerHTML = "Attempts: " + attempts;
}
