import joi from 'joi';

const page = joi.number().min(1);

export const getContentSchema = joi.object({
  page,
});


