const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition (+)', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('adds two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('adds zero', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('adds decimals', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });
  });

  describe('Subtraction (-)', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('subtracts negative from positive', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('subtracts two negative numbers', () => {
      expect(subtract(-10, -3)).toBe(-7);
    });

    test('subtracts zero', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('subtracts with result of zero', () => {
      expect(subtract(5, 5)).toBe(0);
    });

    test('subtracts decimals', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });
  });

  describe('Multiplication (*)', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('multiplies positive and negative numbers', () => {
      expect(multiply(6, -2)).toBe(-12);
    });

    test('multiplies two negative numbers', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    test('multiplies by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('multiplies by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('multiplies decimals', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });
  });

  describe('Division (/)', () => {
    test('divides two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('divides positive and negative numbers', () => {
      expect(divide(-20, 4)).toBe(-5);
    });

    test('divides two negative numbers', () => {
      expect(divide(-20, -4)).toBe(5);
    });

    test('divides resulting in decimal', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('divides by one', () => {
      expect(divide(100, 1)).toBe(100);
    });

    test('divides decimals', () => {
      expect(divide(10, 2.5)).toBe(4);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('throws error when dividing by zero with negative number', () => {
      expect(() => divide(-10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('Calculate Function', () => {
    test('performs addition with calculate', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('performs subtraction with calculate', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('performs multiplication with calculate', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('performs division with calculate', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('throws error for unknown operation', () => {
      expect(() => calculate(5, '%', 2)).toThrow('Unknown operation: %');
    });

    test('throws error when dividing by zero in calculate', () => {
      expect(() => calculate(20, '/', 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('Examples from Image', () => {
    test('2 + 3 = 5', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('10 - 4 = 6', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('45 * 2 = 90', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('20 / 5 = 4', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });
  });

  describe('Edge Cases', () => {
    test('handles very large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });

    test('handles very small decimals', () => {
      expect(multiply(0.0001, 0.0001)).toBe(0.00000001);
    });

    test('handles negative zero', () => {
      expect(add(5, -5)).toBe(0);
    });

    test('handles mixed operations in sequence', () => {
      const step1 = add(2, 3);
      const step2 = multiply(step1, 2);
      const step3 = divide(step2, 2);
      expect(step3).toBe(5);
    });
  });
});
