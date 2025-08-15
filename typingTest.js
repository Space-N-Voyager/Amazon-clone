const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice makes perfect.",
  "Speed is not as important as accuracy."
];

let timer, startTime;
const quoteElement = document.getElementById("quote");
const textInput = document.getElementById("textInput");
const timerElement = document.getElementById("timer");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart");

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function startTimer() {
  startTime = new Date();
  timer = setInterval(() => {
      let elapsedTime = Math.floor((new Date() - startTime) / 1000);
      timerElement.textContent = `Time: ${elapsedTime}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function calculateResults() {
  const typedText = textInput.value.trim();
  const originalText = quoteElement.textContent.trim();

  let correctChars = 0;
  for (let i = 0; i < typedText.length; i++) {
      if (typedText[i] === originalText[i]) correctChars++;
  }

  let accuracy = ((correctChars / originalText.length) * 100).toFixed(2);
  let timeTaken = Math.floor((new Date() - startTime) / 1000);
  let wpm = Math.floor((typedText.length / 5) / (timeTaken / 60));

  resultElement.innerHTML = `Accuracy: ${accuracy}% | WPM: ${wpm}`;
}

function resetGame() {
  quoteElement.textContent = getRandomQuote();
  textInput.value = "";
  textInput.disabled = false;
  timerElement.textContent = "Time: 0s";
  resultElement.textContent = "";
  clearInterval(timer);
}

textInput.addEventListener("input", () => {
  if (!startTime) startTimer();

  if (textInput.value.trim() === quoteElement.textContent.trim()) {
      stopTimer();
      calculateResults();
      textInput.disabled = true;
  }
});

restartButton.addEventListener("click", resetGame);

// Initialize the first quote
resetGame();
