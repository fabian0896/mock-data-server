const joi = require('joi');

const id = joi.number().min(1)
const page = joi.number().min(1);
const categories = joi.alternatives([
  joi.string(),
  joi.array(),
]);

const getContentSchema = joi.object({
  page,
  categories,
});

const getContentByIdSchema = joi.object({
  id: id.required(),
});

module.exports = {
  getContentSchema,
  getContentByIdSchema
}
