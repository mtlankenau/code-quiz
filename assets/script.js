// global constant variables - selects various elements by their ids
const overallContainerElement = document.getElementById("overall-container");
const introContainerElement = document.getElementById("intro-container");
const startButton = document.getElementById("start-btn");
const submitButton = document.getElementById("submit-btn");
const goBackButton = document.getElementById("go-back");
const clearHighscoresButton = document.getElementById("clear-highscores");
const viewHighscoresButton = document.getElementById("highscores-btn")
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const answerFeedbackElement = document.getElementById("answer-feedback-container");
const finalScreenElement = document.getElementById("final-screen");
const highscoresElement = document.getElementById("highscores");
const scoreInputElement = document.getElementById("highscore-input");
const highscoresList = document.getElementById("highscores-list");

// other global variables
let isTakingQuiz = false;
let selectedQuestions, currentQuestionIndex;
let currentScore = 0;
let count = 74;

// event listeners for all buttons & their associated function calls
startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", highScores);
goBackButton.addEventListener("click", goBack);
clearHighscoresButton.addEventListener("click", clearHighscores);
viewHighscoresButton.addEventListener("click", viewHighscores);

// function for starting the quiz
function startGame() {
    isTakingQuiz = true;
    currentScore = 0;
    introContainerElement.classList.add("hide");
    selectedQuestions = questions;
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    document.getElementById("timer").classList.remove("hide");
    countdownTimer();
    setNextQuestion();
};

// function for displaying the next question
function setNextQuestion() {
    if (currentQuestionIndex > 4) {
        clearStatus();
        finalScreenFunction();
    } else {
        showQuestion(selectedQuestions[currentQuestionIndex]);
    }
};

// function for showing each question by passing question array
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn", "answers");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

// function for selecting answer
function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        // answerFeedbackElement.classList.remove("hide");
        answerFeedbackElement.innerText = "Correct!";
        currentScore++;
    } else {
        answerFeedbackElement.innerText = "Wrong!";
        count -= 10;
    }
    clearStatus();
    currentQuestionIndex++;
    setNextQuestion();
};

// function to remove dynamically created button elements from previous question
function clearStatus() {
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
};

// function that shows results of quiz after completion
function finalScreenFunction() {
    currentScore = count
    isTakingQuiz = false;
    document.getElementById("timer").classList.add("hide");
    questionContainerElement.classList.add("hide");
    answerFeedbackElement.classList.add("hide");
    finalScreenElement.classList.remove("hide");
    var finalScorePEl =  "<p> Your final score is " + currentScore + "</p>";
    document.getElementById("final-screen-p").innerHTML = finalScorePEl;
};

// function that sets highscore history to local storage and displays ordered list sorted from best to worst score 
function highScores() {
    localStorage.setItem(scoreInputElement.value, currentScore);
    finalScreenElement.classList.add("hide");
    highscoresElement.classList.remove("hide");
    // sorts highscores from best to worst
    let highscores = Object
        .keys(localStorage)
        .sort(function(a, b) {
        return localStorage[b] - localStorage[a];
        });
    // loops highscore results from local storage and adds to unordered list as individual list items
    for (let i = 0; i < highscores.length; i++) {
        document.getElementById("highscores-list").innerHTML += "<li>" + highscores[i] + " - " + localStorage.getItem(highscores[i]); 
    };
};

// when 'Go back' button is clicked on highscores page
function goBack() {
    window.location.reload();
};

// when 'Clear high scores' button is clicked on highscores page
function clearHighscores() {
    localStorage.clear();
    window.location.reload();
};

// when 'View high scores' link is clicked
function viewHighscores() {
    overallContainerElement.classList.add("hide");
    highscoresElement.classList.remove("hide");
    while (highscoresList.firstChild){
        highscoresList.removeChild(highscoresList.firstChild)
    };
    let highscores = Object
        .keys(localStorage)
        .sort(function(a, b) {
        return localStorage[b] - localStorage[a];
        });

    for (let i = 0; i < highscores.length; i++) {
        document.getElementById("highscores-list").innerHTML += "<li>" + highscores[i] + " - " + localStorage.getItem(highscores[i]); 
    };
};

// array of questions and answers
const questions = [
    {
        question: "Which HTML element do we put JavaScript code within?",
        answers: [
            { text: "<link>", correct: false },
            { text: "<script>", correct: true },
            { text: "<js>", correct: false },
            { text: "<main>", correct: false }
        ]
    },
    {
        question: "What symbol syntax represents the jQuery function?",
        answers: [
            { text: "@", correct: false },
            { text: "*", correct: false },
            { text: "&", correct: false },
            { text: "$", correct: true }
        ]  
    },
    {
        question: "How would you pass variable 'imAnArgument' into a function?",
        answers: [
            { text: "function = imAnArgument() {// code to be executed}", correct: false },
            { text: "imAnArgument()", correct: false },
            { text: "function(imAnArgument) {// code to be executed}", correct: true },
            { text: "imAnArgument(function)", correct: false }
        ]    
    },
    {
        question: "What is DOM an acronym for?",
        answers: [
            { text: "Declaration Of Modal", correct: false },
            { text: "Direct Object Manipulation", correct: false },
            { text: "Dominant Orientation Mandate", correct: false },
            { text: "Document Object Model", correct: true }
        ]
    },
    {
        question: "Which of the following is an example of a string?",
        answers: [
            { text: "'I could maybe be a string'", correct: true },
            { text: "12", correct: false },
            { text: "break", correct: false },
            { text: "I may possibly be a string", correct: false }
        ]
    }
];

// countdown timer
function countdownTimer() {
    
    var countdownTimer = setInterval(function(){
        var timerElement = document.getElementById("timer");
        timerElement.innerHTML = "Time left: " + count--;
        if (count < 0 && isTakingQuiz) {
            clearInterval(countdownTimer);
            alert("Time has expired, try again!")
            window.location.reload();
        }
    }, 1000);
};