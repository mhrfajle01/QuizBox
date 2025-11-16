import { elements, state } from './state.js';
import { toggleTheme, toggleMute, displayHomePage } from './ui.js';
import { showStudyPage, initiateQuiz, nextQuestion, resetGameData, shareScore, useFiftyFifty, skipQuestion, handleQuizTypeChange } from './quiz.js';

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    elements.themeToggleCheckbox.checked = savedTheme === 'dark';
    toggleTheme(savedTheme === 'dark');

    const savedMuteState = localStorage.getItem('isMuted') === 'true';
    elements.muteToggleCheckbox.checked = savedMuteState;
    toggleMute(savedMuteState);
    
    const savedQuizType = localStorage.getItem('currentQuizType') || 'bengali';
    handleQuizTypeChange(savedQuizType);
    if (savedQuizType === 'english') {
        elements.quizTypeEnglishRadio.checked = true;
    } else {
        elements.quizTypeBengaliRadio.checked = true;
    }
    elements.userNameInput.value = localStorage.getItem('userName') || '';
    elements.timePerQuestionInput.value = localStorage.getItem('timePerQuestion') || 10;
}

function addEventListeners() {
    elements.startQuizBtn?.addEventListener('click', () => showStudyPage());
    elements.restartQuizBtn?.addEventListener('click', () => displayHomePage());
    elements.startQuizFromStudyBtn?.addEventListener('click', () => initiateQuiz());
    elements.goHomeBtn?.addEventListener('click', () => displayHomePage());
    elements.nextQuestionBtn?.addEventListener('click', () => nextQuestion());
    elements.resetGameDataBtn?.addEventListener('click', () => resetGameData(() => {
        loadPreferences();
        displayHomePage();
    }));
    elements.shareScoreBtn?.addEventListener('click', () => shareScore());
    elements.themeToggleCheckbox?.addEventListener('change', (e) => toggleTheme(e.target.checked));
    elements.muteToggleCheckbox?.addEventListener('change', (e) => toggleMute(e.target.checked));
    elements.fiftyFiftyBtn?.addEventListener('click', () => useFiftyFifty());
    elements.skipQuestionBtn?.addEventListener('click', () => skipQuestion());
    elements.quizTypeBengaliRadio?.addEventListener('change', () => handleQuizTypeChange('bengali'));
    elements.quizTypeEnglishRadio?.addEventListener('change', () => handleQuizTypeChange('english'));
    elements.userNameInput?.addEventListener('input', (e) => localStorage.setItem('userName', e.target.value));
    elements.timePerQuestionInput?.addEventListener('input', (e) => localStorage.setItem('timePerQuestion', e.target.value));
    elements.sunIcon?.parentElement.addEventListener('click', () => {
        elements.themeToggleCheckbox.checked = !elements.themeToggleCheckbox.checked;
        elements.themeToggleCheckbox.dispatchEvent(new Event('change'));
    });
    elements.volumeUpIcon?.parentElement.addEventListener('click', () => {
        elements.muteToggleCheckbox.checked = !elements.muteToggleCheckbox.checked;
        elements.muteToggleCheckbox.dispatchEvent(new Event('change'));
    });
}

async function init() {
    await fetchQuestions();
    addEventListeners();
    loadPreferences();
    displayHomePage();
}

async function fetchQuestions() {
    try {
        const bengaliResponse = await fetch('data/bengali.json');
        state.allQuizQuestions = await bengaliResponse.json();

        const englishResponse = await fetch('data/english.json');
        state.allVocabularyQuestions = await englishResponse.json();
    } catch (error) {
        console.error('Failed to load quiz data:', error);
        // Handle error appropriately, maybe show a message to the user
    }
}


document.addEventListener('DOMContentLoaded', init);
