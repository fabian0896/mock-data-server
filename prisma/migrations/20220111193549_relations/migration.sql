/*
  Warnings:

  - You are about to drop the column `teacher` on the `Course` table. All the data in the column will be lost.
  - Added the required column `teacherId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `level` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Level" AS ENUM ('advance', 'medium', 'basic');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('development', 'personal', 'photography', 'business', 'marketing', 'art');

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "teacher",
ADD COLUMN     "teacherId" INTEGER NOT NULL,
DROP COLUMN "level",
ADD COLUMN     "level" "Level" NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;

-- CreateTable
CREATE TABLE "Picture" (
    "id" SERIAL NOT NULL,
    "large" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flags" (
    "id" SERIAL NOT NULL,
    "png" TEXT NOT NULL,
    "svg" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "Flags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nat" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pictureId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Picture_teacherId_key" ON "Picture"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "Flags_countryId_key" ON "Flags"("countryId");

-- CreateIndex
CREATE UNIQUE INDEX "Country_teacherId_key" ON "Country"("teacherId");

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flags" ADD CONSTRAINT "Flags_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
