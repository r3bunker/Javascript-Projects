const calculator = { //creates an object to keep track of values
    displayValue: "0", //dispalys 0 on screen
    firstOperand: null, //this will hold the first operand for any expressions, we set it to null for now
    waitSecondOperand: false, //this checks whether or not the second operand has been input
    operator: null, //this will hold the operator, we set it to null for now
};

function inputDigit(digit) { //modifies values each time a button is clicked
    const { displayValue, waitSecondOperand } = calculator;
    if (waitSecondOperand === true) {
        calculator.displayValue = digit; //we are checking to see if waitSecondOperand is true and set displayValue to the key that was clicked
        calculator.waitSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit; //this overwrites displayValue if the current value is 0, otherwise it adds onto it.
    }

}

function inputDecimal(dot) { //this section handles decimal points
    if (calculator.waitSecondOperand === true) return; //this ensures that accidental clicking of the decimal point doesn't cause a bug.
    if (!calculator.displayValue.includes(dot)) { //we are saying that if the displayValue doesn't contain a decimal point we want to add a decimal point
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) { //this section handles operators
    const { firstOperand, displayValue, operator } = calculator;
    const valueOfInput = parseFloat(displayValue); //when an operator key is pressed, we convert the current number displayed on the screen to a number and then store the result in calculator.FirstOperand if it doesn't exist.
    if (operator && calculator.waitSecondOperand) { //checks if an operator already exists and if waitSecondOperand is true, then updates the operator and exits from the function
        calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        calculator.firstOperand = valueOfInput;
    } else if (operator) { //checks if an operator already exists
        const valueNow = firstOperand || 0;
        let result = performCalculation[operator](valueNow, valueOfInput); //if operator exists, property lookup is performed for the operator in the performeCalculation object and the function that matches the operator is executed
        result = Number(result).toFixed(9) //here we add a fixed amount of numbers after the decimal
        result = (result * 1).toString() // this will remove any trailing 0's
        calculator.displayValue = parseFloat(result);
        calculator.firstOperand = parseFloat(result);
    }
    calculator.waitSecondOperand = true;
    calculator.operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function calculatorReset() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitSecondOperand = false;
    calculator.operator = null;
}

function updateDisplay() { // this function updates the screen with the contents of displayValue
    const display = document.querySelector('.calculatorScreen');
    display.value = calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('all-clear')) {
        calculatorReset();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
})