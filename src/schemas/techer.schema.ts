import joi from 'joi';

const id = joi.number().min(1);

export const getTeacherSchema = joi.object({
  id: id.required()
});