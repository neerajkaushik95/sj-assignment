const Joi = require('@hapi/joi');

/**
 * Auth request schema validation object
 */
module.exports = {
  /* Auth validation schema */
  fizzBuzzSchema: Joi.object({
    count: Joi.number().required(),
  }),
};
