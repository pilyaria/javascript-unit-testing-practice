const { expect } = require("chai");
const Calculator = require("../../src/calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  afterEach(() => {
    calculator = null;
  });

  describe("Calculator.add() test", () => {
    it("should add two numbers", () => {
      expect(calculator.add(2, 3)).to.be.equal(5);
    });
  });

  describe("a not a number", () => {
    it("should throw an error if the argument a is not a number", () => {
      const input1 = "two";
      const input2 = 3;
      expect(() => calculator.add(input1, input2)).to.throw(
        `[${input1}] is not of type "Number" it is of type "${typeof input1}"`,
      );
    });
  });

  describe("b not a number", () => {
    it("should throw an error if the argument b is not a number", () => {
      const input1 = 2;
      const input2 = "three";
      expect(() => calculator.add(input1, input2)).to.throw(
        `[${input2}] is not of type "Number" it is of type "${typeof input2}"`,
      );
    });
  });

  describe("Calculator.subtrack() test", () => {
    it("should subtract two numbers", () => {
      expect(calculator.subtract(2, 3)).to.be.equal(-1);
    });
  });

  describe("Calculator.multiply() test", () => {
    it("should multiply two numbers", () => {
      expect(calculator.multiply(2, 3)).to.be.equal(6);
    });
  });

  describe("Calculator.divide() test", () => {
    it("should divide two numbers", () => {
      expect(calculator.divide(3, 3)).to.be.equal(1);
    });
    it("should throw an error if the argument b is zero", () => {
      const input1 = 3;
      const input2 = 0;
      expect(() => calculator.divide(input1, input2)).to.throw(
        "Division by zero is not allowed.",
      );
    });
  });
});
