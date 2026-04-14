/**
 * Calculator module
 */

/**
 * A basic class to performs calculations
 */
class Calculator {
  /**
   * Performs addition
   * @param {number} a
   * @param {number} b
   * @return {number} Sum of the parameters
   */
  add(a, b) {
    return a + b;
  }
  /**
   * Performs multiplication
   * @param {number} a
   * @param {number} b
   * @return {number} Product of the parameters
   */
  multiply(a, b) {
    return a * b;
  }
  /**
   * Performs division
   * @param {number} a
   * @param {number} b
   * @return {(number | Infinity)} Division of a by b
   */
  divide(a, b) {
    return a / b;
  }
  /**
   * Performs substraction
   * @param {number} a
   * @param {number} b
   * @return {number} Difference between a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Performs power calculation
   * @param {number} a base
   * @param {number} b exponent
   * @return {number} a power b
   */
  power(a, b) {
    if (b < 0) {
      return 1 / a * this.power(a, b + 1);
    } else if (b > 0) {
      return a * this.power(a, b - 1);
    } else {
      return 1;
    }
  }
}

module.exports = {Calculator};
