  let score = 0;
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