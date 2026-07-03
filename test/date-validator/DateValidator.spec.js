const { expect } = require("chai");
const DateValidator = require("../../src/date_validator");

describe("DateValidator", () => {
  let dateValidator;

  beforeEach(() => {
    dateValidator = new DateValidator();
  });

  afterEach(() => {
    dateValidator = null;
  });

  describe("isDate() test", () => {
    const testCases = [
      { value: "2023-01-01", expected: true, description: "valid date" },
      {
        value: "2023-02-30",
        expected: false,
        description: "invalid date (non-leap year)",
      },
      {
        value: "2020-02-29",
        expected: true,
        description: "valid leap year date",
      },
      { value: "2023-13-01", expected: false, description: "invalid month" },
      {
        value: "2023-00-01",
        expected: false,
        description: "invalid month (zero)",
      },
      { value: "2023-01-32", expected: false, description: "invalid day" },
      {
        value: "2023-01-00",
        expected: false,
        description: "invalid day (zero)",
      },
      {
        value: "2023/01/01",
        expected: false,
        description: "invalid format (slashes)",
      },
      {
        value: "01-01-2023",
        expected: false,
        description: "invalid format (day first)",
      },
      {
        value: "2023-1-1",
        expected: false,
        description: "invalid format (single digit month and day)",
      },
      {
        value: "2023-01-1",
        expected: false,
        description: "invalid format (single digit day)",
      },
      {
        value: "2023-1-01",
        expected: false,
        description: "invalid format (single digit month)",
      },
      {
        value: "2023-01-01T00:00:00Z",
        expected: false,
        description: "invalid format (ISO string)",
      },
      { value: "", expected: false, description: "empty string" },
      { value: null, expected: false, description: "null value" },
      { value: undefined, expected: false, description: "undefined value" },
    ];

    testCases.forEach(({ value, expected, description }) => {
      it(`should return ${expected} for ${description}`, () => {
        expect(dateValidator.isDate(value)).to.equal(
          expected,
          `Failed for ${description}`,
        );
      });
    });
  });

  describe("isLeapYear() test", () => {
    const testCases = [
      { value: 2020, expected: true, description: "leap year divisible by 4" },
      { value: 2021, expected: false, description: "non-leap year" },
      {
        value: 1900,
        expected: false,
        description: "non-leap year divisible by 100",
      },
      {
        value: 2000,
        expected: true,
        description: "leap year divisible by 400",
      },
    ];

    testCases.forEach(({ value, expected, description }) => {
      it(`should return ${expected} for ${description}`, () => {
        expect(dateValidator.isLeapYear(value)).to.equal(
          expected,
          `Failed for ${description}`,
        );
      });
    });
  });

  describe("isWeekday() test", () => {
    const testCases = [
      { value: "2023-01-02", expected: true, description: "Monday" },
      { value: "2023-01-03", expected: true, description: "Tuesday" },
      { value: "2023-01-04", expected: true, description: "Wednesday" },
      { value: "2023-01-05", expected: true, description: "Thursday" },
      { value: "2023-01-06", expected: true, description: "Friday" },
      { value: "2023-01-07", expected: false, description: "Saturday" },
      { value: "2023-01-08", expected: false, description: "Sunday" },
    ];

    testCases.forEach(({ value, expected, description }) => {
      it(`should return ${expected} for ${description}`, () => {
        expect(dateValidator.isWeekday(value)).to.equal(
          expected,
          `Failed for ${description}`,
        );
      });
    });
  });

  describe("isFutureDate() test", () => {
    const testCases = [
      {
        value: new Date(Date.now() + 1000 * 60 * 60 * 24)
          .toISOString()
          .split("T")[0],
        expected: true,
        description: "future date",
      },
      {
        value: new Date(Date.now() - 1000 * 60 * 60 * 24)
          .toISOString()
          .split("T")[0],
        expected: false,
        description: "past date",
      },
    ];

    testCases.forEach(({ value, expected, description }) => {
      it(`should return ${expected} for ${description}`, () => {
        expect(dateValidator.isFutureDate(value)).to.equal(
          expected,
          `Failed for ${description}`,
        );
      });
    });
  });

  describe("isPastDate() test", () => {
    const testCases = [
      {
        value: new Date(Date.now() - 1000 * 60 * 60 * 24)
          .toISOString()
          .split("T")[0],
        expected: true,
        description: "past date",
      },
      {
        value: new Date(Date.now() + 1000 * 60 * 60 * 24)
          .toISOString()
          .split("T")[0],
        expected: false,
        description: "future date",
      },
    ];

    testCases.forEach(({ value, expected, description }) => {
      it(`should return ${expected} for ${description}`, () => {
        expect(dateValidator.isPastDate(value)).to.equal(
          expected,
          `Failed for ${description}`,
        );
      });
    });
  });
});
