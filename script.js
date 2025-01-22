
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
    answer: "Harper Lee"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultElement = document.getElementById('result');

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = '';
  q.options.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option;
    li.addEventListener('click', () => {
      document.querySelectorAll('#options li').forEach(el => el.style.backgroundColor = '');
      li.style.backgroundColor = '#add8e6';
      nextBtn.disabled = false;
      li.dataset.selected = true;
    });
    optionsElement.appendChild(li);
  });
}

nextBtn.addEventListener('click', () => {
  const selectedOption = document.querySelector('#options li[data-selected]');
  if (selectedOption.textContent === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextBtn.style.display = 'none';
  }
});

loadQuestion();
