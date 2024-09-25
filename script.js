const questions = [
    { question: "What year was All Elite Wrestling (AEW) founded?", answer: "2019" },
    { question: "Who are the founders of AEW?", answer: "Tony Khan, Cody Rhodes, The Young Bucks (Matt and Nick Jackson), and Kenny Omega" },
    { question: "Who is the current President and CEO of AEW?", answer: "Tony Khan" },
    { question: "What was the name of AEW's first official pay-per-view event?", answer: "Double or Nothing (2019)" },
    { question: "Which network broadcasts AEW Dynamite in the U.S.?", answer: "TBS" },
    { question: "What day of the week does AEW Dynamite air?", answer: "Wednesday" },
    { question: "Who was the first-ever AEW World Champion?", answer: "Chris Jericho" },
    { question: "Who defeated Chris Jericho to become the second AEW World Champion?", answer: "Jon Moxley" }
    // Add more questions and answers as needed
];

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    
    const currentQA = questions[currentQuestionIndex];
    
    questionElement.textContent = currentQA.question;
    answerElement.classList.add('hidden');
    answerElement.textContent = currentQA.answer;
    
    questionElement.onclick = function() {
        answerElement.classList.remove('hidden'); // Show the answer when the question is clicked
        setTimeout(nextQuestion, 2000); // Automatically load the next question after 2 seconds
    };
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0; // Loop back to the first question
    }
    
    document.getElementById('question-answer').classList.add('fade'); // Fade-in effect
    
    setTimeout(() => {
        loadQuestion();
    }, 1000); // Short delay to allow fade-in effect before showing next question
}
