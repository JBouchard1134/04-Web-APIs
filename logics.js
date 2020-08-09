const $answers = document.querySelector('#answers');
const $startButton = document.getElementById('start-button');
const $question = document.getElementById('question');
const $questionSection = document.getElementById('question-section');

let $timer = document.getElementById('timer');
let currentQuestion = 0;
let secondsLeft = 150;


const questions = [
    {
        question: 'What is a boolean?',
        answer: [
            {text:'A demon God'},
            {text:'A true or false value'},
            {text:'an HTML tag'},
            {text:'whatever'}
        ],
        correctAnswer: 'A true or false value',
    },

    {
        question: 'What is the answerA?',
        answer: [
            {text:'Answer A', correct: true},
            {text:'Answer B', correct: false},
            {text:'Answer C', correct: false},
            {text:'Answer D', correct: false}
        ],
        correctAnswer: 'Answer C',
    },

    {
        question: 'What is the answerB?',
        answer: [
            {text:'Answer 11', correct: true},
            {text:'Answer 22', correct: false},
            {text:'Answer 33', correct: false},
            {text:'Answer 44', correct: false}
        ],
        correctAnswer: 'Answer 44',
    },
]


function displayQuestions() {
    $question.textContent = questions[currentQuestion].question;

    for(var i = 0; i < 4; i++) {
        document.getElementById('btn' + i).innerText = questions[currentQuestion].answer[i].text;
    }
    
}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      $timer.textContent = secondsLeft + " seconds left till the whole world collapses";
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        alert('Out of time!');
      }
  
    }, 1000);
  }

$startButton.addEventListener('click', function() {
    $startButton.style.display = 'none';
    $questionSection.style.display = 'block';  
    setTime();
    displayQuestions();
})

$answers.addEventListener('click', function(event) {
    if (event.target.nodeName !==  'BUTTON') {
        return;
    }
    console.log(event.target.nodeName);

    let userAnswer = event.target.innerText;
    
    if (userAnswer !== questions[currentQuestion].correctAnswer) {
        secondsLeft = secondsLeft  - 10;
    }


});