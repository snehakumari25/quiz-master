
let questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which keyword is used to create a variable?",
        options: ["var", "print", "function", "display"],
        answer: "var"
    },
    {
        question: "Which method selects an element by ID?",
        options: [
            "getElementById()",
            "getElement()",
            "selectId()",
            "queryId()"
        ],
        answer: "getElementById()"
    },
    {
        question: "Which method adds an event listener?",
        options: [
            "addEventListener()",
            "addEvent()",
            "eventListener()",
            "listenEvent()"
        ],
        answer: "addEventListener()"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

let questionElement = document.querySelector("#question");
let optionsElement = document.querySelector("#options");
let nextBtn = document.querySelector("#nextBtn");
let scoreElement = document.querySelector("#score");

function displayQuestion() {
    let question = questions[currentQuestion];
    answered = false;

    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";

    question.options.forEach(function(option) {
        let button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option");

        button.addEventListener("click", function() {
            if (answered) {
                return;
            }

            answered = true;

            if (option === question.answer) {
                score++;
                scoreElement.textContent = "Score: " + score;
            }

            let allOptions = optionsElement.querySelectorAll("button");

            allOptions.forEach(function(optionButton) {
                optionButton.disabled = true;
            });
        });

        optionsElement.append(button);
    });
}

nextBtn.addEventListener("click", function() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        localStorage.setItem("score", score);
        window.location.href = "results.html";
    }
});

displayQuestion();
