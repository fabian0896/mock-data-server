const contentRouter = require('./content.routes');
const teacherRouter = require('./teacher.routes');
const { Router } = require('express');

module.exports = function setupRoutes(app) {
  const router = Router();
  app.use('/api', router);
  router.use('/content', contentRouter);
  router.use('/teachers', teacherRouter);
}