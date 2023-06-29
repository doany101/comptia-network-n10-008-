var currentQuestionIndex = 0;
var userAnswers = [];
var examEnded = false;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("options");

  // Update question text
  questionElement.textContent = currentQuestion.question;

  // Clear previous options
  optionsElement.innerHTML = "";

  // Create and append new options
  currentQuestion.options.forEach((option, index) => {
    var optionElement = document.createElement("div");
    optionElement.classList.add("option");

    // Create radio button
    var radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "answer";
    radioButton.value = option;
    radioButton.id = "option" + index;

    // Check if the option was previously selected
    if (userAnswers[currentQuestionIndex] === option) {
      radioButton.checked = true;
    }

    // Create label for the option
    var label = document.createElement("label");
    label.textContent = option;
    label.setAttribute("for", "option" + index);

    // Append radio button and label to the option element
    optionElement.appendChild(radioButton);
    optionElement.appendChild(label);

    // Append option element to the options container
    optionsElement.appendChild(optionElement);
  });

  // Show or hide previous button based on the current question index
  var prevButton = document.getElementById("prevBtn");
  prevButton.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";

  // Show or hide end button based on the exam status
  var endButton = document.getElementById("endBtn");
  endButton.style.display = examEnded ? "none" : "inline-block";

  // Show or hide restart button based on the exam status
  var restartButton = document.getElementById("restartBtn");
  restartButton.style.display = examEnded ? "inline-block" : "none";
}

function displayNextQuestion() {
  var selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    alert("Please select an answer.");
    return;
  }

  userAnswers[currentQuestionIndex] = selectedAnswer.value;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endExam();
  }
}

function displayPreviousQuestion() {
  currentQuestionIndex--;
  displayQuestion();
}

function endExam() {
  var confirmed = confirm("Are you sure you want to end the exam?");
  if (confirmed) {
    examEnded = true;
    showExamResult();
  }
}

function showExamResult() {
  var questionSection = document.getElementById("questionContainer");
  var buttonSection = document.getElementById("buttonContainer");
  var resultSection = document.getElementById("resultContainer");

  questionSection.style.display = "none";
  buttonSection.style.display = "none";
  resultSection.style.display = "block";

  var scoreElement = document.getElementById("score");
  var resultElement = document.getElementById("result");

  var score = 0;
  var resultHTML = "";

  for (var i = 0; i < questions.length; i++) {
    var question = questions[i];
    var userAnswer = userAnswers[i];
    var correctAnswer = question.answer;
    var isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
      score++;
      resultHTML += '<p class="color-green">Question ' + (i + 1) + ': Correct</p>';
    } else {
      resultHTML += '<p class="color-red">Question ' + (i + 1) + ': Incorrect</p>';
    }
    resultHTML += '<p>' + question.question + '</p>';
    resultHTML += '<p>Your answer: ' + userAnswer + '</p>';
    resultHTML += '<p>Correct answer: ' + correctAnswer + '</p>';
    resultHTML += '<br>';
  }

  scoreElement.textContent = "Score: " + score + " out of " + questions.length;
  resultElement.innerHTML = resultHTML;
}


function restartExam() {
  currentQuestionIndex = 0;
  userAnswers = [];
  examEnded = false;

  var questionSection = document.getElementById("questionContainer");
  var buttonSection = document.getElementById("buttonContainer");
  var resultSection = document.getElementById("resultContainer");

  questionSection.style.display = "block";
  buttonSection.style.display = "block";
  resultSection.style.display = "none";

  displayQuestion();
}

document.getElementById("nextBtn").addEventListener("click", displayNextQuestion);
document.getElementById("prevBtn").addEventListener("click", displayPreviousQuestion);
document.getElementById("endBtn").addEventListener("click", endExam);
document.getElementById("restartBtn").addEventListener("click", restartExam);

displayQuestion();
