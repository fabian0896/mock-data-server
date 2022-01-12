import boom from '@hapi/boom';
import prisma from '../lib/prisma';

export default class TeacherService {
  static async getAll() {
    const result = await prisma.teacher.findMany({
      include: {
        country: true,
        picture: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
    return {
      result,
    };
  }

  static async getById(id: number | undefined) {
    if (!id) throw boom.badRequest();
    const result = await prisma.teacher.findUnique({
      where: { id },
      include: {
        country: true,
        picture: true,
      },
    });
    if (!result) throw boom.notFound();
    return { result };
  }
}

/* module.exports = function TeacherService() {
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
} */
