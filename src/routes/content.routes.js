const { Router } = require('express');
const boom = require('@hapi/boom');
const ContentService = require('../services/content.service');
const { getContentSchema } = require('../schemas/content.schema');
const validationHandler = require('../middleware/validation.handler');

const router = Router();
const contentService = ContentService();

router.get('/', 
  validationHandler(getContentSchema, 'query'),
  async (req, res) => {
    const { page, categories } = req.query;
    try {
      const content = categories ?
        contentService.getContentByCategory(categories, Number(page ?? 1))
        :
        contentService.getAllContent(Number(page ?? 1));
      res.json(content);
    } catch (error) {
      next(boom.badRequest(error.message));
    }
  });

module.exports = router;