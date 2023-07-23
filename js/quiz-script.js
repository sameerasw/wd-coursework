/**
    The logic for quiz app is adopted from following two references
    Reference 1: https://foolishdeveloper.com/javascript-quiz-app
    Reference 2: https://codingwithnick.in/create-a-quiz-app-using-html-css-javascript
 */

// Get all the elements from the HTML file
let startButton = document.querySelector(".start-btn");
let popupGuide = document.querySelector(".guide");
let exitButton = document.querySelector(".exit-btn");
let continueButton = document.querySelector(".continue-btn");
let quizSection = document.querySelector(".quiz-section");
let quizBox = document.querySelector(".quiz-box");
let nextButton = document.querySelector(".next-btn");
let optionList = document.querySelector(".option-list");
let resultPage = document.querySelector(".result-page");
let restartButton = document.querySelector(".restart-btn");
let quitButton = document.querySelector(".quit-btn");
let timer;
let timeLeft = 60;

// Update the timer every second
function updateTimer() {
    // Decrease the time left by 1 second
    timeLeft--;
    document.querySelector(".timer-sec").innerText = timeLeft; // Update the timer display
    // If the time is up, clear the timer and display the result page
    if (timeLeft <= 0) {
        clearTimeout(timer);
        showResult();
    } else {
        // Call the updateTimer function every second
        timer = setTimeout(updateTimer, 1000);
    }
}

// Start the quiz and display the popup guide
startButton.onclick = () => {
    popupGuide.classList.add("active");
};

// Exit the popup guide without starting the quiz
exitButton.onclick = () => {
    popupGuide.classList.remove("active");
};

// Continue to the quiz
continueButton.onclick = () => {
    quizSection.classList.add("active");
    popupGuide.classList.remove("active");
    quizBox.classList.add("active");

    getQuestions(0);
    timeLeft = 60;
    updateTimer();
};

// Restart the quiz
restartButton.onclick = () => {
    resultPage.classList.remove("active");
    quizBox.classList.add("active");
    nextButton.classList.remove("active");
    nextButton.textContent = "Next Question";

    // Reset the question count, score and timer
    questionCount = 0;
    score = 0;
    getQuestions(questionCount);
    timeLeft = 60;
    clearTimeout(timer);
    updateTimer();
};

// Quit the quiz
quitButton.onclick = () => {
    resultPage.classList.remove("active");
    quizBox.classList.remove("active");
    nextButton.classList.remove("active");
    quizSection.classList.remove("active");
    nextButton.textContent = "Next Question";

    // Reset the question count, score and timer
    questionCount = 0;
    score = 0;
    getQuestions(questionCount);
    clearTimeout(timer);
};

// Initialize the variables for question count and score
let questionCount = 0;
let score = 0;

// Display the next question
nextButton.onclick = () => {
    // Display the next question if there are more questions otherwise display the result page
    if (questionCount < questions.length - 1) {
        questionCount++;
        getQuestions(questionCount);
    } else {
        showResult();
    }
    // Display Show Results button on the last question
    if (questionCount == questions.length - 1) {
        nextButton.textContent = "Show Results";
    }
}

