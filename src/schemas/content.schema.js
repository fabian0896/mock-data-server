const joi = require('joi');

const page = joi.number().min(1);

const getContentSchema = joi.object({
  page,
});

module.exports = {
  getContentSchema,
}
