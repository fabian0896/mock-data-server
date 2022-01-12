import { Router } from 'express';
import boom, { Boom } from '@hapi/boom';
import { Prisma } from '@prisma/client';
import ContentService from '../services/content.service';
import { getContentSchema, getContentByIdSchema } from '../schemas/content.schema';
import validationHandler from '../middleware/validation.handler';

const router = Router();

router.get(
  '/',
  validationHandler(getContentSchema, 'query'),
  async (req, res, next) => {
    const { page, category } = req.query as { page: string, category: Prisma.EnumCategoryFilter };

    try {
      const content = await ContentService.getAllContent(Number(page ?? 1), category);
      res.json(content);
    } catch (error) {
      if (error instanceof Boom) {
        next(error);
      } else {
        next(boom.internal());
      }
    }
  },
);

router.get(
  '/:id',
  validationHandler(getContentByIdSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params as { id: string };
    try {
      const content = await ContentService.getById(Number(id));
      res.json(content);
    } catch (error) {
      if (error instanceof Boom) {
        next(error);
      } else {
        next(boom.internal());
      }
    }
  },
);

export default router;
