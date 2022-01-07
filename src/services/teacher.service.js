const teachers = require('../teachers.json');

module.exports = function TeacherService() {
  const getAll = () => {
    return {
      results: teachers,
    }
  }

  const getById = (id) => {
    if (!id) throw new Error('id is required to consult');
    const teacher = teachers.find(t => t.id === id);
    if (!teacher) throw new Error('The teacher dosn`t exits');
    return {
      result: teacher,
    };
  }

  return {
    getAll,
    getById,
  }
}
