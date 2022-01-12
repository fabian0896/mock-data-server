import { Router, Express } from 'express';
import contentRouter from './content.routes';
import teacherRouter from './teacher.routes';

export default function setupRoutes(app: Express) {
  const router = Router();
  app.use('/api', router);
  router.use('/content', contentRouter);
  router.use('/teachers', teacherRouter);
}
