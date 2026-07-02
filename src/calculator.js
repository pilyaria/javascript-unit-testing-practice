class Calculator {

  validateNumbers(a, b) {
    if (typeof a !== "number") {
      throw new Error(
        `[${a}] is not of type "Number" it is of type "${typeof a}"`,
      );
    }

    if (typeof b !== "number") {
      throw new Error(
        `[${b}] is not of type "Number" it is of type "${typeof b}"`,
      );
    }
  }

  add(a, b) {
    this.validateNumbers(a, b);
    return a + b;
  }

  subtract(a, b) {
    this.validateNumbers(a, b);
    return a - b;
  }

  multiply(a, b) {
    this.validateNumbers(a, b);
    return a * b;
  }

  divide(a, b) {
    this.validateNumbers(a, b);
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

module.exports = Calculator;
