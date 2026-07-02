const { expect } = require("chai");
const NumbersValidator = require("../../app/numbers_validator");

describe("isInteger", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe("positive test", () => {
    it("should check if a value is an integer and return true", () => {
      const result = validator.isInteger(5);
      expect(result).to.be.equal(true);
    });
  });

  describe("negative test", () => {
    it("should check if a value is not an integer and return false", () => {
      const result = validator.isInteger(5.5);
      expect(result).to.be.equal(false);
    });

    it("should throw an error if the argument is not an integer", () => {
      const input = "four";
      expect(() => validator.isInteger(input)).to.throw(
        `[${input}] is not a number`,
      );
    });
  });
});
