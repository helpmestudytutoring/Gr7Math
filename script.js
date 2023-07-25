const correctAnswers = ['-6', '-8', '-20', '11', '10', '9'];

function checkAnswer(questionNumber) {
    const userAnswer = document.getElementById('answer' + questionNumber).value;

    if (userAnswer.trim() === correctAnswers[questionNumber - 1]) {
        document.getElementById('feedback' + questionNumber).innerText = "Correct! Great job!";
    } else {
        document.getElementById('feedback' + questionNumber).innerText = "Incorrect. Try again.";
    }
}
