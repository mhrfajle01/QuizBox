import { elements, state, sounds } from './state.js';

export const showElement = (element) => element?.classList.remove('hidden');
export const hideElement = (element) => element?.classList.add('hidden');

export function playSound(sound) {
    if (!state.isMuted) {
        sound.currentTime = 0;
        sound.play().catch(error => console.error("Error playing sound:", error));
    }
}

export function toggleMute(isMuted) {
    state.isMuted = isMuted;
    localStorage.setItem('isMuted', state.isMuted);
    if (isMuted) {
        showElement(elements.volumeOffIcon);
        hideElement(elements.volumeUpIcon);
    } else {
        showElement(elements.volumeUpIcon);
        hideElement(elements.volumeOffIcon);
    }
}

export function toggleTheme(isDark) {
    console.log('toggleTheme called. isDark:', isDark);
    const newTheme = isDark ? 'dark' : 'light';
    document.body.classList.toggle('light-mode', !isDark);
    localStorage.setItem('theme', newTheme);

    if (isDark) {
        showElement(elements.moonIcon);
        hideElement(elements.sunIcon);
        console.log('Switched to Dark Mode: Moon icon visible, Sun icon hidden');
    } else {
        showElement(elements.sunIcon);
        hideElement(elements.moonIcon);
        console.log('Switched to Light Mode: Sun icon visible, Moon icon hidden');
    }
    console.log('Current body classes:', document.body.classList.value);
}

export function updateUITextForQuizType(type) {
    const isBengali = type === 'bengali';
    elements.quizMainTitle.textContent = isBengali ? 'কুইজ গেম' : 'Quiz Game';
    elements.startQuizBtn.textContent = isBengali ? 'কুইজ শুরু করুন' : 'Start Quiz';
    elements.resetGameDataBtn.textContent = isBengali ? 'ডেটা রিসেট' : 'Reset Data';
    elements.userNameLabel.textContent = isBengali ? 'আপনার নাম:' : 'Your Name:';
    elements.categoryLabel.textContent = isBengali ? 'ক্যাটাগরি:' : 'Category:';
    elements.numQuestionsLabel.textContent = isBengali ? 'প্রশ্নের সংখ্যা:' : 'Number of Questions:';
    elements.timePerQuestionLabel.textContent = isBengali ? 'প্রতি প্রশ্নের সময় (সেকেন্ড):' : 'Time per Question (seconds):';
    elements.quizTypeBengaliRadio.nextElementSibling.textContent = isBengali ? 'বাংলা কুইজ' : 'Bengali Quiz';
    elements.quizTypeEnglishRadio.nextElementSibling.textContent = isBengali ? 'English Vocabulary' : 'English Vocabulary';
    if (elements.quizTypeLabel) {
        elements.quizTypeLabel.textContent = isBengali ? 'কুইজের প্রকার:' : 'Quiz Type:';
    }
    if (elements.difficultyLabel) {
        elements.difficultyLabel.textContent = isBengali ? 'কঠিনতার স্তর:' : 'Difficulty:';
    }
}

export function populateCategoryDropdown() {
    const { categorySelect } = elements;
    if (!categorySelect) return;

    categorySelect.innerHTML = '<option value="all">All</option>';

    const questionsSource = state.currentQuizType === 'bengali' ? state.allQuizQuestions : state.allVocabularyQuestions;
    const categories = [...new Set(questionsSource.map(q => q.category))];
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

export function navigateTo(pageElement) {
    [elements.homePage, elements.quizPage, elements.resultsPage, elements.studyPage].forEach(p => {
        p.classList.remove('active');
    });
    pageElement.classList.add('active');
    window.scrollTo(0, 0); // Scroll to the top of the page
}

export function displayHomePage() {
    navigateTo(elements.homePage);
    populateCategoryDropdown();
}

export function updateProgressBar() {
    const progress = ((state.currentQuestionIndex) / state.shuffledQuestions.length) * 100;
    elements.quizProgressBar.style.width = `${progress}%`;
    elements.quizProgressBar.setAttribute('aria-valuenow', progress);
}

export function resetQuestionUI() {
    elements.answerButtonsContainer.innerHTML = '';
    hideElement(elements.feedbackMessage);
    elements.feedbackMessage.textContent = '';
    hideElement(elements.nextQuestionBtn);
}

export function displayReview() {
    const { incorrectAnswersReview } = elements;
    if (state.incorrectAnswers.length === 0) {
        incorrectAnswersReview.innerHTML = '<h3>Review Incorrect Answers</h3><p>No incorrect answers! Great job!</p>';
    } else {
        incorrectAnswersReview.innerHTML = '<h3>Review Incorrect Answers</h3>' + state.incorrectAnswers.map(item => `
            <div class="review-item">
                <p class="question-text">Q: ${item.question}</p>
                <p class="your-answer">Your answer: ${item.yourAnswer}</p>
                <p class="correct-answer">Correct answer: ${item.correctAnswer}</p>
                ${item.explanation ? `<p class="explanation">Explanation: ${item.explanation}</p>` : ''}
            </div>
        `).join('');
    }
}

export function openModal(title, text, onConfirm, confirmText = 'OK', showCancel = false, action = null) {
    elements.modalTitle.textContent = title;
    elements.modalText.innerHTML = text;

    elements.modalConfirmBtn.textContent = confirmText;
    elements.modalConfirmBtn.onclick = () => {
        if (onConfirm) onConfirm();
        closeModal();
    };
    
    if (action) {
        elements.modalConfirmBtn.setAttribute('data-action', action);
    } else {
        elements.modalConfirmBtn.removeAttribute('data-action');
    }

    elements.modalCancelBtn.style.display = showCancel ? 'inline-block' : 'none';
    elements.modalCancelBtn.onclick = () => closeModal();
    
    elements.modalCopyBtn.style.display = 'none';
    
    showElement(elements.modalContainer);
}

export const closeModal = () => hideElement(elements.modalContainer);