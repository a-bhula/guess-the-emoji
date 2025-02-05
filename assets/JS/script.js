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
    document.getElementById('emoji-display').textContent = currentQuestion.emoji;
    questionCount++;
    document.getElementById('next-question').disabled = true; // Disable the "Next Question" button
}
