/*
  Warnings:

  - A unique constraint covering the columns `[plantId]` on the table `PlantToUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `PlantToUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PlantToUser_plantId_key" ON "PlantToUser"("plantId");

-- CreateIndex
CREATE UNIQUE INDEX "PlantToUser_userId_key" ON "PlantToUser"("userId");
