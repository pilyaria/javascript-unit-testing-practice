class DateValidator {
  isDate(dateString) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!datePattern.test(dateString)) {
      return false;
    }

    const [year, month, day] = dateString.split("-").map(Number);

    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }

  isLeapYear(year) {

    if (year % 4 !== 0) {
      return false;
    }
    if (year % 100 !== 0) {
      return true;
    }
    if (year % 400 !== 0) {
      return false;
    }

    return true;
  }

  isWeekday(dateString) {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5;
  }

  isFutureDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    return date > now;
  }

  isPastDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    return date < now;
  }
}

module.exports = DateValidator;
