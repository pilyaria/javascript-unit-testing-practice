const { expect } = require("chai");
const NumbersValidator = require("../../app/numbers_validator");

describe("getEvenNumbersFromArray", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe("positive test", () => {
    it("should return true if number is even", () => {
      const result = validator.getEvenNumbersFromArray([1, 2, 3, 4]);
      expect(result).to.deep.equal([2, 4]);
    });
  });

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
});
