// Compose a full JavaScript program for constructing a calculator

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

// test.js
const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -1 + -1 to equal -2', () => {
  expect(calculator.add(-1, -1)).toBe(-2);
});

test('adds 0 + 0 to equal 0', () => {
  expect(calculator.add(0, 0)).toBe(0);
});

