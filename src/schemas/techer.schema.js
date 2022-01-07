const joi = require('joi');

const id = joi.number().min(1);

const getTeacherSchema = joi.object({
  id: id.required()
});

module.exports = {
  getTeacherSchema,
}