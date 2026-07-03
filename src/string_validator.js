class StringValidator {
  
  /**
   * 
   * @param {String} value 
   * @returns {Boolean} true or false if value is string type or not
   */
  isString(value) {
    return typeof value === "string";
  }

  /**
   * 
   * @param {String} value 
   * @returns {Boolean} true or false if value is empty or not
   */
  isEmpty(value) {
    if (typeof value !== "string") {
      throw new Error(`[${value}] is not of type String`);
    }
    return value.length === 0;
  }

  /**
   * 
   * @param {String} value 
   * @param {Number} minLength 
   * @returns {Boolean} true or false if value is more then minLength or not
   */
  hasMinLength(value, minLength) {
    if (typeof value !== "string") {
      throw new Error(`[${value}] is not of type String`);
    }
    if (typeof minLength !== "number") {
      throw new Error(`[${minLength}] is not of type Number`);
    }
    return value.length >= minLength;
  }
}

module.exports = StringValidator;
