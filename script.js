let currentInput = '';
let operator = '';
let previousInput = '';

function handleButtonClick(event) {
  const buttonValue = event.target.innerText;

  if (!isNaN(buttonValue) || buttonValue === '.') {
    // If the button clicked is a number or dot
    currentInput += buttonValue;
  } else if (buttonValue === 'C') {
    // If the button clicked is 'C' (clear)
    clearDisplay();
  } else if (buttonValue === '=') {
    // If the button clicked is '=' (equal)
    calculateResult();
  } else {
    // If the button clicked is an operator (+, -, *, /)
    if (currentInput !== '') {
      operator = buttonValue;
      previousInput = currentInput;
      currentInput = '';
    }
  }

  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  updateDisplay();
}

function calculateResult() {
  let result = '';
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (!isNaN(prev) && !isNaN(current)) {
    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        break;
    }
  }

  clearDisplay();
  currentInput = result.toString();
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = currentInput;
}
