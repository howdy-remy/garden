/*
  Warnings:

  - The primary key for the `ZipData` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `zipDataId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "zipDataId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ZipData" DROP CONSTRAINT "ZipData_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ZipData_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_zipDataId_fkey" FOREIGN KEY ("zipDataId") REFERENCES "ZipData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
