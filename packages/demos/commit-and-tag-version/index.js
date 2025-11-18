/**
 * Demo application for commit-and-tag-version
 *
 * This is a simple example application to demonstrate
 * how conventional commits and automated versioning work together.
 */

export function greet(name = 'World') {
  return `Hello, ${name}!`;
}

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Example usage
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet());
  console.log('2 + 3 =', add(2, 3));
  console.log('2 * 3 =', multiply(2, 3));
}
