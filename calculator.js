// Function to perform addition
function add(number1, number2) {
    return number1 + number2;
}

// Function to perform subtraction
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to perform multiplication
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to perform division
function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// Function to update the result
function updateResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    updateResult(add(number1, number2));
});

document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    updateResult(subtract(number1, number2));
});

document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    updateResult(multiply(number1, number2));
});

document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    updateResult(divide(number1, number2));
});
