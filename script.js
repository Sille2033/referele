// Configuration
const correctAnswer = 2; // Set the correct answer (1, 2, 3, or 4)
const options = [
    "Option 1", // Edit options here
    "Correct Option", // Correct answer
    "Option 3",
    "Option 4"
];

// Assign options dynamically to buttons
const buttons = document.querySelectorAll(".option");
buttons.forEach((button, index) => {
    button.textContent = options[index];
});

// Check if the selected answer is correct
function checkAnswer(selected) {
    const resultDiv = document.getElementById("result");

    if (selected === correctAnswer) {
        resultDiv.textContent = "Correct!";
        resultDiv.className = "result correct";
    } else {
        resultDiv.textContent = `Wrong! The correct answer is: ${options[correctAnswer - 1]}`;
        resultDiv.className = "result wrong";
    }
}
