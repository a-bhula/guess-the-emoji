// Arrays of emoji questions for each difficulty level
const easyQuestions = [
    { emoji: "🦑🎮", answer: "squid game", hint: "Movie" },
    { emoji: "⭐💰", answer: "starbucks", hint: "Brand name" },
    { emoji: "🦁👑", answer: "lion king", hint: "Disney movie" },
    { emoji: "👀📱", answer: "iphone", hint: "Brand name" },
    { emoji: "🔎🐟", answer: "finding nemo", hint: "Movie" }
];

const mediumQuestions = [
    { emoji: "👁️🔑🅰️", answer: "ikea", hint: "Sweeden super shop" },
    { emoji: "☁️☀️🌧🥄🥄", answer: "wetherspoons", hint: "Uk pub" },
    { emoji: "👨👨👨👨👨", answer: "five guys", hint: "Its simpler than you think" },
    { emoji: "🌮🔔", answer: "taco bell", hint: "Mexican food" },
    { emoji: "⬆️🧭😊", answer: "North Face", hint: "Opposite of South Foot" }
];

const hardQuestions = [
    { emoji: "🛁👑🔔💨", answer: "the fresh prince of bel air", hint: "In West Philadelphia born and raised..." },
    { emoji: "😀😭😡😱🤢", answer: "inside out", hint: "Movie about a girl with her five emotions" },
    { emoji: "󠁧󠁢󠁳👩‍🚀🌌🕰️", answer: "interstellar", hint: "Movie about space and time manipulation" },
    { emoji: "🐒🌆🗽", answer: "planet of the apes", hint: "Ape Together Strong!!!" },
    { emoji: "🕴️🔴💊🔵", answer: "the matrix", hint: "Slow motion bullet time" }
];

// Variables to track the current difficulty, question count, and score
let currentDifficulty = 'easy';
let questionCount = 0;
let correctAnswers = 0;
let currentQuestion = null;
let score = 0;
let timerInterval;
let timerStarted = false;

// Function to get a random question from the selected difficulty level
function getRandomQuestion() {
    let questions;
    if (currentDifficulty === 'easy') {
        questions = easyQuestions;
    } else if (currentDifficulty === 'medium') {
        questions = mediumQuestions;
    } else {
        questions = hardQuestions;
    }
    if (questions.length === 0) {
        return undefined; // Return undefined if no questions are left
    }
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Function to display a question
function displayQuestion() {
    if (questionCount >= 5) {
        alert('You have completed all questions for this difficulty level!');
        return;
    }
    currentQuestion = getRandomQuestion();
    if (!currentQuestion) {
        alert('No more questions available for this difficulty level!');
        return;
    }
    document.getElementById('emoji-display').textContent = currentQuestion.emoji;
    questionCount++;
    document.getElementById('next-question').disabled = true; // Disable the "Next Question" button
}

// Function to check the user's guess
function checkGuess(userGuess) {
    if (!currentQuestion) {
        console.error('No current question set');
        return;
    }
    if (userGuess.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').classList.add('correct');
        document.getElementById('feedback').classList.remove('wrong');
        correctAnswers++;
        score += 10;
        document.getElementById('score').textContent = score;
        showConfetti();
        removeQuestion(currentQuestion);
        document.getElementById('user-guess').value = '';
        if (questionCount >= 5) {
            increaseDifficulty();
        } else {
            displayQuestion();
        }
        return true;
    } else {
        document.getElementById('feedback').textContent = "Wrong!";
        document.getElementById('feedback').classList.add('wrong');
        document.getElementById('feedback').classList.remove('correct');
        document.getElementById('next-question').disabled = false; // Enable the "Next Question" button
        return false;
    }
}

// Function to remove the answered question from the array
function removeQuestion(question) {
    let questions;
    if (currentDifficulty === 'easy') {
        questions = easyQuestions;
    } else if (currentDifficulty === 'medium') {
        questions = mediumQuestions;
    } else {
        questions = hardQuestions;
    }
    const index = questions.indexOf(question);
    if (index > -1) {
        questions.splice(index, 1);
    }
}

// Function to increase the difficulty level
function increaseDifficulty() {
    if (currentDifficulty === 'easy') {
        currentDifficulty = 'medium';
    } else if (currentDifficulty === 'medium') {
        currentDifficulty = 'hard';
    } else {
        alert('Congratulations! You have completed all difficulty levels!');
        clearInterval(timerInterval); // Stop the timer
        return;
    }
    questionCount = 0;
    alert(`Difficulty increased to ${currentDifficulty}!`);
    document.getElementById('feedback').textContent = ''; // Clear the feedback message
    document.getElementById('feedback').classList.remove('correct'); // Remove the "correct" class
    displayQuestion();
}

// Function to show confetti
function showConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.setProperty('--x', Math.random() * 2 - 1);
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1500);
}

// Function to show a hint
function showHint() {
    alert(`Hint: ${currentQuestion.hint}`);
}

// Function to restart the game
function restartGame() {
    currentDifficulty = 'easy';
    questionCount = 0;
    correctAnswers = 0;
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('feedback').textContent = '';
    document.getElementById('user-guess').value = '';
    timerStarted = false;
    clearInterval(timerInterval);
    document.getElementById('time-left').textContent = 90;
    displayQuestion();
}

// Function to start the timer
function startTimer() {
    let timeLeft = 90;
    document.getElementById('time-left').textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('time-left').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            displayQuestion();
        }
    }, 1000);
}

// Event listeners for buttons
document.getElementById('submit-guess').addEventListener('click', () => {
    const userGuess = document.getElementById('user-guess').value;
    checkGuess(userGuess);
});

document.getElementById('next-question').addEventListener('click', () => {
    displayQuestion();
    document.getElementById('user-guess').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').classList.remove('correct'); // Remove the "correct" class
});

document.getElementById('hint').addEventListener('click', () => {
    showHint();
});

document.getElementById('restart').addEventListener('click', () => {
    restartGame();
});

// Event listener to start the timer when the user starts typing
document.getElementById('user-guess').addEventListener('input', () => {
    if (!timerStarted) {
        startTimer();
        timerStarted = true;
    }
});

// Event listener to submit the guess when the user presses Enter
document.getElementById('user-guess').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const userGuess = document.getElementById('user-guess').value;
        checkGuess(userGuess);
    }
});

// Event listeners for the modal
const modal = document.getElementById('instructions');
const openModalBtn = document.getElementById('how-to-play');
const closeModalBtn = document.querySelector('.close');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize the first question
displayQuestion();