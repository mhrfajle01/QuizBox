document.addEventListener('DOMContentLoaded', () => {
    /**
     * The main class for the Quiz Game.
     * It encapsulates all the logic, state, and UI management for the quiz.
     */
    class Quiz {
        constructor() {
            // --- DOM Element Selection ---
            this.elements = {
                homePage: document.getElementById('home-page'),
                quizPage: document.getElementById('quiz-page'),
                resultsPage: document.getElementById('results-page'),
                studyPage: document.getElementById('study-page'),
                quizMainTitle: document.getElementById('quiz-main-title'),
                userNameInput: document.getElementById('user-name-input'),
                categorySelect: document.getElementById('category-select'),
                difficultySelect: document.getElementById('difficulty-select'),
                numQuestionsSelect: document.getElementById('num-questions-select'),
                timePerQuestionInput: document.getElementById('time-per-question-input'),
                startQuizBtn: document.getElementById('start-quiz-btn'),
                resetGameDataBtn: document.getElementById('reset-game-data-btn'),
                currentQNumSpan: document.getElementById('current-q-num'),
                totalQNumSpan: document.getElementById('total-q-num'),
                quizProgressBar: document.getElementById('quiz-progress-bar'),
                questionText: document.getElementById('question-text'),
                answerButtonsContainer: document.getElementById('answer-buttons'),
                timeLeftSpan: document.getElementById('time-left'),
                currentScoreSpan: document.getElementById('current-score'),
                feedbackMessage: document.getElementById('feedback-message'),
                nextQuestionBtn: document.getElementById('next-question-btn'),
                loadingIndicator: document.getElementById('loading-indicator'),
                finalScoreSpan: document.getElementById('final-score'),
                correctAnswersCountSpan: document.getElementById('correct-answers-count'),
                incorrectAnswersCountSpan: document.getElementById('incorrect-answers-count'),
                unansweredQuestionsCountSpan: document.getElementById('unanswered-questions-count'),
                averageTimePerQuestionSpan: document.getElementById('average-time-per-question'),
                streakBonusScoreSpan: document.getElementById('streak-bonus-score'),
                timeBonusScoreSpan: document.getElementById('time-bonus-score'),
                incorrectAnswersReview: document.getElementById('incorrect-answers-review'),
                restartQuizBtn: document.getElementById('restart-quiz-btn'),
                shareScoreBtn: document.getElementById('share-score-btn'),
                goHomeBtn: document.getElementById('go-home-btn'),
                themeToggleCheckbox: document.getElementById('theme-toggle-checkbox'),
                muteToggleCheckbox: document.getElementById('mute-toggle-checkbox'),
                fiftyFiftyBtn: document.getElementById('fifty-fifty-btn'),
                skipQuestionBtn: document.getElementById('skip-question-btn'),
                lifelinesContainer: document.querySelector('.lifelines'),
                quizTypeBengaliRadio: document.getElementById('quiz-type-bengali'),
                quizTypeEnglishRadio: document.getElementById('quiz-type-english'),
                difficultyWrapper: document.querySelector('.difficulty-wrapper'),
                modalContainer: document.getElementById('modal-container'),
                modalTitle: document.getElementById('modal-title'),
                modalText: document.getElementById('modal-text'),
                modalConfirmBtn: document.getElementById('modal-confirm-btn'),
                modalCopyBtn: document.getElementById('modal-copy-btn'),
                modalCancelBtn: document.getElementById('modal-cancel-btn'),
                studyContent: document.getElementById('study-content'),
                studyTimer: document.getElementById('study-timer'),
                startQuizFromStudyBtn: document.getElementById('start-quiz-from-study-btn'),
                // Labels for localization
                userNameLabel: document.querySelector('label[for="user-name-input"]'),
                categoryLabel: document.querySelector('label[for="category-select"]'),
                numQuestionsLabel: document.querySelector('label[for="num-questions-select"]'),
                timePerQuestionLabel: document.querySelector('label[for="time-per-question-input"]'),
                quizTypeLabel: document.querySelector('.form-group:nth-of-type(2) > label'),
                difficultyLabel: document.querySelector('.difficulty-wrapper label'),
                sunIcon: document.getElementById('sun-icon'),
                moonIcon: document.getElementById('moon-icon'),
                volumeUpIcon: document.getElementById('volume-up-icon'),
                volumeOffIcon: document.getElementById('volume-off-icon'),
            };

            // --- Audio Elements ---
            this.sounds = {
                correct: new Audio('correct.mp3'),
                incorrect: new Audio('incorrect.mp3'),
            };

            // --- Game State Variables ---
            this.state = {
                studySyllabus: [],
                shuffledQuestions: [],
                currentQuestionIndex: 0,
                score: 0,
                correctCount: 0,
                incorrectCount: 0,
                unansweredCount: 0,
                incorrectAnswers: [],
                timer: null,
                timeRemaining: 0,
                timePerQuestion: 10,
                selectedNumQuestions: 5,
                timeTakenPerQuestion: [],
                streak: 0,
                fiftyFiftyUsed: false,
                skipUsed: false,
                totalTimeBonus: 0,
                totalStreakBonus: 0,
                currentQuizType: 'bengali',
                isMuted: false,
            };
        }

        init() {
            this.addEventListeners();
            this.loadPreferences();
            this.displayHomePage();
        }

        addEventListeners() {
            this.elements.startQuizBtn?.addEventListener('click', () => this.showStudyPage());
            this.elements.restartQuizBtn?.addEventListener('click', () => this.displayHomePage());
            this.elements.startQuizFromStudyBtn?.addEventListener('click', () => this.initiateQuiz());
            this.elements.goHomeBtn?.addEventListener('click', () => this.displayHomePage());
            this.elements.nextQuestionBtn?.addEventListener('click', () => this.nextQuestion());
            this.elements.resetGameDataBtn?.addEventListener('click', () => this.resetGameData());
            this.elements.shareScoreBtn?.addEventListener('click', () => this.shareScore());
            this.elements.themeToggleCheckbox?.addEventListener('change', (e) => this.toggleTheme(e.target.checked));
            this.elements.muteToggleCheckbox?.addEventListener('change', (e) => this.toggleMute(e.target.checked));
            this.elements.fiftyFiftyBtn?.addEventListener('click', () => this.useFiftyFifty());
            this.elements.skipQuestionBtn?.addEventListener('click', () => this.skipQuestion());
            this.elements.quizTypeBengaliRadio?.addEventListener('change', () => this.handleQuizTypeChange('bengali'));
            this.elements.quizTypeEnglishRadio?.addEventListener('change', () => this.handleQuizTypeChange('english'));
            this.elements.userNameInput?.addEventListener('input', (e) => localStorage.setItem('userName', e.target.value));
            this.elements.timePerQuestionInput?.addEventListener('input', (e) => localStorage.setItem('timePerQuestion', e.target.value));
            this.elements.sunIcon?.parentElement.addEventListener('click', () => {
                this.elements.themeToggleCheckbox.checked = !this.elements.themeToggleCheckbox.checked;
                this.elements.themeToggleCheckbox.dispatchEvent(new Event('change'));
            });
            this.elements.volumeUpIcon?.parentElement.addEventListener('click', () => {
                this.elements.muteToggleCheckbox.checked = !this.elements.muteToggleCheckbox.checked;
                this.elements.muteToggleCheckbox.dispatchEvent(new Event('change'));
            });
        }

        loadPreferences() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            this.elements.themeToggleCheckbox.checked = savedTheme === 'dark';
            document.body.classList.toggle('light-mode', savedTheme === 'light');
            if (savedTheme === 'dark') {
                this.showElement(this.elements.moonIcon);
                this.hideElement(this.elements.sunIcon);
            } else {
                this.showElement(this.elements.sunIcon);
                this.hideElement(this.elements.moonIcon);
            }

            const savedMuteState = localStorage.getItem('isMuted') === 'true';
            this.state.isMuted = savedMuteState;
            this.elements.muteToggleCheckbox.checked = savedMuteState;
            if (savedMuteState) {
                this.showElement(this.elements.volumeOffIcon);
                this.hideElement(this.elements.volumeUpIcon);
            } else {
                this.showElement(this.elements.volumeUpIcon);
                this.hideElement(this.elements.volumeOffIcon);
            }
            
            const savedQuizType = localStorage.getItem('currentQuizType') || 'bengali';
            this.handleQuizTypeChange(savedQuizType);
            if (savedQuizType === 'english') {
                this.elements.quizTypeEnglishRadio.checked = true;
            } else {
                this.elements.quizTypeBengaliRadio.checked = true;
            }
            this.elements.userNameInput.value = localStorage.getItem('userName') || '';
            this.elements.timePerQuestionInput.value = localStorage.getItem('timePerQuestion') || 10;
        }

        showElement = (element) => element?.classList.remove('hidden');
        hideElement = (element) => element?.classList.add('hidden');
        shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

        playSound(sound) {
            if (!this.state.isMuted) {
                sound.currentTime = 0;
                sound.play().catch(error => console.error("Error playing sound:", error));
            }
        }

        toggleMute(isMuted) {
            this.state.isMuted = isMuted;
            localStorage.setItem('isMuted', this.state.isMuted);
            if (isMuted) {
                this.showElement(this.elements.volumeOffIcon);
                this.hideElement(this.elements.volumeUpIcon);
            } else {
                this.showElement(this.elements.volumeUpIcon);
                this.hideElement(this.elements.volumeOffIcon);
            }
        }
        
        toggleTheme(isDark) {
            const newTheme = isDark ? 'dark' : 'light';
            document.body.classList.toggle('light-mode', !isDark);
            localStorage.setItem('theme', newTheme);
            if (isDark) {
                this.showElement(this.elements.moonIcon);
                this.hideElement(this.elements.sunIcon);
            } else {
                this.showElement(this.elements.sunIcon);
                this.hideElement(this.elements.moonIcon);
            }
        }

        updateUITextForQuizType(type) {
            const isBengali = type === 'bengali';
            this.elements.quizMainTitle.textContent = isBengali ? 'কুইজ গেম' : 'Quiz Game';
            this.elements.startQuizBtn.textContent = isBengali ? 'কুইজ শুরু করুন' : 'Start Quiz';
            this.elements.resetGameDataBtn.textContent = isBengali ? 'ডেটা রিসেট' : 'Reset Data';
            this.elements.userNameLabel.textContent = isBengali ? 'আপনার নাম:' : 'Your Name:';
            this.elements.categoryLabel.textContent = isBengali ? 'ক্যাটাগরি:' : 'Category:';
            this.elements.numQuestionsLabel.textContent = isBengali ? 'প্রশ্নের সংখ্যা:' : 'Number of Questions:';
            this.elements.timePerQuestionLabel.textContent = isBengali ? 'প্রতি প্রশ্নের সময় (সেকেন্ড):' : 'Time per Question (seconds):';
            this.elements.quizTypeBengaliRadio.nextElementSibling.textContent = isBengali ? 'বাংলা কুইজ' : 'Bengali Quiz';
            this.elements.quizTypeEnglishRadio.nextElementSibling.textContent = isBengali ? 'English Vocabulary' : 'English Vocabulary';
            if (this.elements.quizTypeLabel) {
                this.elements.quizTypeLabel.textContent = isBengali ? 'কুইজের প্রকার:' : 'Quiz Type:';
            }
            if (this.elements.difficultyLabel) {
                this.elements.difficultyLabel.textContent = isBengali ? 'কঠিনতার স্তর:' : 'Difficulty:';
            }
        }
        
        handleQuizTypeChange(type) {
            this.state.currentQuizType = type;
            localStorage.setItem('currentQuizType', type);
            this.populateCategoryDropdown();
            this.updateUITextForQuizType(type);
            this.elements.difficultyWrapper.style.display = type === 'english' ? 'block' : 'none';
        }

        populateCategoryDropdown() {
            const { categorySelect } = this.elements;
            if (!categorySelect) return;

            categorySelect.innerHTML = '<option value="all">All</option>';

            const questionsSource = this.state.currentQuizType === 'bengali' ? allQuizQuestions : allVocabularyQuestions;
            const categories = [...new Set(questionsSource.map(q => q.category))];
            
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });
        }

        filterQuestions() {
            const { categorySelect, difficultySelect } = this.elements;
            const selectedCategory = categorySelect.value;
            const selectedDifficulty = difficultySelect.value;

            const questionsSource = this.state.currentQuizType === 'bengali' ? allQuizQuestions : allVocabularyQuestions;
            
            let tempQuestions = questionsSource;
            if (selectedCategory !== 'all') {
                tempQuestions = tempQuestions.filter(q => q.category === selectedCategory);
            }
            if (this.state.currentQuizType === 'english' && selectedDifficulty !== 'all') {
                tempQuestions = tempQuestions.filter(q => q.difficulty === selectedDifficulty);
            }
            return tempQuestions;
        }

        navigateTo(pageElement) {
            [this.elements.homePage, this.elements.quizPage, this.elements.resultsPage, this.elements.studyPage].forEach(p => {
                p.classList.remove('active');
            });
            pageElement.classList.add('active');
            window.scrollTo(0, 0); // Scroll to the top of the page
        }

        displayHomePage() {
            this.navigateTo(this.elements.homePage);
            this.populateCategoryDropdown();
        }

        showStudyPage() {
            this.showElement(this.elements.loadingIndicator);

            const allFilteredQuestions = this.filterQuestions();
            const selectedNum = parseInt(this.elements.numQuestionsSelect.value);
            const syllabusSize = Math.min(selectedNum + 5, allFilteredQuestions.length);

            if (allFilteredQuestions.length === 0) {
                this.openModal("No Questions", "No questions found for the selected criteria. Please try different options.");
                this.hideElement(this.elements.loadingIndicator);
                return;
            }

            this.state.studySyllabus = this.shuffleArray([...allFilteredQuestions]).slice(0, syllabusSize);
            this.state.selectedNumQuestions = selectedNum;

            this.elements.studyContent.innerHTML = this.state.studySyllabus.map(q => `
                <div class="study-item">
                    <div class="question">${q.question}</div>
                    <div class="answer"><b>Answer:</b> ${q.answer}</div>
                </div>
            `).join('');

            this.hideElement(this.elements.loadingIndicator);
            this.navigateTo(this.elements.studyPage);
            this.startStudyTimer();
        }

        startStudyTimer() {
            let studyTime = 30;
            this.elements.studyTimer.textContent = studyTime;
            
            if (this.state.studyTimer) clearInterval(this.state.studyTimer);

            this.state.studyTimer = setInterval(() => {
                studyTime--;
                this.elements.studyTimer.textContent = studyTime;
                if (studyTime <= 0) this.initiateQuiz();
            }, 1000);
        }

        initiateQuiz() {
            clearInterval(this.state.studyTimer);
            this.showElement(this.elements.loadingIndicator);

            this.state.shuffledQuestions = this.shuffleArray([...this.state.studySyllabus]).slice(0, this.state.selectedNumQuestions);

            if (this.state.shuffledQuestions.length === 0) {
                this.openModal("Error", "Failed to prepare quiz questions. Please try again.", () => this.displayHomePage());
                return;
            }

            Object.assign(this.state, {
                currentQuestionIndex: 0, score: 0, correctCount: 0, incorrectCount: 0,
                unansweredCount: 0, incorrectAnswers: [], timeTakenPerQuestion: [],
                streak: 0, fiftyFiftyUsed: false, skipUsed: false,
                totalTimeBonus: 0, totalStreakBonus: 0,
            });
            
            this.state.timePerQuestion = parseInt(this.elements.timePerQuestionInput.value);
            
            this.elements.fiftyFiftyBtn.disabled = false;
            this.elements.skipQuestionBtn.disabled = false;

            this.elements.currentScoreSpan.textContent = this.state.score;
            this.elements.totalQNumSpan.textContent = this.state.shuffledQuestions.length;
            this.updateProgressBar();

            setTimeout(() => {
                this.hideElement(this.elements.loadingIndicator);
                this.navigateTo(this.elements.quizPage);
                this.displayQuestion();
            }, 500);
        }

        displayQuestion() {
            this.resetQuestionUI();
            const question = this.state.shuffledQuestions[this.state.currentQuestionIndex];
            
            this.elements.currentQNumSpan.textContent = this.state.currentQuestionIndex + 1;
            this.elements.questionText.innerHTML = question.question;

            const shuffledOptions = this.shuffleArray([...question.options]);
            this.elements.answerButtonsContainer.innerHTML = shuffledOptions.map(option => 
                `<button class="btn" data-answer="${option}">${option}</button>`
            ).join('');
            
            this.elements.answerButtonsContainer.querySelectorAll('.btn').forEach(button => {
                button.addEventListener('click', (e) => this.selectAnswer(e));
            });

            this.updateProgressBar();
            this.startTimer();
        }
        
        updateProgressBar() {
            const progress = ((this.state.currentQuestionIndex) / this.state.shuffledQuestions.length) * 100;
            this.elements.quizProgressBar.style.width = `${progress}%`;
            this.elements.quizProgressBar.setAttribute('aria-valuenow', progress);
        }

        resetQuestionUI() {
            this.elements.answerButtonsContainer.innerHTML = '';
            this.hideElement(this.elements.feedbackMessage);
            this.elements.feedbackMessage.textContent = '';
            this.hideElement(this.elements.nextQuestionBtn);
        }

        startTimer() {
            const { timeLeftSpan } = this.elements;
            this.state.timeRemaining = this.state.timePerQuestion;
            timeLeftSpan.textContent = this.state.timeRemaining;
            timeLeftSpan.classList.remove('low-time');

            clearInterval(this.state.timer);
            this.state.timer = setInterval(() => {
                this.state.timeRemaining--;
                timeLeftSpan.textContent = this.state.timeRemaining;
                if (this.state.timeRemaining <= 5) timeLeftSpan.classList.add('low-time');
                if (this.state.timeRemaining <= 0) this.handleTimeout();
            }, 1000);
        }
        
        handleTimeout() {
            clearInterval(this.state.timer);
            this.state.timer = null; // Explicitly set timer to null
            this.state.unansweredCount++;
            this.state.streak = 0;
            
            this.elements.feedbackMessage.textContent = "Time's up!";
            this.elements.feedbackMessage.className = 'feedback-message incorrect';
            this.showElement(this.elements.feedbackMessage);

            this.elements.answerButtonsContainer.querySelectorAll('.btn').forEach(button => button.disabled = true);
            
            this.showElement(this.elements.nextQuestionBtn);
            this.state.timeTakenPerQuestion.push(this.state.timePerQuestion);
            setTimeout(() => this.hideElement(this.elements.feedbackMessage), 1500); // Hide after 1.5 seconds
        }

        selectAnswer(e) {
            // If the timer has already timed out, ignore the click
            if (this.state.timer === null) {
                return;
            }

            clearInterval(this.state.timer);
            this.state.timer = null; // Explicitly set timer to null after clearing
            const selectedButton = e.target;
            const selectedAnswer = selectedButton.dataset.answer;
            const currentQuestion = this.state.shuffledQuestions[this.state.currentQuestionIndex];
            const correctAnswer = currentQuestion.answer;
            const timeTaken = this.state.timePerQuestion - this.state.timeRemaining;
            this.state.timeTakenPerQuestion.push(timeTaken);

            this.elements.answerButtonsContainer.querySelectorAll('.btn').forEach(button => {
                button.disabled = true;
                if (button === selectedButton) button.classList.add('selected');
            });

            if (selectedAnswer === correctAnswer) {
                this.handleCorrectAnswer(selectedButton, timeTaken);
            } else {
                this.handleIncorrectAnswer(selectedButton, selectedAnswer, correctAnswer, currentQuestion);
            }
            
            this.showElement(this.elements.feedbackMessage);
            this.showElement(this.elements.nextQuestionBtn);
        }
        
        handleCorrectAnswer(selectedButton, timeTaken) {
            this.state.score++;
            this.state.correctCount++;
            this.state.streak++;

            const timeBonus = Math.max(0, Math.floor((this.state.timePerQuestion - timeTaken) / 2));
            this.state.score += timeBonus;
            this.state.totalTimeBonus += timeBonus;

            if (this.state.streak >= 3) {
                const streakBonus = this.state.streak * 2;
                this.state.score += streakBonus;
                this.state.totalStreakBonus += streakBonus;
            }

            this.elements.currentScoreSpan.textContent = this.state.score;
            selectedButton.classList.add('correct');
            
            this.elements.feedbackMessage.textContent = "Correct!";
            this.elements.feedbackMessage.className = 'feedback-message correct';
            
            this.playSound(this.sounds.correct);
            setTimeout(() => this.hideElement(this.elements.feedbackMessage), 1500); // Hide after 1.5 seconds
        }
        
        handleIncorrectAnswer(selectedButton, selectedAnswer, correctAnswer, currentQuestion) {
            this.state.incorrectCount++;
            this.state.streak = 0;
            selectedButton.classList.add('incorrect');
            
            this.elements.feedbackMessage.textContent = "Incorrect!";
            this.elements.feedbackMessage.className = 'feedback-message incorrect';
            
            this.playSound(this.sounds.incorrect);

            this.elements.answerButtonsContainer.querySelectorAll('.btn').forEach(button => {
                if (button.dataset.answer === correctAnswer) button.classList.add('correct');
            });

            this.state.incorrectAnswers.push({
                question: currentQuestion.question,
                yourAnswer: selectedAnswer,
                correctAnswer: correctAnswer,
                explanation: currentQuestion.explanation || "No explanation available."
            });
            setTimeout(() => this.hideElement(this.elements.feedbackMessage), 1500); // Hide after 1.5 seconds
        }

        nextQuestion() {
            this.state.currentQuestionIndex++;
            if (this.state.currentQuestionIndex < this.state.shuffledQuestions.length) {
                this.displayQuestion();
            } else {
                this.endQuiz();
            }
        }

        endQuiz() {
            console.log("endQuiz called");
            clearInterval(this.state.timer);
            this.navigateTo(this.elements.resultsPage);

            const totalQuestions = this.state.shuffledQuestions.length;
            const percentageScore = totalQuestions > 0 ? (this.state.correctCount / totalQuestions) * 100 : 0;

            const circle = document.querySelector('.score-circle .circle');
            if (circle) {
                circle.style.strokeDasharray = `${percentageScore}, 100`;
            }

            console.log("Animating final score:", this.state.score);
            this.animateValue(this.elements.finalScoreSpan, 0, this.state.score, 1000);
            // Animate other result numbers
            console.log("Animating correct answers:", this.state.correctCount);
            this.animateValue(this.elements.correctAnswersCountSpan, 0, this.state.correctCount, 800);
            console.log("Animating incorrect answers:", this.state.incorrectCount);
            this.animateValue(this.elements.incorrectAnswersCountSpan, 0, this.state.incorrectCount, 800);
            console.log("Animating unanswered questions:", this.state.unansweredCount);
            this.animateValue(this.elements.unansweredQuestionsCountSpan, 0, this.state.unansweredCount, 800);
            
            const totalTime = this.state.timeTakenPerQuestion.reduce((acc, time) => acc + time, 0);
            const averageTime = totalQuestions > 0 ? (totalTime / totalQuestions) : 0; // Keep as number for animation
            
            // Animate average time, then append 's'
            console.log("Animating average time:", averageTime);
            this.animateValue(this.elements.averageTimePerQuestionSpan, 0, parseFloat(averageTime.toFixed(1)), 800, true); // Pass true for decimal
            
            console.log("Animating streak bonus:", this.state.totalStreakBonus);
            this.animateValue(this.elements.streakBonusScoreSpan, 0, this.state.totalStreakBonus, 800);
            console.log("Animating time bonus:", this.state.totalTimeBonus);
            this.animateValue(this.elements.timeBonusScoreSpan, 0, this.state.totalTimeBonus, 800);

            this.displayReview();
        }

        animateValue(obj, start, end, duration, isDecimal = false) {
            console.log(`animateValue called for ${obj.id}:`, { start, end, duration, isDecimal });
            let startTimestamp = null;
            
            obj.classList.add('popping');

            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                let value = progress * (end - start) + start;
                if (isDecimal) {
                    obj.innerHTML = value.toFixed(1) + 's'; // Append 's' for time
                } else {
                    obj.innerHTML = Math.floor(value);
                }
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    obj.classList.remove('popping');
                }
            };
            window.requestAnimationFrame(step);
        }
        
        displayReview() {
            const { incorrectAnswersReview } = this.elements;
            if (this.state.incorrectAnswers.length === 0) {
                incorrectAnswersReview.innerHTML = '<h3>Review Incorrect Answers</h3><p>No incorrect answers! Great job!</p>';
            } else {
                incorrectAnswersReview.innerHTML = '<h3>Review Incorrect Answers</h3>' + this.state.incorrectAnswers.map(item => `
                    <div class="review-item">
                        <p class="question-text">Q: ${item.question}</p>
                        <p class="your-answer">Your answer: ${item.yourAnswer}</p>
                        <p class="correct-answer">Correct answer: ${item.correctAnswer}</p>
                        ${item.explanation ? `<p class="explanation">Explanation: ${item.explanation}</p>` : ''}
                    </div>
                `).join('');
            }
        }

        useFiftyFifty() {
            if (this.state.fiftyFiftyUsed) return;

            const currentQuestion = this.state.shuffledQuestions[this.state.currentQuestionIndex];
            const incorrectOptions = this.shuffleArray(currentQuestion.options.filter(opt => opt !== currentQuestion.answer));
            
            const optionsToRemove = incorrectOptions.slice(0, 2);
            this.elements.answerButtonsContainer.querySelectorAll('.btn').forEach(button => {
                if (optionsToRemove.includes(button.dataset.answer)) {
                    button.classList.add('hidden');
                }
            });
            
            this.state.fiftyFiftyUsed = true;
            this.elements.fiftyFiftyBtn.disabled = true;
        }

        skipQuestion() {
            if (this.state.skipUsed) return;
            
            this.state.unansweredCount++;
            this.state.streak = 0;
            this.state.skipUsed = true;
            this.elements.skipQuestionBtn.disabled = true;
            
            clearInterval(this.state.timer);
            this.nextQuestion();
        }

        openModal(title, text, onConfirm, confirmText = 'OK', showCancel = false, action = null) {
            this.elements.modalTitle.textContent = title;
            this.elements.modalText.innerHTML = text;

            this.elements.modalConfirmBtn.textContent = confirmText;
            this.elements.modalConfirmBtn.onclick = () => {
                if (onConfirm) onConfirm();
                this.closeModal();
            };
            
            if (action) {
                this.elements.modalConfirmBtn.setAttribute('data-action', action);
            } else {
                this.elements.modalConfirmBtn.removeAttribute('data-action');
            }

            this.elements.modalCancelBtn.style.display = showCancel ? 'inline-block' : 'none';
            this.elements.modalCancelBtn.onclick = () => this.closeModal();
            
            this.elements.modalCopyBtn.style.display = 'none';
            
            this.showElement(this.elements.modalContainer);
        }

        closeModal = () => this.hideElement(this.elements.modalContainer);

        copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                this.openModal('Copied!', 'Score details copied to clipboard.');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                this.openModal('Error', 'Failed to copy score. Please try again.');
            });
        }

        resetGameData() {
            this.openModal(
                "Reset Game Data?",
                "This will clear your name, theme, and other settings. Are you sure?",
                () => {
                    localStorage.clear();
                    this.openModal("Data Reset", "All game data has been cleared.");
                    this.loadPreferences();
                    this.displayHomePage();
                },
                "Reset",
                true,
                "reset"
            );
        }

        shareScore() {
            const userName = localStorage.getItem('userName') || 'A player';
            const message = `I scored ${this.state.score} in the Quiz Game! Correct: ${this.state.correctCount}, Incorrect: ${this.state.incorrectCount}.`;
            
            this.elements.modalTitle.textContent = "Share Your Score";
            this.elements.modalText.textContent = message;

            this.elements.modalConfirmBtn.textContent = "Close";
            this.elements.modalConfirmBtn.onclick = () => this.closeModal();
            
            this.elements.modalCopyBtn.textContent = "Copy";
            this.elements.modalCopyBtn.style.display = 'inline-block';
            this.elements.modalCopyBtn.onclick = () => this.copyToClipboard(message);

            this.elements.modalCancelBtn.style.display = 'none';
            
            this.showElement(this.elements.modalContainer);
        }
    }

    const quizGame = new Quiz();
    quizGame.init();
    window.quizGame = quizGame;
});
