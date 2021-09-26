const introContainerElement = document.getElementById("intro-container")
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let selectedQuestions, currentQuestionIndex
startButton.addEventListener("click", startGame)

// function for starting the quiz
function startGame() {
    console.log("Started");
    introContainerElement.classList.add("hide");
    selectedQuestions = questions//.sort(function(){Math.random() - 0.5})
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
};

// function for displaying the next question
function setNextQuestion() {
    // resetState()
    showQuestion(selectedQuestions[currentQuestionIndex])
}

// function for showing each question by passing question array
function showQuestion(question) {
    // set text of h1 
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

// function resetState() {
//     nextButton.classList.add("hide")
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }

// function for selecting answer
function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (selectedQuestions.length > currentQuestionIndex + 1) {
        //////////
    } else {
        //finalScore function
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}
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


// Countdown timer
// var count = 60;
// var countdownTimer = setInterval(function(){
//     $("#timer").html(count--);
//     if (count == 1) {
//         clearInterval(countdownTimer);
//     };
// }, 1000);

