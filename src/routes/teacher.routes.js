const { Router } = require('express');
const TeacherService = require('../services/teacher.service');

const router = Router();
const teacherService = TeacherService()

router.get('/', (req, res, next) => {
  try {
    const teachers = teacherService.getAll();
    res.json(teachers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  try {
    const teacher = teacherService.getById(Number(id));
    res.json(teacher);
  } catch (error) {
    next(error);
  }
});

module.exports = router;