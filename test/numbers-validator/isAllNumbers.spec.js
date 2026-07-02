const { expect } = require("chai");
const NumbersValidator = require("../../app/numbers_validator");

describe("isAllNumbers", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe("positive test", () => {
    it("should return true if all elements is number type", () => {
      const result = validator.isAllNumbers([1, 2, 3, 4]);
      expect(result).to.be.equal(true);
    });
  });

  describe("negative test", () => {
    it("should return false if some elements is not anumber type", () => {
      const result = validator.isAllNumbers([1, "2", 3, 4]);
      expect(result).to.be.equal(false);
    });

    it("should throw an error if input is not array", () => {
      // Using 'expect' to assert that calling 'isNumberEven' with a string argument
      // throws an error. The '.to.throw()' checks that an error is indeed thrown.
      const input = 4; // The array contains a string "3" which is not a number
      expect(() => validator.isAllNumbers(input)).to.throw(
        `[${input}] is not an array`,
      );
    });
  });
  /*
  describe("negative test", () => {
    it("should throw an error if the argument is not a number", () => {
      // Using 'expect' to assert that calling 'isNumberEven' with a string argument
      // throws an error. The '.to.throw()' checks that an error is indeed thrown.
      const input = [1, "2", "3", 4]; // The array contains a string "3" which is not a number
      expect(() => validator.getEvenNumbersFromArray(input)).to.throw(
        `[${input}] is not an array of "Numbers"`,
      );
    });
  });
*/
});
