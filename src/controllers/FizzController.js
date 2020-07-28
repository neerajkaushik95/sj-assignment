const Boom = require('@hapi/boom');
const FizzService = require('../services/FizzService');
/**
 * This controller contains all the handlers for /fizz route.
 */
class FizzController {
  /**
   * This method will calculate the fizzbuzz pattern by using fizzbuzz service method
   * @param {Object: hapi request obj} request
   * @param {Object: hapi handler} h
   */
  static async calcFizzBuzz(request, h) {
    try {
      const { count } = request.payload;
      const result = FizzService.calcFizzBuzz(count);

      return h
        .response({
          statusCode: 200,
          message: 'Fizzbuzz calculated',
          data: result,
        })
        .code(201);
    } catch (e) {
      request.logger.error(`Error throw while calculating fizzbuzz:${e}`);
      throw new Boom.Boom(e, { statusCode: 500 });
    }
  }
}

module.exports = FizzController;
