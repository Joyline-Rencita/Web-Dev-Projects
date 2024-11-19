const question = document.querySelector('.question');       // Selects the element displaying the current question.
const option1 = document.querySelector('#opt1');            // Selects the label for option 1.
const option2 = document.querySelector('#opt2');            // Selects the label for option 2.
const option3 = document.querySelector('#opt3');            // Selects the label for option 3.
const option4 = document.querySelector('#opt4');            // Selects the label for option 4.
const submitBtn = document.querySelector('#submit');        // Selects the "Submit" button.
const options = document.querySelectorAll('.answer');       // Selects all radio button options.
const quizWrapper = document.querySelector('#quiz-wrapper');// The main quiz container for hiding after the quiz ends.
const result = document.querySelector('#result');           // Displays the final score after the quiz.


let queIndex = 0;              // Tracks the current question index (starts with 0 for the first question).
let score = 0;                 // Tracks the player's score (starts at 0).


// This function loads the current question and its options into the HTML based on the quizArr data.

const loadQuestion = () => {
    let queList = quizArr[queIndex];                                // Fetch the current question object from the `quizArr`.
    
    // Set the question and options in the DOM:
    question.innerHTML = `${queIndex + 1}. ${queList.question}`;    // Displays the question with the index (e.g., "1. What is X?")
    option1.innerHTML = queList.opt1;                               // Sets the text for option 1.
    option2.innerHTML = queList.opt2;                               // Sets the text for option 2.
    option3.innerHTML = queList.opt3;                               // Sets the text for option 3.
    option4.innerHTML = queList.opt4;                               // Sets the text for option 4.
};

loadQuestion(queIndex);                      // Load the first question on page load.


// The below function identifies which option is selected by the user.

const getCheckedAnswer = () => {
    let selectedOption;                                                 // Will hold the ID of the selected option.

    // Loop through all the radio buttons to check which one is selected.
    options.forEach((option) => {
        if (option.checked) {                                           // If the radio button is checked...
            selectedOption = option.id;                                 // Get its ID (e.g., "opt1").
        }
    });

    return selectedOption;                                  // Return the ID of the selected answer or `undefined` if no option is selected.
};


// This function identifies which option is selected by the user.

const deselectAll = () => {
    options.forEach(option => option.checked = false);                      // Loop through all radio buttons and uncheck them.
}


// This is the core of your quiz logic. It handles what happens when the user clicks "Submit."

submitBtn.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();                               // Get the ID of the selected answer.
    deselectAll();                                                          // Deselect all radio buttons after submission.

    // Check if the selected answer matches the correct answer:
    if (checkedAnswer === quizArr[queIndex].ans) {
        score++;                                                            // Increment the score if the answer is correct.
    }

    queIndex++;                                                             // Move to the next question.

    // Check if there are more questions:
    if (queIndex < quizArr.length) {
        loadQuestion(queIndex);                                             // Load the next question.
    }

    else {
        // Quiz is over, hide the quiz wrapper and show the result:

        quizWrapper.classList.add('hidden');                                // Add a CSS class to hide the quiz container.
        
        // Display the final score:

        result.innerHTML = `
            <span class="text-2xl font-semibold">Your Score Is : <span class="text-yellow-500 text-3xl">${score}/${quizArr.length}</span></span>
            <button class="p-3 text-xl mt-4 w-full bg-yellow-600 text-white rounded hover:bg-yellow-700 shadow-lg transition duration-75" onclick="location.reload()">Restart</button>
        `;
    }
});
