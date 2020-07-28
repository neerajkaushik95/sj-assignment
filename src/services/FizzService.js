/**
 * This class contains all the major methods for fizzBuzz.
 */
class FizzService {
  /**
   * This will accepts a parameter num upto which loops should run.
   */
  static calcFizzBuzz(num) {
    const result = [];
    for (let i = 1; i <= num; i++) {
      let res = i;

      if (i % 15 === 0) {
        res = 'FizzBuzz';
      } else if (i % 3 === 0) {
        res = 'Fizz';
      } else if (i % 5 === 0) {
        res = 'Buzz';
      }
      result.push(res);
    }
    return result;
  }
}

module.exports = FizzService;
