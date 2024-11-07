let score = 0;
let gameInterval;
let timerInterval;
let timeLeft = 15;

function startGame() {
    // Reset score and timer
    score = 0;
    timeLeft = 15;
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = timeLeft;

    // Clear existing intervals
    clearInterval(gameInterval);
    clearInterval(timerInterval);

    // Start the game
    gameInterval = setInterval(createStar, 1200); // Increase interval for more spaced-out stars
    timerInterval = setInterval(updateTimer, 1000);

    // // Hide start button
    // document.getElementById('start-button').style.display = 'none';
}

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 270 + 'px'; // Adjusted to fit within game area width
    
    // Add click event to increase score and remove star
    star.addEventListener('click', function() {
        score++;
        document.getElementById('score').textContent = score;
        star.remove();
    });

    document.getElementById('game-area').appendChild(star);

    // Remove star after animation ends
    setTimeout(() => {
        if (document.getElementById('game-area').contains(star)) {
            star.remove();
        }
    }, 5000); // Matches fall animation duration
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        alert('Game Over! Your score is ' + score);
        // document.getElementById('start-button').style.display = 'block';
    }
}
