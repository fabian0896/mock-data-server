import joi from 'joi';

const id = joi.number().min(1);

// eslint-disable-next-line import/prefer-default-export
export const getTeacherSchema = joi.object({
  id: id.required(),
});
