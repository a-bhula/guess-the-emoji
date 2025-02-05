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

// Function to check the user's guess
function checkGuess(userGuess) {
    if (userGuess.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').classList.add('correct');
        document.getElementById('feedback').classList.remove('wrong');
        correctAnswers++;
        score += 10;
        document.getElementById('score').textContent = score;
        showConfetti();
        removeQuestion(currentQuestion);
        if (questionCount >= 5) {
            increaseDifficulty();
        } else {
            setTimeout(() => {
                document.getElementById('user-guess').value = '';
                document.getElementById('feedback').textContent = '';
                displayQuestion();
            }, 1000); // Move to the next question after 1 second
        }
        return true;
    } else {
        document.getElementById('feedback').textContent = "Wrong!";
        document.getElementById('feedback').classList.add('wrong');
        document.getElementById('feedback').classList.remove('correct');
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
        return;
    }
    questionCount = 0;
    alert(`Difficulty increased to ${currentDifficulty}!`);
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