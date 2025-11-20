/**
 * Demo application for commitlint
 *
 * This is a simple calculator application to demonstrate
 * how commitlint enforces conventional commit messages via git hooks.
 */

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts second number from first number
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides first number by second number
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a divided by b
 * @throws {Error} When divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Calculator object with all mathematical operations
 */
export const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

/**
 * Greets a person
 * @param {string} [name='World'] - Name to greet
 * @returns {string} Greeting message
 */
export function greet(name = 'World') {
  return `Hello, ${name}!`;
}

// Example usage
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('5 + 3 =', calculator.add(5, 3));
  console.log('5 - 3 =', calculator.subtract(5, 3));
  console.log('5 * 3 =', calculator.multiply(5, 3));
  console.log('6 / 3 =', calculator.divide(6, 3));
}
