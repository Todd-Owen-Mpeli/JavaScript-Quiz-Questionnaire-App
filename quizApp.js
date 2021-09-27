// Questionnaire Dataset
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navToggle) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*==================== QUESTIONNAIRE INFO ====================*/
const quizData = [
	{
		question: "When did England win the men’s FIFA World cup",
		a: "1970",
		b: "1966",
		c: "1982",
		d: "1978",
		correct: "b",
	},

	{
		question: "What is the most common element on Earth?",
		a: "Water",
		b: "Hydrogen",
		c: "Oxygen",
		d: "Iron",
		correct: "c",
	},

	{
		question: "What is the most used programming language?",
		a: "Java",
		b: "C",
		c: "Python",
		d: "C++",
		correct: "a",
	},

	{
		question: "In the Nintendo games, what is the name of Mario's brother?",
		a: "Giovanni",
		b: "Luigi",
		c: "Michelangelo",
		d: "Leonardo",
		correct: "b",
	},

	{
		question: "What is the higest mountain in Britain?",
		a: "Ben Macdui",
		b: "Cairn Toul",
		c: "Ben Nevis",
		d: "Sgòr an Lochain Uaine",
		correct: "c",
	},
];

// Questionnaire objects
// Radio Buttons
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

// Texts Displayed
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

// Loads The Questionnaire
function loadQuiz() {
	// Deselects answers
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

// if Answers have been selected
function getSelected() {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

// Deselects the previous answers
function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

function hideLastDisplay() {
	const questionHidden = document.getElementById("question");
	const questionRadioOptionsHidden = document.getElementById(
		"question-RadioOptions"
	);

	if (questionHidden.style.display === "none") {
		questionHidden.style.display = "block";
		element.classList.toggle("mystyle");
	} else {
		questionHidden.style.display = "none";
	}

	if (questionRadioOptionsHidden.style.display === "none") {
		questionRadioOptionsHidden.style.display = "block";
		element.classList.toggle("mystyle");
	} else {
		questionRadioOptionsHidden.style.display = "none";
	}
}

// Submit Button Listener
submitBtn.addEventListener("click", () => {
	// check to see the answer
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;
		// End of Questionnaire checker
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			// Hides the last "Select option" Display options and label
			hideLastDisplay();

			quiz.innerHTML = `
                <h2> You answered correctly at ${score}/${quizData.length} questions. </h2>
            `;

			submitBtn.innerText = "Retry";
			submitBtn.addEventListener("click", () => {
				location.reload();
			});

			deselectAnswers();
		}
	}
});

/*======================================================================================*/
