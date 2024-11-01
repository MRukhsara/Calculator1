const inputDisplay = document.getElementById('input');
const resultDisplay = document.getElementById('result');
let dotAdded = false;

function appendToDisplay(value) {
    if (value === '±') {
        inputDisplay.textContent = inputDisplay.textContent.charAt(0) === '-' 
            ? inputDisplay.textContent.slice(1) 
            : '-' + inputDisplay.textContent;
    } else if (value === '×') {
        inputDisplay.textContent += '*';
    } else if (value === '←') {
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
    } else if (value === '.' && !dotAdded) {
        inputDisplay.textContent += '.';
        dotAdded = true;
    } else if (value >= '0' && value <= '9') {
        inputDisplay.textContent += value;
    } else if (value === '%') {
        inputDisplay.textContent += '%'; // Faiz işarəsini əlavə edirik
    }
}

function clearDisplay() {
    inputDisplay.textContent = '';
    resultDisplay.textContent = '';
    dotAdded = false;
}

function formatNumber(valueStr) {
    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr) {
        return parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
    } else {
        return parseFloat(wholeNumStr).toLocaleString();
    }
}

function calculate() {
    try {
        let expression = inputDisplay.textContent;

        // Əgər `%` işarəsi varsa, onu bölmə əməli kimi işləmək üçün dəyişdiririk
        expression = expression.replace(/(\d+)%(\d+)/g, (match, num1, num2) => {
            return `(${num1} * ${num2} / 100)`;
        });

        // İfadəni hesablayırıq
        const result = eval(expression);
        resultDisplay.textContent = `= ${formatNumber(result.toString())}`;
        dotAdded = false;
    } catch (error) {
        resultDisplay.textContent = 'Error';
    }
}

