const display = document.getElementById('display');

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    if (display.innerText !== '0') {
        display.innerText += ` ${operator} `;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    try {
        // Replace '×' and '÷' with '*' and '/' for evaluation
        const expression = display.innerText.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(expression);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}