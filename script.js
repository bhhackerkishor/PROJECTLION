let score = 0;
const scoreElement = document.getElementById('score');
const statusElement = document.getElementById('status');

// Function to increase the score and automatically save it
function incrementScore() {
  score++;
  scoreElement.innerHTML = score;
  saveScore(); // Automatically save the score after each tap
}

// Function to save the score in JSON format to localStorage
function saveScore() {
  const scoreData = {
    currentScore: score
  };

  localStorage.setItem('tapGameScore', JSON.stringify(scoreData));
  statusElement.innerHTML = "Score saved!";
}

// Function to load the score from localStorage
function loadScore() {
  const savedData = localStorage.getItem('tapGameScore');
  if (savedData) {
    const scoreData = JSON.parse(savedData);
    score = scoreData.currentScore;
    scoreElement.innerHTML = score;
    statusElement.innerHTML = "Score loaded!";
  } else {
    statusElement.innerHTML = "No saved score found!";
  }
}

// Automatically load score when page loads
window.onload = function() {
  loadScore();
};