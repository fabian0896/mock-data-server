
const boom = require('@hapi/boom');

function validationHandler(schema, location) {
  return function(req, res, next) {
    const data = req[location];
    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error.message));
    }
    next();
  }
}

module.exports = validationHandler;