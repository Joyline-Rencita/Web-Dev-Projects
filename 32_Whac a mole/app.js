// Select all elements with the class 'square'
const squares = document.querySelectorAll('.square'); 

// Select the start button element
const start = document.querySelector('.startt'); 

// Select the "start over" button element
const startOver = document.querySelector('.start-over'); 

// Select the element to display the remaining time
const timeLeft = document.querySelector('.time'); 

// Select the element to display the player's score
const score = document.querySelector('.your-score'); 

// Variables to track the current position of the mole, score, and game timing
let hitPosition; // Tracks the square with the mole
let result = 0; // Player's score
let currentTime = 60; // Initial countdown time in seconds
let timerID; // ID for the mole movement interval
let countDownTimerId; // ID for the countdown timer interval
let temp = 0; // Tracks whether the game is active (prevents score update when not started)

// Add an event listener to start the game when the start button is clicked
start.addEventListener('click', startGame);

// Add an event listener to reset the game when the "start over" button is clicked
startOver.addEventListener('click', startAgain);

// Function to reset the game
function startAgain() {
    // Hide the overlay (game over screen)
    $('.overlay').hide(); 
    document.body.classList.remove('overlay-is-open'); 
    
    // Show the start button
    $('.startt').show(); 
    
    // Reset the timer, score, and game variables
    timeLeft.textContent = 60;
    score.textContent = 0;
    result = 0; 
    currentTime = 60; 
    temp = 0;
}

// Function to start the game
function startGame() {
    currentTime = 60; // Reset the timer
    result = 0; // Reset the score
    start.style.display = "none"; // Hide the start button
    temp++; // Mark the game as active
    moveMole(); // Start moving the mole
}

// Function to randomly select a square and place the mole in it
function randomSquare() {
    // If time runs out, end the game
    if (currentTime <= 0) {
        hitPosition = null; // Clear the current mole position
        clearInterval(timerID); // Stop the mole movement interval
        document.querySelector('#final-score').innerHTML = result; // Display the final score
        $('.overlay').show(); // Show the overlay (game over screen)
        document.body.classList.add('overlay-is-open');
        return; 
    }

    // Remove the 'mole' class from all squares
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    // Select a random square and add the 'mole' class to it
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    // Update the hitPosition with the ID of the randomly selected square
    hitPosition = randomSquare.id;
}

// Add event listeners to each square to handle "clicks" (mouse down event)
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        // Check if the clicked square matches the mole's position
        if (square.id == hitPosition) {
            if (temp != 0) { // Ensure the game is active before updating the score
                result++; // Increment the score
                score.textContent = result; // Update the displayed score
            }
            hitPosition = null; // Clear the mole's position
        }
    });
});

// Function to move the mole periodically
function moveMole() {
    timerID = setInterval(randomSquare, 500); // Change the mole's position every 500ms
    countDownTimerId = setInterval(countDown, 1000); // Start the countdown timer
}

// Function to update the countdown timer
function countDown() {
    currentTime--; // Decrease the time by 1 second
    timeLeft.textContent = currentTime; // Update the displayed time

    // If the timer reaches zero, stop the countdown timer
    if (currentTime <= 0) {
        clearInterval(countDownTimerId); 
    }
}
