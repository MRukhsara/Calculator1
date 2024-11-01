const inputDisplay = document.getElementById('input');
const resultDisplay = document.getElementById('result');

function appendToDisplay(value) {
    if (value === '±') {
        // Toggle sign of the current expression
        inputDisplay.textContent = inputDisplay.textContent.charAt(0) === '-' 
            ? inputDisplay.textContent.slice(1) 
            : '-' + inputDisplay.textContent;
    } else if (value === '×') {
        // Replace '×' with '*' for multiplication
        inputDisplay.textContent += '*';
    } else if (value === '←') {
        // Remove the last character
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
    } else {
        inputDisplay.textContent += value;
    }
}

function clearDisplay() {
    inputDisplay.textContent = '';
    resultDisplay.textContent = '';
}

function calculate() {
    try {
        // Replace '%' with '/100' to calculate percentages
        let expression = inputDisplay.textContent.replace(/%/g, '/100');
        
        // Evaluate the expression and display the result with an equal sign
        const result = eval(expression);
        resultDisplay.textContent = `= ${result}`;
    } catch (error) {
        resultDisplay.textContent = 'Error';
    }
}

