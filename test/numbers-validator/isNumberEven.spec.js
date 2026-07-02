// Importing the 'expect' function from the 'chai' library to perform assertions
const { expect } = require("chai");

// Importing the NumbersValidator class from the relative path '../app/numbers-validator'
// so we can test its methods.
const NumbersValidator = require("../../app/numbers_validator");

// 'describe' is used to group related tests together into a test suite.
// Here, it describes a suite of tests for the 'isNumberEven' method of NumbersValidator class.
describe("isNumberEven", () => {
  // Declaring a variable 'validator' outside of the 'beforeEach' and 'it' blocks
  // to make it accessible throughout this describe block.
  let validator;

  // 'beforeEach' is a hook that runs before each test ('it' block) within this 'describe' block.
  // It's usually used for setting up the test environment.
  beforeEach(() => {
    // Instantiates a new NumbersValidator object before each test and assigns it to 'validator'
    validator = new NumbersValidator();
  });

  // 'afterEach' is a hook that runs after each test. It is often used for cleanup activities.
  afterEach(() => {
    // Sets the validator variable to null to clean up memory after each test
    validator = null;
  });
  /*
  // 'it' is used for individual test cases - it includes the actual test.
  // The string argument describes what the test should do.
  it("should return true if number is even", () => {
    // Using 'expect' to assert that the 'isNumberEven' method returns true when
    // passed the even number 4. The '.to.be.equal(true)' is the actual assertion check.
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });*/

  // Additional tests would follow for different test cases, such as testing if an odd number
  // returns false or if passing a non-number throws an error.

  describe("positive test", () => {
    it("should return true if number is even", () => {
      // Using 'expect' to assert that calling 'isNumberEven' with a string argument
      // throws an error. The '.to.throw()' checks that an error is indeed thrown.
      expect(validator.isNumberEven(4)).to.be.equal(true);
    });
  });

  describe("negative test", () => {
    it("should return false if number is not even", () => {
      // Using 'expect' to assert that calling 'isNumberEven' with a string argument
      // throws an error. The '.to.throw()' checks that an error is indeed thrown.
      expect(validator.isNumberEven(5)).to.be.equal(false);
    });

    it("should throw an error if the argument is not a number", () => {
      // Using 'expect' to assert that calling 'isNumberEven' with a string argument
      // throws an error. The '.to.throw()' checks that an error is indeed thrown.
      const input = "four";
      expect(() => validator.isNumberEven(input)).to.throw(
        `[${input}] is not of type "Number" it is of type "${typeof input}"`,
      );
    });
  });
});