const { responseCodes } = require('../utils/respSchemaHandler');
const FizzController = require('../controllers/FizzController');
const { fizzBuzzSchema } = require('../schema/fizz');

exports.plugin = {
  pkg: require('../../package.json'),
  register: async function(server, options) {
    server.route({
      path: '/calcFizzBuzz',
      method: 'POST',
      options: {
        plugins: {
          'hapi-swagger': {
            responses: responseCodes([200, 400, 401, 404, 500]),
          },
        },
        auth: false,
        tags: ['api', 'Fizz'],
        validate: {
          payload: fizzBuzzSchema,
        },
        pre: [],
        handler: FizzController.calcFizzBuzz,
        description: `It accepts the count to calculate fizzbuzz upto that count. Returns the array after calculation`,
      },
    });
  },
  name: 'fizz',
};
