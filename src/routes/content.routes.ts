import { Router } from 'express';
import boom from '@hapi/boom';
import ContentService from '../services/content.service';
import { getContentSchema } from '../schemas/content.schema';
import validationHandler from '../middleware/validation.handler';

const router = Router();
const contentService = new ContentService();

router.get('/', 
  validationHandler(getContentSchema, 'query'),
  async (req, res, next) => {
    const { page } = req.query;
    try {
      const content = contentService.getAllContent(Number(page ?? 1));
      res.json(content);
    } catch (error) {
      if (error instanceof Error) {
        next(boom.badRequest(error.message));
      }
    }
  });

export default router;