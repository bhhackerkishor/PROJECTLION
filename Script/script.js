(function() {
  // Use window object to ensure 'score' is only declared once
  if (typeof window.score === 'undefined') {
    window.score = 0;  // Set global variable on the window object
  }
const scoreElement = document.getElementById('score');

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
  
}

// Function to load the score from localStorage
function loadScore() {
  const savedData = localStorage.getItem('tapGameScore');
  if (savedData) {
    const scoreData = JSON.parse(savedData);
    score = scoreData.currentScore;
    scoreElement.innerHTML = score;
    
  }
}

// Automatically load score when page loads
window.onload = function() {
  loadScore();
};