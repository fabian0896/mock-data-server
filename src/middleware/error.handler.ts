import { Request, Response, NextFunction } from 'express';
import { Boom, boomify } from '@hapi/boom';

export default function errorHandler (error: Error | Boom, _req: Request, res: Response, _next: NextFunction) {
  if (error instanceof Boom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
    return;
  }
  const boomError = boomify(error);
  res.status(boomError.output.statusCode).json(boomError.output.payload);
};