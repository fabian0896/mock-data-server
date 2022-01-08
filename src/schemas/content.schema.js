const joi = require('joi');

const page = joi.number().min(1);
const categories = joi.alternatives([
  joi.string(),
  joi.array(),
]);

const getContentSchema = joi.object({
  page,
  categories,
});

module.exports = {
  getContentSchema,
}
