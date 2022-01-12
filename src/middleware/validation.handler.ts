import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';
import { ObjectSchema } from 'joi';

type Location = 'body' | 'query' | 'params';

export default function validationHandler(schema: ObjectSchema, location: Location) {
  return function handler(req: Request, _res: Response, next: NextFunction) {
    const data = req[location];
    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error.message));
    }
    next();
  };
}
