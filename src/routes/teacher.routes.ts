import { Router } from 'express';
import TeacherService from '../services/teacher.service';

const router = Router();
// const teacherService = new TeacherService()

router.get('/', (req, res, next) => {
  try {
    const teachers = TeacherService.getAll();
    res.json(teachers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  try {
    const teacher = TeacherService.getById(Number(id));
    res.json(teacher);
  } catch (error) {
    next(error);
  }
});

export default router;