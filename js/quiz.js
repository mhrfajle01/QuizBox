import { elements, state, sounds } from './state.js';
import { shuffleArray, animateValue } from './utils.js';
import { showElement, hideElement, navigateTo, updateProgressBar, resetQuestionUI, playSound, openModal, closeModal, displayReview, displayHomePage, populateCategoryDropdown, updateUITextForQuizType } from './ui.js';

export function filterQuestions() {
    const { categorySelect, difficultySelect } = elements;
    const selectedCategory = categorySelect.value;
    const selectedDifficulty = difficultySelect.value;

    const questionsSource = state.currentQuizType === 'bengali' ? state.allQuizQuestions : state.allVocabularyQuestions;
    
    let tempQuestions = questionsSource;
    if (selectedCategory !== 'all') {
        tempQuestions = tempQuestions.filter(q => q.category === selectedCategory);
    }
    if (state.currentQuizType === 'english' && selectedDifficulty !== 'all') {
        tempQuestions = tempQuestions.filter(q => q.difficulty === selectedDifficulty);
    }
    return tempQuestions;
}

export function handleQuizTypeChange(type) {
    state.currentQuizType = type;
    localStorage.setItem('currentQuizType', type);
    populateCategoryDropdown();
    updateUITextForQuizType(type);
    elements.difficultyWrapper.style.display = type === 'english' ? 'block' : 'none';
}

export function showStudyPage() {
    showElement(elements.loadingIndicator);

    const allFilteredQuestions = filterQuestions();
    const selectedNum = parseInt(elements.numQuestionsSelect.value);
    const syllabusSize = Math.min(selectedNum + 5, allFilteredQuestions.length);

    if (allFilteredQuestions.length === 0) {
        openModal("No Questions", "No questions found for the selected criteria. Please try different options.");
        hideElement(elements.loadingIndicator);
        return;
    }

    state.studySyllabus = shuffleArray([...allFilteredQuestions]).slice(0, syllabusSize);
    state.selectedNumQuestions = selectedNum;

    elements.studyContent.innerHTML = state.studySyllabus.map(q => `
        <div class="study-item">
            <div class="question">${q.question}</div>
            <div class="answer"><b>Answer:</b> ${q.answer}</div>
        </div>
    `).join('');

    hideElement(elements.loadingIndicator);
    navigateTo(elements.studyPage);
    startStudyTimer();
}

export function startStudyTimer() {
    let studyTime = 30;
    elements.studyTimer.textContent = studyTime;
    
    if (state.studyTimer) clearInterval(state.studyTimer);

    state.studyTimer = setInterval(() => {
        studyTime--;
        elements.studyTimer.textContent = studyTime;
        if (studyTime <= 0) initiateQuiz();
    }, 1000);
}

export function initiateQuiz() {
    clearInterval(state.studyTimer);
    showElement(elements.loadingIndicator);

    state.shuffledQuestions = shuffleArray([...state.studySyllabus]).slice(0, state.selectedNumQuestions);

    if (state.shuffledQuestions.length === 0) {
        openModal("Error", "Failed to prepare quiz questions. Please try again.", () => displayHomePage());
        return;
    }

    Object.assign(state, {
        currentQuestionIndex: 0, score: 0, correctCount: 0, incorrectCount: 0,
        unansweredCount: 0, incorrectAnswers: [], timeTakenPerQuestion: [],
        streak: 0, fiftyFiftyUsed: false, skipUsed: false,
        totalTimeBonus: 0, totalStreakBonus: 0,
    });
    
    state.timePerQuestion = parseInt(elements.timePerQuestionInput.value);
    
    elements.fiftyFiftyBtn.disabled = false;
    elements.skipQuestionBtn.disabled = false;

    elements.currentScoreSpan.textContent = state.score;
    elements.totalQNumSpan.textContent = state.shuffledQuestions.length;
    updateProgressBar();

    setTimeout(() => {
        hideElement(elements.loadingIndicator);
        navigateTo(elements.quizPage);
        displayQuestion();
    }, 500);
}

export function displayQuestion() {
    resetQuestionUI();
    const question = state.shuffledQuestions[state.currentQuestionIndex];
    
    elements.currentQNumSpan.textContent = state.currentQuestionIndex + 1;
    elements.questionText.innerHTML = question.question;

    const shuffledOptions = shuffleArray([...question.options]);
    elements.answerButtonsContainer.innerHTML = shuffledOptions.map(option => 
        `<button class="btn" data-answer="${option}">${option}</button>`
    ).join('');
    
    elements.answerButtonsContainer.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', (e) => selectAnswer(e));
    });

    updateProgressBar();
    startTimer();
}

