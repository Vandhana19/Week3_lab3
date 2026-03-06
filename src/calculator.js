/**
 * Calculator Module
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

// Addition: Add two numbers together
function add(num1, num2) {
  return num1 + num2;
}

// Subtraction: Subtract one number from another
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiplication: Multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Division: Divide one number by another
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error('Cannot divide by zero');
  }
  return num1 / num2;
}

// Perform calculation based on operation
function calculate(num1, operation, num2) {
  switch (operation) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

// Export functions for testing and CLI use
module.exports = { add, subtract, multiply, divide, calculate };

// CLI functionality
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Error: Invalid number of arguments');
    console.error('Usage: calculator.js <number1> <operation> <number2>');
    console.error('Operations: +, -, *, /');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both operands must be valid numbers');
    process.exit(1);
  }

  try {
    const result = calculate(num1, operation, num2);
    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
