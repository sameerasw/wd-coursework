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

function updateTimer() {
    timeLeft--;
    document.querySelector(".timer-sec").innerText = timeLeft; // Update the timer display

    if (timeLeft <= 0) {
        clearTimeout(timer);
        showResult();
    } else {
        timer = setTimeout(updateTimer, 1000);
    }
}

startButton.onclick = () => {
    popupGuide.classList.add("active");
};

exitButton.onclick = () => {
    popupGuide.classList.remove("active");
};

continueButton.onclick = () => {
    quizSection.classList.add("active");
    popupGuide.classList.remove("active");
    quizBox.classList.add("active");

    getQuestions(0);
    timeLeft = 60;
    updateTimer();
};

restartButton.onclick = () => {
    resultPage.classList.remove("active");
    quizBox.classList.add("active");
    nextButton.classList.remove("active");
    nextButton.textContent = "Next Question";

    questionCount = 0;
    score = 0;
    timeLeft = 60;
    getQuestions(questionCount);
    updateTimer();
};

quitButton.onclick = () => {
    resultPage.classList.remove("active");
    quizBox.classList.remove("active");
    nextButton.classList.remove("active");
    quizSection.classList.remove("active");
    nextButton.textContent = "Next Question";

    questionCount = 0;
    score = 0;
    timeLeft = 60;
    getQuestions(questionCount);
};

let questionCount = 0;
let score = 0;

nextButton.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        getQuestions(questionCount);
    } else {
        showResult();
    }
    if (questionCount == questions.length - 1) {
        nextButton.textContent = "Show Results";
    }
}

// Get questions from the array in questions.js
function getQuestions(index) {
    let question = document.querySelector(".question");
    let questionNumber = document.querySelector(".question-no");
    questionNumber.textContent = `${questions[index].number}`;
    question.textContent = `${questions[index].question}`;

    let options = `<div class="option"><span>${questions[index].options[0]}</span></div>
                   <div class="option"><span>${questions[index].options[1]}</span></div>
                   <div class="option"><span>${questions[index].options[2]}</span></div>
                   <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML = options;

    let option = document.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "selectedOption(this)");
    }
}

function selectedOption(answer) {
    let Answer = answer.textContent;
    let correctAnswer = questions[questionCount].correctAnswer;
    let allOptions = optionList.children.length;

    if (Answer == correctAnswer) {
        answer.classList.add("correct");
        score++;
    } else {
        answer.classList.add("incorrect");
    }

    for (let i = 0; i < allOptions; i++) {
        if (optionList.children[i].textContent == correctAnswer) {
            optionList.children[i].setAttribute("class", "option correct");
        }
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled");
    }
}

timerDisplay = () => {
    countdown = setInterval(() => {
      count--;
      timer.innerHTML = count;
      if (count === 0) {
        clearInterval(countdown); // Clear the interval when the countdown reaches 0
        showResult();
      }
    }, 1000); // Update the countdown every 1 second (1000 milliseconds)
}

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

    questionCount.textContent = `Questions: ${questions.length}`;
    wrongText.textContent = `Wrong Answers: ${wrongAnswers}`;
    scoreText.textContent = `Score: ${score}`;
    gradeText.textContent = `Grade: ${score * 10}%`;
    timeText.textContent = `You took ${timeTaken} s`;

    if (score == 10) {
        progressText.textContent = "Excellent! You aced the quiz!";
        progressText.classList.add("excellent");
    } else if (score >= 7 && score <= 9) {
        progressText.textContent = "Impressive! Keep up the good work!";
        progressText.classList.add("good");
    } else if (score >= 4 && score <= 6) {
        progressText.textContent = "Not bad! Keep practicing to improve!";
        progressText.classList.add("average");
    } else {
        progressText.textContent = "Keep practicing and you'll get better!";
        progressText.classList.add("fail");
    }
}


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
