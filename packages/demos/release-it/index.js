/**
 * Demo application for release-it
 *
 * This is a simple example application to demonstrate
 * interactive release workflows with conventional commits.
 */

export class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}

export function greet(name = 'World', excited = false) {
  const greeting = `Hello, ${name}!`;
  return excited ? greeting.toUpperCase() : greeting;
}

// Example usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const calc = new Calculator();
  console.log(greet('Developer'));
  console.log('5 + 3 =', calc.add(5, 3));
  console.log('5 - 3 =', calc.subtract(5, 3));
  console.log('5 * 3 =', calc.multiply(5, 3));
  console.log('6 / 3 =', calc.divide(6, 3));
}