// Get questions from the array in objects
function getQuestions(index) {
    let question = document.querySelector(".question");
    let questionNumber = document.querySelector(".question-no");
    // Display the question number and question
    questionNumber.textContent = `${questions[index].number}`;
    question.textContent = `${questions[index].question}`;

    // Display the options for the question
    let options = `<div class="option"><span>${questions[index].options[0]}</span></div>
                   <div class="option"><span>${questions[index].options[1]}</span></div>
                   <div class="option"><span>${questions[index].options[2]}</span></div>
                   <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML = options;

    // Add onclick attribute to all the options and get the selected option
    let option = document.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "selectedOption(this)");
    }
}

// Check if the selected option is correct or incorrect
function selectedOption(answer) {
    let Answer = answer.textContent;
    let correctAnswer = questions[questionCount].correctAnswer;
    let allOptions = optionList.children.length;

    // Check if the selected option is correct or incorrect
    if (Answer == correctAnswer) {
        answer.classList.add("correct");
        score++;
    } else {
        answer.classList.add("incorrect");
    }
    // Display the correct answer if the selected option is incorrect
    for (let i = 0; i < allOptions; i++) {
        if (optionList.children[i].textContent == correctAnswer) {
            optionList.children[i].setAttribute("class", "option correct");
        }
    }
    // Disable all the options after selecting one
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled");
    }
}

// Display the result page
function showResult() {
    quizBox.classList.remove("active");
    resultPage.classList.add("active");

    let questionCount = document.querySelector(".question-count");
    let wrongText = document.querySelector(".wrong-txt");
    let scoreText = document.querySelector(".score-txt");
    let gradeText = document.querySelector(".grade-txt");
    let timeText = document.querySelector(".time-txt");
    let progressText = document.querySelector(".progress-text");
    let wrongAnswers = questions.length - score;
    let timeTaken = 60 - timeLeft;

    // Display the result details
    questionCount.textContent = `Questions: ${questions.length}`;
    wrongText.textContent = `Wrong Answers: ${wrongAnswers}`;
    scoreText.textContent = `Score: ${score}`;
    gradeText.textContent = `Grade: ${score * 10}%`;
    timeText.textContent = `You took ${timeTaken} s`;

    // Display the progress text and relevant based on the score
    if (score == 10) {
        progressText.textContent = "Excellent! You aced the quiz!";
        progressText.style.color = "green"; 
    } else if (score >= 7 && score <= 9) {
        progressText.textContent = "Impressive! Keep up the good work!";
        progressText.style.color = "yellow"; 
    } else if (score >= 4 && score <= 6) {
        progressText.textContent = "Not bad! Keep practicing to improve!";
        progressText.style.color = "orange"; 
    } else {
        progressText.textContent = "Keep practicing and you'll get better!";
        progressText.style.color = "red"; 
    }    
}

// Array of objects containing the questions, correct answers and options
const questions = [
    {
        number: 1,
        question: "What is the highest grossing movie of all time?",
        correctAnswer: "Avatar",
        options: [
            "Avengers: Endgame",
            "Avatar",
            "Star Wars The Force Awakens",
            "Titanic"
        ]
    },
    {
        number: 2,
        question: "What was the first fully 3D animated movie ever released?",
        correctAnswer: "Toy Story",
        options: [
            "The Incredibles",
            "A Bug's Life",
            "Toy Story",
            "Antz"
        ]
    },
    {
        number: 3,
        question: "Who is the only actor to receive an Oscar nomination for acting in a Lord of the Rings movie?",
        correctAnswer: "Ian McKellen",
        options: [
            "Elijah Wood",
            "Ian McKellen",
            "Sean Bean",
            "Sean Astin"
        ]
    },
    {
        number: 4,
        question: "In Inception, how many dream levels does the crew enter?",
        correctAnswer: "Five",
        options: [
            "Four",
            "Three",
            "Six",
            "Five"
        ]
    },
    {
        number: 5,
        question: "In Titanic, what is the name of Rose's necklace?",
        correctAnswer: "The Heart of the Ocean",
        options: [
            "Pearl and Diamond",
            "The Heart of the Ocean",
            "Ruby and Diamond",
            "Diamond Brocade"
        ]
    },
    {
        number: 6,
        question: "'The Matrix' code in The Matrix came from recipes for which kind of food?",
        correctAnswer: "Sushi",
        options: [
            "Tofu",
            "Ramen",
            "Sushi",
            "Gyoza"
        ]
    },
    {
        number: 7,
        question: "What is the name of the fictional place where Frozen takes place?",
        correctAnswer: "Arendelle",
        options: [
            "Metroville",
            "Arendelle",
            "Bricksburg",
            "Aberdale"
        ]
    },
    {
        number: 8,
        question: "In Avengers: Infinity War, Thor travels to which planet to create Stormbreaker?",
        correctAnswer: "Nidavellir",
        options: [
            "Jotunheim",
            "Morag",
            "Svartalfheim",
            "Nidavellir"
        ]
    },
    {
        number: 9,
        question: "Who played Bruce Wayne in The Batman(2022)?",
        correctAnswer: "Robert Pattinson",
        options: [
            "Christian Bale",
            "Robert Pattinson",
            "Michael Keaton",
            "Ben Affleck"
        ]
    },
    {
        number: 10,
        question: "What is the alien planet in Avatar?",
        correctAnswer: "Pandora",
        options: [
            "Tatooine",
            "Arda",
            "Pandora",
            "Arrakis"
        ]
    }
];
