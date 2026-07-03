const { expect } = require("chai");
const StringValidator = require("../../src/string_validator");

describe("StringValidator", () => {
  let stringValidator;

  beforeEach(() => {
    stringValidator = new StringValidator();
  });

  afterEach(() => {
    stringValidator = null;
  });

  describe("isString() test", () => {
    const testCases = [
      { value: "Hello world", expected: true, description: "text string" },
      { value: "", expected: true, description: "empty string" },
      { value: " ", expected: true, description: "string with one space" },
      { value: "\t", expected: true, description: "tab character" },
      { value: "\n", expected: true, description: "new line character" },
      { value: "Привет", expected: true, description: "Cyrillic string" },
      { value: "😊", expected: true, description: "emoji string" },
      { value: "12345", expected: true, description: "numeric string" },
      { value: 12345, expected: false, description: "number" },
      { value: true, expected: false, description: "boolean" },
      { value: [], expected: false, description: "array" },
      { value: {}, expected: false, description: "object" },
    ];

    testCases.forEach(({ value, expected, description }) => {
      it(`should return ${expected} for ${description}`, () => {
        expect(stringValidator.isString(value)).to.equal(expected);
      });
    });
  });

  describe("isEmpty()", () => {
    // positive / happy path
    const testCases = [
      { value: "", expected: true, description: "empty string" },
      { value: "Hello", expected: false, description: "non-empty string" },
      { value: " ", expected: false, description: "string with space" },
      { value: "😊😊😊", expected: false, description: "emoji string" },
      { value: "Привет", expected: false, description: "Cyrillic string" },
      {
        value: "     ",
        expected: false,
        description: "string with multiple spaces",
      },
      {
        value: "Hello123",
        expected: false,
        description: "string with alphanumeric characters",
      },
      { value: "你好你好", expected: false, description: "Chinese string" },
      { value: "🌍🌍🌍", expected: false, description: "Unicode string" },
    ];

    testCases.forEach(({ value, expected, description }) => {
      it(`should return ${expected} for ${description}`, () => {
        expect(stringValidator.isEmpty(value)).to.equal(expected);
      });
    });

    // negative / error handling
    it("should throw an error if the value is not a string", () => {
      const input = 12345;
      expect(() => stringValidator.isEmpty(input)).to.throw(
        `[${input}] is not of type String`,
      );
    });
  });

  describe("hasMinLength()", () => {
    const testCases = [
      {
        value: "Hell",
        minLength: 5,
        expected: false,
        description: "length less than minimum",
      },
      {
        value: "Hello",
        minLength: 5,
        expected: true,
        description: "length equals minimum",
      },
      {
        value: "Hello!",
        minLength: 5,
        expected: true,
        description: "length greater than minimum",
      },
      {
        value: "Привет",
        minLength: 6,
        expected: true,
        description: "Cyrillic string length equals minimum",
      },
      {
        value: "你好你好",
        minLength: 4,
        expected: true,
        description: "Chinese string length equals minimum",
      },
      {
        value: "     ",
        minLength: 5,
        expected: true,
        description: "string with spaces length equals minimum",
      },
      {
        value: "Hello123",
        minLength: 8,
        expected: true,
        description: "alphanumeric string length equals minimum",
      },
    ];
    testCases.forEach(({ value, minLength, expected, description }) => {
      it(`should return ${expected} when ${description}`, () => {
        expect(stringValidator.hasMinLength(value, minLength)).to.equal(
          expected,
        );
      });
    });

    it("should throw an error if the value is not a string", () => {
      const input = 12345;
      expect(() => stringValidator.hasMinLength(input, 20)).to.throw(
        `[${input}] is not of type String`,
      );
    });

    it("should throw an error if the min length value is not a number", () => {
      const input = "five";
      expect(() => stringValidator.hasMinLength("Hello world", input)).to.throw(
        `[${input}] is not of type Number`,
      );
    });
  });
});
