const introContainerElement = document.getElementById("intro-container")
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");

startButton.addEventListener("click", startGame)

// function for starting the quiz
function startGame() {
    console.log("Started");
    introContainerElement.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
};

// function for displaying the next question
var setNextQuestion = function() {

}

// function for selecting answer
var selectAnswer = function () {

}


var questionsAndAnswers = [
    {
        question: "Which HTML element do we put JavaScript code within?",
        answers: {
            a: "<link>",
            b: "<script>",
            c: "<js>",
            d: "<main>"
        },
        correctAnswer: "b" 
    },
    {
        question: "What symbol syntax represents the jQuery function?",
        answers: {
            a: "@",
            b: "*",
            c: "&",
            d: "$"
        },
        correctAnswer: "d"
    },
    {
        question: "How would you pass variable 'imAnArgument' into a function?",
        answers: {
            a: "function = imAnArgument() {// code to be executed}",
            b: "imAnArgument()",
            c: "function(imAnArgument) {// code to be executed}",
            d: "imAnArgument(function)"
        },
        correctAnswer: "c"
    },
    {
        question: "What is DOM an acronym for?",
        answers: {
            a: "Declaration Of Modal",
            b: "Direct Object Manipulation",
            c: "Dominant Orientation Mandate",
            d: "Document Object Model"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following is an example of a string?",
        answers: {
            a: "'I could maybe be a string'",
            b: "12",
            c: "break",
            d: "I may possibly be a string",
        },
        correctAnswer: "a"
    },
];


// Countdown timer
// var count = 60;
// var countdownTimer = setInterval(function(){
//     $("#timer").html(count--);
//     if (count == 1) {
//         clearInterval(countdownTimer);
//     };
// }, 1000);

// Create Quiz
// var createQuiz = function (){

//     for (var i = 0; i < questionsAndAnswers.length; i++) {
//         var newQuestionH1El = $("<h1></h1>")
//         .addClass("start-page")
//         .append(questionsAndAnswers.question);
   

//     $("#questions")
//         .replaceWith(newQuestionH1El);

//     $("#start-paragraph")
//         .remove();

//     var newAnswersButtonEl = $("<button></button>")
//         .addClass("start-page start-button")
//         .append(questionsAndAnswers.answers);
    
//     $("#answers")
//         .replaceWith(newAnswersButtonEl);
//     }
// };

// Begin quiz by clicking on "Start Quiz" button
// $(".start-button").on("click", createQuiz);