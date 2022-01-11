import { PrismaClient } from '@prisma/client';
import teachers from '../teachers.json';


const prisma = new PrismaClient();

(async () => {
})()
.finally(() => {
  prisma.$disconnect();
});