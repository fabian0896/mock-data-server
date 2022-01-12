import { Router } from 'express';
import TeacherService from '../services/teacher.service';

const router = Router();
// const teacherService = new TeacherService()

router.get('/', async (_req, res, next) => {
  try {
    const teachers = await TeacherService.getAll();
    res.json(teachers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const teacher = await TeacherService.getById(Number(id));
    res.json(teacher);
  } catch (error) {
    next(error);
  }
});

export default router;
