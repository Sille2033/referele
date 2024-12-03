function checkAnswer(selected) {
    const correctAnswer = 2; // Set the correct answer index (1-4)
    const resultDiv = document.getElementById('result');

    if (selected === correctAnswer) {
        resultDiv.textContent = 'Correct! 🎉';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `Wrong! The correct answer was Option ${correctAnswer}.`;
        resultDiv.style.color = 'red';
    }
}
