import joi from 'joi';

const id = joi.number().min(1);
const page = joi.number().min(1);
const category = joi.string();

export const getContentSchema = joi.object({
  page,
  category,
});

export const getContentByIdSchema = joi.object({
  id: id.required(),
});
