import { Prisma } from '@prisma/client';
import boom from '@hapi/boom';
import prisma from '../lib/prisma';

const SIZE = 15;

export default class ContentService {
  static async getAllContent(page: number, category?: Prisma.EnumCategoryFilter) {
    const query: Prisma.CourseWhereInput = {};
    if (page < 1) throw new Error('page can not be lower than 1');
    if (category) {
      query.category = category;
    }
    const total = await prisma.course.count();
    const results = await prisma.course.findMany({
      where: query,
      include: {
        teacher: {
          include: {
            country: true,
            picture: true,
          },
        },
        content: true,
      },
      orderBy: {
        id: 'asc',
      },
      take: SIZE,
      skip: SIZE * (page - 1),
    });
    return {
      results,
      page,
      totalPages: Math.floor(total / SIZE),
      next: page >= Math.floor(total / SIZE) ? null : page + 1,
    };
  }

  static async getById(id: number) {
    const result = await prisma.course.findUnique({
      where: {
        id,
      },
      include: {
        teacher: {
          include: {
            country: true,
            picture: true,
          },
        },
        content: {
          include: {
            course: true,
          },
        },
      },
    });
    if (!result) throw boom.notFound();
    return { result };
  }
}

/* module.exports = function ContentService() {
    const chunks = ~~(content.length / 20);
    const pages = [];
    for (let i = 0; i < chunks; i++) {
      const start = i * 20;
      const end = start + 20;
      const page = content.slice(start, end);
      pages.push(page);
    }

    function getAllContent(page = 1) {
      console.log(page);
      if (page < 1) throw new Error('page can not be lower than 1');
      return {
        page,
        results: pages[page - 1],
        totalPages: pages.length,
        next: page + 1 > pages.length ? null : page + 1,
      };
    }

    return {
      getAllContent,
    }
} */