export function startTimer() {
    const { timeLeftSpan } = elements;
    state.timeRemaining = state.timePerQuestion;
    timeLeftSpan.textContent = state.timeRemaining;
    timeLeftSpan.classList.remove('low-time');

    clearInterval(state.timer);
    state.timer = setInterval(() => {
        state.timeRemaining--;
        timeLeftSpan.textContent = state.timeRemaining;
        if (state.timeRemaining <= 5) timeLeftSpan.classList.add('low-time');
        if (state.timeRemaining <= 0) handleTimeout();
    }, 1000);
}

export function handleTimeout() {
    clearInterval(state.timer);
    state.timer = null; // Explicitly set timer to null
    state.unansweredCount++;
    state.streak = 0;
    
    elements.feedbackMessage.textContent = "Time's up!";
    elements.feedbackMessage.className = 'feedback-message incorrect';
    showElement(elements.feedbackMessage);

    elements.answerButtonsContainer.querySelectorAll('.btn').forEach(button => button.disabled = true);
    
    showElement(elements.nextQuestionBtn);
    state.timeTakenPerQuestion.push(state.timePerQuestion);
    setTimeout(() => hideElement(elements.feedbackMessage), 1500); // Hide after 1.5 seconds
}

export function selectAnswer(e) {
    // If the timer has already timed out, ignore the click
    if (state.timer === null) {
        return;
    }

    clearInterval(state.timer);
    state.timer = null; // Explicitly set timer to null after clearing
    const selectedButton = e.target;
    const selectedAnswer = selectedButton.dataset.answer;
    const currentQuestion = state.shuffledQuestions[state.currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;
    const timeTaken = state.timePerQuestion - state.timeRemaining;
    state.timeTakenPerQuestion.push(timeTaken);

    elements.answerButtonsContainer.querySelectorAll('.btn').forEach(button => {
        button.disabled = true;
        if (button === selectedButton) button.classList.add('selected');
    });

    if (selectedAnswer === correctAnswer) {
        handleCorrectAnswer(selectedButton, timeTaken);
    } else {
        handleIncorrectAnswer(selectedButton, selectedAnswer, correctAnswer, currentQuestion);
    }
    
    showElement(elements.feedbackMessage);
    showElement(elements.nextQuestionBtn);
}

export function handleCorrectAnswer(selectedButton, timeTaken) {
    state.score++;
    state.correctCount++;
    state.streak++;

    const timeBonus = Math.max(0, Math.floor((state.timePerQuestion - timeTaken) / 2));
    state.score += timeBonus;
    state.totalTimeBonus += timeBonus;

    if (state.streak >= 3) {
        const streakBonus = state.streak * 2;
        state.score += streakBonus;
        state.totalStreakBonus += streakBonus;
    }

    elements.currentScoreSpan.textContent = state.score;
    selectedButton.classList.add('correct');
    
    elements.feedbackMessage.textContent = "Correct!";
    elements.feedbackMessage.className = 'feedback-message correct';
    
    playSound(sounds.correct);
    setTimeout(() => hideElement(elements.feedbackMessage), 1500); // Hide after 1.5 seconds
}

export function handleIncorrectAnswer(selectedButton, selectedAnswer, correctAnswer, currentQuestion) {
    state.incorrectCount++;
    state.streak = 0;
    selectedButton.classList.add('incorrect');
    
    elements.feedbackMessage.textContent = "Incorrect!";
    elements.feedbackMessage.className = 'feedback-message incorrect';
    
    playSound(sounds.incorrect);

    elements.answerButtonsContainer.querySelectorAll('.btn').forEach(button => {
        if (button.dataset.answer === correctAnswer) button.classList.add('correct');
    });

    state.incorrectAnswers.push({
        question: currentQuestion.question,
        yourAnswer: selectedAnswer,
        correctAnswer: correctAnswer,
        explanation: currentQuestion.explanation || "No explanation available."
    });
    setTimeout(() => hideElement(elements.feedbackMessage), 1500); // Hide after 1.5 seconds
}

export function nextQuestion() {
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < state.shuffledQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

export function endQuiz() {
    console.log("endQuiz called");
    clearInterval(state.timer);
    navigateTo(elements.resultsPage);

    const totalQuestions = state.shuffledQuestions.length;
    const percentageScore = totalQuestions > 0 ? (state.correctCount / totalQuestions) * 100 : 0;

    const circle = document.querySelector('.score-circle .circle');
    if (circle) {
        circle.style.strokeDasharray = `${percentageScore}, 100`;
    }

    console.log("Animating final score:", state.score);
    animateValue(elements.finalScoreSpan, 0, state.score, 1000);
    // Animate other result numbers
    console.log("Animating correct answers:", state.correctCount);
    animateValue(elements.correctAnswersCountSpan, 0, state.correctCount, 800);
    console.log("Animating incorrect answers:", state.incorrectCount);
    animateValue(elements.incorrectAnswersCountSpan, 0, state.incorrectCount, 800);
    console.log("Animating unanswered questions:", state.unansweredCount);
    animateValue(elements.unansweredQuestionsCountSpan, 0, state.unansweredCount, 800);
    
    const totalTime = state.timeTakenPerQuestion.reduce((acc, time) => acc + time, 0);
    const averageTime = totalQuestions > 0 ? (totalTime / totalQuestions) : 0; // Keep as number for animation
    
    // Animate average time, then append 's'
    console.log("Animating average time:", averageTime);
    animateValue(elements.averageTimePerQuestionSpan, 0, parseFloat(averageTime.toFixed(1)), 800, true); // Pass true for decimal
    
    console.log("Animating streak bonus:", state.totalStreakBonus);
    animateValue(elements.streakBonusScoreSpan, 0, state.totalStreakBonus, 800);
    console.log("Animating time bonus:", state.totalTimeBonus);
    animateValue(elements.timeBonusScoreSpan, 0, state.totalTimeBonus, 800);

    displayReview();
}

export function useFiftyFifty() {
    if (state.fiftyFiftyUsed) return;

    const currentQuestion = state.shuffledQuestions[state.currentQuestionIndex];
    const incorrectOptions = shuffleArray(currentQuestion.options.filter(opt => opt !== currentQuestion.answer));
    
    const optionsToRemove = incorrectOptions.slice(0, 2);
    elements.answerButtonsContainer.querySelectorAll('.btn').forEach(button => {
        if (optionsToRemove.includes(button.dataset.answer)) {
            button.classList.add('hidden');
        }
    });
    
    state.fiftyFiftyUsed = true;
    elements.fiftyFiftyBtn.disabled = true;
}

export function skipQuestion() {
    if (state.skipUsed) return;
    
    state.unansweredCount++;
    state.streak = 0;
    state.skipUsed = true;
    elements.skipQuestionBtn.disabled = true;
    
    clearInterval(state.timer);
    nextQuestion();
}

export function resetGameData(callback) {
    openModal(
        "Reset Game Data?",
        "This will clear your name, theme, and other settings. Are you sure?",
        () => {
            localStorage.removeItem('userName');
            localStorage.removeItem('theme');
            localStorage.removeItem('isMuted');
            localStorage.removeItem('timePerQuestion');
            localStorage.removeItem('currentQuizType');
            openModal("Data Reset", "All game data has been cleared.");
            if (callback) {
                callback();
            }
        },
        "Reset",
        true,
        "reset"
    );
}

export function shareScore() {
    const userName = localStorage.getItem('userName') || 'A player';
    const message = `I scored ${state.score} in the Quiz Game! Correct: ${state.correctCount}, Incorrect: ${state.incorrectCount}.`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Quiz Game Score',
            text: message,
        }).catch(console.error);
    } else {
        elements.modalTitle.textContent = "Share Your Score";
        elements.modalText.textContent = message;

        elements.modalConfirmBtn.textContent = "Close";
        elements.modalConfirmBtn.onclick = () => closeModal();
        
        elements.modalCopyBtn.textContent = "Copy";
        elements.modalCopyBtn.style.display = 'inline-block';
        elements.modalCopyBtn.onclick = () => copyToClipboard(message);

        elements.modalCancelBtn.style.display = 'none';
        
        showElement(elements.modalContainer);
    }
}

export function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        openModal('Copied!', 'Score details copied to clipboard.');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        openModal('Error', 'Failed to copy score. Please try again.');
    });
}
